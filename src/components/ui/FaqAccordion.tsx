"use client";

import { useId, useState } from "react";
import type { Faq } from "@/config/site";
import { cn } from "@/lib/cn";

/**
 * Figma component "Question" (109:787): 16px vertical padding, 20/28 Medium question,
 * 16px plus icon that turns into an × when open, 4px between items. One item open at a time.
 */
export function FaqAccordion({ items, defaultOpen = 0 }: { items: Faq[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className="flex flex-col gap-1">
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-q${i}`;
        const panelId = `${baseId}-a${i}`;
        return (
          <div key={i} className="py-4">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-6 text-left"
              >
                <span className="text-[clamp(18px,1.0417vw,20px)] leading-7 font-medium tracking-[-0.5px] text-ink transition-opacity duration-300 group-hover:opacity-70">
                  {item.question}
                </span>
                {/* Plus → × (Figma "Plus" / "Cancel": 16 × 16, 1px #020008 bars) */}
                <span
                  aria-hidden
                  className={cn(
                    "relative block h-4 w-4 shrink-0 transition-transform duration-500 ease-out-expo",
                    isOpen && "rotate-45",
                  )}
                >
                  <span className="absolute top-[7.5px] left-0 h-px w-4 bg-ink" />
                  <span className="absolute top-0 left-[7.5px] h-4 w-px bg-ink" />
                </span>
              </button>
            </h3>

            {/* Height animates from 0 to auto with the grid-rows technique */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-500 ease-out-expo",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden" inert={!isOpen}>
                <div className="flex flex-col gap-3 pt-4 text-[clamp(16px,0.9375vw,18px)] tracking-[-0.5px] text-[rgba(2,0,8,0.7)]">
                  <p className="max-w-[756px] leading-[22px] font-light">{item.answer}</p>
                  {item.notes?.map((note) => {
                    const external = /^https?:\/\//.test(note.href);
                    return (
                      <p key={note.text} className="leading-7 font-medium">
                        <a
                          href={note.href}
                          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="underline-offset-4 transition-colors hover:text-ink hover:underline"
                        >
                          {note.text}
                        </a>
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
