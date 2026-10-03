"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { fadeUp } from "@/lib/motion";

export default function ProjectsPreview() {
  return (
    <section id="work" className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" />
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-emerald-500/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-emerald-400/90">
              Selected work
            </p>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Software for real workflows.
            </h2>
          </motion.div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-emerald-400"
          >
            All projects
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0b1220]/60 transition-colors hover:border-emerald-500/25 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  index === 0 ? "aspect-[21/9] sm:aspect-[2.4/1]" : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-contain transition-transform duration-700"
                  sizes={
                    index === 0
                      ? "(max-width: 1024px) 100vw, 1100px"
                      : "(max-width: 1024px) 100vw, 550px"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />
                <div className="absolute right-4 top-4 flex items-center gap-2">
                  {project.year && (
                    <span className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[10px] text-slate-300 backdrop-blur">
                      {project.year}
                    </span>
                  )}
                  <span className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-emerald-300 backdrop-blur">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="relative p-5 sm:p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-emerald-300 sm:text-xl">
                      {project.title}
                    </h3>
                    {project.outcome && (
                      <p className="mt-1 text-xs font-medium text-emerald-400/80 sm:text-sm">
                        {project.outcome}
                      </p>
                    )}
                  </div>
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all group-hover:border-emerald-500/40 group-hover:text-emerald-400">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, index === 0 ? 6 : 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[0.05] bg-white/[0.03] px-2 py-0.5 text-[11px] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={project.liveUrl ?? project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 focus-ring rounded-2xl"
              >
                <span className="sr-only">Open {project.title}</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
