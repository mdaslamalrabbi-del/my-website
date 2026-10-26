import Image from "next/image";
import { projectRows, type Project } from "@/config/site";
import { cn } from "@/lib/cn";

/**
 * Figma "Frame 2147227752": three full-bleed rows of 843 × 632 tiles, 32px gaps.
 * Each row scrolls sideways on its own in an endless loop — rows 1 and 3 to the left,
 * row 2 to the right — starting from exactly the Figma layout. Hovering a row pauses it;
 * visitors with "reduce motion" on see the static Figma layout.
 */
export function ProjectGallery() {
  return (
    <div className="flex flex-col gap-3 md:gap-[1.6667vw]">
      {projectRows.map((row, i) => (
        <Row key={i} projects={row} reverse={i === 1} />
      ))}
    </div>
  );
}

function Row({ projects, reverse }: { projects: Project[]; reverse: boolean }) {
  // The set is rendered twice so the loop is seamless; the copy is hidden from screen readers.
  const loop = [...projects, ...projects];

  return (
    <div className="gallery-row overflow-hidden">
      <ul className={cn("gallery-track", reverse && "gallery-track-reverse")}>
        {loop.map((project, i) => (
          <li key={`${project.src}-${i}`} aria-hidden={i >= projects.length || undefined} className="gallery-tile">
            <ProjectTile project={project} hidden={i >= projects.length} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Figma "Component 6" (127:285) hover: 40% black overlay + 120px frosted circle (rgba(29,29,29,.2),
 * 10px blur) with Switzer Regular 18/22 white text. Published → "View Case Study" link; otherwise "Coming soon".
 */
function ProjectTile({ project, hidden }: { project: Project; hidden: boolean }) {
  const published = Boolean(project.caseStudyUrl);
  const label = published ? ["View", "Case Study"] : ["Coming", "soon"];
  const className = cn(
    "group relative block aspect-[843/632] w-full overflow-hidden bg-placeholder",
    published ? "cursor-pointer" : "cursor-default",
  );

  const inner = (
    <>
      <Image
        src={project.src}
        alt={hidden ? "" : project.alt}
        fill
        sizes="(min-width: 768px) 44vw, 78vw"
        className="object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.03]"
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
      />
      <span
        aria-hidden
        className="absolute top-1/2 left-1/2 flex h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 scale-75 flex-col items-center justify-center rounded-full bg-[rgba(29,29,29,0.2)] text-center text-[18px] leading-[22px] tracking-[-0.5px] text-white opacity-0 backdrop-blur-[10px] transition-[opacity,transform] duration-500 ease-out-expo group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100"
      >
        <span>{label[0]}</span>
        <span>{label[1]}</span>
      </span>
    </>
  );

  if (published && !hidden) {
    return (
      <a href={project.caseStudyUrl} className={className} aria-label={`${project.alt} — view case study`}>
        {inner}
      </a>
    );
  }
  return (
    <div className={className} {...(!hidden ? { role: "img", "aria-label": `${project.alt} — case study coming soon` } : {})}>
      {inner}
    </div>
  );
}
