"use client";

import { useEffect, useId, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import type { Project } from "@/data/projects";

// Project scope comes from the published portfolio data; no invented metrics.
const buildHighlights: Record<number, string[]> = {
  17: [
    "Live German classes from A1 to C2, with Jitsi video integration.",
    "IntaSend billing and assignment workflows in one platform.",
    "Dedicated workflows for students, teachers, and administrators, with GDPR-aware reporting.",
  ],
  16: [
    "Project portfolios and design galleries for a construction business.",
    "Client management and service inquiry workflows.",
    "A Next.js and TypeScript application with PostgreSQL, Prisma, authentication, and cloud media.",
  ],
  18: [
    "Company website and hub for the Great Thumbs product family.",
    "Products focused on hotel QR ordering, e-commerce, and the JustInTime community marketplace.",
    "Product engineering from discovery through launch, across the full stack.",
  ],
  0: [
    "Member and event management for church operations.",
    "Payment integration with IntaSend.",
    "Community engagement workflows backed by PostgreSQL and Prisma.",
  ],
};

export default function ProjectDetails({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const reduceMotion = useReducedMotion();
  const highlights = buildHighlights[project.id];

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
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#93978a]">Project notes / {project.year}</span>
          <button autoFocus type="button" onClick={onClose} aria-label="Close project details" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#f4f3ed] transition-colors hover:bg-[#d7fb78] hover:text-[#10110f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7fb78]"><X className="h-4 w-4" aria-hidden="true" /></button>
        </div>
        <div className="px-6 pb-8 pt-7 sm:px-10 sm:pb-10 sm:pt-9">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#d7fb78]">{project.category}</p>
          <h2 id={titleId} className="mt-3 max-w-2xl text-3xl font-medium leading-[1.12] tracking-[-0.045em] sm:text-[44px]">{project.title}</h2>
          <p id={descriptionId} className="mt-5 max-w-2xl text-sm leading-[1.85] text-[#b1b5aa]">{project.description}</p>
          <div className="relative mt-7 aspect-[2.1] overflow-hidden rounded border border-white/10 bg-[#252820]"><Image src={project.image} alt={`${project.title} project preview`} fill className="object-cover" sizes="(max-width: 768px) 90vw, 816px" /></div>
          <div className="mt-8 grid gap-8 sm:grid-cols-[1.4fr_1fr] sm:gap-10">
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#93978a]">{highlights ? "Inside the build" : "Project scope"}</h3>
              {highlights ? <ul className="mt-4 space-y-3">{highlights.map((highlight) => <li key={highlight} className="flex gap-3 text-sm leading-[1.7] text-[#d0d3c8]"><span className="mt-[10px] h-1 w-1 shrink-0 bg-[#d7fb78]" />{highlight}</li>)}</ul> : <p className="mt-4 text-sm leading-[1.8] text-[#d0d3c8]">{project.description}</p>}
              {project.outcome ? <p className="mt-5 border-l border-[#d7fb78] pl-4 text-sm leading-[1.7] text-[#d7fb78]">{project.outcome}</p> : null}
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#93978a]">Built with</h3>
              <div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/12 px-3 py-1.5 font-mono text-[10px] text-[#c4c8bc]">{tag}</span>)}</div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/12 pt-6">
            <span className="font-mono text-[10px] text-[#93978a]">Explore the product for yourself.</span>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 rounded-full bg-[#d7fb78] px-5 py-3 text-xs font-semibold text-[#10110f] transition-colors hover:bg-[#e4ffae]" aria-label={`Visit ${project.title} live site (opens in a new tab)`}>Visit live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </div>
      </motion.div>
    </dialog>
  );
}
