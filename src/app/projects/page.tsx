"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Search, X } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetails from "@/components/ProjectDetails";
import { projects, projectCategories, engineeringTimeline, type Project, type ProjectCategory } from "@/data/projects";
import { site } from "@/data/site";

const filters: ("All" | ProjectCategory)[] = ["All", ...projectCategories];

function matchesSearch(project: Project, query: string) {
  return `${project.title} ${project.description} ${project.tags.join(" ")} ${project.category}`.toLowerCase().includes(query);
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();
  const query = search.trim().toLowerCase();
  const filtered = projects.filter((project) => (filter === "All" || project.category === filter) && matchesSearch(project, query));

  function resetFilters() {
    setSearch("");
    setFilter("All");
  }

  return (
    <section aria-labelledby="archive-title" className="min-h-screen bg-[#10110f] pb-24 pt-32 text-[#f4f3ed] sm:pt-40 md:pb-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#a0a795] transition-colors hover:text-[#d7fb78]"><ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Back to home</Link>
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-14 mt-14 flex flex-col justify-between gap-7 md:mb-16 md:flex-row md:items-end">
          <div><p className="mb-6 font-mono text-[10px] uppercase tracking-[0.16em] text-[#d7fb78]">The engineering archive</p><h1 id="archive-title" className="text-[clamp(3.5rem,9vw,8rem)] font-medium leading-[0.96] tracking-[-0.065em]">Built with<br /><span className="text-[#93978a]">intent.</span></h1></div>
          <div className="max-w-[380px] md:pb-1"><p className="text-base leading-[1.8] text-[#b1b5aa]">Pharmacy SaaS. Local marketplaces. Systems that work without internet. A collection of the problems I&apos;ve worked through, from first experiments to full products.</p><p className="mt-6 font-mono text-[10px] uppercase tracking-[0.13em] text-[#a0a795]">{projects.length} project families / 2024 — 2026</p></div>
        </motion.div>
        <ol aria-label="Engineering progression" className="mb-14 grid gap-7 border-y border-white/12 py-7 md:grid-cols-3 md:gap-10">
          {engineeringTimeline.map((chapter) => <li key={chapter.year} className="flex gap-4"><span className="pt-0.5 font-mono text-[10px] text-[#d7fb78]">{chapter.year}</span><div><h2 className="text-sm font-medium">{chapter.title}</h2><p className="mt-2 text-xs leading-[1.8] text-[#a0a795]">{chapter.description}</p></div></li>)}
        </ol>
        <div className="mb-6 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div><h2 className="text-xl font-medium tracking-tight">Explore the work<span className="text-[#d7fb78]">.</span></h2><p className="mt-2 text-xs leading-relaxed text-[#a0a795]">Related versions, services, and deployments share one project entry.</p></div>
          <div className="relative w-full sm:max-w-80">
            <label htmlFor="project-search" className="sr-only">Search projects or technologies</label>
            <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-3.5 h-4 w-4 text-[#a0a795]" />
            <input id="project-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search projects or tech" className="min-h-11 w-full rounded-full border border-white/15 bg-white/[0.025] py-3 pl-11 pr-11 text-xs text-[#f4f3ed] placeholder:text-[#a0a795] focus:border-[#d7fb78] focus:outline-none [&::-webkit-search-cancel-button]:appearance-none" />
            {search ? <button type="button" onClick={() => setSearch("")} aria-label="Clear project search" className="absolute right-1 top-1 flex h-9 w-9 items-center justify-center rounded-full text-[#a0a795] hover:text-[#d7fb78]"><X aria-hidden="true" className="h-3.5 w-3.5" /></button> : null}
          </div>
        </div>
        <div aria-label="Filter projects by category" role="group" className="mb-5 flex flex-wrap items-center gap-2 sm:gap-3">
          {filters.map((category) => {
            const count = projects.filter((project) => (category === "All" || project.category === category) && matchesSearch(project, query)).length;
            return <button key={category} type="button" aria-pressed={filter === category} onClick={() => setFilter(category)} className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-xs transition-colors ${filter === category ? "border-[#d7fb78] bg-[#d7fb78] text-[#10110f]" : "border-white/12 text-[#b1b5aa] hover:border-white/35 hover:text-[#f4f3ed]"}`}>{category}<span className="font-mono text-[9px] opacity-70">{String(count).padStart(2, "0")}</span></button>;
          })}
        </div>
        <div className="mb-8 flex min-h-6 items-center justify-between gap-4">
          <p aria-live="polite" aria-atomic="true" className="font-mono text-[10px] text-[#a0a795]">Showing {filtered.length} {filtered.length === 1 ? "project family" : "project families"}{filter !== "All" ? ` in ${filter.toLowerCase()}` : ""}{query ? ` matching “${search.trim()}”` : ""}</p>
          {filter !== "All" || search ? <button type="button" onClick={resetFilters} className="shrink-0 py-2 text-[11px] text-[#d7fb78] hover:underline">Reset filters</button> : null}
        </div>
        {filtered.length ? <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-20">{filtered.map((project, index) => <ProjectCard key={project.id} {...project} index={index} onSelect={setSelectedProject} />)}</div> : <div className="flex min-h-72 flex-col items-center justify-center rounded-lg border border-dashed border-white/15 px-6 text-center"><Search className="mb-5 h-7 w-7 text-[#a0a795]" aria-hidden="true" /><h3 className="text-2xl font-medium tracking-tight">No matching projects.</h3><p className="mt-3 max-w-sm text-sm leading-relaxed text-[#a0a795]">Try a different technology or explore the full collection.</p><button type="button" onClick={resetFilters} className="mt-6 rounded-full bg-[#d7fb78] px-5 py-3 text-xs font-semibold text-[#10110f]">Show all projects</button></div>}
        <div className="mt-20 flex flex-col justify-between gap-7 border-t border-white/12 pt-10 sm:flex-row sm:items-center md:mt-28">
          <p className="text-2xl font-medium tracking-[-0.035em] sm:text-3xl">What are we building next?</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 py-3 text-xs text-[#a0a795] transition-colors hover:text-[#d7fb78]">Explore GitHub <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></a>
            <Link href="/contact" className="inline-flex items-center gap-5 rounded-full bg-[#d7fb78] px-6 py-4 text-xs font-semibold text-[#10110f] transition-colors hover:bg-[#e4ffae]">Let&apos;s talk <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
      {selectedProject ? <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
    </section>
  );
}
