"use client";

import { useState } from "react";
import { contactSteps } from "@/config/site";
import { cn } from "@/lib/cn";

/**
 * Figma footer "Container" (112:1359) — 450 × 328, three 98.8px rows on a 2px timeline.
 * The highlighted row (purple dot + underline + purple button + shadow) is the first by default
 * and follows the pointer/keyboard focus, returning to the first when you leave.
 */
export function ContactSteps({ className }: { className?: string }) {
  const [active, setActive] = useState(0);

  return (
    <ol
      className={cn("relative flex w-full max-w-[450px] flex-col gap-[15.75px]", className)}
      onMouseLeave={() => setActive(0)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setActive(0);
      }}
    >
      {/* Timeline */}
      <span aria-hidden className="absolute top-[49px] left-[38px] h-[228px] w-[2px] bg-white/10" />

      {contactSteps.map((step, i) => {
        const on = active === i;
        const external = /^https?:\/\//.test(step.href);
        return (
          <li key={step.label}>
            <a
              href={step.href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={cn(
                "relative flex h-[98.84px] items-center gap-[27px] border px-7 transition-[filter,border-color] duration-300",
                on
                  ? "border-transparent [filter:drop-shadow(0_14px_12px_rgba(0,0,0,0.2))_drop-shadow(0_14px_17px_rgba(0,0,0,0.1))]"
                  : "border-[rgba(21,21,21,0.1)]",
              )}
            >
              {/* Dot */}
              <span
                aria-hidden
                className={cn(
                  "relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                  on ? "bg-[#6352fc]" : "bg-[#0f0e43]",
                )}
              >
                <span className={cn("h-1 w-1 rounded-full", on ? "bg-white" : "bg-white/90")} />
                {/* Purple trail under the active dot */}
                <span
                  className={cn(
                    "absolute top-[18px] left-[9px] h-12 w-[2px] bg-gradient-to-b from-[#4734f7] to-transparent transition-opacity duration-300",
                    on ? "opacity-100" : "opacity-0",
                  )}
                />
              </span>

              {/* Label */}
              <span className="flex items-center gap-[9px] text-[20px] leading-7 font-light tracking-[-0.5px] whitespace-nowrap text-white/90">
                <span>{String(i + 1).padStart(2, "0")}.</span>
                <span className="relative">
                  {step.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute top-[25.98px] left-0 h-px w-[calc(100%+8px)] origin-left bg-white/90 transition-transform duration-500 ease-out-expo",
                      on ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </span>
              </span>

              {/* Button */}
              <span className="flex flex-1 justify-end">
                <span
                  aria-hidden
                  className={cn(
                    "flex h-[41px] w-[41px] items-center justify-center rounded-full transition-colors duration-300",
                    on ? "bg-[#6352fc]" : "bg-black/30",
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={step.icon} alt="" width={step.iconSize} height={step.iconSize} className="block" />
                </span>
              </span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}
