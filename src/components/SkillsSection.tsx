"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const skillGroups = {
  frontend: {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "GSAP",
      "Zustand",
      "TanStack Query",
      "React Native",
    ],
  },
  backend: {
    label: "Backend & Data",
    items: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "MongoDB",
      "Redis",
      "GraphQL",
      "REST",
      "Socket.IO",
      "LangChain",
    ],
  },
  product: {
    label: "Product & Ops",
    items: [
      "Auth (NextAuth / Clerk / Kinde)",
      "Payments (IntaSend / M-Pesa)",
      "Cloudinary",
      "AWS S3",
      "Firebase",
      "Vercel",
      "CI/CD",
      "Docker",
      "Observability",
      "GDPR-aware design",
    ],
  },
} as const;

type TabId = keyof typeof skillGroups;

const marquee = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "PostgreSQL",
  "Prisma",
  "Socket.IO",
  "IntaSend",
  "Jitsi",
  "Cloudinary",
  "TanStack Query",
  "Framer Motion",
  "Docker",
];

export default function SkillsSection() {
  const [active, setActive] = useState<TabId>("frontend");

  return (
    <section id="skills" className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-14">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-emerald-400/90">
            Stack
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Tools I reach for daily
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400 sm:text-base">
            Chosen for shipping speed and production durability — not résumé
            padding.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative mb-12 hidden overflow-hidden sm:block">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#030712] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#030712] to-transparent" />
          <div className="flex w-max animate-marquee gap-8 py-2">
            {[...marquee, ...marquee].map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="text-sm font-medium tracking-wide text-slate-600"
              >
                {t}
                <span className="ml-8 text-slate-800">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {(Object.keys(skillGroups) as TabId[]).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setActive(id)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === id
                  ? "text-slate-950"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {active === id && (
                <motion.span
                  layoutId="skill-tab"
                  className="absolute inset-0 rounded-full bg-emerald-400"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{skillGroups[id].label}</span>
            </button>
          ))}
        </div>

        <div className="mx-auto min-h-[200px] max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-2.5"
            >
              {skillGroups[active].items.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3.5 py-2 text-sm text-slate-300 transition-colors hover:border-emerald-500/30 hover:text-emerald-300"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
