"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { label: "work", href: "/#work" },
  { label: "archive", href: "/projects" },
  { label: "about", href: "/about" },
  { label: "contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#070909] py-14 sm:py-16">
      <div className="portfolio-grid pointer-events-none absolute inset-0 opacity-[0.14]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/[0.07] pb-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-lime-300/20 bg-lime-300/[0.06] font-mono text-sm font-bold text-lime-300">
                EJ
              </span>
              <div>
                <p className="font-mono text-xs font-semibold text-white">elvin://build</p>
                <p className="mt-0.5 font-mono text-[9px] text-slate-600">
                  Kenya · product systems · full-stack
                </p>
              </div>
            </div>

            <h2 className="mt-7 max-w-2xl text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
              Build something that still makes sense after the demo ends.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              I work across product thinking, interface design, architecture, data,
              integrations and the reliability work that turns software into an operating system.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-slate-600">
              Navigation
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-white/[0.07] px-3.5 py-2 font-mono text-[10px] text-slate-500 transition hover:border-lime-300/25 hover:text-lime-300"
                >
                  /{item.label}
                </Link>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[10px] text-slate-400 transition hover:text-white"
              >
                GitHub <ArrowUpRight className="h-3 w-3" />
              </a>
              <span className="text-slate-800">·</span>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[10px] text-slate-400 transition hover:text-white"
              >
                LinkedIn <ArrowUpRight className="h-3 w-3" />
              </a>
              <span className="text-slate-800">·</span>
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[10px] text-lime-300 transition hover:text-lime-200"
              >
                Résumé <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3 font-mono text-[9px] uppercase tracking-[0.12em] text-slate-700 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {site.name}</p>
          <p className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(190,242,100,.7)]" />
            Next.js 16 · TypeScript · built to keep evolving
          </p>
        </div>
      </div>
    </footer>
  );
}
