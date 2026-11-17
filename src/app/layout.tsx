import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { seo, site } from "@/config/site";
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
  metadataBase: new URL(seo.url),
  title: { default: seo.title, template: `%s | ${site.name}` },
  description: seo.description,
  applicationName: site.name,
  keywords: [...seo.keywords],
  authors: [{ name: site.name, url: seo.url }],
  creator: site.name,
  publisher: site.name,
  category: "design",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/brand/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "profile",
    url: seo.url,
    siteName: site.name,
    locale: "en_US",
    title: seo.title,
    description: seo.description,
    firstName: "Aslam",
    lastName: "Rabbi",
    username: "aslam-rabbio",
    images: [
      {
        url: "/images/aslam-rabbi-ai-product-designer-og.jpg",
        width: 1200,
        height: 630,
        alt: "Aslam Rabbi — AI Product Designer & Senior UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/images/aslam-rabbi-ai-product-designer-og.jpg"],
  },
  // Add the token from Google Search Console (HTML tag method) as GOOGLE_SITE_VERIFICATION in Vercel.
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#04002F",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${switzer.variable} ${sora.variable}`}>
      <body className="bg-page font-sans text-ink antialiased">
        <JsonLd />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
