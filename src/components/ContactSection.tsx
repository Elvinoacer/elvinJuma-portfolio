"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export default function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-[#10110f] px-3 pb-3 pt-12 sm:px-5 sm:pb-5">
      <div className="relative overflow-hidden rounded-sm bg-[#d7fb78] text-[#10110f]">
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-28 h-96 w-96 rounded-full border border-black/10" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-44 h-[32rem] w-[32rem] rounded-full border border-black/10" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.14em] sm:text-xs">
            <span>Good things start with a conversation</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#10110f]" /> Open to opportunities</span>
          </div>
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Link href="/contact" className="group flex items-end justify-between gap-4">
              <h2 id="contact-heading" className="text-[clamp(3.4rem,8.7vw,8.4rem)] font-medium leading-[0.99] tracking-[-0.075em]">Let’s make<br />something matter.</h2>
              <span className="mb-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#10110f]/30 transition-colors duration-300 group-hover:bg-[#10110f] group-hover:text-[#d7fb78] sm:mb-3 sm:h-24 sm:w-24 lg:h-32 lg:w-32"><ArrowUpRight className="h-7 w-7 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none sm:h-12 sm:w-12 lg:h-16 lg:w-16" strokeWidth={1.25} /></span>
            </Link>
          </motion.div>
          <div className="mt-14 flex flex-col justify-between gap-6 border-t border-[#10110f]/20 pt-7 sm:flex-row sm:items-center">
            <a href={`mailto:${site.email}`} className="w-fit text-base font-medium underline decoration-[#10110f]/35 underline-offset-4 transition-colors hover:decoration-[#10110f] sm:text-lg">{site.email}</a>
            <div className="flex flex-wrap gap-6 text-xs font-medium">
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline">LinkedIn <ArrowUpRight size={13} /></a>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline">GitHub <ArrowUpRight size={13} /></a>
              <a href={site.resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline">Résumé <ArrowUpRight size={13} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
