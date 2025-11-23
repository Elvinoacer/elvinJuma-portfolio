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
    { name: "Skills", href: "#skills" }, // Updated to anchor for smooth scroll context
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
            ? "bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4 shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* --- LOGO --- */}
          <Link href="/" className="relative z-50 group">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center text-slate-950 font-bold font-mono text-xl group-hover:scale-110 transition-transform">
                E
              </div>
              <span className="text-xl font-bold text-slate-100 tracking-tight">
                Elvin<span className="text-emerald-500">.</span>
              </span>
            </div>
          </Link>

          {/* --- DESKTOP NAV --- */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="relative text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300 group py-2"
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
                href="/resume.pdf" // Example action
                className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-emerald-400 text-sm font-medium hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 transition-all duration-300"
              >
                Resume
              </Link>
            </li>
          </ul>

          {/* --- MOBILE TOGGLE --- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 text-slate-300 hover:text-emerald-400 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
                }`}
              />
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : "w-4"
                }`}
              />
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-2"
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
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <nav className="relative z-10 w-full px-6">
              <ul className="flex flex-col gap-6 items-center">
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-bold text-slate-300 hover:text-emerald-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}

                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + navItems.length * 0.1 }}
                  className="mt-4"
                >
                  <Link
                    href="/resume.pdf"
                    className="px-8 py-3 rounded-full bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors"
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
