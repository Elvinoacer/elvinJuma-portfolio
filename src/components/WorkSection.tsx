"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { projects, Project, ProjectCategory } from "@/data/projects";

type FilterTab = "All" | ProjectCategory;

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: FilterTab[] = ["All", "Product", "Platform", "Education", "Commerce", "Experiment"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const featured = projects.find((p) => p.id === 18) || projects[0];

  return (
    <section
      id="work"
      className="relative overflow-hidden py-24 sm:py-32 border-t border-white/[0.05] bg-[#0f0f11]"
    >
      <div className="pointer-events-none absolute top-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-[#2c49d8]/5 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-1/3 -right-20 h-[500px] w-[500px] rounded-full bg-[#66d9ed]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top Header: 2 Columns */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 items-center mb-20">
          {/* Left Column: Big "My Work" Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl leading-none">
              My <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                Work
              </span>
            </h2>
            <p className="mt-8 text-base text-slate-300 sm:text-lg leading-relaxed max-w-lg">
              Deployed scalable education, commerce, operations, and SaaS web &amp; realtime apps
              using Next.js 16, React 19, and PostgreSQL. Collaborated in 18+ projects with
              businesses and founders worldwide.
            </p>
          </motion.div>

          {/* Right Column: Featured Project Highlight with Authentic Right Side Arrow */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#15161c] p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:border-[#66d9ed]/30 hover:shadow-[0_0_35px_-5px_rgba(102,217,237,0.15)]">
              {/* Arrow and Featured Badge */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-6 w-6 shrink-0 opacity-80 filter brightness-0 invert">
                    <Image
                      src="/images/right-side-arrow.png"
                      alt="Arrow"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-mono text-xs text-[#66d9ed] uppercase tracking-widest font-semibold">
                    Featured Project
                  </span>
                </div>
                <span className="font-mono text-[11px] text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/5">
                  2025–2026
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-[#66d9ed] transition-colors sm:text-3xl">
                {featured.title}
              </h3>

              <p className="mt-3 text-sm text-slate-400 line-clamp-2 leading-relaxed">
                {featured.description}
              </p>

              {/* Preview Image with Glow */}
              <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-transparent to-transparent" />
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {featured.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/5 bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#66d9ed] bg-[#66d9ed]/10 px-5 py-2 font-mono text-xs font-semibold text-[#66d9ed] transition-all hover:bg-[#66d9ed] hover:text-[#0f0f11] hover:shadow-[0_0_20px_rgba(102,217,237,0.4)] cursor-link"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filter Navigation Bar (Tamal Sen Ohio-Style) */}
        <div className="mb-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-white/[0.08] pb-4 font-mono text-xs">
          <span className="text-slate-400 font-semibold uppercase tracking-wider">
            Filter by:
          </span>

          {categories.map((cat, i) => {
            const count =
              cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;
            const isActive = activeFilter === cat;

            return (
              <span key={cat} className="inline-flex items-center gap-1.5">
                {i > 0 && <span className="text-slate-600">/</span>}
                <button
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={`transition-colors cursor-link py-1 ${
                    isActive
                      ? "text-[#66d9ed] font-bold border-b border-[#66d9ed]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span className="font-medium">{cat}</span>{" "}
                  <span className="text-[10px] text-slate-500">[{count.toString().padStart(2, "0")}]</span>
                </button>
              </span>
            );
          })}
        </div>

        {/* Asymmetric / Masonry Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              // Asymmetric column widths: alternating 4 cols (1/3) and 8 cols (2/3) for rhythm
              const isDouble = index % 5 === 2 || index % 5 === 4;
              const colSpan = isDouble ? "lg:col-span-8" : "lg:col-span-4 sm:col-span-1";

              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#14151a] transition-all duration-300 hover:border-[#66d9ed]/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between ${colSpan}`}
                >
                  {/* Image container */}
                  <div
                    className={`relative overflow-hidden w-full ${
                      isDouble ? "aspect-[21/10] sm:aspect-[2.2/1]" : "aspect-[16/11]"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes={
                        isDouble
                          ? "(max-width: 1024px) 100vw, 800px"
                          : "(max-width: 1024px) 100vw, 400px"
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14151a] via-[#14151a]/30 to-transparent" />

                    {/* Top right badges */}
                    <div className="absolute right-3.5 top-3.5 flex items-center gap-2">
                      <span className="rounded-full border border-white/10 bg-black/60 px-2.5 py-0.5 font-mono text-[10px] text-slate-300 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-mono text-[11px] text-[#66d9ed] uppercase tracking-wider">
                          {project.category}
                        </span>
                        {project.year && (
                          <span className="font-mono text-[10px] text-slate-500">
                            {project.year}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-white transition-colors group-hover:text-[#66d9ed] line-clamp-1">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-slate-400 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Footer / Show project CTA */}
                    <div className="mt-5 flex items-center justify-between pt-4 border-t border-white/[0.05]">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded bg-white/[0.03] px-1.5 py-0.5 font-mono text-[10px] text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#66d9ed] transition-transform group-hover:translate-x-0.5 cursor-link"
                      >
                        <span>Show project</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#15161c] p-6 sm:p-8 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-colors cursor-link"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950 mb-6">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-[#66d9ed] uppercase tracking-wider">
                <span>{selectedProject.category}</span>
                <span>•</span>
                <span>{selectedProject.year || "2025"}</span>
              </div>

              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                {selectedProject.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {selectedProject.description}
              </p>

              {selectedProject.outcome && (
                <div className="mt-4 rounded-xl border border-[#66d9ed]/20 bg-[#66d9ed]/5 p-3.5">
                  <p className="font-mono text-xs text-[#66d9ed]">
                    <strong className="text-white">Outcome:</strong> {selectedProject.outcome}
                  </p>
                </div>
              )}

              <div className="mt-6">
                <p className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-2">
                  Technologies Used
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-end gap-3 pt-6 border-t border-white/10">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full px-5 py-2.5 font-mono text-xs text-slate-400 hover:text-white transition-colors cursor-link"
                >
                  Close
                </button>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#66d9ed] px-6 py-2.5 font-mono text-xs font-bold text-[#0f0f11] hover:shadow-[0_0_20px_#66d9ed] transition-all cursor-link"
                >
                  <span>Visit Live Project</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
