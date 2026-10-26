import Image from "next/image";
import { ContactSteps } from "@/components/ui/ContactSteps";
import { LiveClock } from "@/components/ui/LiveClock";
import { LogoMarquee } from "@/components/ui/LogoMarquee";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/config/site";

const socials = [
  { label: "Dribble", href: site.social.dribbble },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "Instagram", href: site.social.instagram },
];

/** Figma "Footer" (109:1067) — 1920 × 1008. Contact block · steps · location & socials. */
export function Footer() {
  return (
    <footer id="contact" className="relative isolate overflow-hidden bg-night text-white">
      <Image src="/images/footer-bg.jpg" alt="" fill quality={85} sizes="100vw" className="-z-20 object-cover object-top" />

      <div className="pt-[clamp(48px,5.625vw,108px)]">
        <LogoMarquee />
      </div>

      <div className="container-site mt-[clamp(32px,2.5vw,48px)]">
        {/* Get in touch */}
        <Reveal>
          <p className="text-[16px] leading-5 font-light text-muted">( Get in touch )</p>

          <div className="mt-8 flex flex-col gap-12 xl:flex-row xl:items-start xl:justify-between">
            {/* Contact + steps (Figma "Frame 2147227761": 780 + 56 gap + 450) */}
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-[clamp(32px,2.9167vw,56px)] xl:flex-1">
            <div className="flex max-w-[780px] min-w-0 flex-col gap-[clamp(32px,2.5vw,48px)] lg:flex-1">
              <div className="flex flex-col gap-3">
                <h2 className="text-h2 text-white/90">
                  Have a project in mind?
                  <br />
                  Let&apos;s talk.
                </h2>
                <p className="text-body text-white">Feel free to reach out. Together, we’ll make it sharper.</p>
              </div>

              <div className="inline-flex items-center gap-4 self-start bg-ink py-3 pr-5 pl-3">
                <Image
                  src="/images/avatar.png"
                  alt={site.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 object-cover"
                />
                <div className="flex flex-col text-[clamp(18px,1.0417vw,20px)] leading-7 tracking-[-0.5px]">
                  <a
                    href={`mailto:${site.email}`}
                    className="font-medium text-white underline-offset-4 transition-opacity hover:underline"
                  >
                    {site.email}
                  </a>
                  <a href={site.phoneHref} className="font-light text-muted transition-colors hover:text-white">
                    {site.phone}
                  </a>
                </div>
              </div>
            </div>

            <ContactSteps className="lg:w-[clamp(340px,23.4375vw,450px)] lg:shrink-0" />
            </div>

            <div className="flex flex-col gap-12 pr-2 lg:min-w-[198px]">
              <div className="flex flex-col gap-1 font-light tracking-[-0.5px] whitespace-nowrap">
                <p className="text-[16px] leading-5 text-muted">
                  {site.timeZoneLabel} - <LiveClock format="12h" />
                </p>
                <p className="text-[20px] leading-7 text-white">{site.location}</p>
              </div>

              <div className="flex flex-col gap-[11px]">
                <p className="text-[20px] leading-7 font-light tracking-[-0.5px] text-muted">Social media</p>
                <ul className="flex flex-col gap-[11px]">
                  {socials.map((social) => {
                    const content = (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/icons/arrow-return-small.svg"
                          alt=""
                          className="block transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5"
                        />
                        {social.label}
                      </>
                    );
                    const classes =
                      "group inline-flex items-center gap-2 text-[16px] leading-5 font-medium tracking-[-0.5px] text-white/90";
                    return (
                      <li key={social.label}>
                        {social.href ? (
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${classes} transition-colors hover:text-white`}
                          >
                            {content}
                          </a>
                        ) : (
                          <span className={classes}>{content}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom row: copyright + wordmark */}
        <div className="mt-[clamp(64px,6.875vw,132px)] flex flex-col-reverse gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
          <p className="text-[16px] leading-7 font-light tracking-[-0.5px] text-subtle lg:pt-[34px]">
            ©2026. {site.name}
          </p>
          <div className="wordmark-type flex h-[1em] items-center justify-end self-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/wordmark.svg" alt={site.name} className="block h-[1em] w-auto" />
            <span aria-hidden className="leading-[1.02] font-semibold tracking-[-0.02em] text-white">
              ©
            </span>
          </div>
        </div>
      </div>

      {/* Fade over the bottom of the wordmark (Figma "Rectangle 11": gradient fill + 10px background blur).
          Figma scales the blur by the fill's opacity, so the blur is masked to grow toward the bottom. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[clamp(64px,8.2292vw,158px)]"
      >
        <div className="absolute inset-0 backdrop-blur-[10px] [mask-image:linear-gradient(to_bottom,transparent,#000)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,#000)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,1,30,0),#02011e)]" />
      </div>
    </footer>
  );
}
