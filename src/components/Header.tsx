"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-2.5 sm:py-3 md:py-4 shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-3 sm:py-4 md:py-6"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6 flex justify-between items-center">
          {/* --- LOGO --- */}
          <Link href="/" className="relative z-50 group">
            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-md sm:rounded-lg flex items-center justify-center text-slate-950 font-bold font-mono text-sm sm:text-base md:text-xl group-hover:scale-110 transition-transform">
                E
              </div>
              <span className="text-base sm:text-lg md:text-xl font-bold text-slate-100 tracking-tight">
                Elvin<span className="text-emerald-500">.</span>
              </span>
            </div>
          </Link>

          {/* --- DESKTOP NAV --- */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="relative text-xs lg:text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300 group py-2"
                >
                  {item.name}
                  {/* Hover Underline Animation */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
            {/* CTA Button */}
            <li>
              <Link
                href="/images/Elvin-Resume-template.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg bg-white/5 border border-white/10 text-emerald-400 text-xs lg:text-sm font-medium hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 transition-all duration-300"
              >
                Resume
              </Link>
            </li>
          </ul>

          {/* --- MOBILE TOGGLE --- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-1.5 sm:p-2 text-slate-300 hover:text-emerald-400 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 sm:w-6 flex flex-col items-end gap-1 sm:gap-1.5">
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "w-5 sm:w-6 rotate-45 translate-y-1.5 sm:translate-y-2" : "w-5 sm:w-6"
                }`}
              />
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : "w-3.5 sm:w-4"
                }`}
              />
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "w-5 sm:w-6 -rotate-45 -translate-y-1.5 sm:-translate-y-2" : "w-2"
                }`}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center px-4"
          >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-emerald-500/10 blur-2xl sm:blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 sm:w-64 h-40 sm:h-64 bg-cyan-500/10 blur-2xl sm:blur-3xl rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <nav className="relative z-10 w-full">
              <ul className="flex flex-col gap-4 sm:gap-5 items-center">
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.08 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-300 hover:text-emerald-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}

                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + navItems.length * 0.08 }}
                  className="mt-4 sm:mt-6"
                >
                  <Link
                    href="/images/Elvin-Resume-template.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-emerald-500 text-slate-950 font-bold text-sm sm:text-base hover:bg-emerald-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Download Resume
                  </Link>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
