import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
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

/** Sora ExtraBold — the brand logo's typeface. */
const sora = Sora({ subsets: ["latin"], weight: "800", variable: "--font-sora-face", display: "swap" });

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    images: [{ url: "/images/og.jpg", width: 1920, height: 1080 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#04002F",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${switzer.variable} ${sora.variable}`}>
      <body className="bg-page font-sans text-ink antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
