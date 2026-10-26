import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPanel } from "@/components/ui/VideoPanel";
import { site } from "@/config/site";

const introGradient =
  "linear-gradient(76deg, rgb(239,255,26) 0%, rgb(27,133,199) 10.12%, rgb(160,29,29) 19.91%, rgb(0,0,0) 44.38%, rgb(45,12,248) 67.42%, rgb(135,88,153) 84.15%, rgb(255,160,48) 100%)";

/** Figma "Quick Info" (83:2087). */
export function QuickIntro() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-page">
      <div className="container-site py-section">
        <Reveal>
          <h2 id="about-title" className="text-h2 max-w-[1129px] text-black lg:w-[67.2%]">
            Impact-first designer, built in Figma and accelerated by AI.
          </h2>
        </Reveal>

        <div className="mt-stack flex flex-col gap-10 lg:grid lg:min-h-[min(560px,29.1667vw)] lg:grid-cols-[50.714%_1fr] lg:grid-rows-[auto_1fr] lg:gap-0">
          {/* Label */}
          <Reveal className="flex items-center gap-2 lg:col-start-1 lg:row-start-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/dot-intro.svg" alt="" width={10} height={10} className="block h-2.5 w-2.5" />
            <p
              className="text-body bg-clip-text whitespace-nowrap text-transparent"
              style={{ backgroundImage: introGradient }}
            >
              Quick intro
            </p>
          </Reveal>

          {/* Copy + CTA (Figma x 852, w 828) */}
          <Reveal
            delay={0.1}
            className="flex flex-col items-start gap-[clamp(28px,2.2917vw,44px)] lg:col-start-2 lg:row-span-2 lg:row-start-1"
          >
            <div className="text-lead text-black/60">
              <p className="mb-5">
                Over the past 6+ years, I’ve completed 70+ projects across{" "}
                <strong className="font-semibold">web, iOS, Android and SaaS</strong>, reaching 20M+ users every
                month. Good design isn’t decoration. It’s strategy, research and craft working together to move your
                business forward.
              </p>
              <p>
                Why settle for a product that just looks good when it could also convert, retain and grow? Explore the
                case studies behind the numbers.
              </p>
            </div>
            <Button href={site.bookingUrl}>Grab 20 minutes</Button>
          </Reveal>

          {/* Intro video frame (Figma 500 × 282, bottom-left) — the showreel starts playing here */}
          <div className="lg:col-start-1 lg:row-start-2 lg:self-end">
            <VideoPanel
              slot="intro"
              className="aspect-[500/282] w-full sm:w-[min(500px,100%)] lg:w-[58.68%] lg:min-w-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
