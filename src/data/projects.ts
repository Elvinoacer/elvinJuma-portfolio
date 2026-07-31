export type ProjectCategory =
  | "Product"
  | "Platform"
  | "Commerce"
  | "Education"
  | "Experiment";

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  featured?: boolean;
  category: ProjectCategory;
  year?: string;
  outcome?: string;
}

export const projects: Project[] = [
  {
    id: 18,
    title: "Great Thumbs Software Solutions",
    description:
      "Parent software company shipping practical products for local operators — hotel QR ordering, e-commerce, and the JustInTime community marketplace.",
    tags: [
      "Next.js 16",
      "React 19",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
      "TanStack Query",
      "Cloudinary",
    ],
    image: "/images/gtss.png",
    link: "https://gtss.vercel.app",
    featured: true,
    category: "Product",
    year: "2025–26",
    outcome: "Multi-product company site & product hub",
  },
  {
    id: 17,
    title: "German Virtual School",
    description:
      "Digital academy for German language education (A1–C2). Unifies live video (Jitsi), IntaSend billing, assignments, and GDPR-aware reporting for students, teachers, and admins.",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Socket.io",
      "Jitsi",
      "IntaSend",
      "Firebase",
    ],
    image: "/images/gvs.png",
    link: "https://germanvirtualschool.com",
    featured: true,
    category: "Education",
    year: "2025–26",
    outcome: "Full learning ops platform in production",
  },
  {
    id: 16,
    title: "Concept Builders",
    description:
      "Website and ops surface for a building & construction company — project portfolios, design galleries, client management, and service inquiries.",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Cloudinary",
      "Framer Motion",
    ],
    image: "/images/concept-builders.png",
    link: "https://conceptbuilders.co.ke",
    featured: true,
    category: "Platform",
    year: "2025",
    outcome: "Client-facing construction brand system",
  },
  {
    id: 0,
    title: "Church Management System",
    description:
      "Operations platform to streamline church workflows and community engagement — members, events, and payments.",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "IntaSend",
      "Shadcn",
    ],
    image: "/images/church-platform.png",
    link: "https://zion-hill.vercel.app/",
    featured: true,
    category: "Platform",
    year: "2025",
    outcome: "Live church operations tooling",
  },
  {
    id: 1,
    title: "Commerseley",
    description:
      "Full-featured online store with payment integration and inventory-minded flows for local fashion commerce.",
    tags: ["Next.js", "PostgreSQL", "IntaSend", "NextAuth"],
    image: "/images/commerseley.jpg",
    link: "https://commerseley.vercel.app",
    category: "Commerce",
    year: "2025",
  },
  {
    id: 2,
    title: "Inventory Management",
    description:
      "Track products and assets to reduce waste and keep stock accurate across day-to-day operations.",
    tags: ["Next.js", "MUI", "Redux Toolkit", "Axios", "Tailwind CSS"],
    image: "/images/inventory.png",
    link: "https://inventory-system-iota-seven.vercel.app",
    category: "Platform",
    year: "2025",
  },
  {
    id: 3,
    title: "Lawyer Portfolio",
    description:
      "Modern, responsive portfolio for a legal professional — calm typography, case highlights, and contact flow.",
    tags: ["Next.js", "Framer Motion", "Radix UI", "Tailwind CSS"],
    image: "/images/portfolio.png",
    link: "https://elvin-juma-johnathan-carter.vercel.app",
    category: "Experiment",
    year: "2025",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "Full-stack blogging with auth, rich media, and a server that scrapes external articles into the database.",
    tags: ["Next.js", "Prisma", "NextAuth", "Cloudinary", "Tailwind CSS"],
    image: "/images/blogapp.png",
    link: "https://blog-app-prototype.vercel.app",
    category: "Experiment",
    year: "2025",
  },
  {
    id: 5,
    title: "iPhones Marketing Site",
    description:
      "Immersive product marketing with 3D visualizations and cinematic motion for Apple-style product storytelling.",
    tags: ["Vite", "React", "Three.js", "GSAP", "Sentry"],
    image: "/images/iphones.png",
    link: "https://iphones-marketing.vercel.app",
    category: "Experiment",
    year: "2025",
  },
  {
    id: 6,
    title: "Streamlite (TikTok-style)",
    description:
      "Short-form video sharing prototype with backend integration and feed-oriented UX.",
    tags: ["Next.js", "Appwrite", "Zustand", "TypeScript"],
    image: "/images/tiktok-clone.png",
    link: "https://streamlite-feasible.vercel.app",
    category: "Experiment",
    year: "2025",
  },
  {
    id: 7,
    title: "Realtime Messenger",
    description:
      "Messaging app with realtime delivery, file sharing, and production-minded client architecture.",
    tags: [
      "Next.js 15",
      "React 19",
      "Socket.IO",
      "TanStack Query",
      "Zustand",
      "UploadThing",
    ],
    image: "/images/telegram1.png",
    link: "https://telegram-clone-client-xi.vercel.app",
    category: "Platform",
    year: "2025",
  },
  {
    id: 8,
    title: "Sleek Admin Dashboard",
    description:
      "Admin panel with analytics, user management, and data visualization for operational teams.",
    tags: ["Next.js 14", "NextAuth", "MongoDB", "Recharts"],
    image: "/images/sleek-dashboard.png",
    link: "https://sleek-dashoard.vercel.app",
    category: "Platform",
    year: "2025",
  },
  {
    id: 9,
    title: "AI Chat Interface",
    description:
      "ChatGPT-inspired interface with conversation history, auth, and OpenAI-backed responses.",
    tags: ["Next.js 15", "OpenAI", "Firebase", "NextAuth", "SWR"],
    image: "/images/gpt-chat-clone.png",
    link: "https://mohaydragpt.vercel.app",
    category: "Experiment",
    year: "2025",
  },
  {
    id: 10,
    title: "3D Portfolio",
    description:
      "Interactive Three.js portfolio exploring spatial UI and immersive project presentation.",
    tags: ["React Three Fiber", "Three.js", "Framer Motion", "Vite"],
    image: "/images/portfolio-three.png",
    link: "https://elvin-profile-2.vercel.app",
    category: "Experiment",
    year: "2025",
  },
  {
    id: 11,
    title: "Multi-Task AI SaaS",
    description:
      "SaaS surface offering multiple AI tools — image generation, text processing, and auth-gated workflows.",
    tags: ["Next.js 15", "Clerk", "OpenAI", "Replicate", "Radix UI"],
    image: "/images/multitask-ai.png",
    link: "https://saas-ai-kappa-mocha.vercel.app",
    category: "Product",
    year: "2025",
  },
  {
    id: 12,
    title: "E-commerce Client Pages",
    description:
      "Polished product pages with dark mode and motion — focused on conversion-oriented UI.",
    tags: ["Next.js 15", "Framer Motion", "Radix UI", "Next Themes"],
    image: "/images/static-ecommerce-1.png",
    link: "https://client-pages.vercel.app",
    category: "Commerce",
    year: "2025",
  },
  {
    id: 13,
    title: "QuickCart Store",
    description:
      "Streamlined storefront with authentication and cloud storage integration for product media.",
    tags: ["Next.js 15", "Clerk", "Inngest", "MongoDB", "Cloudinary"],
    image: "/images/quickcart.png",
    link: "https://quick-cart-store.vercel.app",
    category: "Commerce",
    year: "2025",
  },
  {
    id: 14,
    title: "Student Portfolio Template",
    description:
      "Customizable portfolio template for students — modern components, themes, and motion.",
    tags: ["Next.js 15", "Tailwind v4", "Framer Motion", "Radix UI"],
    image: "/images/student-portfolio.png",
    link: "https://ogam-bathlomew.vercel.app",
    category: "Experiment",
    year: "2025",
  },
  {
    id: 15,
    title: "ClassMind File Storage",
    description:
      "Secure cloud storage for education — real-time updates, analytics, and institutional workflows.",
    tags: ["Next.js 15", "Prisma", "AWS S3", "Kinde Auth", "Socket.IO", "IntaSend"],
    image: "/images/student-file-storage.png",
    link: "https://classmind-rouge.vercel.app",
    category: "Education",
    year: "2025",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
