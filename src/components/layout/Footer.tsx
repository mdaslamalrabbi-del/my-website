import Image from "next/image";
import { ContactSteps } from "@/components/ui/ContactSteps";
import { LiveClock } from "@/components/ui/LiveClock";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Reveal } from "@/components/ui/Reveal";
import { aiLinks, site } from "@/config/site";

const socials = [
  { label: "Dribbble", href: site.social.dribbble, icon: "/icons/social-dribbble.svg" },
  { label: "LinkedIn", href: site.social.linkedin, icon: "/icons/social-linkedin.svg" },
  { label: "Instagram", href: site.social.instagram, icon: "/icons/social-instagram.svg" },
];

/** Figma "Footer" (158:3903) — 1920 × 920. Contact block · steps · location & socials · Ask AI · wordmark · CV bar. */
export function Footer() {
  return (
    <footer id="contact" className="relative isolate overflow-hidden bg-night pb-24 text-white lg:pb-6">
      <Image src="/images/footer-bg.webp" alt="" fill quality={85} sizes="100vw" className="-z-20 object-cover object-top" />
      {/* Brand halftone, top-right — same subtle dots as the hero */}
      <span aria-hidden className="halftone absolute inset-0 -z-10 [--dots-at:100%_0%]" />

      <div className="container-site relative pt-[var(--section-y)]">
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
                  src="/images/aslam-rabbi-ux-designer-portrait.png"
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
                  {site.timeZoneLabel} - <LiveClock />
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
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={social.icon} alt={`${social.label} icon`} aria-hidden width={16} height={16} className="block h-4 w-4" />
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

        {/* Bottom row: Ask AI + wordmark */}
        <div className="mt-[clamp(56px,6.4583vw,124px)] flex flex-col gap-10 lg:h-[clamp(180px,13.5417vw,260px)] lg:flex-row lg:items-start lg:justify-between lg:gap-6">
          <Reveal className="relative z-[2] flex max-w-[430px] flex-col gap-[clamp(24px,2.0833vw,40px)]">
            <p className="text-[clamp(20px,1.25vw,24px)] leading-[1.2] tracking-[-0.41px] text-white">
              Curious about me? Get an AI summary of Aslam Rabbi’s work.
            </p>
            <ul aria-label="Ask an AI about Aslam Rabbi" className="flex gap-6">
              {aiLinks.map((ai) => (
                <li key={ai.name}>
                  <a
                    href={ai.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ask ${ai.name} about Aslam Rabbi`}
                    className="block h-12 w-12 overflow-hidden rounded-xl transition-[transform,filter] duration-500 ease-out-expo hover:-translate-y-1 hover:brightness-110 focus-visible:-translate-y-1"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ai.icon} alt={`${ai.name} logo`} width={48} height={48} className="block h-12 w-12" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="wordmark-type flex h-[1em] items-center justify-end lg:self-end">
            <BrandLogo className="h-[0.8em]" />
          </div>
        </div>
      </div>

      {/* Fade over the bottom of the wordmark (Figma "Rectangle 11": gradient fill + 10px background blur).
          Figma scales the blur by the fill's opacity, so the blur is masked to grow toward the bottom. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[clamp(120px,10.4167vw,200px)]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,1,30,0)_0%,rgba(2,1,30,0.7)_35.791%,#02011e_73.844%)]" />
      </div>

      {/* Bottom bar over the fade: CV + copyright */}
      <div className="absolute inset-x-0 bottom-0 z-[2] flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-[var(--gutter)] py-[clamp(16px,1.4583vw,28px)]">
        <a
          href={site.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[clamp(16px,1.0417vw,20px)] leading-7 font-light tracking-[-0.5px] text-[rgba(255,255,250,0.6)] transition-colors hover:text-white"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/cv.svg" alt="" width={24} height={24} className="block h-6 w-6" />
          Download My CV
        </a>
        <p className="text-[16px] leading-6 font-light tracking-[-0.5px] text-white">
          2026 © aslam rabbi. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
