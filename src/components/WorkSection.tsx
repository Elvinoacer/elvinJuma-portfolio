"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Gauge,
  GitBranch,
  Layers3,
  Wrench,
  X,
} from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects, projects, type Project } from "@/data/projects";

const evolution = [
  {
    year: "2024",
    title: "Craft & interaction",
    body: "3D interfaces, motion systems and frontend experiments.",
  },
  {
    year: "2025",
    title: "Full-stack production",
    body: "Auth, databases, payments, realtime systems and operational dashboards.",
  },
  {
    year: "2026",
    title: "Platform engineering",
    body: "Multi-tenant products, billing lifecycles, marketplaces and healthcare infrastructure.",
  },
];

export default function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const primary = featuredProjects.slice(0, 4);

  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#070909] py-24 sm:py-32"
    >
      <div className="portfolio-grid pointer-events-none absolute inset-0 opacity-[0.22]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[70rem] -translate-x-1/2 rounded-full bg-lime-300/[0.035] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-lime-300">
              Selected systems · 2024 → 2026
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              The work changed as the problems got harder.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              I started by obsessing over interfaces. Then the work moved into auth,
              data, payments, realtime systems, multi-tenant architecture and product
              operations. The portfolio should show that progression.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-[1.6rem] border border-white/[0.08] bg-white/[0.025] p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Current trajectory
              </span>
              <span className="rounded-full border border-lime-300/20 bg-lime-300/[0.07] px-2.5 py-1 font-mono text-[10px] text-lime-300">
                building now
              </span>
            </div>
            <p className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-white">
              Afyvia
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Connected neighborhood pharmacy infrastructure: storefronts,
              verification, prescriptions, billing, medicine data and growth systems.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Multi-tenant", "Payments", "Healthcare", "Marketplace"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.07] px-2.5 py-1 font-mono text-[10px] text-slate-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-3">
          {evolution.map((step, index) => (
            <motion.div
              key={step.year}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0b0e0e] p-5"
            >
              <div className="absolute right-4 top-3 font-mono text-4xl font-semibold text-white/[0.025]">
                {step.year}
              </div>
              <p className="font-mono text-xs text-lime-300">{step.year}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{step.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-b border-white/[0.07] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-600">
              Flagship builds
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
              Systems with real operational depth
            </h3>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] text-slate-600">
            <Gauge className="h-3.5 w-3.5" />
            Complexity runs from focused builds to platform-scale systems.
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {primary.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.18) }}
            >
              <ProjectCard {...project} onOpen={() => setSelectedProject(project)} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[1.6rem] border border-white/[0.07] bg-white/[0.02] p-5 sm:flex-row sm:items-center sm:p-6">
          <div>
            <p className="text-base font-medium text-white">
              {projects.length} curated builds, from visual experiments to multi-tenant products.
            </p>
            <p className="mt-1 text-sm text-slate-500">
              The full archive includes release period, role, complexity, stack and tooling for each project.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-2.5 text-sm font-semibold text-[#07100a] transition hover:bg-lime-200"
          >
            Explore full archive
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/[0.1] bg-[#0b0e0e] p-5 shadow-2xl sm:p-7"
            >
              <div className="flex items-start justify-between gap-5 border-b border-white/[0.07] pb-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-lime-300">
                    {selectedProject.category} · {selectedProject.status}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">{selectedProject.role}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:bg-white/[0.06] hover:text-white"
                  aria-label="Close project brief"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <p className="mt-6 text-base leading-7 text-slate-300">
                {selectedProject.context ?? selectedProject.description}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <CalendarDays className="h-4 w-4 text-lime-300" />
                  <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-600">
                    Timeline
                  </p>
                  <p className="mt-1 text-sm text-white">{selectedProject.year}</p>
                  {selectedProject.lastActivity && (
                    <p className="mt-1 text-[11px] text-slate-500">
                      Last repo activity: {selectedProject.lastActivity}
                    </p>
                  )}
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <GitBranch className="h-4 w-4 text-lime-300" />
                  <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-600">
                    Complexity
                  </p>
                  <p className="mt-1 text-sm text-white">{selectedProject.complexity}</p>
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <Layers3 className="h-4 w-4 text-lime-300" />
                  <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-600">
                    Surface
                  </p>
                  <p className="mt-1 text-sm text-white">
                    {selectedProject.highlights?.length ?? 0} documented system areas
                  </p>
                </div>
              </div>

              {selectedProject.highlights?.length ? (
                <div className="mt-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
                    What made it difficult
                  </p>
                  <div className="mt-3 grid gap-2">
                    {selectedProject.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-slate-300"
                      >
                        <span className="mr-2 text-lime-300">↳</span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
                    <Layers3 className="h-3.5 w-3.5" />
                    Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-white/[0.04] px-2.5 py-1.5 font-mono text-[10px] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
                    <Wrench className="h-3.5 w-3.5" />
                    Tools & integrations
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[...selectedProject.tools, ...(selectedProject.integrations ?? [])].map((tool) => (
                      <span
                        key={tool}
                        className="rounded-lg border border-white/[0.06] px-2.5 py-1.5 font-mono text-[10px] text-slate-500"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {selectedProject.outcome && (
                <div className="mt-7 rounded-2xl border border-lime-300/15 bg-lime-300/[0.04] p-4">
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-lime-300/70">
                    Outcome
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{selectedProject.outcome}</p>
                </div>
              )}

              <div className="mt-7 flex flex-wrap justify-end gap-3 border-t border-white/[0.07] pt-5">
                {selectedProject.repo && (
                  <a
                    href={`https://github.com/${selectedProject.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-slate-300 transition hover:bg-white/[0.05] hover:text-white"
                  >
                    Repository
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-4 py-2 text-xs font-semibold text-[#07100a] transition hover:bg-lime-200"
                >
                  Open live project
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
