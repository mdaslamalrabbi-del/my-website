import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PillProps = {
  children: ReactNode;
  /** "light" on the page colour, "grey" a touch darker, "dark" on navy sections. */
  tone?: "light" | "grey" | "dark";
  className?: string;
};

/** Section label: dot + text in a soft pill (Figma "Our work", "My Services", "Quick intro"…). */
export function Pill({ children, tone = "light", className }: PillProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-[70px] px-3 py-0.5 text-[clamp(16px,1.0417vw,20px)] leading-7 font-light tracking-[-0.5px] whitespace-nowrap backdrop-blur-[10px]",
        tone === "dark" ? "bg-white/5 text-white/90" : tone === "grey" ? "bg-black/10 text-ink" : "bg-[rgba(2,0,8,0.05)] text-ink",
        className,
      )}
    >
      <span aria-hidden className={cn("block h-2.5 w-2.5 rounded-full", tone === "dark" ? "bg-white/90" : "bg-ink")} />
      {children}
    </p>
  );
}
