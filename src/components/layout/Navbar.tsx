"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button, IconLink } from "@/components/ui/Button";
import { site } from "@/config/site";
import { cn } from "@/lib/cn";

/** Figma "Nav Bar" (83:2175): 92px tall, glass blur, menu · logo · actions. */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Lock scroll, close on Escape and move focus while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close the menu if the viewport grows past the desktop breakpoint.
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 64rem)");
    const onChange = () => mql.matches && setOpen(false);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      {/* Sits above the mobile menu overlay so the logo and close button stay usable. */}
      <div className="relative z-[60] bg-[rgba(58,56,56,0.05)] backdrop-blur-[25px]">
        <div className="container-site flex h-[76px] items-center justify-between gap-6 lg:h-[92px]">
          <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
            {site.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-nav whitespace-nowrap text-white/70 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#top" aria-label={`${site.name} — home`} className="shrink-0">
            <BrandLogo label="" className="h-[26px] lg:h-[30px]" />
          </a>

          <div className="flex items-center gap-2">
            <Button href={site.bookingUrl} variant="glass" className="hidden md:inline-flex">
              Collaborate
            </Button>
            <a
              href={site.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex h-11 items-center gap-2 rounded-full bg-[#020008] pr-5 pl-[18px] text-[20px] leading-[22px] font-light tracking-[-0.5px] whitespace-nowrap text-white/90 backdrop-blur-[10px] transition-[background-color,transform] duration-300 ease-out-expo hover:-translate-y-0.5 hover:bg-[#15122e] focus-visible:-translate-y-0.5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/cv.svg" alt="" width={24} height={24} className="block h-6 w-6" />
              Download My CV
            </a>
            <button
              ref={toggleRef}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[rgba(248,247,245,0.2)] backdrop-blur-[2px] lg:hidden"
            >
              <span aria-hidden className="relative block h-3 w-4">
                <span
                  className={cn(
                    "absolute left-0 block h-[1.5px] w-4 bg-white transition-transform duration-300",
                    open ? "top-[5px] rotate-45" : "top-0.5",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 block h-[1.5px] w-4 bg-white transition-transform duration-300",
                    open ? "top-[5px] -rotate-45" : "top-2",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-50 flex flex-col bg-night/95 backdrop-blur-[25px] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav
              aria-label="Mobile"
              className="container-site flex flex-1 flex-col justify-center gap-6 pt-[76px]"
            >
              {site.nav.map((item, i) => (
                <motion.a
                  key={item.label}
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-[44px] leading-none font-semibold tracking-[-1px] text-cream uppercase"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="container-site flex items-center gap-2 pb-10">
              <Button href={site.bookingUrl} variant="glass">
                Collaborate
              </Button>
              <a href={site.cvUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center gap-2 rounded-full bg-[#020008] pr-5 pl-[18px] text-[18px] font-light text-white/90">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/cv.svg" alt="" width={24} height={24} className="block h-6 w-6" />
                CV
              </a>
              <IconLink href={site.social.instagram} label="Instagram" icon="/icons/instagram.svg" />
              <IconLink href={site.social.linkedin} label="LinkedIn" icon="/icons/linkedin.svg" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
