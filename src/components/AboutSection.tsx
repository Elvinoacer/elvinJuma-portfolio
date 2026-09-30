"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { principles, site } from "@/data/site";

export default function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="principles-heading" className="border-t border-white/12 bg-[#10110f] py-24 text-[#f4f3ed] sm:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:gap-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#a2a59b]">A few things I believe</p>
          <h2 id="principles-heading" className="max-w-xl text-4xl font-medium leading-[1.15] tracking-[-0.055em] sm:text-5xl">The work is only as good<br className="hidden sm:block" /> as the thinking behind it.</h2>
        </div>
        <div className="grid border-t border-white/12 md:grid-cols-3">
          {principles.map((principle, index) => (
            <motion.div key={principle.title} initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="border-b border-white/12 py-9 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
              <span className="font-mono text-xs text-[#d7fb78]">0{index + 1}</span>
              <h3 className="mt-9 text-xl font-medium tracking-tight">{principle.title}</h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#a2a59b]">{principle.body}</p>
            </motion.div>
          ))}
        </div>
        <a href={site.github} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-4 border-b border-white/30 pb-2 text-sm transition-colors hover:border-[#d7fb78] hover:text-[#d7fb78]">See how that translates to code <ArrowUpRight size={16} /></a>
      </div>
    </section>
  );
}
