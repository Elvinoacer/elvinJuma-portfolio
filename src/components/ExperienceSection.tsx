"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { experience, site } from "@/data/site";

export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-white/12 bg-[#10110f] py-24 text-[#f4f3ed] sm:py-32">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="mb-14 flex items-center justify-between border-b border-white/12 pb-5 font-mono text-[10px] uppercase tracking-[0.18em] sm:text-xs">
          <span className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#d7fb78]" /> The person behind the pixels</span>
          <span className="hidden text-[#a2a59b] sm:block">03 / About & experience</span>
        </div>

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}>
            <div className="relative max-w-[480px] border-l border-white/12 py-4 pl-6 sm:pl-8">
              <span aria-hidden="true" className="absolute -left-[5px] top-0 h-2 w-2 bg-[#d7fb78]" />
              <p className="mb-10 font-mono text-[10px] uppercase tracking-[0.17em] text-[#a2a59b]">A simple way of working</p>
              <p className="text-[clamp(3rem,4.5vw,4.4rem)] font-medium leading-[1.1] tracking-[-0.065em]">Curiosity.<br /><span className="text-[#d7fb78]">Craft.</span><br />Follow-<br />through.</p>
              <div className="mt-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[#a2a59b]"><span aria-hidden="true" className="h-px w-8 bg-[#d7fb78]" /> From the first question<br />to the final detail.</div>
            </div>
            <div className="mt-10">
              <p className="text-xl font-semibold tracking-tight">{site.name}</p>
              <p className="mt-2 text-sm text-[#a2a59b]">Full-stack software engineer. Founder at GTSS.</p>
              <Link href="/about" className="group mt-7 inline-flex items-center gap-6 border-b border-white/30 pb-2 text-sm font-medium transition-colors hover:border-[#d7fb78] hover:text-[#d7fb78]">
                A little more about me <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
              </Link>
            </div>
          </motion.div>

          <div>
            <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
              <h2 id="about-heading" className="max-w-[680px] text-[clamp(2.3rem,4vw,3.75rem)] font-medium leading-[1.13] tracking-[-0.055em]">A thoughtful interface.<br /><span className="text-[#a2a59b]">A solid system beneath it.</span></h2>
              <p className="mt-7 max-w-xl text-[15px] leading-7 text-[#a2a59b]">My work has grown from JavaScript foundations in 2024 to full-stack business products, multi-tenant SaaS, and systems that keep working without internet. I follow the problem through the interface, data model, payments, and deployment.</p>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#a2a59b]">Currently building healthcare, hospitality, and commerce products at <span className="text-[#f4f3ed]">{site.company}</span>. I also study Computer Science at Moi University, with graduation expected in 2027.</p>
            </motion.div>

            <div id="experience" className="mt-12 border-t border-white/12">
              {experience.map((item, index) => {
                const isOpen = openIndex === index;
                const panelId = `experience-panel-${index}`;
                return (
                  <div key={item.role} className="border-b border-white/12">
                    <h3>
                      <button type="button" id={`experience-button-${index}`} aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? null : index)} className="group flex w-full items-start justify-between gap-5 py-6 text-left">
                        <span>
                          <span className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-[#a2a59b]">{item.period}</span>
                          <span className="block text-lg font-medium tracking-tight transition-colors group-hover:text-[#d7fb78]">{item.role}</span>
                          <span className="mt-1 block text-xs leading-relaxed text-[#a2a59b]">{item.org}</span>
                        </span>
                        <span className={`mt-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${isOpen ? "border-[#d7fb78] bg-[#d7fb78] text-[#10110f]" : "border-white/20 text-[#a2a59b] group-hover:border-[#d7fb78]"}`}><Plus size={16} className={`transition-transform motion-reduce:transition-none ${isOpen ? "rotate-45" : ""}`} /></span>
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div key={panelId} id={panelId} role="region" aria-labelledby={`experience-button-${index}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.25 }} className="overflow-hidden">
                          <ul className="space-y-3 pb-7 pr-8 text-sm leading-6 text-[#a2a59b]">
                            {item.points.map((point) => <li key={point} className="flex gap-3"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#d7fb78]" /><span>{point}</span></li>)}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
