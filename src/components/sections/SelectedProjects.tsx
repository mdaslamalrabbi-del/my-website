import { LoopVideo } from "@/components/ui/LoopVideo";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/config/site";
import { ProjectGallery } from "./ProjectGallery";

/** Figma "Project" (83:2365). */
export function SelectedProjects() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="overflow-x-clip bg-page pt-[clamp(48px,4.5833vw,88px)] pb-[clamp(64px,6.25vw,120px)]"
    >
      {/* Title composition (Figma "Group 5", 1057 × 449) — all in em of the 100px title size */}
      <div className="container-site">
        <h2
          id="work-title"
          className="projects-type relative mx-auto h-[4.4873em] w-[10.57em] font-semibold text-black uppercase"
        >
          <Reveal
            aria-hidden
            y={0}
            className="absolute top-0 left-[3.37em] flex h-[4.4873em] w-[3.8328em] items-center justify-center"
          >
            {/* Figma "Rectangle 7": 348 × 440 video frame, tilted 5° */}
            <span className="block h-[4.2em] w-[3.48em] rotate-5 overflow-hidden bg-[#0b0b0b]">
              <LoopVideo
                webm={site.projectsReel.webm}
                mp4={site.projectsReel.mp4}
                poster={site.projectsReel.poster}
                className="block h-full w-full"
              />
            </span>
          </Reveal>
          <Reveal
            as="span"
            x="-0.3em"
            y={0}
            className="absolute top-[0.97em] left-0 block leading-[1.08] tracking-[-0.04em] whitespace-nowrap"
          >
            Selected
          </Reveal>{" "}
          <Reveal
            as="span"
            x="0.3em"
            y={0}
            delay={0.1}
            className="absolute top-[2.43em] left-[5.79em] block leading-[1.08] tracking-[-0.04em] whitespace-nowrap"
          >
            Projects
          </Reveal>
        </h2>
      </div>

      <div className="mt-[clamp(32px,3.75vw,72px)]">
        <ProjectGallery />
      </div>
    </section>
  );
}
