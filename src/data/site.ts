/** Central site content — honest, employer-grade copy */

export const site = {
  name: "Elvin Omondi Juma",
  shortName: "Elvin",
  title: "Founding Engineer · Full-Stack Developer",
  tagline:
    "I design and ship production software for real businesses — from education platforms to commerce and operations systems.",
  location: "Eldoret, Kenya",
  email: "omondielvin@gmail.com",
  phone: "+254 790 670 542",
  phoneHref: "tel:+254790670542",
  whatsapp: "https://wa.me/254790670542",
  github: "https://github.com/Elvinoacer",
  linkedin: "https://www.linkedin.com/in/elvin-omondi-juma",
  twitter: "https://x.com/Elvinoace",
  resume: "/images/Elvin-Resume-template.pdf",
  company: "Great Thumbs Software Solutions",
  companyUrl: "https://gtss.vercel.app",
  availability: "Open to select freelance & full-time roles",
  yearsShipping: "2+",
  focus: ["Next.js", "TypeScript", "PostgreSQL", "Realtime systems", "Product engineering"],
} as const;

export const navItems = [
  { name: "Work", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
] as const;

export const experience = [
  {
    role: "Founding Engineer",
    org: "Great Thumbs Software Solutions",
    period: "2025 — Present",
    location: "Kenya",
    points: [
      "Architect and ship multi-product systems for hotels, marketplaces, and local businesses.",
      "Own full stack: Next.js 16, React 19, PostgreSQL, Prisma, auth, payments, and realtime.",
      "Lead product decisions from problem discovery through production launch.",
    ],
  },
  {
    role: "Full-Stack Developer",
    org: "Independent / Client work",
    period: "2024 — Present",
    location: "Remote",
    points: [
      "Delivered production platforms: German Virtual School, Concept Builders, church ops, e-commerce.",
      "Integrated payments (IntaSend/M-Pesa), live video (Jitsi), sockets, and cloud media pipelines.",
      "Built systems used by real users — students, staff, vendors — not demos.",
    ],
  },
  {
    role: "Computer Science",
    org: "Moi University",
    period: "Ongoing",
    location: "Eldoret",
    points: [
      "Formal CS foundation paired with aggressive shipping practice.",
      "Equity Leadership Program alumnus — leadership + community impact.",
    ],
  },
] as const;

export const principles = [
  {
    title: "Ship, then refine",
    body: "Production is the best teacher. I move fast without leaving messes that compound.",
  },
  {
    title: "Systems over screens",
    body: "UI is the surface. I care about data models, auth, payments, and failure modes.",
  },
  {
    title: "Respect the user",
    body: "Clarity, speed, and accessibility beat clever animations every time.",
  },
] as const;

/** Real products / clients — no fabricated social proof */
export const productsShipped = [
  {
    name: "German Virtual School",
    role: "Full-stack platform",
    blurb: "Live classes, billing, assignments, GDPR reporting — A1–C2 German education.",
    href: "https://germanvirtualschool.com",
  },
  {
    name: "Concept Builders",
    role: "Construction web system",
    blurb: "Project portfolios, design galleries, and client inquiry workflows.",
    href: "https://conceptbuilders.co.ke",
  },
  {
    name: "GTSS",
    role: "Parent product company",
    blurb: "Hotel ordering, marketplace, and commerce products for local operators.",
    href: "https://gtss.vercel.app",
  },
  {
    name: "Zion Hill Platform",
    role: "Church operations",
    blurb: "Community engagement, payments, and day-to-day church management.",
    href: "https://zion-hill.vercel.app/",
  },
] as const;
