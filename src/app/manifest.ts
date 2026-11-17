import type { MetadataRoute } from "next";
import { seo, site } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — AI Product Designer`,
    short_name: site.name,
    description: seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#04002F",
    theme_color: "#04002F",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/brand/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
