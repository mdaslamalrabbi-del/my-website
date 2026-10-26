"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type LoopVideoProps = {
  webm: string;
  mp4: string;
  poster?: string;
  className?: string;
};

/** Silent looping video that plays only while it is on screen (decorative). */
export function LoopVideo({ webm, mp4, poster, className }: LoopVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    const play = () => {
      if (video.paused) video.play().catch(() => {});
    };
    const observer = new IntersectionObserver(([entry]) => (entry.isIntersecting ? play() : video.pause()), {
      threshold: 0.05,
    });
    observer.observe(video);
    video.addEventListener("canplay", play);
    return () => {
      observer.disconnect();
      video.removeEventListener("canplay", play);
    };
  }, []);

  return (
    <video
      ref={ref}
      className={cn("object-cover", className)}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
      tabIndex={-1}
    >
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
    </video>
  );
}
