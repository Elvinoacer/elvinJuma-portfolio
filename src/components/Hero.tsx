"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  CircleDot,
  GitBranch,
  Layers3,
  MapPin,
  Radio,
  TerminalSquare,
} from "lucide-react";
import { site } from "@/data/site";
import { githubProfile } from "@/data/github";
import { projects } from "@/data/projects";

const currentBuild = projects[0];

const buildLog = [
  {
    label: "now",
    value: "Afyvia",
    detail: "multi-tenant pharmacy network",
  },
  {
    label: "mode",
    value: "Founder + engineer",
    detail: "product, architecture, reliability",
  },
  {
    label: "focus",
    value: "Systems > screens",
    detail: "billing, realtime, data, operations",
  },
];

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative min-h-[100svh] overflow-hidden bg-[#070909] pt-28 sm:pt-32"
    >
      <div className="portfolio-grid pointer-events-none absolute inset-0 opacity-[0.2]" />
      <div className="pointer-events-none absolute left-[8%] top-[18%] h-80 w-80 rounded-full bg-cyan-300/[0.045] blur-[110px]" />
      <div className="pointer-events-none absolute right-[2%] top-[8%] h-96 w-96 rounded-full bg-lime-300/[0.04] blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[70rem] -translate-x-1/2 bg-gradient-to-t from-lime-300/[0.035] to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-7rem)] max-w-7xl flex-col justify-between px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid flex-1 items-center gap-12 py-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-lime-300">
                <Radio className="h-3 w-3" />
                shipping production software
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 font-mono text-[10px] text-slate-500">
                <MapPin className="h-3 w-3" />
                Kenya · UTC+3
              </span>
            </div>

            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">
              {site.title}
            </p>

            <h1 className="mt-4 max-w-4xl text-[clamp(3.2rem,8vw,7rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-white">
              I build software that has to work
              <span className="relative ml-3 inline-block text-lime-300">
                outside the demo.
                <span className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-lime-300 to-transparent" />
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              I design, architect and ship products for real operating environments:
              pharmacies, marketplaces, education, payments, realtime workflows and
              local businesses. The interface matters, but the system underneath it
              matters more.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-3 text-sm font-semibold text-[#07100a] transition hover:bg-lime-200"
              >
                Explore the systems
                <ArrowDownRight className="h-4 w-4" />
              </Link>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.025] px-5 py-3 text-sm text-slate-300 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                Inspect GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-[10px] text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <CircleDot className="h-3 w-3 text-lime-300" />
                {currentBuild.status}
              </span>
              <span>{currentBuild.title}</span>
              <span>{currentBuild.year}</span>
              <span>{currentBuild.complexity}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-10 rounded-full bg-cyan-300/[0.025] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#0b0e0e]/95 shadow-[0_35px_100px_rgba(0,0,0,0.45)]">
              <div className="flex items-center justify-between border-b border-white/[0.07] bg-white/[0.02] px-5 py-4">
                <div className="flex items-center gap-2">
                  <TerminalSquare className="h-4 w-4 text-lime-300" />
                  <span className="font-mono text-[11px] text-slate-400">
                    ~/elvin/build-log
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-rose-400/70" />
                  <span className="h-2 w-2 rounded-full bg-amber-300/70" />
                  <span className="h-2 w-2 rounded-full bg-lime-300/70" />
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-lime-300">
                      current build
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-white">
                      Afyvia
                    </h2>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                      One pharmacy network spanning discovery, storefronts, services,
                      prescriptions, verification, billing and medicine operations.
                    </p>
                  </div>
                  <span className="rounded-full border border-lime-300/20 bg-lime-300/[0.06] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-lime-300">
                    active
                  </span>
                </div>

                <div className="mt-6 grid gap-2">
                  {buildLog.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + index * 0.07 }}
                      className="grid grid-cols-[4rem_1fr] gap-4 rounded-xl border border-white/[0.055] bg-white/[0.02] px-3.5 py-3"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-600">
                        {item.label}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-slate-200">{item.value}</p>
                        <p className="mt-0.5 text-[11px] text-slate-600">{item.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/[0.06] bg-[#080a0a] p-4">
                    <Braces className="h-4 w-4 text-cyan-300" />
                    <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600">
                      core
                    </p>
                    <p className="mt-1 text-sm text-slate-200">Next.js 16 + React 19</p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-[#080a0a] p-4">
                    <Layers3 className="h-4 w-4 text-lime-300" />
                    <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600">
                      data
                    </p>
                    <p className="mt-1 text-sm text-slate-200">Postgres + Prisma</p>
                  </div>
                </div>

                <div className="mt-3 rounded-2xl border border-white/[0.06] bg-[#080a0a] p-4">
                  <div className="flex items-center gap-2">
                    <GitBranch className="h-4 w-4 text-violet-300" />
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600">
                      shipping cockpit
                    </p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Vercel", "Cloudflare", "GitHub", "Codex", "DigitalOcean"].map((tool) => (
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
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="grid grid-cols-2 border-t border-white/[0.07] sm:grid-cols-4"
        >
          {[
            { value: projects.length, label: "curated systems" },
            { value: githubProfile.totalRepos, label: "GitHub repositories" },
            { value: githubProfile.totalContributions.toLocaleString(), label: "contributions snapshot" },
            { value: "2024→26", label: "build progression" },
          ].map((item, index) => (
            <div
              key={item.label}
              className={`py-5 ${index % 2 === 0 ? "pr-4" : "pl-4"} sm:px-5 sm:first:pl-0`}
            >
              <p className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
