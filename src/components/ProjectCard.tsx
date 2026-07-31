"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
  category,
  year,
  outcome,
}: Project) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0b1220]/70 transition-colors hover:border-emerald-500/25"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent opacity-80" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {category && (
            <span className="rounded-full border border-white/10 bg-black/50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-300 backdrop-blur">
              {category}
            </span>
          )}
          {year && (
            <span className="rounded-full border border-white/10 bg-black/50 px-2 py-0.5 font-mono text-[10px] text-slate-300 backdrop-blur">
              {year}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-emerald-300 sm:text-xl">
            {title}
          </h3>
          <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-500 transition-colors group-hover:border-emerald-500/40 group-hover:text-emerald-400">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>

        {outcome && (
          <p className="mt-1 text-xs font-medium text-emerald-400/80">
            {outcome}
          </p>
        )}

        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-400">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/[0.05] pt-4">
          {tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/[0.05] bg-white/[0.03] px-2 py-0.5 text-[11px] text-slate-400"
            >
              {tag}
            </span>
          ))}
          {tags.length > 5 && (
            <span className="px-1 text-[11px] text-slate-600">
              +{tags.length - 5}
            </span>
          )}
        </div>

        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500/90 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
        >
          View project
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </motion.article>
  );
}
