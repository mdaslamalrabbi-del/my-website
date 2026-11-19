"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps, site } from "@/config/site";

const STEP = 0.45; // viewport heights of scrolling per card
const ease = (x: number) => 1 - Math.pow(1 - x, 3);

/**
 * Figma "My Work Process" (192:1209). On desktop the section stays pinned while you scroll:
 * LISTEN is in place from the start, then each scroll brings in UNDERSTAND, CREATE and SCALE.
 * On phones, tablets and with reduced motion the four cards are simply stacked.
 */
export function WorkProcess() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;
    const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-card]"));
    const mq = window.matchMedia("(min-width: 64rem)");
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const extra = cards.length - 1 + 0.6;
    let pinned = false;
    let top = 0;

    const update = () => {
      if (!pinned) return;
      const dist = track.offsetHeight - section.offsetHeight;
      const p = Math.min(1, Math.max(0, (top - track.getBoundingClientRect().top) / dist));
      const vh = window.innerHeight;
      cards.forEach((c, i) => {
        const t = i === 0 ? 1 : ease(Math.min(1, Math.max(0, p * extra - (i - 1))));
        c.style.setProperty("--x", ((1 - t) * 14).toFixed(2));
        c.style.setProperty("--y", ((1 - t) * vh * 0.75).toFixed(1));
        c.style.setProperty("--rr", `${((1 - t) * (i % 2 ? 7 : -7)).toFixed(2)}deg`);
        c.style.setProperty("--o", Math.min(1, t * 1.6).toFixed(3));
      });
    };
    const layout = () => {
      pinned = mq.matches && !rm.matches;
      track.dataset.pin = pinned ? "on" : "off";
      if (!pinned) {
        track.style.height = "";
        cards.forEach((c) => ["--x", "--y", "--rr", "--o"].forEach((k) => c.style.removeProperty(k)));
        return;
      }
      const h = section.offsetHeight;
      const vh = window.innerHeight;
      top = Math.min(0, vh - h);
      track.style.setProperty("--wp-top", `${top}px`);
      track.style.height = `${h + extra * STEP * vh}px`;
      update();
    };
    const onScroll = () => requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", layout);
    mq.addEventListener("change", layout);
    rm.addEventListener("change", layout);
    layout();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", layout);
      mq.removeEventListener("change", layout);
      rm.removeEventListener("change", layout);
    };
  }, []);

  return (
    <div ref={trackRef} className="wp-track relative">
      <section
        ref={sectionRef}
        id="process"
        aria-labelledby="process-title"
        className="wp relative z-[1] pt-[clamp(96px,8.125vw,156px)] pb-[var(--section-y)]"
      >
        <div className="container-site flex flex-col gap-12 lg:flex-row lg:items-stretch lg:justify-between lg:gap-0">
          <Reveal className="flex flex-col items-start gap-10 lg:w-[44.405%] lg:justify-between">
            <div className="flex flex-col items-start gap-6">
              <Pill tone="grey" className="mt-2">
                My Work Process
              </Pill>
              <h2 id="process-title" className="text-h2 text-ink">
                <span className="text-ink/50">How I turn user</span> psychology and AI{" "}
                <span className="text-ink/50">into products that grow.</span>
              </h2>
            </div>
            <Button href={site.bookingUrl} variant="grey">
              Grab 20 minutes
            </Button>
          </Reveal>

          <div className="relative lg:@container lg:aspect-[878/768] lg:w-[52.262%]">
            <ol aria-label="Work process steps" className="flex flex-col lg:absolute lg:inset-0">
              {processSteps.map((s, i) => (
                <li
                  key={s.title}
                  data-card
                  className="wp-card flex flex-col p-[clamp(20px,1.6667vw,32px)] pb-10 text-ink lg:p-[3.645cqw]"
                  style={
                    {
                      "--bg": s.bg,
                      "--r": `${s.tilt}deg`,
                      "--rule": s.rule,
                      "--top": `${[-5.78, 23.03, 51.83, 80.64][i]}%`,
                    } as CSSProperties
                  }
                >
                  <div className="flex items-center justify-between gap-4 border-b border-[var(--rule)] pb-4 lg:pb-[1.822cqw]">
                    <h3 className="text-[clamp(28px,2.5vw,48px)] leading-[0.8333] lg:text-[5.467cqw] font-medium tracking-[-0.5px] uppercase">
                      {s.title}
                    </h3>
                    <span
                      aria-hidden
                      className="pr-[10.667px] font-['Times_New_Roman',Times,serif] text-[clamp(24px,2.0833vw,40px)] leading-[0.8] text-brand-navy lg:pr-[1.215cqw] lg:text-[4.556cqw]"
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <p className="max-w-[480px] pt-7 text-[clamp(16px,1.25vw,24px)] leading-[1.25] font-light tracking-[-0.5px] opacity-70 lg:max-w-[54.67cqw] lg:pt-[3.189cqw] lg:text-[max(13px,2.733cqw)]">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
