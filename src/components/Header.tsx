"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site } from "@/data/site";

const navLinks = [
  { label: "work", href: "/#work" },
  { label: "archive", href: "/projects" },
  { label: "about", href: "/about" },
  { label: "contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/#work") return pathname === "/";
    return pathname === href;
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "border-b border-white/[0.07] bg-[#070909]/90 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-lime-300/20 bg-lime-300/[0.06] font-mono text-sm font-bold text-lime-300">
              EJ
            </span>
            <div className="hidden sm:block">
              <p className="font-mono text-[11px] font-semibold tracking-[-0.02em] text-white">
                elvin://build
              </p>
              <p className="mt-0.5 font-mono text-[9px] text-slate-600">
                founding engineer · kenya
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 font-mono text-[11px] transition ${
                  isActive(item.href)
                    ? "bg-white/[0.07] text-lime-300"
                    : "text-slate-500 hover:bg-white/[0.035] hover:text-slate-200"
                }`}
              >
                /{item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-600">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(190,242,100,0.8)]" />
              available for selected work
            </span>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.09] px-3.5 py-2 font-mono text-[10px] text-slate-300 transition hover:border-lime-300/25 hover:text-white"
            >
              GitHub
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] text-slate-300 md:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-[#070909] px-4 pb-8 pt-28 md:hidden"
          >
            <div className="portfolio-grid absolute inset-0 opacity-[0.18]" />
            <div className="relative mx-auto flex h-full max-w-2xl flex-col justify-between">
              <div className="space-y-2">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-5"
                    >
                      <span className="font-mono text-lg text-white">/{item.label}</span>
                      <span className="font-mono text-[10px] text-slate-600">
                        0{index + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-white/[0.07] pt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-lime-300">
                  Current build
                </p>
                <p className="mt-2 text-xl font-semibold text-white">Afyvia</p>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Connected neighborhood pharmacy infrastructure.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
