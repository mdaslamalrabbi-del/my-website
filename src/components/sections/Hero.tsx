import Image from "next/image";
import { ClientLogos } from "@/components/ui/ClientLogos";
import { HeroParallax } from "@/components/ui/HeroParallax";
import { HeroPhotos } from "@/components/ui/HeroPhotos";
import { LiveClock } from "@/components/ui/LiveClock";
import { Reveal } from "@/components/ui/Reveal";
import { heroTags, site } from "@/config/site";

/**
 * Figma "Hero Section" (158:3727) — 1920 × 1080, client logo strip along the bottom.
 * All headline geometry is in `em` of the display size, so the composition
 * (photo tucked behind the "G", tags fading before "FOR", sub text on the right)
 * holds at every desktop width and is exact at 1920.
 * `data-depth` = how far (px) each layer drifts with the cursor (see HeroParallax).
 */
export function Hero() {
  const tags = (hidden: boolean) =>
    heroTags.map((tag) => (
      <li
        key={`${hidden ? "b" : "a"}-${tag.label}`}
        aria-hidden={hidden || undefined}
        className="mr-3 inline-flex shrink-0 items-center gap-2 rounded-full bg-white/5 px-4 py-[9px] text-[18px] leading-[22px] whitespace-nowrap text-[rgba(250,249,246,0.9)] backdrop-blur-[2.5px]"
      >
        <span aria-hidden className="block h-3 w-3 rounded-full" style={{ backgroundColor: tag.color }} />
        {tag.label}
      </li>
    ));

  return (
    <HeroParallax
      id="top"
      aria-label="Introduction"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-night text-cream"
    >
      <div data-depth="-18" className="absolute inset-0 -z-20 scale-[1.06]">
        <Image src="/images/hero-bg.webp" alt="" fill priority quality={85} sizes="100vw" className="object-cover" />
      </div>
      {/* Brand halftone, bottom-right — very subtle, stops above the logo strip */}
      <div
        data-depth="-10"
        aria-hidden
        className="halftone absolute inset-x-0 top-0 bottom-[clamp(88px,7.2917vw,140px)] -z-10"
      />

      <div className="container-site flex flex-1 flex-col justify-between gap-16 pt-[clamp(112px,8.0208vw,154px)] pb-[clamp(40px,3.75vw,72px)]">
        {/* Headline block (Figma "Frame 11", 1680 × 510) */}
        <div className="hero-type relative">
          {/* pt 0.55em = the 110px headroom above "DESIGNER" where the photo sits */}
          <h1 aria-label="Designer for growth" className="pt-[0.55em] font-semibold uppercase">
            <span data-depth="12" className="block">
              <Reveal
                as="span"
                immediate
                y="0.25em"
                className="block leading-[1.02] tracking-[-0.02em] whitespace-nowrap"
              >
                DESI
                <span className="relative z-10 inline-block">
                  <span data-depth="26" aria-hidden className="absolute top-[-0.55em] left-[0.012em] -z-10 block h-[1.158em] w-[1.2735em]">
                    <Reveal
                      as="span"
                      immediate
                      delay={0.35}
                      y="0.1em"
                      className="flex h-full w-full items-center justify-center"
                    >
                      {/* Figma "Rectangle 3": 220 × 190, 6px white border, rotated 12° — photos change in place */}
                      <span data-tilt className="block">
                        <span className="relative block h-[0.95em] w-[1.1em] rotate-12 overflow-hidden">
                          <HeroPhotos />
                          {/* Inside stroke, drawn over the photo like Figma */}
                          <span aria-hidden className="absolute inset-0 z-10 border-[0.03em] border-solid border-white" />
                        </span>
                      </span>
                    </Reveal>
                  </span>
                  G
                </span>
                NER
              </Reveal>
            </span>
            <span data-depth="-16" className="block">
              <Reveal
                as="span"
                immediate
                delay={0.12}
                y="0.25em"
                className="-mt-[0.0426em] block text-right text-[0.94em] leading-[1.085] tracking-[-0.0213em] whitespace-nowrap"
              >
                FOR GROWTH
              </Reveal>
            </span>
          </h1>

          {/* Sub text — right column from 1280px (Figma "Sub Text", x 1136, w 568); below the headline on smaller screens */}
          <div className="xl:absolute xl:top-[0.94em] xl:left-[60.476%] xl:w-[33.81%]">
            <div data-depth="10">
              <Reveal
                immediate
                delay={0.3}
                y={16}
                className="mt-8 flex max-w-[600px] flex-col items-start gap-4 lg:mt-10 xl:mt-0 xl:max-w-[568px]"
              >
                <p className="text-body text-[rgba(250,249,246,0.9)] xl:text-[clamp(16px,1.0417vw,20px)]">
                  I’m Aslam Rabbi, an AI Product Designer. Psychology tells me why users act, business goals what to
                  aim for, and AI how to scale it.
                </p>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border-b border-white/90 text-[clamp(20px,1.25vw,24px)] leading-[28px] font-semibold tracking-[-0.5px] whitespace-nowrap text-[#efff1a] uppercase transition-colors hover:text-[#f6ff7a] xl:text-[clamp(18px,1.25vw,24px)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/arrow-book.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="block transition-transform duration-500 ease-out-expo group-hover:translate-x-1"
                  />
                  Book a call
                </a>
              </Reveal>
            </div>
          </div>

          {/* Industry tags — scroll sideways on their own, fading out before "FOR" (Figma "Frame 12") */}
          <div className="lg:absolute lg:top-[2.17em] lg:left-[0.01em] lg:w-[37.8%]">
            <div data-depth="-8">
              <Reveal immediate delay={0.4} y={16} className="tags-viewport mt-6 lg:mt-0">
                <ul aria-label="Industries" className="tags-track">
                  {tags(false)}
                  {tags(true)}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Bottom row (Figma "Frame 19") */}
        <div data-depth="6">
          <Reveal
            immediate
            delay={0.5}
            y={12}
            className="text-body grid gap-6 text-[rgba(250,249,246,0.9)] sm:grid-cols-2 lg:grid-cols-[48.571%_1fr_auto] lg:items-center lg:gap-0"
          >
            <div className="flex gap-2">
              <span className="shrink-0 pt-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/globe.svg" alt="" className="block" />
              </span>
              <p>
                Collaborating globally
                <br />
                Local time ({site.timeZoneLabel} - <LiveClock />)
              </p>
            </div>
            <div className="flex gap-2">
              <span className="relative shrink-0 pt-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/status.svg" alt="" className="relative z-10 block" />
                <span aria-hidden className="spots-ring absolute top-1.5 left-0 h-6 w-6 rounded-full bg-[rgba(62,230,107,0.55)]" />
              </span>
              <p className="spots-text">
                Only 2 spots left
                <br />
                this month.
              </p>
            </div>
            <a
              href="#about"
              className="group hidden items-center gap-1 justify-self-end whitespace-nowrap text-[rgba(250,249,246,0.8)] transition-colors hover:text-white lg:inline-flex"
            >
              Scroll Down
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/arrow-down.svg"
                alt=""
                className="block transition-transform duration-500 ease-out-expo group-hover:translate-y-1"
              />
            </a>
          </Reveal>
        </div>
      </div>

      <ClientLogos />
    </HeroParallax>
  );
}
