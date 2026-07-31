"use client";

import Link from "next/link";
import { site, navItems } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#030712]">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 hidden -translate-x-1/2 select-none sm:block">
        <p className="text-[12vw] font-bold leading-none tracking-tighter text-white/[0.02]">
          ELVIN
        </p>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mb-12 grid gap-10 border-b border-white/[0.06] pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Link href="/" className="mb-4 inline-flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 font-mono text-sm font-bold text-slate-950">
                E
              </span>
              <span className="text-lg font-semibold text-slate-100">
                Elvin<span className="text-emerald-400">.</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Founding engineer building production software for education,
              commerce, and operations — from Eldoret to the world.
            </p>
            <p className="mt-4 font-mono text-xs text-slate-500">
              {site.company}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Navigate
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                >
                  Home
                </Link>
              </li>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Connect
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={site.email ? `mailto:${site.email}` : "#"}
                  className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={site.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
          <p>© {year} {site.name}. Built with care in Kenya.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Available for work
            </span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <span className="hidden sm:inline">Next.js · TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
