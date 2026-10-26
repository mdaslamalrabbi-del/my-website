import Image from "next/image";
import { cn } from "@/lib/cn";

type ServiceCardProps = {
  code: string;
  title: string;
  description: string;
  uppercase: boolean;
  className?: string;
};

/**
 * Figma "Component 5" (83:933) — 396 × 532 card.
 * Normal: navy with a soft red/violet glow. Hover (Figma prototype "Mouse enter → Hover"):
 * photo background with a #1B1B1B fade from transparent at the top to solid at the bottom.
 */
export function ServiceCard({ code, title, description, uppercase, className }: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group relative isolate flex min-h-[440px] flex-col justify-between overflow-hidden bg-card p-7 xl:aspect-[396/532] xl:min-h-0",
        className,
      )}
    >
      {/* Glow — exported from Figma already clipped to the card (389 × 347 from the card's top-left) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/card-glow.svg"
        alt=""
        aria-hidden
        className="absolute top-0 left-0 -z-20 block h-auto w-[98.23%] max-w-none origin-top-left transition-opacity duration-300 group-hover:opacity-0"
      />

      {/* Hover state */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
      >
        <Image
          src="/images/service-hover.jpg"
          alt=""
          fill
          sizes="(min-width: 1280px) 21vw, (min-width: 768px) 50vw, 100vw"
          className="scale-105 object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(27,27,27,0)] to-[#1b1b1b]" />
      </div>

      <p className="text-label whitespace-nowrap text-accent">{code}</p>

      <div className="flex flex-col gap-4">
        <h3 className={cn("text-card-title whitespace-pre-wrap text-white", uppercase && "uppercase")}>{title}</h3>
        <p className="text-body text-white">{description}</p>
      </div>
    </article>
  );
}
