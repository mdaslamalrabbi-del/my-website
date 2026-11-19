import { Pill } from "@/components/ui/Pill";
import { Ink } from "@/components/ui/Ink";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectGallery } from "./ProjectGallery";

/** Figma "Project" (158:3829): label + two-tone heading, then the auto-scrolling gallery. */
export function SelectedProjects() {
  return (
    <section id="work" aria-labelledby="work-title" className="overflow-x-clip bg-page py-section">
      <div className="container-site">
        <Reveal className="flex flex-col items-start gap-6 lg:flex-row lg:justify-between">
          <Pill className="lg:mt-4">My work</Pill>
          <h2 id="work-title" className="text-h2 max-w-[1129px] text-ink lg:w-[67.2%]">
            <Ink>Fintech, telco and SaaS case studies,</Ink> designed and developed end to end,{" "}
            <Ink>with real results behind every screen.</Ink>
          </h2>
        </Reveal>
      </div>

      <div className="mt-stack">
        <ProjectGallery />
      </div>
    </section>
  );
}
