"use client";

import { useEffect, useState } from "react";

interface Chapter {
  id: string;
  number: string;
  name: string;
}

const chapters: Chapter[] = [
  { id: "hero-section", number: "00", name: "Who" },
  { id: "manifesto", number: "01", name: "Belief" },
  { id: "work", number: "02", name: "Proof" },
  { id: "expertise", number: "03", name: "Craft" },
  { id: "about", number: "04", name: "Journey" },
  { id: "contact", number: "05", name: "Contact" },
];

export default function ChapterRail() {
  const [activeChapter, setActiveChapter] = useState<string>("hero-section");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(1, Math.max(0, scrollY / docHeight)));
      }

      // Detect active chapter based on section positions
      let current = chapters[0].id;
      for (const ch of chapters) {
        const el = document.getElementById(ch.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            current = ch.id;
          }
        }
      }
      setActiveChapter(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top progress line for mobile */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-white/[0.08] md:hidden pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-[#d7fb78] transition-all duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Desktop Chapter Rail */}
      <nav
        aria-label="Story chapters"
        className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-6 font-mono text-[9px] uppercase tracking-[0.16em]"
      >
        <div className="flex flex-col gap-4 relative pl-4 border-l border-white/10">
          {/* Active tracker line */}
          <div
            className="absolute left-[-1px] w-[2px] bg-[#d7fb78] transition-all duration-300 rounded-full"
            style={{
              height: "22px",
              top: `${chapters.findIndex((c) => c.id === activeChapter) * 38}px`,
            }}
            aria-hidden="true"
          />

          {chapters.map((ch) => {
            const isActive = activeChapter === ch.id;
            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => scrollTo(ch.id)}
                className={`group flex items-center gap-3 text-left transition-colors duration-200 py-1 ${
                  isActive ? "text-[#d7fb78]" : "text-white/40 hover:text-white/80"
                }`}
                aria-current={isActive ? "step" : undefined}
              >
                <span className="opacity-70">{ch.number}</span>
                <span className="font-sans text-[11px] font-medium tracking-normal capitalize">
                  {ch.name}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
