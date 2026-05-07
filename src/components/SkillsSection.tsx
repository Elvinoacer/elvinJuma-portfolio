"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const skillGroups = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Three.js",
    "React Native",
    "Zustand",
  ],
  backend: [
    "Node.js",
    "Express",
    "PostgreSQL",
    "Prisma",
    "MongoDB",
    "Redis",
    "REST APIs",
    "Socket.io",
  ],
  systems: [
    "Docker",
    "AWS",
    "CI/CD",
    "Linux",
    "NextAuth",
    "OAuth",
    "Payments",
    "Cloudinary",
  ],
};

const tabs = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "systems", label: "Systems" },
];

const strengths = [
  "Design systems",
  "Admin dashboards",
  "SaaS workflows",
  "E-commerce",
  "Real-time apps",
  "AI integrations",
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof skillGroups>("frontend");

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#080a0e] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f1d99f]">
              Capabilities
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              A practical stack for polished, production-ready products.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              The toolkit is broad, but the point is focused: create fast,
              secure interfaces that are pleasant to use and straightforward to
              maintain.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {strengths.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-medium text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-lg border border-white/10 bg-[#10141b] p-3 shadow-[0_24px_90px_rgba(0,0,0,0.28)] sm:p-4"
          >
            <div className="mb-4 grid grid-cols-3 gap-1 rounded-md bg-black/25 p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as keyof typeof skillGroups)}
                  className={`relative min-h-9 rounded px-2 text-xs font-semibold transition sm:text-sm ${
                    activeTab === tab.id
                      ? "text-[#11100c]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.span
                      layoutId="skill-tab"
                      className="absolute inset-0 rounded bg-[#f1d99f]"
                      transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.24 }}
                className="grid grid-cols-2 gap-2 sm:grid-cols-4"
              >
                {skillGroups[activeTab].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03 }}
                    className="min-h-20 rounded-md border border-white/10 bg-white/[0.035] p-3"
                  >
                    <p className="text-sm font-semibold text-white">{skill}</p>
                    <div className="mt-4 h-1 rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-[#f1d99f]"
                        style={{ width: `${index < 3 ? 92 : index < 6 ? 78 : 66}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
