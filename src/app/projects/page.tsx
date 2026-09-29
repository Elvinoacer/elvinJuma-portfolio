"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Filter, Gauge, History } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import {
  projects,
  type ProjectCategory,
  type ProjectStatus,
} from "@/data/projects";
import { githubProfile } from "@/data/github";

const categories: ("All" | ProjectCategory)[] = [
  "All",
  "Product",
  "Platform",
  "Education",
  "Commerce",
  "Experiment",
];

const statuses: ("All" | ProjectStatus)[] = [
  "All",
  "Active build",
  "Production",
  "Shipped",
  "Prototype",
];

export default function Projects() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [status, setStatus] = useState<(typeof statuses)[number]>("All");

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch = category === "All" || project.category === category;
      const statusMatch = status === "All" || project.status === status;
      return categoryMatch && statusMatch;
    });
  }, [category, status]);

  const platformCount = projects.filter((project) => project.complexity.startsWith("L5")).length;
  const activeCount = projects.filter((project) => project.status === "Active build").length;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070909] pb-24 pt-28 sm:pt-32">
      <div className="portfolio-grid pointer-events-none absolute inset-0 opacity-[0.2]" />
      <div className="pointer-events-none absolute left-1/2 top-12 h-96 w-[64rem] -translate-x-1/2 rounded-full bg-lime-300/[0.035] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono text-[11px] text-slate-500 transition hover:text-lime-300"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          back to selected work
        </Link>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-lime-300">
              Project archive
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
              A build history, not a wall of screenshots.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Each project now exposes the part that matters: when it was worked on,
              what I owned, how complex it became, the stack underneath it, and the
              tools and integrations that made it production-capable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="grid grid-cols-2 gap-3"
          >
            {[
              { value: projects.length, label: "curated systems" },
              { value: activeCount, label: "active builds" },
              { value: platformCount, label: "L5 platforms" },
              { value: githubProfile.totalRepos, label: "GitHub repos" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4"
              >
                <p className="text-2xl font-semibold tracking-[-0.04em] text-white">
                  {item.value}
                </p>
                <p className="mt-1 text-[11px] text-slate-500">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-3">
          {[
            {
              year: "2024",
              title: "Interaction & 3D",
              detail: "Creative frontend work, motion and WebGL experiments.",
            },
            {
              year: "2025",
              title: "Production full-stack",
              detail: "Auth, data, payments, realtime and operational software.",
            },
            {
              year: "2026",
              title: "Platform systems",
              detail: "Multi-tenant products, marketplaces, reliability and billing.",
            },
          ].map((item) => (
            <div
              key={item.year}
              className="rounded-2xl border border-white/[0.07] bg-[#0b0e0e] p-5"
            >
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-lime-300">
                <History className="h-3.5 w-3.5" />
                {item.year}
              </div>
              <p className="mt-3 text-base font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-sm leading-6 text-slate-500">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[1.6rem] border border-white/[0.07] bg-white/[0.02] p-4 sm:p-5">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-lime-300" />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Filter the archive
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-3 py-1.5 font-mono text-[10px] transition ${
                    category === item
                      ? "bg-lime-300 text-[#07100a]"
                      : "border border-white/[0.07] text-slate-500 hover:border-white/[0.14] hover:text-slate-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {statuses.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setStatus(item)}
                  className={`rounded-full px-3 py-1.5 font-mono text-[10px] transition ${
                    status === item
                      ? "bg-white text-[#07100a]"
                      : "border border-white/[0.07] text-slate-500 hover:border-white/[0.14] hover:text-slate-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-600">
            showing {filtered.length} / {projects.length}
          </p>
          <p className="hidden items-center gap-2 font-mono text-[10px] text-slate-600 sm:flex">
            <Gauge className="h-3.5 w-3.5" />
            L2 focused · L3 full-stack · L4 systems · L5 platform
          </p>
        </div>

        <motion.div layout className="mt-6 grid gap-6 lg:grid-cols-2">
          {filtered.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.025, 0.18) }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-8 rounded-2xl border border-dashed border-white/10 px-6 py-16 text-center">
            <p className="text-sm text-slate-500">
              No projects match that category and status combination.
            </p>
          </div>
        )}

        <div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-white/[0.07] pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-lg font-medium text-white">Want the raw engineering trail?</p>
            <p className="mt-1 text-sm text-slate-500">
              The archive is curated. GitHub contains the longer build history.
            </p>
          </div>
          <a
            href={githubProfile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-slate-300 transition hover:border-lime-300/30 hover:text-white"
          >
            Open GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </main>
  );
}
