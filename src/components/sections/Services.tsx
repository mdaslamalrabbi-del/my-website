"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { services, site } from "@/config/site";
import { cn } from "@/lib/cn";

/**
 * Figma "Quick Info" (158:3851) — dark services section with a one-open-at-a-time list.
 * The photo on the left follows the open service. The navy background fades in above the
 * section and ends in a soft curve just below it, like Figma.
 */
export function Services() {
  const [open, setOpen] = useState(0);
  const active = open < 0 ? 0 : open;

  return (
    <section id="services" aria-labelledby="services-title" className="relative isolate z-0 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[-10.3125vw] -z-10 flex h-[calc(100%+13.4375vw)] flex-col"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/services/bg-top.webp" alt="" className="block h-auto w-full shrink-0" />
        <i className="-my-px flex-1 bg-[#000024]" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/services/bg-bottom.webp" alt="" className="block h-auto w-full shrink-0" />
      </div>

      <div className="container-site py-section">
        <Reveal className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 id="services-title" className="text-h2 max-w-[960px] text-white/90">
            Building digital experiences that move businesses forward.
          </h2>
          <Button href={site.bookingUrl} variant="dim">
            Grab 20 minutes
          </Button>
        </Reveal>

        <div className="mt-stack flex flex-col gap-8 lg:flex-row lg:items-stretch lg:justify-between lg:gap-12">
          <Reveal className="flex flex-col gap-6 lg:w-[35.714%] lg:justify-between">
            <Pill tone="dark" className="self-start lg:mt-2">
              My Services
            </Pill>
            <div className="relative aspect-[600/432] max-w-[600px] overflow-hidden rounded-[6.7px] bg-[#0b0b2a]">
              {services.map((s, i) => (
                <Image
                  key={s.image}
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className={cn(
                    "object-cover transition-[opacity,transform] duration-700 ease-out-expo motion-reduce:transition-none",
                    i === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0",
                  )}
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:w-[55.476%]">
            <ul>
              {services.map((s, i) => {
                const isOpen = open === i;
                return (
                  <li key={s.title} className={cn("border border-white/5", i > 0 && "border-t-0")}>
                    <h3>
                      <button
                        type="button"
                        id={`svc-q${i}`}
                        aria-expanded={isOpen}
                        aria-controls={`svc-a${i}`}
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        className={cn(
                          "flex min-h-[clamp(64px,4.375vw,84px)] w-full cursor-pointer items-center justify-between gap-4 px-[clamp(16px,1.25vw,24px)] py-[clamp(10px,1.0417vw,20px)] text-left text-[clamp(24px,2.0833vw,40px)] leading-[1.1] tracking-[-0.5px] transition-colors duration-300 hover:text-white/90",
                          isOpen ? "font-medium text-white/90" : "font-light text-white/70",
                        )}
                      >
                        <span>{s.title}</span>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/icons/chevron.svg"
                          alt=""
                          width={32}
                          height={32}
                          className={cn("block shrink-0 transition-transform duration-500 ease-out-expo", isOpen && "rotate-90")}
                        />
                      </button>
                    </h3>
                    <div
                      id={`svc-a${i}`}
                      role="region"
                      aria-labelledby={`svc-q${i}`}
                      className={cn(
                        "grid transition-[grid-template-rows] duration-500 ease-out-expo",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="min-h-0 overflow-hidden" inert={!isOpen}>
                        <div className="flex flex-col items-end gap-10 px-[clamp(16px,1.25vw,24px)] py-[clamp(24px,2.5vw,48px)]">
                          <p className="text-body w-full max-w-[496px] text-white/90">{s.description}</p>
                          <a
                            href={site.bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 border-b border-white/90 text-[clamp(20px,1.25vw,24px)] leading-[28px] font-semibold tracking-[-0.5px] whitespace-nowrap text-[#efff1a] uppercase transition-colors hover:text-[#f6ff7a]"
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
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
