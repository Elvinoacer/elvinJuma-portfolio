"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0;
      setScrollProgress(progress);
      setVisible(currentScroll > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Side scroll-to-top track on desktop */}
      <div
        className={`fixed left-6 bottom-8 z-40 hidden xl:flex flex-col items-center gap-3 transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToTop}
          className="group flex flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-slate-500 transition-colors hover:text-[#66d9ed]"
          aria-label="Scroll to top"
        >
          <div className="relative h-16 w-0.5 bg-white/10 overflow-hidden rounded-full">
            <div
              className="absolute top-0 w-full bg-[#66d9ed] transition-all duration-150"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>
          <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] text-slate-500 group-hover:text-[#66d9ed]">
            Scroll to top
          </span>
        </button>
      </div>

      {/* Floating circular button for mobile / smaller screens */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#1b1c22] border border-white/10 text-slate-300 shadow-xl transition-all duration-300 hover:border-[#66d9ed] hover:text-[#66d9ed] hover:scale-110 xl:hidden ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </>
  );
}
