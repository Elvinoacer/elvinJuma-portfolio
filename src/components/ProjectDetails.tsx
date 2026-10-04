"use client";

import { useEffect, useId, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, X } from "lucide-react";
import type { Project } from "@/data/projects";
import { getImageMeta } from "@/data/image-meta";
import { useMotionEnabled } from "@/lib/motion-preference";

export default function ProjectDetails({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const reduceMotion = !useMotionEnabled();
  const imageMeta = getImageMeta(project.image);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus({ preventScroll: true });
    };
  }, []);

  return (
    <dialog ref={dialogRef} aria-labelledby={titleId} aria-describedby={descriptionId} onCancel={(event) => { event.preventDefault(); onClose(); }} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }} className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-4xl overflow-y-auto overscroll-contain rounded-lg border border-white/15 bg-[#171915] p-0 text-[#f4f3ed] shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-md">
      <motion.div initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/12 bg-[#171915]/95 px-6 py-3 backdrop-blur-md sm:px-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#a0a795]">Inside the build / {project.year}</span>
          <button autoFocus type="button" onClick={onClose} aria-label="Close project details" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#f4f3ed] transition-colors hover:bg-[#d7fb78] hover:text-[#10110f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7fb78]"><X className="h-4 w-4" aria-hidden="true" /></button>
        </div>
        <div className="px-6 pb-8 pt-7 sm:px-10 sm:pb-10 sm:pt-9">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#d7fb78]">{project.category}{project.role ? ` / ${project.role}` : ""}</p>
          <h2 id={titleId} className="mt-3 max-w-2xl text-3xl font-medium leading-[1.12] tracking-[-0.045em] sm:text-[44px]">{project.title}</h2>
          <p id={descriptionId} className="mt-5 max-w-2xl text-sm leading-[1.85] text-[#b1b5aa]">{project.description}</p>
          {project.status ? <p className="mt-5 border-l border-[#d7fb78]/50 pl-4 text-xs leading-relaxed text-[#bdc9ad]"><span className="mr-2 font-mono text-[9px] uppercase tracking-wider text-[#91a07e]">Project status</span>{project.status}</p> : null}
          <div style={project.imageWidth < project.imageHeight ? { height: "min(65dvh, 600px)" } : { aspectRatio: `${project.imageWidth} / ${project.imageHeight}` }} className="relative mt-7 overflow-hidden rounded border border-white/10 bg-[#111315]"><Image src={project.image} alt={project.imageAlt} fill placeholder={imageMeta ? "blur" : "empty"} blurDataURL={imageMeta?.blurDataURL} className="object-contain" sizes="(max-width: 768px) 90vw, 816px" /></div>
          {project.imageCaption ? <p className="mt-3 font-mono text-[10px] text-[#a0a795]">{project.imageCaption}</p> : null}
          {project.imagePlaceholder ? <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.1em] text-[#a0a795]">Project screenshot coming soon</p> : null}
          {project.metrics?.length ? <div className="mt-7 border-y border-white/12 py-5"><p className="font-mono text-[9px] uppercase tracking-wider text-[#91a07e]">Source-code scope / reviewed 3 Oct 2026</p><dl className="mt-4 grid grid-cols-2 gap-5">{project.metrics.map((metric) => <div key={metric.label}><dd className="text-3xl font-medium tracking-tight text-[#d7fb78]">{metric.value}</dd><dt className="mt-2 text-xs text-[#abb99a]">{metric.label}</dt></div>)}</dl><p className="mt-4 text-[10px] leading-relaxed text-[#91a07e]">Schema and route counts describe implementation breadth, not usage or runtime performance.</p></div> : null}
          {project.period ? <p className="mt-5 font-mono text-[10px] leading-relaxed text-[#a0a795]">Repository activity: {project.period} · Kenya time</p> : null}
          <div className="mt-8 grid gap-8 sm:grid-cols-[1.4fr_1fr] sm:gap-10">
            <div className="space-y-7">
              <div><h3 className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#d7fb78]">The problem</h3><p className="mt-3 text-sm leading-[1.8] text-[#d0d3c8]">{project.challenge}</p></div>
              <div><h3 className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#d7fb78]">Engineering approach</h3><p className="mt-3 text-sm leading-[1.8] text-[#d0d3c8]">{project.architecture}</p></div>
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#d7fb78]">What I built</h3>
                <ul className="mt-4 space-y-3">{project.highlights.map((highlight) => <li key={highlight} className="flex gap-3 text-sm leading-[1.7] text-[#d0d3c8]"><span aria-hidden="true" className="mt-[10px] h-1 w-1 shrink-0 bg-[#d7fb78]" />{highlight}</li>)}</ul>
              </div>
              {project.outcome ? <p className="border-l border-[#d7fb78] pl-4 text-sm leading-[1.7] text-[#d7fb78]">{project.outcome}</p> : null}
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#a0a795]">Stack &amp; scope</h3>
              <div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/12 px-3 py-1.5 font-mono text-[10px] text-[#c4c8bc]">{tag}</span>)}</div>
              {project.repositories && project.repositories.length > 1 ? <div className="mt-8">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#a0a795]">Related repositories</h3>
                <ul className="mt-3 space-y-1">{project.repositories.map((repository) => <li key={repository}><a href={`https://github.com/Elvinoacer/${repository}`} target="_blank" rel="noopener noreferrer" className="inline-flex max-w-full items-start gap-2 py-2 text-xs leading-relaxed text-[#c4c8bc] transition-colors hover:text-[#d7fb78]" aria-label={`View ${repository} on GitHub (opens in a new tab)`}><span className="break-all">{repository}</span><ArrowUpRight className="mt-0.5 h-3 w-3 shrink-0" aria-hidden="true" /></a></li>)}</ul>
              </div> : null}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-white/12 pt-6">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 py-3 text-xs text-[#d0d3c8] transition-colors hover:text-[#d7fb78]" aria-label={`View ${project.title} source on GitHub (opens in a new tab)`}><Github className="h-4 w-4" aria-hidden="true" />View source on GitHub <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></a>
            {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 rounded-full bg-[#d7fb78] px-5 py-3 text-xs font-semibold text-[#10110f] transition-colors hover:bg-[#e4ffae]" aria-label={`Visit ${project.title} live site (opens in a new tab)`}>Visit live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a> : null}
          </div>
        </div>
      </motion.div>
    </dialog>
  );
}
