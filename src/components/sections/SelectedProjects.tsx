import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectGallery } from "./ProjectGallery";

/** Figma "Project" (158:3829): label + two-tone heading, then the auto-scrolling gallery. */
export function SelectedProjects() {
  return (
    <section id="work" aria-labelledby="work-title" className="overflow-x-clip bg-page py-section">
      <div className="container-site">
        <Reveal className="flex flex-col items-start gap-6 lg:flex-row lg:justify-between">
          <Pill className="lg:mt-4">Our work</Pill>
          <h2 id="work-title" className="text-h2 max-w-[1129px] text-ink lg:w-[67.2%]">
            Explore case studies built{" "}
            <span className="text-ink/50">end to end, designed and developed, with real results behind every screen.</span>
          </h2>
        </Reveal>
      </div>

      <div className="mt-stack">
        <ProjectGallery />
      </div>
    </section>
  );
}
