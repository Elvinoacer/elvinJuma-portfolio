/** Central site content for Elvin's portfolio */

export const site = {
  name: "Elvin Omondi Juma",
  shortName: "Elvin",
  title: "Founding Engineer · Product Systems Builder",
  tagline:
    "I architect and ship production software across healthcare, marketplaces, education, payments and realtime operations.",
  location: "Kenya",
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
  availability: "Open to selected product, freelance and full-time engineering work",
  yearsShipping: "2+",
  focus: [
    "Multi-tenant products",
    "Next.js 16",
    "TypeScript",
    "PostgreSQL",
    "Realtime systems",
    "Payments",
  ],
} as const;

export const navItems = [
  { name: "Work", href: "/#work" },
  { name: "Archive", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
] as const;

export const experience = [
  {
    role: "Founder & Product Engineer",
    org: "Great Thumbs Software Solutions",
    period: "2025 — Present",
    location: "Kenya",
    points: [
      "Build and operate products across pharmacy, marketplace, restaurant, healthcare and local-business workflows.",
      "Own architecture across Next.js 16, React 19, PostgreSQL, Prisma, authentication, payments, realtime systems and deployment.",
      "Lead products from field discovery and sales conversations through implementation, reliability work and production iteration.",
    ],
  },
  {
    role: "Full-Stack Engineer",
    org: "Independent / Client systems",
    period: "2024 — Present",
    location: "Remote",
    points: [
      "Shipped education, construction, church operations, commerce, messaging and AI-assisted application systems.",
      "Integrated M-Pesa/IntaSend, Jitsi, Socket.IO, cloud media, notifications and role-heavy operational workflows.",
      "Moved from frontend experimentation into full product and systems ownership as project complexity increased.",
    ],
  },
  {
    role: "Computer Science",
    org: "Moi University",
    period: "Ongoing",
    location: "Kenya",
    points: [
      "Formal computer science study paired with continuous production shipping and entrepreneurship.",
      "Apply software engineering directly to problems observed in local businesses and service environments.",
    ],
  },
] as const;

export const principles = [
  {
    title: "Systems over screenshots",
    body: "The interface is the visible edge. Reliability, data, payments, permissions and failure handling make the product real.",
  },
  {
    title: "Ship into reality",
    body: "I prefer feedback from actual operators and users over polishing assumptions in isolation.",
  },
  {
    title: "Use leverage carefully",
    body: "AI accelerates implementation and research, but runtime evidence, source control and product judgment stay in the loop.",
  },
] as const;

export const productsShipped = [
  {
    name: "Afyvia",
    role: "Connected pharmacy network",
    blurb: "Multi-tenant pharmacy storefronts, services, medicine operations, billing and verification.",
    href: "https://afyvia.gtss.software",
  },
  {
    name: "JustInTime",
    role: "Services marketplace + business OS",
    blurb: "Discovery, proposals, bookings, realtime communication, payments and provider operations.",
    href: "https://justintime.gtss.software",
  },
  {
    name: "German Virtual School",
    role: "Education operations platform",
    blurb: "Live classes, billing, assignments, reporting and role-based learning workflows.",
    href: "https://germanvirtualschool.com",
  },
  {
    name: "Concept Builders",
    role: "Construction web system",
    blurb: "Project discovery, design galleries, inquiries and client-facing operational flows.",
    href: "https://conceptbuilders.co.ke",
  },
] as const;
