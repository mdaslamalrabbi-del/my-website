import Image from "next/image";
import { LiveClock } from "@/components/ui/LiveClock";
import { Reveal } from "@/components/ui/Reveal";
import { heroTags, site } from "@/config/site";

/**
 * Figma "Hero Section" (83:2100) — 1920 × 1080.
 * All headline geometry is in `em` of the display size, so the composition
 * (photo tucked behind the "G", tags fading before "FOR", sub text on the right)
 * holds at every desktop width and is exact at 1920.
 */
export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative isolate overflow-hidden bg-night text-cream"
    >
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        quality={85}
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[url(/images/noise.png)] opacity-15 mix-blend-overlay"
      />

      <div className="container-site flex min-h-[100svh] flex-col justify-between gap-16 pt-[clamp(112px,9.1667vw,176px)] pb-[clamp(32px,6.875vw,132px)]">
        {/* Headline block (Figma "Frame 11", 1680 × 510) */}
        <div className="hero-type relative">
          {/* pt 0.55em = the 110px headroom above "DESIGNER" where the photo sits */}
          <h1 aria-label="Designer for growth" className="pt-[0.55em] font-semibold uppercase">
            <Reveal
              as="span"
              immediate
              y="0.25em"
              className="block leading-[1.02] tracking-[-0.02em] whitespace-nowrap"
            >
              DESI
              <span className="relative z-10 inline-block">
                <Reveal
                  as="span"
                  immediate
                  delay={0.35}
                  y="0.1em"
                  aria-hidden
                  className="absolute top-[-0.55em] left-[0.012em] -z-10 flex h-[1.158em] w-[1.2735em] items-center justify-center"
                >
                  {/* Figma "Rectangle 3": 220 × 190, 6px white border, rotated 12°, photo cropped as in Figma */}
                  <span className="relative block h-[0.95em] w-[1.1em] rotate-12 overflow-hidden">
                    <Image
                      src="/images/hero-photo.jpg"
                      alt=""
                      width={800}
                      height={566}
                      priority
                      sizes="(min-width: 1024px) 270px, 25vw"
                      className="absolute top-[-0.14%] left-[-8.27%] h-full w-[122.07%] max-w-none"
                    />
                    {/* Inside stroke, drawn over the photo like Figma */}
                    <span aria-hidden className="absolute inset-0 border-[0.03em] border-solid border-white" />
                  </span>
                </Reveal>
                G
              </span>
              NER
            </Reveal>
            <Reveal
              as="span"
              immediate
              delay={0.12}
              y="0.25em"
              className="-mt-[0.0426em] block text-right text-[0.94em] leading-[1.085] tracking-[-0.0213em] whitespace-nowrap"
            >
              FOR GROWTH
            </Reveal>
          </h1>

          {/* Sub text — right column (Figma "Sub Text", x 1136, w 568) */}
          <div className="lg:absolute lg:top-[0.94em] lg:left-[60.476%] lg:w-[33.81%]">
            <Reveal
              immediate
              delay={0.3}
              y={16}
              className="mt-8 flex max-w-[568px] flex-col items-start gap-4 lg:mt-0"
            >
              <p className="text-body text-[rgba(250,249,246,0.9)]">
                Before I open Figma, I ask who it’s for and what success looks like. The answer shapes every
                pixel that follows.
              </p>
              <a
                href={site.bookingUrl}
                className="group inline-flex items-center gap-2 text-[clamp(20px,1.25vw,24px)] leading-[28px] font-medium tracking-[-0.5px] whitespace-nowrap text-white/90 uppercase transition-colors hover:text-white"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/arrow-return.svg"
                  alt=""
                  className="block transition-transform duration-500 ease-out-expo group-hover:translate-x-1"
                />
                Book a call
              </a>
            </Reveal>
          </div>

          {/* Focus tags — fade out before "FOR" (Figma "Frame 12") */}
          <div className="lg:absolute lg:top-[2.17em] lg:left-[0.01em] lg:w-[37.8%]">
            <Reveal immediate delay={0.4} y={16}>
              <ul
                aria-label="Industries"
                className="tags-fade mt-6 flex flex-wrap gap-3 lg:mt-0 lg:flex-nowrap lg:overflow-hidden"
              >
                {heroTags.map((tag) => (
                  <li
                    key={tag.label}
                    className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white/5 px-4 py-[9px] text-[18px] leading-[22px] whitespace-nowrap text-[rgba(250,249,246,0.9)] backdrop-blur-[2.5px]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={tag.dot} alt="" width={12} height={12} className="block h-3 w-3" />
                    {tag.label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Bottom row (Figma "Frame 19") */}
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
              Local time ({site.timeZoneLabel}) <LiveClock format="24h" />
            </p>
          </div>
          <div className="flex gap-2">
            <span className="shrink-0 pt-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/status.svg" alt="" className="block" />
            </span>
            <p>
              Only 2 spots left
              <br />
              this months.
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
    </section>
  );
}
