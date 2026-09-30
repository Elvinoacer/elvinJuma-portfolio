"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = Project & {
  index?: number;
  wide?: boolean;
  onSelect?: (project: Project) => void;
};

const surfaces: Record<number, string> = {
  17: "bg-[#292d3d]",
  16: "bg-[#2c332b]",
  18: "bg-[#283136]",
};

export default function ProjectCard({ index = 0, wide = false, onSelect, ...project }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const preview = (
    <div className={`relative flex aspect-[1.38] items-center justify-center overflow-hidden rounded-[3px] px-[7%] pb-[8%] pt-[13%] sm:aspect-[1.55] ${wide ? "md:aspect-[2.2] md:px-[10%] md:pb-[5%] md:pt-[7%]" : ""} ${surfaces[project.id] || "bg-[#242821]"}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_10%,rgba(255,255,255,0.08),transparent_70%)]" />
      <div className="absolute inset-x-5 top-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.13em] text-white/65 sm:inset-x-7 sm:top-6">
        <span>{project.category} / {project.year}</span>
        <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="relative w-full -rotate-[1.5deg] overflow-hidden rounded-md border border-white/15 bg-[#121410] shadow-[0_20px_55px_-10px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-out motion-safe:group-hover:rotate-0 motion-safe:group-hover:scale-[1.035]">
        <div className="flex h-6 items-center gap-1 border-b border-white/10 bg-[#1b1e1c] px-2.5 sm:h-8 sm:px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="mx-auto pr-7 font-mono text-[8px] text-white/40 sm:text-[9px]">{new URL(project.link).hostname}</span>
        </div>
        <div className="relative aspect-[2.1]">
          <Image src={project.image} alt={`${project.title} — project preview`} fill className="object-cover" sizes={wide ? "(max-width: 768px) 85vw, (max-width: 1440px) 75vw, 1060px" : "(max-width: 768px) 85vw, (max-width: 1440px) 40vw, 550px"} />
        </div>
      </div>
      <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#10110f]/45 text-[#f4f3ed] backdrop-blur-sm transition-colors group-hover:border-[#d7fb78] group-hover:bg-[#d7fb78] group-hover:text-[#10110f] sm:bottom-6 sm:right-6 sm:h-12 sm:w-12">
        <MoveUpRight className="h-5 w-5" aria-hidden="true" />
      </span>
    </div>
  );

  return (
    <motion.article initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="group flex h-full flex-col">
      {onSelect ? (
        <button type="button" onClick={() => onSelect(project)} aria-label={`Explore ${project.title}`} className="block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#d7fb78]">{preview}</button>
      ) : (
        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} (opens in a new tab)`} className="block focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#d7fb78]">{preview}</a>
      )}
      <div className={`flex flex-1 flex-col gap-4 pb-1 pt-6 ${wide ? "md:flex-row md:justify-between md:gap-14 md:pt-8" : ""}`}>
        <div className={wide ? "md:max-w-[48%]" : ""}>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#93978a]">{project.category} <span className="px-1 text-[#93978a]/50">/</span> {project.tags.slice(0, 2).join(" + ")}</p>
          <h3 className={`text-[23px] font-medium leading-[1.22] tracking-[-0.04em] text-[#f4f3ed] ${wide ? "sm:text-[36px]" : "sm:text-[28px]"}`}>{project.title}</h3>
        </div>
        <div className={`flex flex-1 flex-col ${wide ? "md:max-w-[43%]" : ""}`}>
          <p className="max-w-xl flex-1 text-sm leading-[1.8] text-[#a6aa9f]">{project.description}</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
            {onSelect ? <button type="button" onClick={() => onSelect(project)} className="inline-flex items-center gap-2 text-xs font-medium text-[#f4f3ed] underline decoration-white/25 underline-offset-[5px] transition-colors hover:text-[#d7fb78]">Explore project <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></button> : null}
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[#93978a] transition-colors hover:text-[#d7fb78]" aria-label={`Visit ${project.title} live site (opens in a new tab)`}>Live site <ArrowUpRight className="h-3 w-3" aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
