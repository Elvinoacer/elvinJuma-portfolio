export const projectCategories = [
  "Product",
  "Platform",
  "Systems",
  "Education",
  "Mobile",
  "AI",
  "Commerce",
  "Commercial",
  "Experiment",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageHasBrowserChrome?: boolean;
  featuredTitle?: string;
  featuredSummary?: string;
  imageAlt: string;
  imageCaption?: string;
  imagePlaceholder: boolean;
  link: string;
  github: string;
  liveUrl?: string;
  featured?: boolean;
  category: ProjectCategory;
  year?: string;
  outcome?: string;
  headline: string;
  scene:
    | "healthcare"
    | "marketplace"
    | "desktop"
    | "school"
    | "architecture"
    | "standard";
  highlights: string[];
  challenge: string;
  architecture: string;
  role?: string;
  repositories?: string[];
  repoSlug?: string;
  domain?: string;
  scopeLabel?: string;
  /** Repository creation → latest recorded push, in Africa/Nairobi; not a launch date. */
  period?: string;
  status?: string;
  /** Source-code scope measurements, not usage, impact, or performance figures. */
  metrics?: { label: string; value: string }[];
  story?: { customer: string; operations: string; engineering: string };
}

// Place project screenshots in public/images/projects/ and reference them as
// /images/projects/<project-slug>.<extension>.
// Repository names preserve the spelling and case of the supplied project notes.
export const projects: Project[] = [
  {
    id: 20,
    title: "Sphere Pharmacy",
    description:
      "A dedicated pharmacy application connecting medicine discovery, prescription review, orders, service bookings, delivery dispatch, loyalty, and staff administration.",
    tags: [
      "Next.js 16",
      "Prisma / PostgreSQL",
      "Prescription workflows",
      "M-Pesa / IntaSend",
      "Notifications",
    ],
    featured: true,
    category: "Product",
    domain: "Healthcare & pharmacy",
    scopeLabel: "Flagship system",
    period: "1–5 Sep 2026",
    year: "2026",
    status: "Integration & hardening · not production-ready",
    outcome: "Dedicated pharmacy customer and operations workflows",
    headline: "Beyond the medicine card.",
    scene: "healthcare",
    role: "Full-stack product engineering · pharmacy operations",
    metrics: [
      { label: "schema models", value: "36" },
      { label: "API route files", value: "75" },
    ],
    story: {
      customer:
        "A customer needs more than a medicine listing: a way to request a prescription review, confirm availability, book a service, and choose collection or delivery.",
      operations:
        "Pharmacists, staff, and riders have different responsibilities. The application connects review actions, order queues, appointment records, fulfilment status, and customer updates.",
      engineering:
        "Access-controlled prescription records, separate payment attempts, payable-order checks, and queued notifications connect the workflow. Reconciliation, refunds, settlement, and deployment hardening remain release work.",
    },
    highlights: [
      "Medicine discovery, prescription access and pharmacist review, and service bookings",
      "Customer and guest orders, pickup/delivery, staff queues, and rider assignment",
      "M-Pesa callbacks, IntaSend checkout, payment-state checks, and queued notifications",
    ],
    challenge:
      "Translate a dedicated pharmacy's workflow into one connected application, from the first customer request through staff review, payment state, appointments, and fulfilment.",
    architecture:
      "Next.js 16, React, TypeScript, Tailwind CSS, Prisma, and PostgreSQL connect customer, administrator, pharmacist, staff, and rider journeys. The reviewed payment/notification audit records remaining reconciliation, refund, settlement, and deployment-configuration work; live processing and POS synchronization are not established.",
    repositories: ["sphere_pharmacy"],
    repoSlug: "sphere_pharmacy",
    image: "/images/projects/sphere_pharmacy.png",
    imageAlt:
      "Sphere Pharmacy abstract workflow cover connecting discovery, pharmacist review, and fulfilment; screenshot pending",
    imageCaption: "Abstract workflow cover · screenshot pending",
    imagePlaceholder: true,
    imageWidth: 1366,
    imageHeight: 768,
    github: "https://github.com/Elvinoacer/sphere_pharmacy",
    link: "https://github.com/Elvinoacer/sphere_pharmacy",
    featuredTitle: "A pharmacy’s whole journey.",
    featuredSummary:
      "Medicine discovery is the beginning. Sphere connects customer requests with pharmacist review, fulfilment, appointments, and the work behind the counter.",
  },
  {
    id: 1,
    title: "Afyvia",
    description:
      "A multi-tenant pharmacy network connecting CRM, prescriptions, refills, medication inventory, commerce, and subscription billing.",
    tags: [
      "Multi-tenancy",
      "Pharmacy CRM",
      "M-Pesa",
      "Subscriptions",
      "Integrations",
    ],
    featured: true,
    category: "Product",
    domain: "Healthcare & pharmacy",
    scopeLabel: "Flagship platform",
    period: "2 Aug–29 Sep 2026",
    repoSlug: "pharmacy_template_tier2",
    metrics: [
      { label: "schema models", value: "138" },
      { label: "API route files", value: "122" },
    ],
    story: {
      customer:
        "A customer needs to find a nearby pharmacy, discover medicines, send a prescription request, or book a service through a recognizable storefront.",
      operations:
        "Independent pharmacies need their own staff access, inventory, customer relationships, and commercial settings while sharing onboarding and platform administration.",
      engineering:
        "Pharmacy-scoped tenancy connects shared Next.js infrastructure with Prisma and Neon PostgreSQL. Subscription, invoice, entitlement, job, and audit models capture the network's operational breadth.",
    },
    year: "2026",
    outcome: "Multi-tenant pharmacy and care platform",
    headline: "Care, connected.",
    scene: "healthcare",
    role: "Product engineering · healthcare SaaS",
    liveUrl: "https://afyvia.gtss.software",
    highlights: [
      "Tenant isolation, role-based access, verification, and branch workflows",
      "Prescription and refill journeys linked to inventory, orders, and loyalty",
      "Subscription billing, M-Pesa callbacks, integrations, and regression coverage",
    ],
    challenge:
      "Bring pharmacy operations, customer relationships, and digital care into one product while preserving ownership and access boundaries across tenants.",
    architecture:
      "A multi-tenant domain model spanning pharmacy CRM, branches, medication inventory, prescriptions, care services, and commerce, with billing, API keys, webhooks, scheduled jobs, MFA, and audit logs.",
    repositories: ["pharmacy_template_tier2", "pharmarcy_template"],
    image: "/images/projects/afyvia.webp",
    imageAlt:
      "Afyvia pharmacy network homepage with medicine search and patient care imagery",
    imagePlaceholder: false,
    github: "https://github.com/Elvinoacer/pharmacy_template_tier2",
    link: "https://github.com/Elvinoacer/pharmacy_template_tier2",
    imageWidth: 1366,
    imageHeight: 768,
    featuredTitle: "Pharmacy care, connected.",
    featuredSummary:
      "A connected pharmacy experience, backed by tenant isolation, prescription workflows, inventory, and M-Pesa billing.",
  },
  {
    id: 2,
    title: "JustInTime",
    description:
      "A local-services marketplace and business operating system for providers, customers, and teams—from proposals and bookings to payments and delivery.",
    tags: [
      "Marketplace",
      "Realtime",
      "M-Pesa",
      "Wallets",
      "Business workflows",
    ],
    featured: true,
    category: "Platform",
    domain: "Services & marketplace",
    scopeLabel: "Flagship platform",
    period: "25 Nov 2025–15 Aug 2026",
    repoSlug: "JustinTime",
    metrics: [
      { label: "schema models", value: "89" },
      { label: "API route files", value: "145" },
    ],
    story: {
      customer:
        "Someone looking for a local professional needs to discover providers, compare their work, describe a job, and carry the conversation into a booking.",
      operations:
        "Providers need more than a listing. Proposals, schedules, messages, payment records, and team responsibilities follow the work after discovery.",
      engineering:
        "A Next.js and Prisma/PostgreSQL application joins marketplace, provider, and team domains with a separate Socket.IO service for real-time communication.",
    },
    year: "2025–26",
    outcome: "Marketplace and service-business operations",
    headline: "Work, connected.",
    scene: "marketplace",
    role: "Product engineering · marketplace systems",
    liveUrl: "https://justintime.gtss.software",
    highlights: [
      "Jobs, providers, proposals, bookings, messaging, and calls",
      "M-Pesa, wallets, invoices, reconciliation, and lifecycle records",
      "Teams, payroll, expenses, disputes, trust, and ownership checks",
    ],
    challenge:
      "Connect service discovery with the operational work that follows a booking: communication, payment, delivery, disputes, and team administration.",
    architecture:
      "A marketplace application and companion socket service, with domain workflows for service bookings, provider identity, finance, customer trust, team operations, and vertical-specific projects.",
    repositories: ["JustinTime", "jit-socket"],
    image: "/images/projects/justintime.webp",
    imageAlt:
      "JustInTime homepage with professional service booking and local demand previews",
    imagePlaceholder: false,
    github: "https://github.com/Elvinoacer/JustinTime",
    link: "https://github.com/Elvinoacer/JustinTime",
    imageWidth: 1366,
    imageHeight: 768,
    featuredTitle: "From discovery to delivery.",
    featuredSummary:
      "A services marketplace that connects finding a professional with bookings, messaging, payments, and day-to-day business operations.",
  },
  {
    id: 3,
    title: "Offline Restaurant / Hotel Manager",
    description:
      "A local-first hospitality system combining guest ordering, kitchen tickets, tables, and staff operations with a desktop app and captive Wi-Fi network.",
    tags: [
      "Electron",
      "Node.js / Express",
      "SQLite / Prisma",
      "Socket.IO",
      "Linux networking",
    ],
    featured: true,
    category: "Systems",
    domain: "Hospitality",
    scopeLabel: "Desktop & local-network system",
    period: "15 Dec 2025–25 Apr 2026",
    repoSlug: "hotel-intranet",
    metrics: [{ label: "schema models", value: "30" }],
    story: {
      customer:
        "A guest needs to place an order and communicate with staff even when the venue's internet connection is unreliable.",
      operations:
        "Kitchen tickets, tables, customers, staff, and payment records need to stay connected inside the venue rather than depending on every action reaching the cloud.",
      engineering:
        "Electron packaging, a local Express server, SQLite persistence, and Socket.IO work alongside Linux captive-portal scripts. The architecture spans the application, desktop runtime, and local network.",
    },
    year: "2025–26",
    outcome: "Local-first hospitality operations",
    headline: "Local by design",
    scene: "desktop",
    role: "Systems engineering · desktop and local networking",
    highlights: [
      "Guest ordering, kitchen tickets, tables, staff, and Daraja integration",
      "Local Express server, SQLite persistence, and realtime Socket.IO events",
      "Captive Wi-Fi with hostapd, dnsmasq, and iptables; desktop packaging",
    ],
    challenge:
      "Keep restaurant workflows available on a local network when an internet connection is unreliable, while supporting guests, kitchen staff, and administrators.",
    architecture:
      "Electron wraps a local Node/Express server with SQLite/Prisma and Socket.IO. Linux hotspot configuration uses hostapd, dnsmasq, and iptables, alongside Linux and Windows installer packaging.",
    repositories: ["hotel-intranet", "hospitality"],
    image: "/images/projects/offline-hotel-manager.webp",
    imageAlt:
      "Restaurant Manager admin dashboard with order queues, kitchen workflows, and staff tools",
    imagePlaceholder: false,
    github: "https://github.com/Elvinoacer/hotel-intranet",
    link: "https://github.com/Elvinoacer/hotel-intranet",
    imageWidth: 1355,
    imageHeight: 667,
    featuredTitle: "Operations, even offline.",
    featuredSummary:
      "Guest ordering, kitchen tickets, and staff tools on a local network—built to keep working when the internet does not.",
    imageHasBrowserChrome: true,
  },
  {
    id: 4,
    title: "Concept Builders",
    featured: true,
    domain: "Architecture & construction",
    scopeLabel: "Flagship platform",
    period: "21 Sep 2025–29 Sep 2026",
    repoSlug: "concept-builders",
    metrics: [
      { label: "schema models", value: "46" },
      { label: "API route files", value: "181" },
    ],
    story: {
      customer:
        "A client starts by exploring architectural designs, then needs a way to ask questions, request a custom design, and understand what delivery involves.",
      operations:
        "The initial inquiry becomes a project with requirements, documents, milestones, costs, invoices, feedback, and ongoing communication.",
      engineering:
        "A shared project-delivery domain connects public discovery with client and administrative workspaces. A separate Socket.IO service supports communication across the lifecycle.",
    },
    liveUrl: "https://conceptbuilders.co.ke",
    description:
      "An architecture and design marketplace that carries customers from design discovery and inquiries through orders, documents, payments, and project milestones.",
    tags: [
      "Design marketplace",
      "Project workflows",
      "Documents",
      "Payments",
      "Realtime",
    ],
    category: "Platform",
    year: "2025–26",
    outcome: "Design commerce and project management",
    headline: "Designed to build",
    scene: "architecture",
    highlights: [
      "Design catalogs, collections, inquiries, and custom design requests",
      "Documents, orders, payments, invoices, and delivery tracking",
      "Conversations, requirements, milestones, and recurring project costs",
    ],
    challenge:
      "Connect a public design catalog with the document, payment, and collaboration workflows needed to deliver a building project.",
    architecture:
      "A marketplace and project-management domain model covering designs, customers, orders, custom requests, documents, and delivery, with a companion socket service for communication.",
    repositories: ["concept-builders", "concept-builders-sockets"],
    image: "/images/projects/concept-builders.webp",
    imageAlt:
      "Concept Builders homepage with building plan discovery and house design previews",
    imagePlaceholder: false,
    github: "https://github.com/Elvinoacer/concept-builders",
    link: "https://github.com/Elvinoacer/concept-builders",
    imageWidth: 1366,
    imageHeight: 768,
  },
  {
    id: 5,
    title: "German Virtual School",
    featured: true,
    domain: "Education",
    scopeLabel: "Flagship platform",
    period: "6 Jan–8 May 2026",
    repoSlug: "German-Virtual-School",
    metrics: [
      { label: "schema models", value: "43" },
      { label: "API route files", value: "124" },
    ],
    story: {
      customer:
        "Students need to follow a course, join live sessions, find learning resources, complete assignments, and understand their progress.",
      operations:
        "Teachers and administrators coordinate classes, attendance, submissions, academic terms, fee plans, invoices, and communication around that learning journey.",
      engineering:
        "Next.js and Prisma/PostgreSQL connect academic and financial records across student, teacher, and administrator workflows, with a dedicated socket service for communication.",
    },
    description:
      "A virtual education platform bringing students, teachers, live classes, coursework, academic progress, and fee administration into one workspace.",
    tags: [
      "Education SaaS",
      "Live classes",
      "Academic workflows",
      "Payments",
      "Realtime",
    ],
    liveUrl: "https://germanvirtualschool.com",
    category: "Education",
    year: "2026",
    outcome: "Multi-role virtual education platform",
    headline: "Learning, connected.",
    scene: "school",
    highlights: [
      "Courses, modules, resources, assignments, and student progress",
      "Live classes, attendance, forums, and messaging",
      "Academic terms, fees, invoices, payments, referrals, and commissions",
    ],
    challenge:
      "Unify the teaching experience with academic records, student communication, and the financial administration of a virtual school.",
    architecture:
      "A multi-role education application with a companion socket server, connecting course and term structures to live sessions, attendance, submissions, messaging, and billing workflows.",
    repositories: ["German-Virtual-School", "gvs-socket-server"],
    image: "/images/projects/german-virtual-school.webp",
    imageAlt:
      "German Virtual School homepage presenting German language courses and academic learning",
    imagePlaceholder: false,
    github: "https://github.com/Elvinoacer/German-Virtual-School",
    link: "https://github.com/Elvinoacer/German-Virtual-School",
    imageWidth: 1323,
    imageHeight: 625,
  },
  {
    id: 6,
    title: "GTSS Growth Engine",
    description:
      "A local-first SME outreach automation tool with browser workflows, scheduling, rate limits, retry handling, and a distributable desktop application.",
    tags: [
      "Electron",
      "Playwright",
      "Node.js / Express",
      "Scheduling",
      "Desktop distribution",
    ],
    category: "Systems",
    year: "2026",
    outcome: "Local outreach automation and desktop tooling",
    headline: "Outreach, organized.",
    scene: "desktop",
    highlights: [
      "Playwright automation across LinkedIn, X, Instagram, Facebook, and TikTok",
      "Scheduling, rate limits, retry/backoff, and timing controls",
      "Electron installers for Windows, Linux, and macOS with update infrastructure",
    ],
    challenge:
      "Coordinate outreach workflows across different browser interfaces while managing schedules, retries, pacing, and desktop distribution.",
    architecture:
      "A Node/Express application uses Playwright for browser automation and scheduling controls. Electron provides the desktop shell, installer packaging, and auto-update infrastructure.",
    repositories: ["gtss_growth_automation"],
    image: "/images/projects/gtss-growth-engine.jpg",
    imageAlt:
      "GTSS Growth Engine promotional illustration showing connected businesses and automation",
    imagePlaceholder: false,
    github: "https://github.com/Elvinoacer/gtss_growth_automation",
    link: "https://github.com/Elvinoacer/gtss_growth_automation",
    imageWidth: 1672,
    imageHeight: 941,
  },
  {
    id: 7,
    title: "Kampus",
    featured: true,
    domain: "Campus & student life",
    scopeLabel: "Mobile platform",
    period: "28 Feb–20 Jul 2026",
    repoSlug: "Kampus",
    metrics: [{ label: "user-service schema models", value: "94" }],
    story: {
      customer:
        "A student moves between social connection and practical campus needs: communities, trading, events, messages, and learning resources.",
      operations:
        "Profiles, content, permissions, and communication need to remain coherent across these modules rather than becoming separate student experiences.",
      engineering:
        "An Expo/React Native app, shared types, an API gateway, and backend services give the mobile platform a distinct architecture. The earlier Uni-Link repository remains a related iteration.",
    },
    description:
      "A campus-focused mobile platform connecting social interaction, communities, student trading, events, messaging, and learning resources through an Expo app and backend services.",
    tags: ["Expo", "React Native", "Monorepo", "Gateway services", "Mobile"],
    category: "Mobile",
    year: "2026",
    outcome: "University mobile platform and service architecture",
    headline: "Campus, connected.",
    scene: "standard",
    highlights: [
      "Expo and React Native mobile application",
      "Monorepo organization with gateway and user services",
      "Campus feed, profiles, communities, messaging, marketplace, and learning resources",
    ],
    challenge:
      "Move beyond browser-based products into a university mobile experience with device features and distinct service responsibilities.",
    architecture:
      "An Expo / React Native monorepo separates the mobile application from gateway and user-service responsibilities, with support for camera and sensor capabilities.",
    repositories: ["Kampus", "uni-link"],
    image: "/images/projects/kampus.webp",
    imageAlt:
      "Kampus mobile app profile editing screen with student details and profile photo",
    imagePlaceholder: false,
    github: "https://github.com/Elvinoacer/Kampus",
    link: "https://github.com/Elvinoacer/Kampus",
    imageWidth: 714,
    imageHeight: 1599,
  },
  {
    id: 8,
    title: "ELC / IEC Voting System",
    description:
      "An electronic election platform covering voter and candidate records, OTP verification, voting configuration, realtime events, and audit trails.",
    tags: [
      "Prisma / PostgreSQL",
      "Socket.IO",
      "Africa's Talking",
      "OTP",
      "Audit trails",
    ],
    liveUrl: "https://elciec.gtss.software",
    category: "Platform",
    year: "2026",
    outcome: "Election workflows, verification, and audit records",
    headline: "Every vote matters",
    scene: "standard",
    highlights: [
      "Voters, candidates, positions, votes, and election configuration",
      "OTP requests, rate limiting, and SMS/email logging",
      "Audit trails, vote-attempt tracking, and realtime events",
    ],
    challenge:
      "Model election participation and verification while making voting attempts, communications, and administrative actions traceable.",
    architecture:
      "Prisma/PostgreSQL stores election and audit records, Africa's Talking supports communication workflows, and a companion Socket.IO service handles realtime events alongside rate limiting.",
    repositories: ["ELC_IEC_mu", "iec_socket"],
    image: "/images/projects/elc-iec-voting.webp",
    imageAlt:
      "ELC / IEC election administration dashboard with voter totals, candidate status, and election controls",
    imagePlaceholder: false,
    github: "https://github.com/Elvinoacer/ELC_IEC_mu",
    link: "https://github.com/Elvinoacer/ELC_IEC_mu",
    imageWidth: 1366,
    imageHeight: 768,
  },
  {
    id: 9,
    title: "OppsLab",
    description:
      "An AI-assisted opportunity discovery platform for jobs, eligibility, application materials, saved searches, resumes, and semantic retrieval.",
    tags: ["Gemini", "LangChain", "Pinecone", "Vector search", "AI workflows"],
    category: "AI",
    year: "2026",
    outcome: "Opportunity discovery and semantic search",
    headline: "Find your next",
    scene: "standard",
    highlights: [
      "Opportunities, eligibility, benefits, and required materials",
      "Saved searches, resumes, drafts, and market insights",
      "Semantic and vector search using Gemini, LangChain, and Pinecone",
    ],
    challenge:
      "Help users discover relevant opportunities and understand the eligibility and preparation work behind each application.",
    architecture:
      "Separate client and server repositories connect opportunity and application workflows to Gemini/LangChain processing and Pinecone-backed semantic retrieval.",
    repositories: ["oppslab-client", "oppslab-server"],
    image: "/images/projects/oppslab.webp",
    imageAlt:
      "OppsLab opportunity discovery homepage with AI search and opportunity browsing",
    imagePlaceholder: false,
    github: "https://github.com/Elvinoacer/oppslab-client",
    link: "https://github.com/Elvinoacer/oppslab-client",
    imageWidth: 1366,
    imageHeight: 768,
    liveUrl: "https://oppslab-woad.vercel.app",
  },
  {
    id: 10,
    title: "Church Management Platform",
    featured: true,
    domain: "Community & institutions",
    scopeLabel: "Institutional platform family",
    period: "10 Aug 2025–26 Jan 2026 · family window",
    repoSlug: "church-web-v2",
    metrics: [
      { label: "schema models per related schema", value: "72" },
      { label: "API route files · church-web-v2", value: "218" },
      { label: "API route files · Zion Hill", value: "215" },
    ],
    story: {
      customer:
        "A community member needs to find activities, connect with a ministry, volunteer, learn, or communicate with the organization.",
      operations:
        "Different responsibilities call for different workspaces: membership, families, ministries, events, counseling, resources, giving, and finance share related records.",
      engineering:
        "Role-aware workflows organize broad institutional data. Church Platform and Zion Hill share substantial schema and application structure, so their source counts stay separate rather than being added together.",
    },
    description:
      "An organizational platform for church membership, ministries, events, communication, content, media, giving, and administration.",
    tags: [
      "Prisma",
      "Authentication",
      "S3 / Firebase",
      "IntaSend",
      "Notifications",
    ],
    category: "Platform",
    liveUrl: "https://zion-hill.vercel.app",
    year: "2025 onward",
    outcome: "Community and organizational operations",
    headline: "Community, organized.",
    scene: "standard",
    highlights: [
      "Membership, ministries, events, giving, and administration",
      "Content, rich-text editing, media, documents, and PDFs",
      "Maps, push notifications, authentication, and analytics",
    ],
    challenge:
      "Bring a broad set of organizational and community workflows together without losing the relationships between members, ministries, events, and giving.",
    architecture:
      "A Prisma-backed application combines authentication, S3 and Firebase integrations, IntaSend, document workflows, rich-text content, push notifications, maps, and analytics.",
    repositories: ["church-web-v2", "ZION-HILL"],
    image: "/images/projects/church-management.webp",
    imageAlt:
      "Zion Hill church homepage welcoming visitors and linking to community ministries",
    imagePlaceholder: false,
    github: "https://github.com/Elvinoacer/church-web-v2",
    link: "https://github.com/Elvinoacer/church-web-v2",
    imageWidth: 1327,
    imageHeight: 626,
  },
  {
    id: 11,
    title: "ClassMind",
    description:
      "An education-oriented web application exploring authenticated file workflows, cloud storage, realtime updates, analytics, and payments.",
    tags: ["Prisma", "AWS / S3", "Redux", "Socket.IO", "IntaSend"],
    category: "Education",
    year: "2024 onward",
    outcome: "Education workflows and cloud storage",
    headline: "Resources, connected.",
    scene: "school",
    highlights: [
      "Authenticated education and file-storage workflows",
      "Prisma persistence, AWS/S3 storage, and Redux state management",
      "Socket.IO updates, charting, analytics, and IntaSend integration",
    ],
    challenge:
      "Combine education-focused workflows with authenticated storage, realtime communication, analytics, and payment integrations.",
    architecture:
      "An education web application using Prisma, AWS/S3, Redux, Socket.IO, analytics/charting tools, and IntaSend alongside authentication.",
    repositories: ["ClassMind"],
    image: "/images/projects/classmind.webp",
    imageAlt:
      "ClassMind learning platform homepage with student imagery and learning resource introduction",
    imagePlaceholder: false,
    github: "https://github.com/Elvinoacer/ClassMind",
    link: "https://github.com/Elvinoacer/ClassMind",
    imageWidth: 1349,
    imageHeight: 630,
  },
  {
    id: 12,
    title: "Commerce & Inventory Systems",
    description:
      "A connected family of storefront and inventory applications, progressing from product presentation to authentication, media, dashboards, and operational workflows.",
    tags: ["Next.js", "Prisma", "NextAuth", "Cloudinary", "TanStack Query"],
    category: "Commerce",
    year: "2024–25",
    outcome: "Storefronts, inventory, and commerce workflows",
    headline: "Commerce in motion",
    scene: "standard",
    highlights: [
      "Storefronts, product catalogs, inventory, and e-commerce flows",
      "Authentication, media management, forms, dashboards, and analytics",
      "Later iterations with Next.js, Prisma, NextAuth, and TanStack Query",
    ],
    challenge:
      "Evolve commerce experiments into applications that connect product discovery with inventory records and day-to-day store administration.",
    architecture:
      "Several related application generations cover frontend product presentation and full-stack commerce. Later versions use Next.js, Prisma, NextAuth, Cloudinary, and TanStack Query.",
    repositories: [
      "commerseley",
      "iphones-market",
      "Commersely",
      "commersely-starterup",
      "commersely-starterup-server",
      "e-commerce-2",
      "QuickCart-main",
      "inventory-system",
      "Inventory-",
      "Inventory-Management-System-V2",
    ],
    liveUrl: "https://commerseley.vercel.app",
    image: "/images/projects/commerce-inventory.webp",
    imageAlt:
      "Commerce storefront homepage featuring fashion products and a suit promotion",
    imagePlaceholder: false,
    github: "https://github.com/Elvinoacer/commerseley",
    link: "https://github.com/Elvinoacer/commerseley",
    imageWidth: 1338,
    imageHeight: 604,
  },
  {
    id: 13,
    title: "GTSS Business Platform",
    description:
      "The operating platform behind Great Thumbs Software Solutions, bringing products, leads, customers, transactions, support, and deployment records together.",
    tags: [
      "Product operations",
      "CRM",
      "Support workflows",
      "Deployments",
      "Analytics",
    ],
    liveUrl: "https://gtss.software",
    category: "Platform",
    year: "2025–26",
    outcome: "Software-business operations platform",
    headline: "Built to operate",
    scene: "standard",
    highlights: [
      "Products, customers, leads, transactions, and team members",
      "Support tickets, deployments, documentation, and media",
      "QR-code workflows and product analytics",
    ],
    challenge:
      "Give a software business one operational view across customer acquisition, product delivery, support, and internal records.",
    architecture:
      "An operating platform models GTSS products and their relationships to customers, leads, transactions, support tickets, deployment records, documentation, media, and analytics.",
    repositories: ["gtss"],
    image: "/images/projects/gtss-business-platform.webp",
    imageAlt:
      "Great Thumbs Software Solutions homepage introducing its software product ecosystem",
    imagePlaceholder: false,
    github: "https://github.com/Elvinoacer/gtss",
    link: "https://github.com/Elvinoacer/gtss",
    imageWidth: 1920,
    imageHeight: 1080,
  },
  {
    id: 14,
    title: "SME Digitalization Suite",
    description:
      "A family of commercial websites and digital experiences for local water businesses, service operators, and restaurants, grouped by their shared product direction.",
    tags: [
      "SME websites",
      "Client delivery",
      "Water businesses",
      "Service businesses",
      "Restaurants",
    ],
    category: "Commercial",
    year: "2026",
    outcome: "Commercial digital experiences for local SMEs",
    headline: "Local business, online",
    scene: "standard",
    highlights: [
      "A clear water-business vertical across related client projects",
      "Digital experiences for service businesses and local operators",
      "Restaurant/customer experiences in Majid and Mama Oliech demos",
    ],
    challenge:
      "Apply product and interface work to the needs of real-world small businesses while producing distinct customer-facing experiences.",
    architecture:
      "A related family of client websites and commercial prototypes, with water-business implementations forming a common vertical and restaurant experiences extending the same delivery direction.",
    repositories: [
      "madina_waters",
      "madini_waters",
      "mr_clean_water",
      "novaform",
      "earths_fresh_water_llc",
      "bliss_water_point",
      "purefresh_llc",
      "sasacleaners",
      "piki",
      "car_mono",
      "majid_restaurant",
      "mama_oliech_demo",
    ],
    image: "/images/projects/sme-digitalization.webp",
    imageAlt: "ShopEase storefront with premium product promotion",
    imageCaption: "Representative commerce interface",
    imagePlaceholder: false,
    github: "https://github.com/Elvinoacer/madina_waters",
    link: "https://github.com/Elvinoacer/madina_waters",
    imageWidth: 1349,
    imageHeight: 630,
  },
  {
    id: 15,
    title: "Healthcare Digitalization Suite",
    description:
      "A family of pharmacy, clinic, laboratory, and medical-center demos and products developed for outreach, validation, and customer acquisition.",
    tags: [
      "Healthcare",
      "Pharmacy demos",
      "Clinic websites",
      "Service bookings",
      "Digital commerce",
    ],
    category: "Commercial",
    year: "2026",
    outcome: "Healthcare demos and commercial product exploration",
    headline: "Care meets digital",
    scene: "healthcare",
    highlights: [
      "Pharmacy, clinic, laboratory, and medical-center digital experiences",
      "Medivyx demonstrator: medicine requests, Rx, bookings, and order tracking",
      "Staff dashboard, chatbot, accessibility, and SEO in Medivyx",
    ],
    challenge:
      "Translate healthcare business needs into usable digital demonstrations that support outreach, validation, and customer conversations.",
    architecture:
      "A grouped healthcare product family spanning client-facing clinic and laboratory experiences and pharmacy demonstrators. The medivxy repository includes medicine requests, Rx handling, bookings, tracking, and staff workflows.",
    repositories: [
      "medivxy",
      "rosma_lab_ultrasound",
      "claycity_med_center",
      "lucin_medical_center",
      "cinen-medical",
      "wayside_medic",
      "kahawawest_medic",
      "afyamax_medic",
      "ponya_medic",
      "haven_park",
      "kasarani_medic",
      "kephane",
      "gem-island-drift-crisp",
    ],
    image: "/images/projects/healthcare-digitalization.webp",
    imageAlt:
      "Pharmacy stock screen with an add-medicine workflow and subscription notice",
    imageCaption: "Related pharmacy workflow",
    imagePlaceholder: false,
    github: "https://github.com/Elvinoacer/medivxy",
    link: "https://github.com/Elvinoacer/medivxy",
    imageWidth: 1366,
    imageHeight: 768,
  },
  {
    id: 16,
    title: "International KYC Hub",
    description:
      "A marketplace prototype covering catalog browsing, shopping cart, checkout, customer dashboards, support tickets, inventory, and administration.",
    tags: [
      "Marketplace prototype",
      "Checkout",
      "Inventory",
      "Support",
      "Analytics",
    ],
    category: "Commerce",
    year: "2025",
    outcome: "Marketplace and administration prototype",
    headline: "Explore. Order. Manage.",
    scene: "marketplace",
    highlights: [
      "Catalog browsing, shopping cart, and checkout",
      "Customer dashboard and support tickets",
      "Inventory, orders, reports, and admin analytics",
    ],
    challenge:
      "Connect a shopper's catalog and checkout journey with the inventory, support, and reporting tools used by administrators.",
    architecture:
      "A marketplace prototype with linked customer and administrative surfaces for catalog records, carts, orders, support tickets, inventory, and reporting.",
    repositories: ["internationalkychub"],
    image: "/images/projects/international-kyc-hub.webp",
    imageAlt: "KYC Hub homepage advertising access to global betting markets",
    imagePlaceholder: false,
    github: "https://github.com/Elvinoacer/internationalkychub",
    link: "https://github.com/Elvinoacer/internationalkychub",
    imageWidth: 1366,
    imageHeight: 768,
  },
  {
    id: 17,
    title: "Kenya Airways System Demo",
    description:
      "An airline and travel-system exploration with flight-search and booking interfaces, Prisma-backed records, reporting, analytics, and document exports.",
    tags: ["Travel demo", "Prisma", "Booking UX", "PDF / Excel", "Reporting"],
    category: "Experiment",
    year: "2026",
    outcome: "Airline and travel workflow demonstration",
    headline: "Explore the journey",
    scene: "standard",
    highlights: [
      "Flight-search and booking UX exploration",
      "Prisma-backed records, analytics, and reporting",
      "PDF and Excel generation with a companion socket server",
    ],
    challenge:
      "Explore the connected user and administrative workflows of a travel system, from flight discovery to booking records and reports.",
    architecture:
      "A travel-system demonstration with Prisma-backed data, reporting and analytics, PDF/Excel generation, and a separate socket-server repository.",
    repositories: ["kenya_airways_254", "kenya_airways_socket_server"],
    image: "/images/projects/kenya-airways-demo.webp",
    imageAlt:
      "Kenya Airways travel demo homepage with flight search and booking form",
    imagePlaceholder: false,
    github: "https://github.com/Elvinoacer/kenya_airways_254",
    link: "https://github.com/Elvinoacer/kenya_airways_254",
    imageWidth: 1366,
    imageHeight: 768,
  },
  {
    id: 18,
    title: "Personal Engineering Portfolio",
    description:
      "Several generations of personal portfolio design, exploring how to present engineering work, visual identity, interaction, and project narratives.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "Portfolio design",
    ],
    category: "Experiment",
    year: "2025 onward",
    outcome: "Portfolio design and engineering presentation",
    headline: "Work, made visible",
    scene: "standard",
    highlights: [
      "Multiple generations of developer portfolio and personal identity",
      "Experiments in visual presentation and interactive project discovery",
      "A consolidated narrative around meaningful engineering project families",
    ],
    challenge:
      "Present a growing body of engineering work through a coherent personal identity and project stories that make technical scope easy to understand.",
    architecture:
      "Related portfolio generations explore frontend composition, interaction, visual identity, and project presentation across the supplied portfolio repositories.",
    repositories: [
      "elvinJuma-portfolio",
      "neural-precision-portfolio",
      "elvin-profile-2",
      "next_port",
    ],
    image: "/images/projects/engineering-portfolio.webp",
    imageAlt:
      "Elvin engineering portfolio homepage with a 3D computer scene and developer introduction",
    imagePlaceholder: false,
    github: "https://github.com/Elvinoacer/elvinJuma-portfolio",
    link: "https://github.com/Elvinoacer/elvinJuma-portfolio",
    imageWidth: 1349,
    imageHeight: 630,
  },
  {
    id: 19,
    title: "Frontend & Realtime Foundations",
    description:
      "Early JavaScript, messaging, and social application experiments that established API integration, state management, client/server separation, and realtime UI skills.",
    tags: [
      "JavaScript",
      "React / Next.js",
      "APIs",
      "State management",
      "Realtime",
    ],
    category: "Experiment",
    year: "2024",
    outcome: "Foundations in frontend and realtime application development",
    headline: "Where it began",
    scene: "standard",
    highlights: [
      "Forkify experiments with APIs, state, UI interaction, and application structure",
      "Messaging and social prototypes using React and Next.js",
      "Exploration of client/server separation and realtime systems",
    ],
    challenge:
      "Build a practical foundation in application architecture by moving from interactive JavaScript interfaces into messaging and social-system experiments.",
    architecture:
      "A historical group of learning projects, from JavaScript API/state exercises to React/Next.js messaging and social prototypes with separate client, server, and socket repositories.",
    repositories: [
      "forkify",
      "forkify2",
      "whatsapp-clone",
      "Telegram-clone",
      "telegram-clone-client",
      "telegram-clone-server",
      "telegram-clone-socket",
      "Ticktock-clone-",
      "tiktok-clone-feasible",
      "chat",
    ],
    image: "/images/projects/frontend-realtime-foundations.webp",
    imageAlt:
      "Realtime messaging application with a contact list and add-contact form",
    imagePlaceholder: false,
    github: "https://github.com/Elvinoacer/forkify",
    link: "https://github.com/Elvinoacer/forkify",
    imageWidth: 1349,
    imageHeight: 630,
  },
];

const featuredProjectOrder = [1, 20, 2, 4, 3, 5, 7, 10];
export const featuredProjects = featuredProjectOrder
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is Project => project !== undefined);

export const engineeringTimeline = [
  {
    year: "2024",
    title: "Foundations",
    description:
      "JavaScript, APIs, state, and frontend architecture grew into messaging experiments, realtime systems, commerce, and ClassMind.",
  },
  {
    year: "2025",
    title: "Full-stack & Product Engineering",
    description:
      "Commerce and inventory work expanded into church operations, JustInTime, Concept Builders, and the first local-first hospitality systems.",
  },
  {
    year: "2026",
    title: "SaaS, Systems & Commercial Engineering",
    description:
      "Multi-tenant healthcare SaaS, virtual education, desktop automation, mobile services, AI search, voting systems, and commercial SME products.",
  },
] as const;
