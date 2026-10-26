import { cn } from "@/lib/cn";

type VideoPanelProps = {
  /** Which frame this is — the shared video (FlyingVideo) uses it to find its start and end. */
  slot: "intro" | "showreel";
  className?: string;
};

/** Rounded dark video frame (6.7px radius) from Figma. The video itself is drawn on top by FlyingVideo. */
export function VideoPanel({ slot, className }: VideoPanelProps) {
  return <div data-video-slot={slot} aria-hidden className={cn("rounded-[6.7px] bg-video", className)} />;
}
