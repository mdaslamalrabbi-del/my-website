import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { faqs, site } from "@/config/site";

/**
 * Figma "Question" (109:919) — 1920 × 1000, sits above the footer.
 * Left: 660 × 460 gradient card (20px radius, 40px padding). Right: accordion, 120px gap.
 * 132px top and bottom, like every other section; the footer follows directly.
 */
export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-page">
      <div className="container-site py-section">
        {/* Side by side from 1280px; stacked below so the card never gets squeezed */}
        <div className="flex flex-col gap-12 xl:flex-row xl:items-start xl:gap-[6.25vw] 2xl:gap-[120px]">
          {/* Card */}
          <Reveal className="w-full xl:w-[39.286%] xl:shrink-0">
            {/* aspect-ratio sets the Figma 660 × 460 shape; the card still grows if its content needs more room */}
            <div className="relative isolate flex flex-col rounded-[20px] bg-white p-[clamp(24px,2.0833vw,40px)] xl:aspect-[660/460]">
              {/* Figma "Main BG": 660 × 456 at the top of a white 660 × 460 card */}
              <span aria-hidden className="absolute inset-0 -z-10 overflow-hidden rounded-[20px]">
                <Image
                  src="/images/faq-card-bg.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 34vw, 100vw"
                  className="!h-[99.13%] object-cover object-top"
                />
              </span>
              <div className="flex flex-1 flex-col gap-4">
                <h2 id="faq-title" className="text-h2 text-white/90">
                  Go-to-market
                  <br />
                  FAQs
                </h2>
                <div className="flex flex-1 flex-col justify-between gap-8">
                  <p className="text-lead text-white/70">
                    A few practical answers for teams figuring out whether Spurwing is the right fit, how projects run.
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/faq-avatar.png"
                      alt={site.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 shrink-0 rounded-full"
                    />
                    <Button href={site.bookingUrl} variant="glass">
                      Collaborate
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Questions */}
          <Reveal delay={0.1} className="min-w-0 flex-1">
            <FaqAccordion items={faqs} defaultOpen={0} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
