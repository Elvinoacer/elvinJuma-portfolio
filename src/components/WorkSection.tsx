"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetails from "@/components/ProjectDetails";

const selectedWork = [17, 16, 18].map((id) => projects.find((project) => project.id === id)).filter((project): project is Project => Boolean(project));

export default function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section id="work" aria-labelledby="work-title" className="relative scroll-mt-20 border-t border-white/12 bg-[#10110f] py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="mb-12 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-[#93978a] md:mb-16">
          <span className="inline-flex items-center gap-3"><span className="h-1.5 w-1.5 bg-[#d7fb78]" />01 / Selected work</span><span>2025 — 2026</span>
        </div>
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <h2 id="work-title" className="text-[clamp(2.75rem,6.8vw,6rem)] font-medium leading-[1.02] tracking-[-0.065em] text-[#f4f3ed]">Ideas are good.<br /><span className="text-[#93978a]">Shipped is better.</span></h2>
          <p className="max-w-[280px] pb-1 text-sm leading-[1.85] text-[#a6aa9f]">A few things I&apos;ve taken from the first conversation to real people using them.</p>
        </motion.div>
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-20">
          {selectedWork.map((project, index) => <div key={project.id} className={index === 0 ? "md:col-span-2" : ""}><ProjectCard {...project} index={index} wide={index === 0} onSelect={setSelectedProject} /></div>)}
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-white/12 pt-8 sm:flex-row sm:items-center md:mt-20">
          <p className="font-mono text-[11px] text-[#93978a]">There&apos;s more where that came from.</p>
          <Link href="/projects" className="group inline-flex items-center gap-6 text-sm text-[#f4f3ed] transition-colors hover:text-[#d7fb78]">View all {projects.length} projects<span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-[#d7fb78] group-hover:bg-[#d7fb78] group-hover:text-[#10110f]"><ArrowUpRight className="h-5 w-5" aria-hidden="true" /></span></Link>
        </div>
      </div>
      {selectedProject ? <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
    </section>
  );
}
