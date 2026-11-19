import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPanel } from "@/components/ui/VideoPanel";
import { site } from "@/config/site";

/** Figma "Quick Info" (83:2087). */
export function QuickIntro() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-page">
      <div className="container-site py-section">
        <Reveal>
          <h2 id="about-title" className="text-h2 max-w-[1129px] text-black lg:w-[67.2%]">
            <span className="text-black/50">Senior UX Designer and AI Product Designer,</span> built in Figma and
            accelerated by AI.
          </h2>
        </Reveal>

        <div className="mt-stack flex flex-col gap-10 lg:grid lg:min-h-[min(560px,29.1667vw)] lg:grid-cols-[50.714%_1fr] lg:grid-rows-[auto_1fr] lg:gap-0">
          {/* Label */}
          <Reveal className="lg:col-start-1 lg:row-start-1">
            <Pill className="mt-2">Quick intro</Pill>
          </Reveal>

          {/* Copy + CTA (Figma x 852, w 828) */}
          <Reveal
            delay={0.1}
            className="flex flex-col items-start gap-[clamp(28px,2.2917vw,44px)] lg:col-start-2 lg:row-span-2 lg:row-start-1"
          >
            <div className="text-lead text-black/60">
              <p className="mb-5">
                I’m Aslam Rabbi, a Senior UX Designer based in Dhaka. Over 6+ years, I’ve completed 70+ projects across{" "}
                <strong className="font-medium">
                  web, iOS, Android and SaaS for fintech, telco and AI teams, reaching 20M+ users
                </strong>{" "}
                every month.
              </p>
              <p>
                Good design isn’t decoration. It’s UX research, strategy and craft working together to move your
                business forward. Explore the case studies behind the numbers.
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
