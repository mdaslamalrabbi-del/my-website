import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { site } from "@/config/site";
import "./globals.css";

/** Switzer v1.200 — the only typeface in the Figma file, self-hosted (no external requests). */
const switzer = localFont({
  src: [
    { path: "../fonts/Switzer-Light.woff", weight: "300", style: "normal" },
    { path: "../fonts/Switzer-Regular.woff", weight: "400", style: "normal" },
    { path: "../fonts/Switzer-Medium.woff", weight: "500", style: "normal" },
    { path: "../fonts/Switzer-Semibold.woff", weight: "600", style: "normal" },
  ],
  variable: "--font-switzer",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    images: [{ url: "/images/hero-bg.jpg", width: 1920, height: 1080 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#010007",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={switzer.variable}>
      <body className="bg-page font-sans text-ink antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
