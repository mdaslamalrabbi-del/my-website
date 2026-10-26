import { clients } from "@/config/site";

/** Figma "Frame 2147227753" — bordered 272 × 140 logo cells, scrolling continuously. */
export function LogoMarquee() {
  const cells = (hidden: boolean) =>
    clients.map((client, i) => (
      <li
        key={`${hidden ? "b" : "a"}-${i}`}
        aria-hidden={hidden || undefined}
        className="flex h-[clamp(88px,7.2917vw,140px)] w-[clamp(168px,14.1667vw,272px)] shrink-0 items-center justify-center border-r-[0.5px] border-white/10"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={client.src} alt={hidden ? "" : client.name} width={130} height={31} className="block h-auto w-[clamp(96px,6.7708vw,130px)]" />
      </li>
    ));

  return (
    <div className="group overflow-hidden border-y border-white/10" aria-label="Clients" role="region">
      {/* Starts 129px left, like Figma, so the first logo is cut at the edge */}
      <ul className="-ml-[6.7188vw] flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {cells(false)}
        {cells(true)}
      </ul>
    </div>
  );
}
