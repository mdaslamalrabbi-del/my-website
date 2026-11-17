import type { MetadataRoute } from "next";
import { heroPhotos, projectRows, seo, services, site } from "@/config/site";

/** One page today; images are listed so Google Images can find the portfolio and team photos. */
export default function sitemap(): MetadataRoute.Sitemap {
  const images = Array.from(
    new Set([
      "/images/aslam-rabbi-ai-product-designer-og.jpg",
      ...heroPhotos.map((p) => p.src),
      ...projectRows.flat().map((p) => p.src),
      ...services.map((s) => s.image),
      "/images/aslam-rabbi-ux-designer-portrait.png",
    ]),
  ).map((src) => `${seo.url}${src}`);

  return [
    {
      url: seo.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images,
    },
    { url: `${seo.url}${site.cvUrl}`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
  ];
}
