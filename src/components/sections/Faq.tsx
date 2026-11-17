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
    <section id="faq" aria-labelledby="faq-title" className="relative bg-white">
      <div className="container-site py-section">
        {/* Side by side from 1280px; stacked below so the card never gets squeezed */}
        <div className="flex flex-col gap-12 xl:flex-row xl:items-start xl:gap-[6.25vw] 2xl:gap-[120px]">
          {/* Card */}
          <Reveal className="w-full xl:w-[39.286%] xl:shrink-0">
            {/* aspect-ratio sets the Figma 660 × 460 shape; the card still grows if its content needs more room */}
            <div className="relative isolate flex flex-col rounded-[20px] bg-white p-[clamp(24px,2.0833vw,40px)] xl:aspect-[660/460]">
              {/* Brand identity: Night navy with soft indigo glows and a faint halftone corner */}
              <span aria-hidden className="absolute inset-0 -z-10 overflow-hidden rounded-[20px] bg-brand-night">
                <span className="absolute -inset-20 blur-[50px] [background:radial-gradient(ellipse_55%_50%_at_30%_75%,#1A0FA8_0%,transparent_70%),radial-gradient(ellipse_40%_40%_at_95%_5%,#0D0680_0%,transparent_70%),radial-gradient(ellipse_35%_35%_at_0%_100%,#2410B0_0%,transparent_70%)]" />
                <span className="halftone absolute inset-0 [--dots-at:100%_100%]" />
              </span>
              <div className="flex flex-1 flex-col gap-4">
                <h2 id="faq-title" className="text-h2 text-brand-cream">
                  Go-to-market
                  <br />
                  <span className="relative inline-block">
                    FAQs
                    <svg viewBox="0 0 72 72" aria-hidden className="absolute top-[0.02em] right-[-0.42em] h-[0.3em] w-[0.3em]">
                      <path d="M36 0C38 22 50 34 72 36C50 38 38 50 36 72C34 50 22 38 0 36C22 34 34 22 36 0Z" fill="#EDFF49" />
                    </svg>
                  </span>
                </h2>
                <div className="flex flex-1 flex-col justify-between gap-8">
                  <p className="text-lead text-brand-lavender">
                    A few practical answers for teams figuring out whether Aslam Rabbi is the right fit, how projects run.
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
