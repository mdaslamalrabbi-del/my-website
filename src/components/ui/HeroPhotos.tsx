"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { heroPhotoDelay, heroPhotos } from "@/config/site";
import { cn } from "@/lib/cn";

/**
 * Photos inside the tilted hero frame. They crossfade in place every few seconds,
 * pause while the frame is off screen or the tab is hidden, and stay on the first
 * photo for visitors who prefer reduced motion.
 */
export function HeroPhotos() {
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: number | undefined;
    let visible = true;
    const stop = () => {
      window.clearInterval(timer);
      timer = undefined;
    };
    const start = () => {
      if (timer || reduce.matches || document.hidden || !visible) return;
      timer = window.setInterval(() => setIndex((i) => (i + 1) % heroPhotos.length), heroPhotoDelay);
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(el);
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);
    start();
    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <span ref={ref} className="absolute inset-0">
      {heroPhotos.map(({ src, alt }, i) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          priority={i === 0}
          sizes="(min-width: 1024px) 270px, 25vw"
          className={cn(
            "object-cover transition-[opacity,transform] duration-[1200ms] ease-out-expo motion-reduce:transition-none",
            i === index ? "scale-100 opacity-100" : "scale-[1.08] opacity-0",
          )}
        />
      ))}
    </span>
  );
}
