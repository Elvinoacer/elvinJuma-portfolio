"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { num: "01", name: "// home", href: "#hero-section" },
  { num: "02", name: "// expertise", href: "#expertise" },
  { num: "03", name: "// work", href: "#work" },
  { num: "04", name: "// experience", href: "#experience" },
  { num: "05", name: "// contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero-section");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["hero-section", "expertise", "work", "experience", "contact"];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const topOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0f0f11]/90 backdrop-blur-xl border-b border-white/[0.06] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10">
          {/* Logo (TamalSen._ styled for ElvinJuma._) */}
          <Link
            href="/#hero-section"
            onClick={(e) => handleNavClick(e, "#hero-section")}
            className="group flex items-center cursor-link select-none"
          >
            <span className="font-mono text-2xl font-bold tracking-tight text-[#66d9ed] transition-colors group-hover:brightness-110">
              ElvinJuma<span className="text-white">.</span>
              <span className="text-[#df058d] animate-pulse">_</span>
            </span>
          </Link>

          {/* Desktop Nav with 01, 02, 03 numbers on top */}
          <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`group flex flex-col items-center font-mono cursor-link transition-colors duration-200 ${
                    isActive
                      ? "text-[#66d9ed]"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <span className="text-[10px] tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors mb-0.5">
                    {link.num}
                  </span>
                  <span className="text-[15px] font-medium tracking-tight">
                    {link.name}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition-colors hover:border-[#66d9ed] hover:text-[#66d9ed] md:hidden cursor-link"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="flex flex-col items-center justify-center gap-1.5 w-5">
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "w-5 translate-y-2 rotate-45" : "w-5"
                }`}
              />
              <span
                className={`h-0.5 bg-current transition-all duration-200 ${
                  mobileMenuOpen ? "opacity-0 w-5" : "w-4 self-end"
                }`}
              />
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "w-5 -translate-y-2 -rotate-45" : "w-5"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col bg-[#0f0f11]/98 backdrop-blur-2xl px-8 pt-32 pb-12 md:hidden justify-between"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="group flex items-baseline gap-3 py-2 font-mono"
                    >
                      <span className="text-xs text-slate-500">{link.num}</span>
                      <span
                        className={`text-2xl tracking-tight transition-colors ${
                          isActive
                            ? "text-[#66d9ed] font-bold"
                            : "text-slate-300 group-hover:text-white"
                        }`}
                      >
                        {link.name}
                      </span>
                    </a>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4 pt-6 border-t border-white/10"
            >
              <p className="font-mono text-xs text-slate-500 text-center">
                © {new Date().getFullYear()} Elvin Omondi Juma. All rights reserved.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
