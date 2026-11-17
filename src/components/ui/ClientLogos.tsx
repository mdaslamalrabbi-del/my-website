import { clients } from "@/config/site";
import { cn } from "@/lib/cn";

/**
 * Client logo strip at the bottom of the hero — scrolls continuously and pauses on hover.
 * Each logo is soft grey by default and turns into its full-colour card on hover (Figma "Logo" 248:2474).
 */
export function ClientLogos() {
  const cells = (hidden: boolean) =>
    clients.map((client) => (
      <li
        key={`${hidden ? "b" : "a"}-${client.name}`}
        aria-hidden={hidden || undefined}
        className="group/logo flex h-[clamp(88px,7.2917vw,140px)] w-[clamp(168px,14.1667vw,272px)] shrink-0 items-center justify-center border-r-[0.5px] border-white/10"
      >
        <span className="relative block h-[calc(100%-16px)] w-[calc(100%-16px)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={client.normal}
            alt={`${client.name} logo`}
            loading="lazy"
            width={256}
            height={124}
            className={cn(
              "absolute inset-0 h-full w-full object-contain transition-opacity duration-[450ms] group-hover/logo:opacity-0",
              client.tone ? "opacity-50 brightness-150 grayscale" : "opacity-45 brightness-0 invert",
            )}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={client.hover}
            alt={`${client.name} logo in colour`}
            aria-hidden
            loading="lazy"
            width={256}
            height={124}
            className="absolute inset-0 h-full w-full scale-[0.92] object-contain opacity-0 transition-[opacity,transform] duration-[600ms] ease-out-expo group-hover/logo:scale-100 group-hover/logo:opacity-100"
          />
        </span>
      </li>
    ));

  return (
    <div className="group relative z-10 overflow-hidden border-t border-white/10" aria-label="Clients" role="region">
      <ul className="-ml-[6.7188vw] flex w-max animate-[marquee_50s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {cells(false)}
        {cells(true)}
      </ul>
    </div>
  );
}
