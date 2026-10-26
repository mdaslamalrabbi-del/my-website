/**
 * Site content and links in one place.
 * Copy is taken verbatim from the Figma file. Fill in the TODO links when available;
 * any link left empty renders as plain text instead of a dead link.
 */
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

  // TODO: replace with your booking page (e.g. Calendly) — used by "Collaborate", "Book a call", "Grab 20 minutes".
  bookingUrl: "mailto:aslamrabbiuiux@gmail.com?subject=Let%E2%80%99s%20talk%20about%20a%20project",

  nav: [
    { label: "Work", href: "#work" },
    { label: "About Us", href: "#about" },
    // The design has no pricing section yet; points to Services for now.
    { label: "Prices", href: "#services" },
  ],

  // TODO: add your profile URLs.
  social: {
    dribbble: "",
    linkedin: "",
    instagram: "",
  },

  // Showreel: plays in the small Quick intro frame, then grows into the big frame on scroll.
  video: {
    showreel: "/videos/showreel.mp4",
    showreelWebm: "/videos/showreel.webm",
    poster: "/videos/showreel-poster.jpg",
  },
  // 3:4 silent reel in the tilted frame behind "Selected Projects".
  projectsReel: {
    webm: "/videos/projects-reel.webm",
    mp4: "/videos/projects-reel.mp4",
    poster: "/videos/projects-reel-poster.jpg",
  },
} as const;

export const heroTags = [
  { label: "Health", dot: "/icons/dot-health.svg" },
  { label: "AIUX", dot: "/icons/dot-aiux.svg" },
  { label: "B2B&B2C", dot: "/icons/dot-b2b.svg" },
  { label: "Fintech", dot: "/icons/dot-fintech.svg" },
  { label: "Real estate", dot: "/icons/dot-real-estate.svg" },
] as const;

/**
 * `caseStudyUrl`: set it when a case study is published — the tile becomes a link and shows
 * "View Case Study" on hover. Leave it out and the hover shows "Coming soon" instead.
 */
export type Project = { src: string; alt: string; caseStudyUrl?: string };

/** Three rows, left → right, exactly as laid out in Figma. */
export const projectRows: Project[][] = [
  [
    { src: "/images/projects/project-01.jpg", alt: "Analytics platform landing page shown on a laptop" },
    { src: "/images/projects/project-02.jpg", alt: "Biotech website hero, “Engineering the Biological Renaissance”" },
    { src: "/images/projects/project-03.jpg", alt: "Lifestyle website hero with people in conversation" },
  ],
  [
    { src: "/images/projects/project-04.jpg", alt: "Outdoor brand website with a mountain landscape" },
    { src: "/images/projects/project-05.jpg", alt: "Video editing mobile app screens on a yellow background" },
    { src: "/images/projects/project-06.jpg", alt: "EV charging map app screen" },
  ],
  [
    { src: "/images/projects/project-07.jpg", alt: "Scheduling mobile app shown on two phones" },
    { src: "/images/projects/project-08.jpg", alt: "Business platform dashboard on a laptop in a dark scene" },
    { src: "/images/projects/project-09.jpg", alt: "Dark blue website hero" },
  ],
];

export const services = [
  {
    code: "[ S-01 ]",
    title: "UI/UX  Design Services",
    uppercase: true,
    description: "Digital products designed with intuitive flow, structure, and usability in mind.",
  },
  {
    code: "[ S-02 ]",
    title: "App Design Services",
    uppercase: false,
    description: "Digital products designed with intuitive flow, structure, and usability in mind.",
  },
  {
    code: "[ S-03 ]",
    title: "Web Design Services",
    uppercase: false,
    description: "Digital products designed with intuitive flow, structure, and usability in mind.",
  },
  {
    code: "[ S-04 ]",
    title: "Development Services",
    uppercase: false,
    description: "Digital products designed with intuitive flow, structure, and usability in mind.",
  },
] as const;

/** Client logo strip in the footer. Figma currently repeats one sample logo. */
export const clients = Array.from({ length: 8 }, () => ({
  name: "Redpoint",
  src: "/icons/client-redpoint.svg",
}));

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
