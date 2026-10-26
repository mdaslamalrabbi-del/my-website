#!/usr/bin/env node
/**
 * Downloads every image and icon the site uses directly from the Figma file,
 * so the build uses the exact approved assets (no stand-ins).
 *
 * Usage:
 *   1. Put your Figma token in .env.local  →  FIGMA_TOKEN=figd_...
 *   2. npm run assets
 *
 * Safe to re-run: it overwrites files in /public with fresh exports.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const FILE_KEY = "pTrTgoze0pocekofXEkHKb";
const ROOT_FRAME = "83:2079";
const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/** [Figma node id, output path, format, scale] — exported renders of a node. */
const RENDERS = [
  // Backgrounds, hero photo, logo, wordmark and all icons are already in the project (exported from Figma).
  // This script adds the larger/retina photos below.

  // Photos
  ["87:2997", "public/images/avatar.png", "png", 3], // footer contact avatar

  // Selected projects (rows of three, left → right)
  ["83:2205", "public/images/projects/project-01.jpg", "jpg", 2],
  ["83:2206", "public/images/projects/project-02.jpg", "jpg", 2],
  ["83:2207", "public/images/projects/project-03.jpg", "jpg", 2],
  ["83:2209", "public/images/projects/project-04.jpg", "jpg", 2],
  ["83:2210", "public/images/projects/project-05.jpg", "jpg", 2],
  ["83:2211", "public/images/projects/project-06.jpg", "jpg", 2],
  ["83:2213", "public/images/projects/project-07.jpg", "jpg", 2],
  ["83:2214", "public/images/projects/project-08.jpg", "jpg", 2],
  ["83:2215", "public/images/projects/project-09.jpg", "jpg", 2],

];

/** [Figma node id, output path] — original uploaded image used as a fill. */
const IMAGE_FILLS = []; // hero noise tile is already in the project

async function loadEnv() {
  for (const name of [".env.local", ".env"]) {
    const file = path.join(projectRoot, name);
    if (!existsSync(file)) continue;
    const text = await readFile(file, "utf8");
    for (const line of text.split(/\r?\n/)) {
      const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (match && !process.env[match[1]]) {
        process.env[match[1]] = match[2].replace(/^["']|["']$/g, "");
      }
    }
  }
}

async function api(endpoint, token) {
  const res = await fetch(`https://api.figma.com/v1/${endpoint}`, {
    headers: { "X-Figma-Token": token },
  });
  if (!res.ok) {
    throw new Error(`Figma API ${res.status} on ${endpoint}: ${await res.text()}`);
  }
  return res.json();
}

async function download(url, outPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed (${res.status}) for ${outPath}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  if (buffer.length === 0) throw new Error(`Empty file for ${outPath}`);
  const target = path.join(projectRoot, outPath);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, buffer);
  return buffer.length;
}

function kb(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`;
}

async function main() {
  await loadEnv();
  const token = process.env.FIGMA_TOKEN;
  if (!token) {
    console.error(
      "\nMissing FIGMA_TOKEN.\nCreate a token in Figma (Settings → Security → Personal access tokens),\n" +
        "then add it to .env.local as:  FIGMA_TOKEN=your-token\n",
    );
    process.exit(1);
  }

  const failures = [];

  // 1. Node renders, one request each (large frames can time out when batched).
  for (const [id, out, format, scale] of RENDERS) {
    try {
      const query = `ids=${encodeURIComponent(id)}&format=${format}&scale=${scale}`;
      const data = await api(`images/${FILE_KEY}?${query}`, token);
      const url = data.images?.[id];
      if (!url) throw new Error(`Figma returned no render for ${id}`);
      const size = await download(url, out);
      console.log(`✓ ${out}  (${kb(size)})`);
    } catch (error) {
      failures.push(out);
      console.error(`✗ ${out}: ${error.message}`);
    }
  }

  // 2. Original image fills (e.g. the noise texture).
  try {
    const ids = IMAGE_FILLS.map(([id]) => encodeURIComponent(id)).join(",");
    const nodes = await api(`files/${FILE_KEY}/nodes?ids=${ids}`, token);
    const fills = await api(`files/${FILE_KEY}/images`, token);
    for (const [id, out] of IMAGE_FILLS) {
      const fill = nodes.nodes?.[id]?.document?.fills?.find((f) => f.type === "IMAGE");
      const url = fill && fills.meta?.images?.[fill.imageRef];
      if (!url) {
        failures.push(out);
        console.error(`✗ ${out}: no image fill found on ${id}`);
        continue;
      }
      const size = await download(url, out);
      console.log(`✓ ${out}  (${kb(size)})`);
    }
  } catch (error) {
    failures.push("image fills");
    console.error(`✗ image fills: ${error.message}`);
  }

  // 3. Report the page background colour so it can be checked against globals.css.
  try {
    const root = await api(`files/${FILE_KEY}/nodes?ids=${encodeURIComponent(ROOT_FRAME)}`, token);
    const fill = root.nodes?.[ROOT_FRAME]?.document?.fills?.find((f) => f.type === "SOLID");
    if (fill) {
      const hex = ["r", "g", "b"]
        .map((k) => Math.round(fill.color[k] * 255).toString(16).padStart(2, "0"))
        .join("");
      console.log(`\nPage background in Figma: #${hex.toUpperCase()} (compare with --color-page in src/app/globals.css)`);
    }
  } catch {
    // Non-critical.
  }

  if (failures.length) {
    console.error(`\n${failures.length} asset(s) failed. Re-run "npm run assets" — Figma sometimes times out on large renders.`);
    process.exit(1);
  }
  console.log("\nAll Figma assets downloaded.");
}

main();
