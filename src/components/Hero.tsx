"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { site } from "@/data/site";
import { githubProfile } from "@/data/github";
import { fadeUp, stagger } from "@/lib/motion";

const stats = [
  {
    value: `${githubProfile.totalContributions.toLocaleString()}+`,
    label: "GitHub contributions",
    sub: "Last 12 months",
  },
  {
    value: String(githubProfile.totalRepos),
    label: "Repositories",
    sub: "Public + private",
  },
  {
    value: `${site.yearsShipping}`,
    label: "Years shipping",
    sub: "Production software",
  },
  {
    value: "18+",
    label: "Shipped products",
    sub: "Live on the web",
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={fadeUp} className="mb-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              {site.availability}
            </span>
            <span className="font-mono text-[11px] tracking-wide text-slate-500 sm:text-xs">
              {site.location} · {site.company}
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-slate-500 sm:text-sm"
          >
            Founding Engineer · Full-Stack
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.05]"
          >
            Elvin Omondi
            <span className="text-emerald-400">.</span>
            <span className="mt-2 block text-2xl font-normal text-slate-400 sm:text-3xl md:text-4xl lg:text-[2.5rem]">
              I ship software people actually use.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {site.tagline}{" "}
            <span className="text-slate-300">
              {githubProfile.totalContributions.toLocaleString()} contributions
            </span>{" "}
            on GitHub in the last year — most of them in production systems, not
            toy repos.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-emerald-400 hover:shadow-[0_0_40px_-10px_rgba(52,211,153,0.55)]"
            >
              View selected work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-slate-200 transition-all hover:border-white/20 hover:bg-white/[0.06]"
            >
              Start a conversation
            </Link>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-2 py-3.5 text-sm text-slate-500 transition-colors hover:text-slate-200 sm:ml-1"
            >
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-4 sm:gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-5"
            >
              <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-slate-300 sm:text-sm">
                {stat.label}
              </p>
              <p className="mt-0.5 text-[11px] text-slate-500">{stat.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 transition-colors hover:text-slate-400 sm:flex"
        aria-label="Scroll to work"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
      </motion.a>
    </section>
  );
}
