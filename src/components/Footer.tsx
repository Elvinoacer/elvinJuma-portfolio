"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
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
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#0c0d10] py-14">
      <div className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-30" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              href="/#hero-section"
              onClick={(e) => handleNavClick(e, "#hero-section")}
              className="flex items-center gap-2 font-bold text-lg text-white group cursor-link"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#66d9ed] font-mono text-xs font-bold text-[#0f0f11]">
                E
              </span>
              <span>Elvin Juma</span>
            </Link>
            <p className="mt-2 text-xs text-slate-400 max-w-sm">
              Founding Engineer &amp; Full-Stack Developer creating resilient software systems.
            </p>
          </div>

          {/* Quick Monospace Links */}
          <div className="flex flex-wrap justify-center gap-6 font-mono text-xs text-slate-400">
            <a
              href="#hero-section"
              onClick={(e) => handleNavClick(e, "#hero-section")}
              className="hover:text-[#66d9ed] transition-colors cursor-link"
            >
              // home
            </a>
            <a
              href="#expertise"
              onClick={(e) => handleNavClick(e, "#expertise")}
              className="hover:text-[#66d9ed] transition-colors cursor-link"
            >
              // expertise
            </a>
            <a
              href="#work"
              onClick={(e) => handleNavClick(e, "#work")}
              className="hover:text-[#66d9ed] transition-colors cursor-link"
            >
              // work
            </a>
            <a
              href="#experience"
              onClick={(e) => handleNavClick(e, "#experience")}
              className="hover:text-[#66d9ed] transition-colors cursor-link"
            >
              // experience
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hover:text-[#66d9ed] transition-colors cursor-link"
            >
              // contact
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.03] p-2 text-slate-400 hover:border-[#66d9ed] hover:text-[#66d9ed] transition-colors cursor-link"
              aria-label="GitHub"
            >
              <span className="font-mono text-xs px-1">GitHub</span>
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.03] p-2 text-slate-400 hover:border-[#66d9ed] hover:text-[#66d9ed] transition-colors cursor-link"
              aria-label="LinkedIn"
            >
              <span className="font-mono text-xs px-1">LinkedIn</span>
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-full border border-[#66d9ed]/30 bg-[#66d9ed]/10 px-3 py-1.5 font-mono text-xs text-[#66d9ed] hover:bg-[#66d9ed] hover:text-[#0f0f11] transition-all cursor-link"
            >
              <span>Resume</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500 text-center sm:text-left">
          <p>© {currentYear}. Made with passion by {site.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#66d9ed] animate-pulse" />
            <span className="text-slate-400">Built in Next.js 16 &amp; TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
