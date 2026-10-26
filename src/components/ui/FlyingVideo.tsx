"use client";

import { useEffect, useRef, useState } from "react";

type FlyingVideoProps = {
  src: string;
  /** VP9 WebM fallback for browsers without H.264. */
  webmSrc?: string;
  poster?: string;
  label: string;
};

type Rect = { x: number; y: number; w: number; h: number };

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/**
 * One video that starts in the small "Quick intro" frame and, as you scroll,
 * grows and travels into the big Showreel frame.
 * Both frames stay in the layout (`data-video-slot="intro" | "showreel"`); this
 * layer is positioned over them inside <main>, which is `position: relative`.
 */
export function FlyingVideo({ src, webmSrc, poster, label }: FlyingVideoProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [muted, setMuted] = useState(true);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const container = wrap?.offsetParent as HTMLElement | null;
    const small = document.querySelector<HTMLElement>('[data-video-slot="intro"]');
    const big = document.querySelector<HTMLElement>('[data-video-slot="showreel"]');
    if (!wrap || !container || !small || !big) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let a: Rect, b: Rect, start = 0, end = 1, raf = 0;

    const relRect = (el: HTMLElement): Rect => {
      const c = container.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      return { x: r.left - c.left, y: r.top - c.top, w: r.width, h: r.height };
    };

    const measure = () => {
      a = relRect(small);
      b = relRect(big);
      const vh = window.innerHeight;
      const containerTop = container.getBoundingClientRect().top + window.scrollY;
      // Start once the small frame sits a little above mid-screen;
      // finish when the big frame is centred in the viewport.
      start = containerTop + a.y - vh * 0.55;
      end = containerTop + b.y - Math.max(0, (vh - b.h) / 2);
      if (end <= start) end = start + 1;
    };

    const render = () => {
      raf = 0;
      let p = Math.min(1, Math.max(0, (window.scrollY - start) / (end - start)));
      p = reduceMotion.matches ? (p < 0.5 ? 0 : 1) : easeInOut(p);
      wrap.style.transform = `translate3d(${lerp(a.x, b.x, p)}px, ${lerp(a.y, b.y, p)}px, 0)`;
      wrap.style.width = `${lerp(a.w, b.w, p)}px`;
      wrap.style.height = `${lerp(a.h, b.h, p)}px`;
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };
    const remeasure = () => {
      measure();
      schedule();
    };

    // Size the video to the small frame immediately, before it is shown.
    measure();
    render();
    setReady(true);
    // The frames become invisible placeholders; only the moving video is seen.
    document.documentElement.dataset.flyingVideo = "on";
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", remeasure);
    const observer = new ResizeObserver(remeasure);
    observer.observe(document.body);

    // Playback: browsers pause muted autoplay videos that start off-screen or tiny and don't
    // always resume them, so play explicitly whenever the video is on screen (small or big).
    const video = videoRef.current;
    let playing: IntersectionObserver | null = null;
    let visible = false;
    // If the browser refuses to autoplay, show a play button instead of a frozen first frame.
    const tryPlay = () => {
      if (!video || !video.paused) return;
      video
        .play()
        .then(() => setBlocked(false))
        .catch(() => visible && setBlocked(true));
    };
    const onPlaying = () => setBlocked(false);
    const stalled = window.setTimeout(() => visible && video?.paused && setBlocked(true), 2500);
    if (video) {
      video.muted = true; // React doesn't put `muted` in the server HTML; autoplay needs it.
      video.defaultMuted = true;
      video.setAttribute("muted", "");
      video.addEventListener("loadeddata", tryPlay);
      video.addEventListener("canplay", tryPlay);
      video.addEventListener("playing", onPlaying);
      playing = new IntersectionObserver(
        ([entry]) => {
          visible = entry.isIntersecting;
          if (visible) tryPlay();
          else video.pause();
        },
        { threshold: 0.05 },
      );
      playing.observe(wrap);
      // Last resort for strict power-saving modes: start on the first interaction.
      window.addEventListener("pointerdown", tryPlay, { once: true });
      window.addEventListener("touchstart", tryPlay, { once: true, passive: true });
      tryPlay();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", remeasure);
      observer.disconnect();
      playing?.disconnect();
      window.clearTimeout(stalled);
      video?.removeEventListener("loadeddata", tryPlay);
      video?.removeEventListener("canplay", tryPlay);
      video?.removeEventListener("playing", onPlaying);
      window.removeEventListener("pointerdown", tryPlay);
      window.removeEventListener("touchstart", tryPlay);
      delete document.documentElement.dataset.flyingVideo;
    };
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      setBlocked(false);
      video.play().catch(() => setBlocked(true));
      return;
    }
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <div
      ref={wrapRef}
      role="button"
      tabIndex={0}
      aria-label={`${label} — ${muted ? "turn sound on" : "turn sound off"}`}
      aria-pressed={!muted}
      onClick={toggleSound}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleSound();
        }
      }}
      className="absolute top-0 left-0 z-20 h-0 w-0 cursor-pointer overflow-hidden rounded-[6.7px] bg-video will-change-transform"
      style={{ opacity: ready ? 1 : 0 }}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
        <source src={src} type="video/mp4" />
      </video>
      {blocked ? (
        <span
          aria-hidden
          className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(248,247,245,0.2)] pl-1 backdrop-blur-[10px]"
        >
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
            <path d="M17 10 1.5 19V1L17 10Z" fill="white" fillOpacity=".9" />
          </svg>
        </span>
      ) : null}
    </div>
  );
}
