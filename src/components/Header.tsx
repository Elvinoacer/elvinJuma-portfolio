"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-lg border px-3 py-2.5 transition sm:px-4 ${
          scrolled
            ? "border-white/10 bg-[#080a0e]/86 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "border-white/8 bg-white/[0.035] backdrop-blur-md"
        }`}
      >
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#f1d99f] text-sm font-black text-[#11100c]">
            E
          </span>
          <span className="text-sm font-semibold tracking-tight text-white sm:text-base">
            Elvin Omondi
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-400 transition hover:bg-white/[0.055] hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Link
          href="/images/Elvin-Resume-template.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-md bg-[#f1d99f] px-4 py-2 text-sm font-bold text-[#11100c] transition hover:bg-white md:inline-flex"
        >
          Resume
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-2 max-w-7xl rounded-lg border border-white/10 bg-[#0b0f15]/96 p-2 shadow-2xl backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.055] hover:text-white"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/images/Elvin-Resume-template.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-1 block rounded-md bg-[#f1d99f] px-3 py-2.5 text-center text-sm font-bold text-[#11100c]"
            >
              Resume
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
