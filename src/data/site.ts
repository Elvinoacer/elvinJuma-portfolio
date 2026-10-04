/** Central content drawn from the résumé and project history. */

export const site = {
  name: "Elvin Omondi Juma",
  shortName: "Elvin",
  title: "Full-Stack Software Engineer",
  tagline:
    "I build business software from workflow discovery through deployment — multi-tenant SaaS, real-time platforms, and offline systems.",
  location: "Kenya",
  email: "omondielvin@gmail.com",
  phone: "+254 790 670 542",
  phoneHref: "tel:+254790670542",
  whatsapp: "https://wa.me/254790670542",
  github: "https://github.com/Elvinoacer",
  linkedin: "https://www.linkedin.com/in/elvin-juma-680747281/",
  twitter: "https://x.com/Elvinoace",
  resume: "/Elvin_Omondi_Juma_Resume.pdf",
  company: "Great Thumbs Software Solutions",
  companyUrl: "https://gtss.vercel.app",
  availability: "Open to select freelance & full-time roles",
  yearsShipping: "2+",
  focus: ["Next.js", "TypeScript", "PostgreSQL", "Multi-tenant SaaS", "Offline & realtime systems"],
} as const;

export const navItems = [
  { name: "Work", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
] as const;

export const experience = [
  {
    role: "Founder and Product Engineer",
    org: "Great Thumbs Software Solutions",
    period: "2025 — Present",
    location: "Kenya",
    points: [
      "Own product development across healthcare, hospitality, and local commerce: requirements, data models, APIs, interfaces, payments, and deployment.",
      "Translate pharmacy and SME field feedback into clearer onboarding, administration, and payment workflows.",
      "Build multi-tenant web platforms and offline systems, then iterate on reliability and usability.",
    ],
  },
  {
    role: "Client Onboarding and Banking Operations",
    org: "Equity Bank Kenya",
    period: "Jan — Dec 2023",
    location: "Kenya",
    points: [
      "Opened client accounts, issued Equitel SIM cards, and printed ATM cards.",
      "Learned KYC requirements and the importance of accurate client records.",
    ],
  },
  {
    role: "Degree in Computer Science",
    org: "Moi University",
    period: "Expected graduation 2027",
    location: "Kenya",
    points: [
      "Study Computer Science while applying the work to business software and product development.",
      "Team participant in the KenyaRe-UoN Hackathon 2024, exploring AI for insurance.",
    ],
  },
] as const;

export const principles = [
  {
    title: "Start with the workflow",
    body: "Understand how people actually work before choosing the interface or architecture. Field feedback shapes the next iteration.",
  },
  {
    title: "Systems over screens",
    body: "A useful interface needs a dependable foundation: clear data models, access boundaries, payment handling, and sensible failure modes.",
  },
  {
    title: "Respect the user",
    body: "Make the next step clear. Good software fits the user’s context, whether that is a browser, a phone, or a local network without internet.",
  },
] as const;

/** Selected systems; URLs supplied by the résumé and project notes. */
export const productsShipped = [
  {
    name: "Afyvia",
    role: "Multi-tenant pharmacy platform",
    blurb: "Pharmacy storefronts, prescription requests, staff CRM, tenant isolation, and subscription billing.",
    href: "https://afyvia.gtss.software",
  },
  {
    name: "Restaurant Manager",
    role: "Offline operations",
    blurb: "Desktop software, guest ordering, kitchen tickets, and staff workflows on a local network.",
    href: "https://github.com/Elvinoacer/hotel-intranet",
  },
  {
    name: "JustInTime",
    role: "Local services marketplace",
    blurb: "Provider discovery, proposals, bookings, messaging, M-Pesa payments, and wallet workflows.",
    href: "https://justintime.gtss.software",
  },
  {
    name: "Concept Builders",
    role: "Architecture marketplace",
    blurb: "Design discovery, custom requests, documents, payments, and project milestones.",
    href: "https://github.com/Elvinoacer/concept-builders",
  },
  {
    name: "German Virtual School",
    role: "Education operations",
    blurb: "Courses, live classes, assignments, progress, messaging, and fee workflows.",
    href: "https://github.com/Elvinoacer/German-Virtual-School",
  },
] as const;
