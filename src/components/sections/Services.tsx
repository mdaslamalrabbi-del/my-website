import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services, site } from "@/config/site";
import { cn } from "@/lib/cn";

/** Figma "Quick Info" (83:2216) — services with staggered cards. */
export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-white/90">
      <div className="container-site py-section">
        <Reveal className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <h2 id="services-title" className="text-h2 max-w-[1129px] text-ink lg:w-[67.2%]">
            Building digital experiences that move businesses forward.
          </h2>
          <Button href={site.bookingUrl}>Grab 20 minutes</Button>
        </Reveal>

        <ul className="mt-stack grid gap-4 md:grid-cols-2 md:gap-6 xl:flex xl:items-start xl:justify-between xl:gap-0">
          {services.map((service, i) => {
            const offset = i % 2 === 1; // cards 2 and 4 sit 56px lower
            return (
              <li
                key={service.code}
                className={cn("xl:w-[23.571%]", offset && "md:mt-12 xl:mt-[3.3333%]")}
              >
                <Reveal delay={0.08 * i} className="h-full">
                  <ServiceCard {...service} />
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
