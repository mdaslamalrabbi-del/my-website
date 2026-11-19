/**
 * Site content and links in one place.
 * Copy is taken verbatim from the Figma file. Fill in the TODO links when available;
 * any link left empty renders as plain text instead of a dead link.
 */
/** Search engine metadata — titles, descriptions and keywords never shown on the page. */
export const seo = {
  url: "https://www.aslamrabbi.com",
  title: "Aslam Rabbi — AI Product Designer & Senior UX Designer",
  description:
    "Aslam Rabbi is an AI Product Designer and Senior UX Designer from Dhaka designing fintech, telco and SaaS products: UX/UI design, UX research, UX engineering and AI development.",
  jobTitle: "AI Product Designer & Senior UX Designer",
  alternateNames: ["Md Aslam Al Rabbi", "MD Aslam Al Rabbi", "Aslam Al Rabbi", "Aslam Rabbio", "Rabbi"],
  keywords: [
    "Aslam Rabbi",
    "AI Product Designer",
    "Senior UX Designer",
    "Product Designer",
    "UX Design Engineer",
    "UX Engineer",
    "AI UX Designer",
    "Fintech UX/UI Design",
    "Telco UX/UI Design",
    "SaaS Product Design",
    "Product Design Services",
    "UX Design Services",
    "AI Development Services",
    "Product Management",
    "UX Research and Strategy",
  ],
  /** Services as search engines should understand them (structured data only). */
  services: [
    { name: "AI Product Design", description: "Designing AI-powered products and AI UX that feel human, build trust and make complex tools simple." },
    { name: "UX/UI Design", description: "End-to-end UX/UI design for web, iOS, Android and SaaS products with intuitive flows and clear structure." },
    { name: "Fintech Product Design", description: "Fintech UX/UI design for banking, lending, payments and real-estate analysis products." },
    { name: "Telco Product Design", description: "Telco UX/UI design for large-scale apps such as Grameenphone’s MyGP, serving millions of users." },
    { name: "SaaS Product Design", description: "SaaS product design for dashboards, ERP, HRM and B2B platforms, backed by scalable design systems." },
    { name: "Product Strategy and Management", description: "Clear roadmaps, smart priorities and product decisions that keep a product moving forward." },
    { name: "AI Development and Design Services", description: "Fast, secure and scalable AI development that turns complex technology into simple experiences." },
    { name: "UX Research and Design Engineering", description: "UX research, usability testing, information architecture and design engineering in React, Next.js, Webflow and Flutter." },
  ],
  knowsAbout: [
    "Product Design", "UX Design", "UI Design", "AI Product Design", "AI UX Design", "UX Research", "UX Strategy",
    "UX Engineering", "Design Systems", "Information Architecture", "Usability Testing", "Fintech", "Telecommunications",
    "SaaS", "E-commerce", "Healthcare UX", "Product Management", "Figma", "React", "Next.js",
  ],
} as const;

export const site = {
  name: "Aslam Rabbi",
  title: "Aslam Rabbi — Designer for Growth",
  description:
    "Impact-first designer, built in Figma and accelerated by AI. 70+ projects across web, iOS, Android and SaaS.",
  email: "aslamrabbiuiux@gmail.com",
  phone: "+88 01714580107",
  phoneHref: "tel:+8801714580107",
  timeZone: "Asia/Dhaka",
  timeZoneLabel: "GMT+6",
  location: "Remote from Dhaka,BD",

  // Booking page — used by "Collaborate", "Book a call", "Grab 20 minutes", "Meet us online" and the FAQ links.
  bookingUrl: "https://calendly.com/mdaslamalrabbi/new-project-decision",
  // CV — opens in the browser's PDF viewer (which has its own download button). Replace the file to update it.
  cvUrl: "/cv/Aslam-Rabbi-CV.pdf",

  nav: [
    { label: "Work", href: "#work" },
    { label: "About Us", href: "#about" },
    // The design has no pricing section yet; points to Services for now.
    { label: "Prices", href: "#services" },
  ],

  social: {
    dribbble: "https://dribbble.com/Aslam-Rabbio",
    linkedin: "https://www.linkedin.com/in/aslam-rabbio/",
    instagram: "https://www.instagram.com/uiuxaslam/",
  },

  // Showreel: plays in the small Quick intro frame, then grows into the big frame on scroll.
  video: {
    showreel: "/videos/aslam-rabbi-product-design-showreel.mp4",
    showreelWebm: "/videos/aslam-rabbi-product-design-showreel.webm",
    poster: "/videos/aslam-rabbi-product-design-showreel-poster.jpg",
  },
} as const;

/** Industry tags under the hero headline — they scroll sideways in a loop. */
export const heroTags = [
  { label: "Health", color: "#05CD41" },
  { label: "AI UX", color: "#FE0027" },
  { label: "B2B & B2C", color: "#00CBFE" },
  { label: "Fintech", color: "#1300F3" },
  { label: "Real estate", color: "#FEB600" },
  { label: "Telco", color: "#A855F7" },
  { label: "AI product design", color: "#EFFF1A" },
  { label: "E-commerce", color: "#F472B6" },
  { label: "Banking", color: "#14B8A6" },
  { label: "SaaS", color: "#60A5FA" },
  { label: "EV & mobility", color: "#84CC16" },
] as const;

/** Photos in the tilted hero frame — they change in place every 5 seconds, in this order. */
export const heroPhotos = [
  { src: "/images/hero/aslam-rabbi-gm25-award-product-design-team.webp", alt: "Aslam Rabbi with his product design team receiving an award at GM’25" },
  { src: "/images/hero/aslam-rabbi-townhall-award-ux-designer.webp", alt: "Aslam Rabbi, UX designer, receiving an award at a company townhall" },
  { src: "/images/hero/cross-functional-teamwork-product-design-team.webp", alt: "Cross-functional teamwork: Aslam Rabbi with his product design and development team" },
  { src: "/images/hero/cross-functional-teamwork-ux-design-office.webp", alt: "Cross-functional teamwork: UX, research and product team photo in the office" },
  { src: "/images/hero/aslam-rabbi-ux-ui-designer-appreciation-certificate.webp", alt: "Aslam Rabbi, UX/UI designer, holding a certificate of appreciation from Mediusware" },
  { src: "/images/hero/product-design-team-celebration-dhaka.webp", alt: "Product design and engineering team celebrating together in Dhaka" },
  { src: "/images/hero/aslam-rabbi-farewell-design-team.webp", alt: "Aslam Rabbi with his design team at a farewell celebration" },
  { src: "/images/hero/aslam-rabbi-grameenphone-telco-ux-ui-design.webp", alt: "Aslam Rabbi at Grameenphone headquarters, where he worked on telco UX/UI design for the MyGP app" },
  { src: "/images/hero/aslam-rabbi-ux-design-workshop.webp", alt: "Aslam Rabbi attending a UX design workshop" },
] as const;
export const heroPhotoDelay = 5000;

/**
 * `caseStudyUrl`: set it when a case study is published — the tile becomes a link and shows
 * "View Case Study" on hover. Leave it out and the hover shows "Coming soon" instead.
 */
export type Project = { src: string; alt: string; caseStudyUrl?: string };

/** Three rows, left → right. Figma only has narrow crops for three tiles, so complete projects fill those spots. */
const P = {
  analytics: { src: "/images/projects/saas-analytics-platform-landing-page-design.jpg", alt: "SaaS analytics platform landing page design shown on a laptop" },
  biotech: { src: "/images/projects/biotech-website-ux-ui-design.jpg", alt: "Biotech website UX/UI design, hero “Engineering the Biological Renaissance”" },
  video: { src: "/images/projects/ai-video-editing-mobile-app-design.jpg", alt: "AI video editing mobile app design with AI emoji and template screens" },
  ev: { src: "/images/projects/ev-charging-map-app-ux-design.jpg", alt: "EV charging map app UX design" },
  scheduling: { src: "/images/projects/scheduling-mobile-app-product-design.jpg", alt: "Scheduling mobile app product design shown on two phones" },
  business: { src: "/images/projects/business-dashboard-saas-product-design.jpg", alt: "Business dashboard SaaS product design on a laptop" },
} satisfies Record<string, Project>;

export const projectRows: Project[][] = [
  [P.analytics, P.biotech, P.video],
  [P.business, P.video, P.ev],
  [P.scheduling, P.business, P.biotech],
];

/** Services accordion — clicking a service shows its own text and image. */
export const services = [
  {
    title: "Product Design Services",
    description: "UX research, UX/UI design and design engineering, with intuitive flows and measurable results.",
    image: "/images/services/product-design-services-aslam-rabbi.webp",
    alt: "Product design services: Aslam Rabbi designing a product at his desk",
  },
  {
    title: "AI Development Services",
    description: "Fast, secure and scalable AI development that turns complex tech into simple experiences.",
    image: "/images/services/ai-development-services.webp",
    alt: "AI development services: an AI assistant connected to AI tools",
  },
  {
    title: "Product Management Services",
    description: "Clear roadmaps, smart priorities and decisions that keep your product moving forward.",
    image: "/images/services/product-management-services.webp",
    alt: "Product management services: a product workflow connecting data analysis and app integrations",
  },
  {
    title: "AI Design Services",
    description: "AI experiences designed to feel human, build trust and make complex tools simple.",
    image: "/images/services/ai-ux-design-services.webp",
    alt: "AI UX design services: a friendly AI robot working on a laptop",
  },
] as const;

/** "My Work Process" cards — brought in one by one as you scroll. */
export const processSteps = [
  { title: "Listen", body: "We start with your users and goals, so every decision is based on real needs.", bg: "#FFEEE8", tilt: -2, rule: "rgba(2,0,8,0.3)" },
  { title: "Understand", body: "I turn UX research and data into clear decisions, so we design the right thing first.", bg: "#F8FFE8", tilt: 2, rule: "rgba(2,0,8,0.5)" },
  { title: "Create", body: "I design and build with AI-powered workflows, making fast, confident decisions at every step.", bg: "#E8FCFF", tilt: -2, rule: "rgba(2,0,8,0.5)" },
  { title: "Scale", body: "We measure what users do, then refine and grow based on real data, not guesswork.", bg: "#F3E8FF", tilt: 2, rule: "#020008" },
] as const;

/** Client logos in the hero strip: grey by default, the full-colour card on hover. */
const client = (key: string, name: string, tone = false) => ({
  name,
  normal: `/images/clients/${key}-logo-grey.png`,
  hover: `/images/clients/${key}-logo.png`,
  tone,
});
export const clients = [
  client("placed", "Placed"),
  client("jkb", "Jordan Kuwait Bank"),
  client("boigor", "Boighor"),
  client("raqamyah", "Raqamyah"),
  client("pep", "PEP Express Transport System", true),
  client("mygp", "MyGP"),
  client("senlink", "SenLink"),
  client("quicklawpro", "Quick Law Pro"),
  client("cello", "Cello"),
  client("momenta", "Momenta"),
];

/** Footer "Ask AI" links — each opens that assistant with a question about Aslam. */
const aiPrompt = encodeURIComponent(
  "Give me a short summary of Aslam Rabbi's work as a product designer and developer (aslamrabbi.com).",
);
export const aiLinks = [
  { name: "Grok", icon: "/icons/ai/grok.png", href: `https://grok.com/?q=${aiPrompt}` },
  { name: "Claude", icon: "/icons/ai/claude.png", href: `https://claude.ai/new?q=${aiPrompt}` },
  { name: "Perplexity", icon: "/icons/ai/perplexity.png", href: `https://www.perplexity.ai/search?q=${aiPrompt}` },
  { name: "Gemini", icon: "/icons/ai/gemini.png", href: "https://gemini.google.com/app" },
  { name: "ChatGPT", icon: "/icons/ai/chatgpt.png", href: `https://chatgpt.com/?q=${aiPrompt}` },
] as const;

/**
 * FAQ — shown in this order; the first one starts open.
 * `notes` are the bold call-to-action lines under an answer; each links to `href`.
 */
export type Faq = { question: string; answer: string; notes?: { text: string; href: string }[] };

export const faqs: Faq[] = [
  {
    question: "What services do you offer?",
    answer:
      "I offer full-stack product services, from design to development. That includes research, UX strategy, UI design, prototyping and design systems, then building it all into fast, scalable websites, web apps and mobile apps using React, Next.js, Webflow and Flutter.",
    notes: [
      { text: "One partner from idea to launch. Let’s talk about your project.", href: site.bookingUrl },
    ],
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "My goal is always measurable impact: more sign-ups, fewer drop-offs and products users actually enjoy. I’ve designed experiences that reach 20M+ users every month, so I design with scale and performance in mind from day one.",
    notes: [
      { text: "Want to see the numbers? Explore my case studies.", href: "#work" },
    ],
  },
  {
    question: "Have you worked in my industry?",
    answer:
      "Over 6+ years and 70+ projects, I’ve worked across fintech, telco, AI, health, real estate, and B2B and B2C SaaS. Even if your industry is new to me, my research-first process gets me up to speed fast.",
    notes: [
      { text: "Tell me about your product and I’ll share relevant work.", href: site.bookingUrl },
    ],
  },
  {
    question: "How does your design and development process work?",
    answer:
      "I start by understanding your users and goals, then map flows, design and prototype. Once the design is approved, I build it, test it and launch it. You’ll see progress every week, with no hand-offs between teams and nothing lost in translation.",
    notes: [
      { text: "Curious how this would look for your project? Let’s map it out.", href: site.bookingUrl },
    ],
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on scope. A designed and developed website usually takes 2–4 weeks, while a full product from design to launch can take 8–16 weeks. After a quick intro call, I’ll give you a clear timeline with milestones.",
    notes: [
      { text: "Have a deadline? Let’s see if we can hit it.", href: site.bookingUrl },
    ],
  },
  {
    question: "How much does a project cost?",
    answer:
      "Every project is different, so I price based on scope and value rather than hours. I offer fixed-price projects as well as monthly retainers for ongoing work. You’ll get a clear quote before anything starts.",
    notes: [
      { text: "Get a free estimate in a 20-minute call.", href: site.bookingUrl },
    ],
  },
  {
    question: "I’m in a different time zone. Will that be a problem?",
    answer:
      "Not at all. I’m based in Dhaka (GMT+6) and work with teams worldwide. I overlap with European and Asian business hours, can schedule calls for US teams, and usually reply within 24 hours.",
    notes: [
      { text: "Let’s find a time that works for you.", href: site.bookingUrl },
    ],
  },
  {
    question: "Do you only design, or can you build it too?",
    answer:
      "Both. I can take your product from first sketch to live launch, or just handle the part you need. If you already have a design in Figma, I can develop it. If you have developers, I deliver clean, developer-ready files and use AI-assisted workflows (Figma & MCP) for a faster handoff.",
    notes: [
      { text: "Design, build or both? Let’s find the right fit.", href: site.bookingUrl },
      { text: "Want a smooth handoff? Let’s talk about your tech stack.", href: site.bookingUrl },
    ],
  },
  {
    question: "Can you improve my existing product instead of starting from scratch?",
    answer:
      "Absolutely. Many of my projects start with a UX audit to find where users struggle and where you’re losing conversions. From there, I prioritize the changes with the biggest impact.",
    notes: [
      { text: "Start with a product audit and find your quick wins.", href: site.bookingUrl },
    ],
  },
  {
    question: "How do we get started?",
    answer:
      "Book a free 20-minute intro call. We’ll talk about your goals, whether you need design, development or both, and you’ll leave with clear next steps, whether or not we work together.",
    notes: [
      { text: "Ready? Grab 20 minutes.", href: site.bookingUrl },
    ],
  },
];

/** Footer contact steps (Figma "Container" 112:1359). Point each link where you want it. */
export const contactSteps = [
  { label: "Get in touch", href: `mailto:${site.email}`, icon: "/icons/step-arrow.svg", iconSize: 14 },
  { label: "Meet us online", href: site.bookingUrl, icon: "/icons/step-calendar.svg", iconSize: 18 },
  {
    label: "Free estimation",
    href: `mailto:${site.email}?subject=Free%20estimation`,
    icon: "/icons/step-estimate.svg",
    iconSize: 18,
  },
] as const;
