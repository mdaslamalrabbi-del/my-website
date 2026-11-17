"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef } from "react";

/**
 * Wraps the hero section. Moving the mouse shifts every child marked `data-depth="<px>"`
 * by up to that many pixels (negative = the other way), eased so it never jumps.
 * Elements marked `data-tilt` also rotate a little. Off on touch screens and with reduced motion.
 */
export function HeroParallax({ children, ...rest }: ComponentPropsWithoutRef<"section">) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = ref.current;
    if (!hero) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const layers = Array.from(hero.querySelectorAll<HTMLElement>("[data-depth]")).map((el) => ({
      el,
      d: Number(el.dataset.depth) || 0,
    }));
    const tilts = Array.from(hero.querySelectorAll<HTMLElement>("[data-tilt]"));
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      for (const { el, d } of layers) {
        el.style.setProperty("--px", `${(cx * d).toFixed(2)}px`);
        el.style.setProperty("--py", `${(cy * d * 0.7).toFixed(2)}px`);
      }
      for (const el of tilts) el.style.rotate = `${(cx * 3).toFixed(2)}deg`;
      raf = Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001 ? requestAnimationFrame(tick) : 0;
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      if (!fine.matches || reduce.matches) return;
      const r = hero.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
      kick();
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      kick();
    };
    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section ref={ref} {...rest}>
      {children}
    </section>
  );
}
