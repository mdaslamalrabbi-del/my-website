"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode, type RefObject } from "react";

type InkProps = {
  children: ReactNode;
  /** Starting opacity of the colour (0.5 = the faded Figma shade). */
  from?: number;
  /** RGB triplet of the final colour, e.g. "2 0 8" (ink) or "0 0 0". */
  rgb?: string;
  /** "block" fades a whole block of copy; inline text fills in word by word. */
  as?: "span" | "div";
  className?: string;
};

/**
 * Scroll-driven ink: faded text fills to a solid, deep colour as it moves up the screen
 * (starts at 90% of the viewport height, full colour by 40%). Plain-string children fill word by word.
 * Reduced motion: shown in full colour straight away.
 */
export function Ink({ children, from = 0.5, rgb = "2 0 8", as = "span", className }: InkProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let visible = false;
    const update = () => {
      raf = 0;
      if (rm.matches) {
        el.style.setProperty("--ink", "1");
        return;
      }
      const vh = window.innerHeight;
      const r = el.getBoundingClientRect();
      const mid = r.top + Math.min(r.height, vh * 0.3) / 2;
      const p = Math.min(1, Math.max(0, (vh * 0.9 - mid) / (vh * 0.5)));
      el.style.setProperty("--ink", p.toFixed(3));
    };
    const onScroll = () => {
      if (visible && !raf) raf = requestAnimationFrame(update);
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      update();
    });
    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const base = { "--ink-rgb": rgb, "--ink-from": from } as CSSProperties;

  if (typeof children === "string") {
    const parts = children.split(/(\s+)/);
    const words = parts.filter((w) => w && !/^\s+$/.test(w)).length;
    let i = 0;
    return (
      <span
        ref={ref as RefObject<HTMLSpanElement>}
        className={`ink ${className ?? ""}`}
        style={{ ...base, "--ink-n": words } as CSSProperties}
      >
        {parts.map((w, k) =>
          !w || /^\s+$/.test(w) ? (
            w
          ) : (
            <span key={k} className="ink-w" style={{ "--i": i++ } as CSSProperties}>
              {w}
            </span>
          ),
        )}
      </span>
    );
  }

  const Tag = as;
  return (
    <Tag ref={ref as RefObject<HTMLDivElement>} className={`ink-block ${className ?? ""}`} style={base}>
      {children}
    </Tag>
  );
}
