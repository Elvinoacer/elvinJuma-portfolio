"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetails from "@/components/ProjectDetails";
import { projects, type Project, type ProjectCategory } from "@/data/projects";
import { site } from "@/data/site";

const filters: ("All" | ProjectCategory)[] = ["All", "Product", "Platform", "Education", "Commerce", "Experiment"];

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();
  const filtered = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section className="min-h-screen bg-[#10110f] pb-24 pt-32 text-[#f4f3ed] sm:pt-40 md:pb-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#93978a] transition-colors hover:text-[#d7fb78]"><ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Back to home</Link>
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-14 mt-14 flex flex-col justify-between gap-7 md:mb-20 md:flex-row md:items-end">
          <div><p className="mb-6 font-mono text-[10px] uppercase tracking-[0.16em] text-[#d7fb78]">The project archive</p><h1 className="text-[clamp(3.5rem,9vw,8rem)] font-medium leading-[0.96] tracking-[-0.065em]">Built with<br /><span className="text-[#93978a]">intent.</span></h1></div>
          <div className="max-w-[350px] md:pb-1"><p className="text-base leading-[1.8] text-[#a6aa9f]">Production platforms, client work, and experiments. A look at the problems I solve and how I build.</p><p className="mt-6 font-mono text-[10px] uppercase tracking-[0.13em] text-[#93978a]">{projects.length} projects / {filters.length - 1} disciplines</p></div>
        </motion.div>
        <div aria-label="Filter projects by category" role="group" className="mb-4 flex flex-wrap items-center gap-2 border-t border-white/12 pt-6 sm:gap-3">
          {filters.map((category) => {
            const count = category === "All" ? projects.length : projects.filter((project) => project.category === category).length;
            return <button key={category} type="button" aria-pressed={filter === category} onClick={() => setFilter(category)} className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-xs transition-colors ${filter === category ? "border-[#d7fb78] bg-[#d7fb78] text-[#10110f]" : "border-white/12 text-[#a6aa9f] hover:border-white/35 hover:text-[#f4f3ed]"}`}>{category}<span className="font-mono text-[9px] opacity-60">{String(count).padStart(2, "0")}</span></button>;
          })}
        </div>
        <p aria-live="polite" aria-atomic="true" className="mb-8 font-mono text-[10px] text-[#93978a]">Showing {filtered.length} {filter === "All" ? "projects" : `${filter.toLowerCase()} ${filtered.length === 1 ? "project" : "projects"}`}</p>
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-20">{filtered.map((project, index) => <ProjectCard key={project.id} {...project} index={index} onSelect={setSelectedProject} />)}</div>
        <div className="mt-20 flex flex-col justify-between gap-7 border-t border-white/12 pt-10 sm:flex-row sm:items-center md:mt-28">
          <p className="text-2xl font-medium tracking-[-0.035em] sm:text-3xl">What are we building next?</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-[#93978a] transition-colors hover:text-[#d7fb78]">Explore GitHub <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></a>
            <Link href="/contact" className="inline-flex items-center gap-5 rounded-full bg-[#d7fb78] px-6 py-4 text-xs font-semibold text-[#10110f] transition-colors hover:bg-[#e4ffae]">Let&apos;s talk <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
      {selectedProject ? <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
    </section>
  );
}
