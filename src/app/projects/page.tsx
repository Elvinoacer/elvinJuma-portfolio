"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects, type ProjectCategory } from "@/data/projects";
import { githubProfile } from "@/data/github";
import { fadeUp } from "@/lib/motion";
import Link from "next/link";

const filters: ("All" | ProjectCategory)[] = [
  "All",
  "Product",
  "Platform",
  "Education",
  "Commerce",
  "Experiment",
];

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  const featuredCount = projects.filter((p) => p.featured).length;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712] pb-20 pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-10 max-w-3xl sm:mb-12"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-emerald-400/90">
            Portfolio
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Work that left the building.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            From multi-tenant education platforms to hotel ops and commerce —
            each project is a real problem solved with production constraints.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-10 grid grid-cols-2 gap-3 sm:mb-12 sm:grid-cols-4"
        >
          {[
            { v: `${projects.length}`, l: "Projects listed" },
            { v: `${featuredCount}`, l: "Featured production" },
            {
              v: githubProfile.totalContributions.toLocaleString(),
              l: "GH contributions",
            },
            { v: String(githubProfile.totalRepos), l: "Repositories" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5"
            >
              <p className="text-xl font-semibold text-white sm:text-2xl">
                {s.v}
              </p>
              <p className="text-[11px] text-slate-500 sm:text-xs">{s.l}</p>
            </div>
          ))}
        </motion.div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
                filter === f
                  ? "bg-emerald-500 text-slate-950"
                  : "border border-white/10 bg-white/[0.02] text-slate-400 hover:text-slate-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid gap-5 sm:grid-cols-2 sm:gap-6"
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.04, 0.3) }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="py-16 text-center text-slate-500">
            No projects in this category yet.
          </p>
        )}

        <div className="mt-16 flex flex-col items-center gap-5 border-t border-white/[0.06] pt-12 text-center">
          <p className="text-lg text-slate-300">
            Have a problem that needs a builder?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Get in touch
            </Link>
            <a
              href={githubProfile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 px-6 py-3 text-sm text-slate-300 transition hover:border-emerald-500/30 hover:text-white"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
