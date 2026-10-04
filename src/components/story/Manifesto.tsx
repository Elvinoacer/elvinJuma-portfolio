"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useMotionEnabled, systemPrefersReducedMotion } from "@/lib/motion-preference";

const WORDS = [
  { text: "Software", highlight: false },
  { text: "should", highlight: false },
  { text: "fit", highlight: false },
  { text: "the", highlight: false },
  { text: "way", highlight: false },
  { text: "people", highlight: false },
  { text: "actually", highlight: false },
  { text: "work:", highlight: false },
  { text: "in", highlight: false },
  { text: "clinics,", highlight: true },
  { text: "kitchens,", highlight: true },
  { text: "shops,", highlight: true },
  { text: "and", highlight: false },
  { text: "places", highlight: false },
  { text: "the", highlight: false },
  { text: "internet", highlight: true },
  { text: "doesn't", highlight: true },
  { text: "always", highlight: true },
  { text: "reach.", highlight: true },
];

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const motionEnabled = useMotionEnabled();
  const reduced = systemPrefersReducedMotion() || !motionEnabled;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section
      ref={containerRef}
      id="manifesto"
      aria-labelledby="manifesto-heading"
      className="relative min-h-[140vh] bg-[#10110f] text-[#f4f3ed] py-24 sm:py-36 px-6 sm:px-12 flex items-center justify-center border-t border-white/[0.08]"
    >
      <div className="sticky top-28 sm:top-36 max-w-5xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8 sm:mb-12 font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-[#a2a59b] border-b border-white/[0.08] pb-4">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d7fb78]" />
            01 / The Core Belief
          </span>
          <span>Manifesto</span>
        </div>

        <h2 id="manifesto-heading" className="sr-only">
          Software should fit the way people actually work: in clinics, kitchens, shops, and places the internet doesn&apos;t always reach.
        </h2>

        <div
          aria-hidden="true"
          className="text-[clamp(2.2rem,5.2vw,5.5rem)] font-medium leading-[1.12] tracking-[-0.055em] flex flex-wrap gap-x-[0.28em] gap-y-[0.05em]"
        >
          {WORDS.map((item, index) => {
            if (reduced) {
              return (
                <span
                  key={index}
                  className={item.highlight ? "text-[#d7fb78]" : "text-[#f4f3ed]"}
                >
                  {item.text}
                </span>
              );
            }

            // Stagger word illumination across scroll progress (0.1 to 0.85)
            const start = 0.05 + (index / WORDS.length) * 0.75;
            const end = start + 0.12;

            return (
              <WordScrub
                key={index}
                text={item.text}
                highlight={item.highlight}
                progress={scrollYProgress}
                start={start}
                end={end}
              />
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/[0.08] text-xs font-mono text-[#a2a59b]">
          <p>BUILT ON FIELD REALITIES, NOT ASSUMPTIONS.</p>
          <span className="text-[#d7fb78] flex items-center gap-2">
            SCROLL TO EXPLORE THE SYSTEMS ↓
          </span>
        </div>
      </div>
    </section>
  );
}

function WordScrub({
  text,
  highlight,
  progress,
  start,
  end,
}: {
  text: string;
  highlight: boolean;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.22, 1]);
  const y = useTransform(progress, [start, end], [6, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className={`inline-block transition-colors ${
        highlight ? "text-[#d7fb78]" : "text-[#f4f3ed]"
      }`}
    >
      {text}
    </motion.span>
  );
}
