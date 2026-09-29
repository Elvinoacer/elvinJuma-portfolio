"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, CalendarDays, Layers3, Wrench } from "lucide-react";
import type { Project, ProjectTone } from "@/data/projects";

const toneStyles: Record<ProjectTone, { shell: string; glow: string; accent: string }> = {
  lime: {
    shell: "from-lime-400/18 via-emerald-400/5 to-transparent",
    glow: "bg-lime-300/25",
    accent: "text-lime-300",
  },
  cyan: {
    shell: "from-cyan-400/18 via-sky-400/5 to-transparent",
    glow: "bg-cyan-300/25",
    accent: "text-cyan-300",
  },
  violet: {
    shell: "from-violet-400/18 via-fuchsia-400/5 to-transparent",
    glow: "bg-violet-300/25",
    accent: "text-violet-300",
  },
  amber: {
    shell: "from-amber-400/18 via-orange-400/5 to-transparent",
    glow: "bg-amber-300/25",
    accent: "text-amber-300",
  },
  rose: {
    shell: "from-rose-400/18 via-pink-400/5 to-transparent",
    glow: "bg-rose-300/25",
    accent: "text-rose-300",
  },
};

type ProjectCardProps = Project & {
  onOpen?: () => void;
  compact?: boolean;
};

export default function ProjectCard({
  title,
  description,
  image,
  visualLabel,
  tags,
  tools,
  link,
  category,
  year,
  lastActivity,
  status,
  complexity,
  role,
  outcome,
  tone = "cyan",
  onOpen,
  compact = false,
}: ProjectCardProps) {
  const toneStyle = toneStyles[tone];

  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.22 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.65rem] border border-white/[0.08] bg-[#0c1010]/92 shadow-[0_20px_70px_rgba(0,0,0,0.2)] transition-all hover:border-white/[0.16]"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.06] bg-[#090b0b]">
        {image ? (
          <>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080a0a] via-transparent to-black/20" />
          </>
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${toneStyle.shell}`}
            aria-hidden="true"
          >
            <div className="portfolio-grid absolute inset-0 opacity-35" />
            <div className={`absolute -right-12 -top-16 h-44 w-44 rounded-full blur-3xl ${toneStyle.glow}`} />
            <div className="absolute inset-x-6 bottom-6">
              <p className={`font-mono text-[10px] uppercase tracking-[0.28em] ${toneStyle.accent}`}>
                {visualLabel ?? "SYSTEM / BUILD LOG"}
              </p>
              <p className="mt-3 max-w-sm text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                {title}
              </p>
            </div>
          </div>
        )}

        <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-3">
          <span className="rounded-full border border-white/10 bg-black/55 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/80 backdrop-blur-lg">
            {status}
          </span>
          <span className="rounded-full border border-white/10 bg-black/55 px-2.5 py-1 font-mono text-[10px] text-white/70 backdrop-blur-lg">
            {complexity}
          </span>
        </div>
      </div>

      <div className={`flex flex-1 flex-col ${compact ? "p-5" : "p-5 sm:p-6"}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className={`font-mono text-[10px] uppercase tracking-[0.18em] ${toneStyle.accent}`}>
              {category}
            </p>
            <h3 className="mt-1 text-xl font-semibold tracking-[-0.025em] text-white sm:text-[1.35rem]">
              {title}
            </h3>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title}`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3 w-3" />
            {year}
          </span>
          {lastActivity && (
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              iterated {lastActivity}
            </span>
          )}
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-400">{description}</p>

        {outcome && (
          <div className="mt-4 rounded-2xl border border-white/[0.06] bg-white/[0.025] px-3.5 py-3">
            <p className="text-[11px] font-medium leading-5 text-slate-300">
              <span className={toneStyle.accent}>↳</span> {outcome}
            </p>
          </div>
        )}

        <div className="mt-5 grid gap-3 border-t border-white/[0.06] pt-4 sm:grid-cols-2">
          <div>
            <div className="mb-2 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] text-slate-600">
              <Layers3 className="h-3 w-3" />
              Stack
            </div>
            <div className="flex flex-wrap gap-1.5">
              {tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-white/[0.04] px-2 py-1 font-mono text-[10px] text-slate-400"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 4 && (
                <span className="px-1 py-1 font-mono text-[10px] text-slate-600">
                  +{tags.length - 4}
                </span>
              )}
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] text-slate-600">
              <Wrench className="h-3 w-3" />
              Tools
            </div>
            <div className="flex flex-wrap gap-1.5">
              {tools.slice(0, 3).map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-white/[0.05] px-2 py-1 font-mono text-[10px] text-slate-500"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto flex items-end justify-between gap-4 pt-5">
          <div className="min-w-0">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-600">My role</p>
            <p className="mt-1 truncate text-xs text-slate-300">{role}</p>
          </div>

          {onOpen ? (
            <button
              type="button"
              onClick={onOpen}
              className={`shrink-0 font-mono text-[11px] font-semibold transition hover:text-white ${toneStyle.accent}`}
            >
              System brief →
            </button>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`shrink-0 font-mono text-[11px] font-semibold transition hover:text-white ${toneStyle.accent}`}
            >
              Live project →
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
