# Aslam Rabbi — Portfolio website

Next.js + TypeScript + Tailwind CSS v4 + Framer Motion build of the Figma design
**“My Website” → Main Page → frame `83:2079`** (1920 × 7972).

## Run it locally

Requires Node.js 20.9 or newer (`node -v` to check; get it from nodejs.org).

```bash
cd aslam-website
npm install

# 1. Backgrounds, hero photo, logos and icons are already included (exported from Figma).
#    This pulls 3 project images that sit at the frame edges, plus retina versions of the rest.
cp .env.example .env.local      # then paste your Figma token into .env.local
npm run assets

# 2. Start the preview
npm run dev                     # open http://localhost:3000
```

**Figma token:** Figma → avatar menu → **Settings → Security → Personal access tokens** →
*Generate new token*, scope **File content: Read only**. It stays in `.env.local` on your
machine and is ignored by git.

## Deploy

```bash
npm run build && npm start      # production check
```

On Vercel: import the folder/repo, framework preset **Next.js**, no extra settings.
Commit the downloaded `public/images` and `public/icons` files so the build has them.

## Project structure

```
scripts/fetch-figma-assets.mjs   Downloads all assets from Figma by node id
public/images/                    Backgrounds, photos, project tiles (from Figma)
public/icons/                     Logo, wordmark, icons, glow (SVG from Figma)
public/videos/                    Put showreel / intro videos here
src/app/globals.css               Design tokens + fluid type and spacing utilities
src/fonts/                        Switzer 300/400/500/600 (self-hosted, from your font files)
src/app/layout.tsx                Fonts (Switzer via next/font/local), metadata, skip link
src/app/page.tsx                  Page composition
src/config/site.ts                All copy, links, tags, projects, services
src/components/layout/            Navbar (with mobile menu), Footer
src/components/sections/          Hero, QuickIntro, Showreel, SelectedProjects, ProjectGallery, Services
src/components/ui/                Button, IconLink, Reveal, LiveClock, VideoPanel, ServiceCard, LogoMarquee
```

## How the design maps to code

| Figma | Token / utility |
| --- | --- |
| Black `#020008` | `ink` |
| Hero/footer base `#010007` | `night` |
| Headline `#F3EEE8` | `cream` |
| Card `#01012B`, code `#5EFF5E` | `card`, `accent` |
| Heading 2 — Switzer Medium 66/80 | `text-h2` |
| Body Text — Switzer Light 20/28 | `text-body` |
| Lead — 24/36 | `text-lead` |
| Title Text — 200/204 (188 for “FOR GROWTH”) | `hero-type` |
| 120px gutters, 1680 content | `container-site` |
| 132px section padding | `py-section` |

All sizes are fluid and hit the exact Figma value at 1920px. Below 1024px the layouts
reflow into tablet and mobile versions using the same type, colours and components.

## Things to fill in (`src/config/site.ts`)

- `bookingUrl` — booking link for “Collaborate”, “Book a call”, “Grab 20 minutes” (currently opens email).
- `social` — Dribbble, LinkedIn and Instagram URLs (shown as plain text until set).
- `video.intro` / `video.showreel` — the Figma video frames are empty; add files to `public/videos`.
