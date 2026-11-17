import { clients, faqs, seo, site } from "@/config/site";

/**
 * Structured data (schema.org JSON-LD) so search engines understand who Aslam Rabbi is,
 * what he does and which services he offers. Nothing here is visible on the page.
 * Validate at https://search.google.com/test/rich-results and https://validator.schema.org.
 */
export function JsonLd() {
  const url = seo.url;
  const personId = `${url}/#person`;
  const websiteId = `${url}/#website`;
  const serviceId = `${url}/#services`;
  const sameAs = Object.values(site.social).filter(Boolean);

  const graph = [
    {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      alternateName: [...seo.alternateNames],
      givenName: "Aslam",
      familyName: "Rabbi",
      jobTitle: seo.jobTitle,
      description: seo.description,
      url,
      email: `mailto:${site.email}`,
      telephone: site.phoneHref.replace("tel:", ""),
      image: `${url}/images/aslam-rabbi-ux-designer-portrait.png`,
      address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
      knowsAbout: [...seo.knowsAbout],
      hasOccupation: {
        "@type": "Occupation",
        name: "Product Designer",
        occupationalCategory: "15-1255.00 Web and Digital Interface Designers",
        skills: "AI Product Design, UX/UI Design, UX Research, UX Engineering, Design Systems, Product Management",
      },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Daffodil International University" },
      worksFor: { "@type": "Organization", name: "Musemind" },
      award: ["Ultimate Contributor Award (Musemind AGM 2025)", "Rising Star Award (Q3 2025)", "Design Challenge Award (2025)"],
      sameAs,
      makesOffer: seo.services.map((s) => ({ "@type": "Offer", itemOffered: { "@id": `${url}/#service-${slug(s.name)}` } })),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url,
      name: site.name,
      alternateName: ["Aslam Rabbi — AI Product Designer", "aslamrabbi.com"],
      description: seo.description,
      inLanguage: "en",
      publisher: { "@id": personId },
      author: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${url}/#webpage`,
      url,
      name: seo.title,
      description: seo.description,
      inLanguage: "en",
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
      about: { "@id": personId },
      primaryImageOfPage: { "@type": "ImageObject", url: `${url}/images/aslam-rabbi-ai-product-designer-og.jpg`, width: 1200, height: 630 },
    },
    {
      "@type": "ProfessionalService",
      "@id": serviceId,
      name: `${site.name} — Product & UX Design Services`,
      url,
      image: `${url}/images/aslam-rabbi-ai-product-designer-og.jpg`,
      logo: `${url}/brand/icon-512.png`,
      description: seo.description,
      founder: { "@id": personId },
      provider: { "@id": personId },
      email: site.email,
      telephone: site.phoneHref.replace("tel:", ""),
      address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
      areaServed: "Worldwide",
      knowsAbout: [...seo.knowsAbout],
      sameAs,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Product design, UX and AI services",
        itemListElement: seo.services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": `${url}/#service-${slug(s.name)}`,
            name: s.name,
            description: s.description,
            serviceType: s.name,
            provider: { "@id": personId },
            areaServed: "Worldwide",
          },
        })),
      },
    },
    {
      "@type": "ItemList",
      name: "Clients and products Aslam Rabbi has designed for",
      itemListElement: clients.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name })),
    },
    {
      "@type": "FAQPage",
      "@id": `${url}/#faq`,
      isPartOf: { "@id": `${url}/#webpage` },
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output only; "<" is escaped so the data can never close the script tag.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
