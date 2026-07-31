"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems, site } from "@/data/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/[0.06] bg-[#030712]/80 backdrop-blur-xl py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="group flex items-center gap-2.5 focus-ring rounded-lg">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 font-mono text-sm font-bold text-slate-950 shadow-[0_0_24px_-6px_rgba(52,211,153,0.5)] transition-transform group-hover:scale-105">
              E
            </span>
            <span className="text-[15px] font-semibold tracking-tight text-slate-100">
              Elvin<span className="text-emerald-400">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            <Link
              href="/"
              className={`rounded-lg px-3.5 py-2 text-sm transition-colors ${
                pathname === "/"
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-100"
              }`}
            >
              Home
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-lg px-3.5 py-2 text-sm transition-colors ${
                  isActive(item.href)
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-white/[0.06]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-emerald-400 transition-all hover:border-emerald-500/40 hover:bg-emerald-500 hover:text-slate-950"
            >
              Resume
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 transition-colors hover:text-white md:hidden focus-ring"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span className="flex w-5 flex-col items-end gap-1.5">
              <span
                className={`h-px bg-current transition-all duration-300 ${
                  isOpen ? "w-5 translate-y-[3.5px] rotate-45" : "w-5"
                }`}
              />
              <span
                className={`h-px bg-current transition-all duration-300 ${
                  isOpen ? "w-5 opacity-0" : "w-3.5"
                }`}
              />
              <span
                className={`h-px bg-current transition-all duration-300 ${
                  isOpen ? "w-5 -translate-y-[3.5px] -rotate-45" : "w-2.5"
                }`}
              />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col bg-[#030712]/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6">
              {[
                { name: "Home", href: "/" },
                ...navItems,
              ].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-2xl font-semibold tracking-tight ${
                      isActive(item.href) ? "text-emerald-400" : "text-slate-200"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6"
              >
                <Link
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950"
                >
                  Download Resume
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
