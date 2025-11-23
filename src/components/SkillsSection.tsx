"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA TRANSFORMATION ---
// I have consolidated your categories into 4 clean tabs for better UX.
const allSkills = {
  frontend: [
    { name: "React", level: "Expert" },
    { name: "Next.js", level: "Expert" },
    { name: "TypeScript", level: "Expert" },
    { name: "Tailwind CSS", level: "Expert" },
    { name: "Three.js", level: "Advanced" },
    { name: "GSAP", level: "Advanced" },
    { name: "Framer Motion", level: "Advanced" },
    { name: "Redux Toolkit", level: "Advanced" },
    { name: "Zustand", level: "Advanced" },
    { name: "React Native", level: "Proficient" },
  ],
  backend: [
    { name: "Node.js", level: "Expert" },
    { name: "Express", level: "Advanced" },
    { name: "PostgreSQL", level: "Advanced" },
    { name: "MongoDB", level: "Advanced" },
    { name: "Redis", level: "Proficient" },
    { name: "Prisma", level: "Advanced" },
    { name: "GraphQL", level: "Proficient" },
    { name: "REST API", level: "Expert" },
    { name: "WebSockets", level: "Proficient" },
    { name: "LangChain", level: "Intermediate" },
  ],
  devops: [
    { name: "Docker", level: "Advanced" },
    { name: "AWS", level: "Proficient" },
    { name: "CI/CD", level: "Advanced" },
    { name: "Linux", level: "Advanced" },
    { name: "Nginx", level: "Proficient" },
    { name: "Kubernetes", level: "Intermediate" },
    { name: "Terraform", level: "Intermediate" },
    { name: "GitHub Actions", level: "Advanced" },
  ],
  security: [
    { name: "OAuth 2.0", level: "Advanced" },
    { name: "JWT", level: "Expert" },
    { name: "NextAuth", level: "Advanced" },
    { name: "OpenID", level: "Proficient" },
  ],
};

const tabs = [
  { id: "frontend", label: "Frontend & UI" },
  { id: "backend", label: "Backend & Data" },
  { id: "devops", label: "DevOps & Cloud" },
  { id: "security", label: "Security" },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-3"
          >
            <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Tech Stack
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-200"
          >
            My Development <span className="text-emerald-400">Arsenal</span>
          </motion.h2>
        </div>

        {/* --- INFINITE MARQUEE (Top Tier Tech) --- */}
        <div className="relative w-full max-w-5xl mx-auto h-20 mb-20 overflow-hidden mask-linear-fade">
          {/* Mask for fading edges */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(to_right,#020617,transparent_20%,transparent_80%,#020617)]"></div>

          <motion.div
            className="flex gap-12 items-center absolute left-0 top-0 h-full whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {/* Doubled list for seamless loop */}
            {[
              ...allSkills.frontend,
              ...allSkills.backend,
              ...allSkills.frontend,
              ...allSkills.backend,
            ].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-2xl font-bold text-slate-500 opacity-50 hover:opacity-100 hover:text-emerald-400 transition-all cursor-default"
              >
                <span>{tech.name}</span>
                <span className="w-1 h-1 rounded-full bg-slate-700"></span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- TABBED NAVIGATION --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-slate-950"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-emerald-400 rounded-xl"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* --- SKILL GRID --- */}
        <div className="max-w-5xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {allSkills[activeTab as keyof typeof allSkills].map(
                (skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="group relative p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-emerald-500/30 overflow-hidden transition-colors duration-300"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 flex flex-col items-start gap-2">
                      <h3 className="text-lg font-bold text-slate-200 group-hover:text-emerald-300 transition-colors">
                        {skill.name}
                      </h3>
                      <div className="flex items-center gap-2 w-full">
                        <div className="h-1 flex-1 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-emerald-500/50 group-hover:bg-emerald-400 transition-all duration-500`}
                            style={{
                              width:
                                skill.level === "Expert"
                                  ? "95%"
                                  : skill.level === "Advanced"
                                  ? "75%"
                                  : "50%",
                            }}
                          ></div>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
