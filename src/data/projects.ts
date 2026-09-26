export type ProjectCategory =
  | "Product"
  | "Platform"
  | "Commerce"
  | "Education"
  | "Experiment";

export type ProjectStatus =
  | "Active build"
  | "Production"
  | "Shipped"
  | "Prototype";

export type ProjectComplexity =
  | "L2 · Focused"
  | "L3 · Full-stack"
  | "L4 · Systems"
  | "L5 · Platform";

export type ProjectTone = "lime" | "cyan" | "violet" | "amber" | "rose";

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  tools: string[];
  integrations?: string[];
  highlights?: string[];
  image: string;
  tone?: ProjectTone;
  visualLabel?: string;
  link: string;
  repo?: string;
  featured?: boolean;
  category: ProjectCategory;
  year: string;
  lastActivity?: string;
  status: ProjectStatus;
  complexity: ProjectComplexity;
  role: string;
  outcome?: string;
  context?: string;
}

export const projects: Project[] = [
  {
    id: 20,
    title: "Afyvia",
    description:
      "A multi-tenant pharmacy network that gives pharmacies a digital storefront, services, medicine discovery, prescriptions, billing, verification, campaigns, delivery-ready ordering, and a shared medication library.",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "TanStack Query",
      "NextAuth",
    ],
    tools: ["Vercel", "Cloudflare", "GitHub", "Codex"],
    integrations: ["IntaSend", "M-Pesa Daraja", "Cloudinary/R2", "FCM", "OSM"],
    highlights: [
      "Multi-tenant pharmacy onboarding and verification",
      "Free/premium billing lifecycle with payment webhooks",
      "Shared medicine library, storefronts, prescriptions, campaigns",
    ],
    tone: "lime",
    image: "",
    visualLabel: "PHARMACY NETWORK / 2026",
    link: "https://afyvia.gtss.software",
    repo: "Elvinoacer/pharmacy_template_tier2",
    featured: true,
    category: "Product",
    year: "2026 · Active",
    lastActivity: "Sep 25, 2026",
    status: "Active build",
    complexity: "L5 · Platform",
    role: "Founder · Product architect · Full-stack engineer",
    outcome: "From single-pharmacy software to a connected neighborhood pharmacy network",
    context:
      "The current flagship build: product strategy, billing, tenant isolation, pharmacy workflows, reliability, onboarding and growth are all owned as one system.",
  },
  {
    id: 19,
    title: "JustInTime",
    description:
      "A location-aware services marketplace connecting consumers with providers through jobs, proposals, bookings, chat, wallet flows, team operations, analytics, and provider business tooling.",
    tags: [
      "Next.js 16",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Socket.IO",
      "FCM",
      "NextAuth",
    ],
    tools: ["Vercel", "DigitalOcean", "GitHub", "Cloudinary"],
    integrations: ["M-Pesa Daraja", "OSM", "WebSockets", "2FA"],
    highlights: [
      "Marketplace + provider business OS in one product",
      "Realtime messaging, bookings and operational notifications",
      "Payments, wallet logic, analytics and location-aware discovery",
    ],
    image: "/images/justintime.png",
    tone: "cyan",
    link: "https://justintime.gtss.software",
    repo: "Elvinoacer/JustinTime",
    featured: true,
    category: "Platform",
    year: "Nov 2025 → 2026",
    lastActivity: "May 22, 2026",
    status: "Active build",
    complexity: "L5 · Platform",
    role: "Founder · Full-stack systems engineer",
    outcome: "Marketplace discovery expanded into an operating system for service businesses",
    context:
      "The system combines two-sided marketplace constraints with realtime communication, trust, payments, business operations and high-concurrency UX.",
  },
  {
    id: 18,
    title: "Great Thumbs Software Solutions",
    description:
      "The product studio and operating layer behind a growing set of practical software systems for restaurants, marketplaces, healthcare, education and local businesses.",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "TanStack Query",
    ],
    tools: ["Vercel", "Cloudflare", "GitHub", "DigitalOcean"],
    integrations: ["Cloudinary", "Payments", "Realtime services"],
    highlights: [
      "Product portfolio and company surface",
      "Shared engineering patterns across multiple verticals",
      "Sales, demos and product delivery under one studio",
    ],
    image: "/images/gtss.png",
    tone: "violet",
    link: "https://gtss.vercel.app",
    repo: "Elvinoacer/gtss",
    featured: true,
    category: "Product",
    year: "2025–26",
    lastActivity: "Aug 13, 2026",
    status: "Production",
    complexity: "L4 · Systems",
    role: "Founder · Product engineer",
    outcome: "A studio identity built around shipping working products, not agency mockups",
  },
  {
    id: 17,
    title: "German Virtual School",
    description:
      "A digital academy for German language education from A1 to C2, combining live classes, assignments, role-based operations, billing, reporting and realtime communication.",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Socket.IO",
      "Firebase",
    ],
    tools: ["Vercel", "GitHub", "Cloudinary"],
    integrations: ["Jitsi", "IntaSend", "Realtime sockets"],
    highlights: [
      "Student, teacher and admin workflows",
      "Live-class infrastructure and academic operations",
      "Payments and GDPR-aware reporting",
    ],
    image: "/images/gvs.png",
    tone: "cyan",
    link: "https://germanvirtualschool.com",
    repo: "Elvinoacer/German-Virtual-School",
    featured: true,
    category: "Education",
    year: "Feb 2026",
    lastActivity: "May 8, 2026",
    status: "Production",
    complexity: "L5 · Platform",
    role: "Full-stack engineer · Product implementation",
    outcome: "Full learning operations platform running beyond a marketing site",
  },
  {
    id: 16,
    title: "Concept Builders",
    description:
      "A construction company platform spanning brand presentation, project portfolios, design galleries, client workflows, service inquiries and operational surfaces.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Framer Motion"],
    tools: ["Vercel", "GitHub", "Cloudinary"],
    integrations: ["Cloud media", "Realtime services"],
    highlights: [
      "Customer-facing brand and project discovery",
      "Client and service workflow surfaces",
      "Production deployment, testing and iteration",
    ],
    image: "/images/concept-builders.png",
    tone: "amber",
    link: "https://conceptbuilders.co.ke",
    repo: "Elvinoacer/concept-builders",
    featured: true,
    category: "Platform",
    year: "Dec 2025 → 2026",
    lastActivity: "Aug 14, 2026",
    status: "Production",
    complexity: "L4 · Systems",
    role: "Full-stack engineer",
    outcome: "A construction brand site evolved into a richer operational web system",
  },
  {
    id: 0,
    title: "Church Management System",
    description:
      "A role-heavy church operations platform for members, events, payments, administration and community workflows across a broad internal permission model.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Shadcn"],
    tools: ["Vercel", "GitHub"],
    integrations: ["IntaSend", "Role-based access"],
    highlights: [
      "Large role and permission surface",
      "Member, event and finance workflows",
      "Operational administration beyond the public website",
    ],
    image: "/images/church-platform.png",
    tone: "violet",
    link: "https://zion-hill.vercel.app/",
    repo: "Elvinoacer/church-web-v2",
    featured: true,
    category: "Platform",
    year: "Aug 2025",
    lastActivity: "Nov 3, 2025",
    status: "Shipped",
    complexity: "L5 · Platform",
    role: "Full-stack engineer",
    outcome: "Unified day-to-day church operations and community tooling",
  },
  {
    id: 15,
    title: "ClassMind File Storage",
    description:
      "Secure cloud file storage for education with institutional workflows, realtime updates, analytics and payment-aware access.",
    tags: ["Next.js 15", "Prisma", "AWS S3", "Socket.IO", "Kinde Auth"],
    tools: ["AWS", "Vercel", "GitHub"],
    integrations: ["S3", "IntaSend", "Realtime sockets"],
    highlights: ["Cloud storage lifecycle", "Institutional permissions", "Realtime activity"],
    image: "/images/student-file-storage.png",
    tone: "cyan",
    link: "https://classmind-rouge.vercel.app",
    repo: "Elvinoacer/ClassMind",
    category: "Education",
    year: "2025",
    lastActivity: "Apr 15, 2025",
    status: "Shipped",
    complexity: "L4 · Systems",
    role: "Full-stack engineer",
  },
  {
    id: 7,
    title: "Realtime Messenger",
    description:
      "A messaging system with realtime delivery, file sharing, client-side cache management and separate server/socket concerns.",
    tags: ["Next.js 15", "React 19", "Socket.IO", "TanStack Query", "Zustand"],
    tools: ["Vercel", "GitHub"],
    integrations: ["UploadThing", "WebSockets"],
    highlights: ["Realtime delivery", "Media sharing", "Client/server separation"],
    image: "/images/telegram1.png",
    tone: "cyan",
    link: "https://telegram-clone-client-xi.vercel.app",
    repo: "Elvinoacer/Telegram-clone",
    category: "Platform",
    year: "2025",
    lastActivity: "Mar 9, 2025",
    status: "Shipped",
    complexity: "L4 · Systems",
    role: "Full-stack engineer",
  },
  {
    id: 1,
    title: "Commerseley",
    description:
      "A full-featured online store with authentication, payment integration and inventory-minded commerce flows for local retail.",
    tags: ["Next.js", "PostgreSQL", "NextAuth", "Tailwind CSS"],
    tools: ["Vercel", "GitHub"],
    integrations: ["IntaSend", "Payments"],
    highlights: ["Catalog + checkout", "Authentication", "Local payment flow"],
    image: "/images/commerseley.jpg",
    tone: "rose",
    link: "https://commerseley.vercel.app",
    category: "Commerce",
    year: "2025",
    status: "Shipped",
    complexity: "L3 · Full-stack",
    role: "Full-stack engineer",
  },
  {
    id: 2,
    title: "Inventory Management",
    description:
      "A stock and asset management application focused on operational visibility, day-to-day accuracy and fast admin workflows.",
    tags: ["Next.js", "MUI", "Redux Toolkit", "Axios", "Tailwind CSS"],
    tools: ["Vercel", "GitHub"],
    highlights: ["Inventory CRUD", "Admin workflows", "State-heavy UI"],
    image: "/images/inventory.png",
    tone: "amber",
    link: "https://inventory-system-iota-seven.vercel.app",
    category: "Platform",
    year: "2025",
    status: "Shipped",
    complexity: "L3 · Full-stack",
    role: "Frontend + application engineer",
  },
  {
    id: 3,
    title: "Lawyer Portfolio",
    description:
      "A calm, responsive portfolio for a legal professional with focused typography, case presentation and conversion-oriented contact flow.",
    tags: ["Next.js", "Framer Motion", "Radix UI", "Tailwind CSS"],
    tools: ["Vercel", "GitHub"],
    highlights: ["Responsive editorial UI", "Motion", "Contact conversion"],
    image: "/images/portfolio.png",
    tone: "violet",
    link: "https://elvin-juma-johnathan-carter.vercel.app",
    category: "Experiment",
    year: "2025",
    status: "Shipped",
    complexity: "L2 · Focused",
    role: "Frontend engineer",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A full-stack publishing application with authentication, rich media and a server-side ingestion workflow for external content.",
    tags: ["Next.js", "Prisma", "NextAuth", "Cloudinary", "Tailwind CSS"],
    tools: ["Vercel", "GitHub"],
    integrations: ["Cloudinary", "Content scraping"],
    highlights: ["Auth", "Content ingestion", "Media pipeline"],
    image: "/images/blogapp.png",
    tone: "rose",
    link: "https://blog-app-prototype.vercel.app",
    category: "Experiment",
    year: "2025",
    status: "Prototype",
    complexity: "L3 · Full-stack",
    role: "Full-stack engineer",
  },
  {
    id: 5,
    title: "iPhones Marketing Site",
    description:
      "An immersive product-marketing experiment using 3D scenes and cinematic motion to explore high-end interaction design.",
    tags: ["Vite", "React", "Three.js", "GSAP", "Sentry"],
    tools: ["Vercel", "GitHub"],
    integrations: ["3D assets", "Sentry"],
    highlights: ["Three.js scenes", "Scroll choreography", "Cinematic product UI"],
    image: "/images/iphones.png",
    tone: "cyan",
    link: "https://iphones-marketing.vercel.app",
    repo: "Elvinoacer/iphones-market",
    category: "Experiment",
    year: "2024",
    lastActivity: "Mar 15, 2024",
    status: "Shipped",
    complexity: "L3 · Full-stack",
    role: "Creative frontend engineer",
  },
  {
    id: 6,
    title: "Streamlite",
    description:
      "A short-form video prototype exploring feed mechanics, media-first interaction and backend-connected social UX.",
    tags: ["Next.js", "Appwrite", "Zustand", "TypeScript"],
    tools: ["Vercel", "GitHub"],
    integrations: ["Appwrite"],
    highlights: ["Video feed", "Backend-connected social UI", "State management"],
    image: "/images/tiktok-clone.png",
    tone: "rose",
    link: "https://streamlite-feasible.vercel.app",
    category: "Experiment",
    year: "2025",
    status: "Prototype",
    complexity: "L3 · Full-stack",
    role: "Full-stack engineer",
  },
  {
    id: 8,
    title: "Sleek Admin Dashboard",
    description:
      "An operational admin surface with analytics, user management and data visualization for back-office teams.",
    tags: ["Next.js 14", "NextAuth", "MongoDB", "Recharts"],
    tools: ["Vercel", "GitHub"],
    highlights: ["Analytics", "User management", "Admin UX"],
    image: "/images/sleek-dashboard.png",
    tone: "lime",
    link: "https://sleek-dashoard.vercel.app",
    category: "Platform",
    year: "2025",
    status: "Shipped",
    complexity: "L3 · Full-stack",
    role: "Full-stack engineer",
  },
  {
    id: 9,
    title: "AI Chat Interface",
    description:
      "A ChatGPT-inspired conversation product with authentication, history and model-backed responses.",
    tags: ["Next.js 15", "OpenAI", "Firebase", "NextAuth", "SWR"],
    tools: ["Vercel", "GitHub"],
    integrations: ["OpenAI", "Firebase"],
    highlights: ["Conversation history", "Model integration", "Auth"],
    image: "/images/gpt-chat-clone.png",
    tone: "lime",
    link: "https://mohaydragpt.vercel.app",
    category: "Experiment",
    year: "2025",
    status: "Prototype",
    complexity: "L3 · Full-stack",
    role: "AI application engineer",
  },
  {
    id: 10,
    title: "3D Portfolio",
    description:
      "An interactive spatial portfolio exploring WebGL, scene composition and motion-heavy personal storytelling.",
    tags: ["React Three Fiber", "Three.js", "Framer Motion", "Vite"],
    tools: ["Vercel", "GitHub"],
    highlights: ["3D scene composition", "Motion", "Interactive storytelling"],
    image: "/images/portfolio-three.png",
    tone: "violet",
    link: "https://elvin-profile-2.vercel.app",
    category: "Experiment",
    year: "2024",
    status: "Shipped",
    complexity: "L2 · Focused",
    role: "Creative frontend engineer",
  },
  {
    id: 11,
    title: "Multi-Task AI SaaS",
    description:
      "A SaaS experiment combining multiple AI tools for image generation, text workflows and authenticated usage.",
    tags: ["Next.js 15", "Clerk", "OpenAI", "Replicate", "Radix UI"],
    tools: ["Vercel", "GitHub"],
    integrations: ["OpenAI", "Replicate", "Clerk"],
    highlights: ["Multiple model workflows", "Auth-gated tools", "SaaS UI"],
    image: "/images/multitask-ai.png",
    tone: "lime",
    link: "https://saas-ai-kappa-mocha.vercel.app",
    category: "Product",
    year: "2025",
    status: "Prototype",
    complexity: "L3 · Full-stack",
    role: "AI product engineer",
  },
  {
    id: 12,
    title: "E-commerce Client Pages",
    description:
      "Conversion-oriented product pages with responsive layouts, dark mode, motion and component-system polish.",
    tags: ["Next.js 15", "Framer Motion", "Radix UI", "Next Themes"],
    tools: ["Vercel", "GitHub"],
    highlights: ["Product detail UX", "Theme system", "Motion"],
    image: "/images/static-ecommerce-1.png",
    tone: "amber",
    link: "https://client-pages.vercel.app",
    category: "Commerce",
    year: "2025",
    status: "Shipped",
    complexity: "L2 · Focused",
    role: "Frontend engineer",
  },
  {
    id: 13,
    title: "QuickCart Store",
    description:
      "A streamlined storefront with authentication, cloud media and background workflow integrations.",
    tags: ["Next.js 15", "Clerk", "Inngest", "MongoDB", "Cloudinary"],
    tools: ["Vercel", "GitHub"],
    integrations: ["Clerk", "Inngest", "Cloudinary"],
    highlights: ["Commerce UX", "Background workflows", "Media management"],
    image: "/images/quickcart.png",
    tone: "amber",
    link: "https://quick-cart-store.vercel.app",
    category: "Commerce",
    year: "2025",
    status: "Shipped",
    complexity: "L3 · Full-stack",
    role: "Full-stack engineer",
  },
  {
    id: 14,
    title: "Student Portfolio Template",
    description:
      "A customizable portfolio system for students, focused on modern responsive components, themes and motion.",
    tags: ["Next.js 15", "Tailwind v4", "Framer Motion", "Radix UI"],
    tools: ["Vercel", "GitHub"],
    highlights: ["Reusable component system", "Themes", "Responsive UX"],
    image: "/images/student-portfolio.png",
    tone: "violet",
    link: "https://ogam-bathlomew.vercel.app",
    category: "Experiment",
    year: "2025",
    status: "Shipped",
    complexity: "L2 · Focused",
    role: "Frontend engineer",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const complexityOrder: ProjectComplexity[] = [
  "L2 · Focused",
  "L3 · Full-stack",
  "L4 · Systems",
  "L5 · Platform",
];
