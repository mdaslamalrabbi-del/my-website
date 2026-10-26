import { VideoPanel } from "@/components/ui/VideoPanel";

/** Figma "Video Showreel" (83:2085) — 1680 × 947 frame centred in a 1056 band. The video grows into it on scroll. */
export function Showreel() {
  return (
    <section aria-label="Showreel" className="bg-page">
      <div className="container-site py-[clamp(16px,2.8385vw,54.5px)]">
        <VideoPanel slot="showreel" className="aspect-[1680/947] w-full" />
      </div>
    </section>
  );
}
