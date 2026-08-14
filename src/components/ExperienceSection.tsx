"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Code, Globe, Building2, GraduationCap, ArrowUpRight } from "lucide-react";
import { experience, productsShipped } from "@/data/site";

export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const icons = [
    <Building2 key="1" className="h-5 w-5 text-[#66d9ed]" />,
    <Code key="2" className="h-5 w-5 text-[#66d9ed]" />,
    <GraduationCap key="3" className="h-5 w-5 text-[#66d9ed]" />,
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 sm:py-32 border-t border-white/[0.05] bg-[#0f0f11]"
    >
      <div className="pointer-events-none absolute top-1/2 -right-32 h-[450px] w-[450px] rounded-full bg-[#df058d]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-tight">
            Professional <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Ohio-Style Accordion List */}
        <div className="space-y-4 max-w-4xl">
          {experience.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.role + item.org}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#66d9ed]/40 bg-[#15161c] shadow-[0_0_30px_rgba(0,0,0,0.4)]"
                    : "border-white/[0.08] bg-[#121318] hover:border-white/20"
                }`}
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left cursor-link"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] border border-white/10">
                      {icons[index % icons.length]}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-white sm:text-lg truncate">
                        {item.role}{" "}
                        <span className="text-[#66d9ed] font-medium">@ {item.org}</span>
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <span className="font-mono text-xs text-slate-400 hidden sm:inline-block">
                      {item.period}
                    </span>
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "border-[#66d9ed] bg-[#66d9ed]/10 text-[#66d9ed] rotate-180"
                          : "border-white/10 bg-white/[0.03] text-slate-400"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="border-t border-white/[0.06] p-6 pt-4 text-sm sm:px-8 sm:pb-8">
                        <div className="flex flex-wrap items-center gap-4 mb-4 font-mono text-xs text-slate-400">
                          <span className="flex items-center gap-1.5 text-slate-300">
                            <Globe className="h-3.5 w-3.5 text-[#66d9ed]" />
                            {item.location}
                          </span>
                          <span className="sm:hidden text-slate-500">• {item.period}</span>
                        </div>

                        <ul className="space-y-2.5">
                          {item.points.map((point, pIdx) => (
                            <li
                              key={pIdx}
                              className="flex items-start gap-2.5 text-slate-300 leading-relaxed text-sm"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#66d9ed]" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Associated Shipped Products for this role */}
                        {index === 0 && (
                          <div className="mt-6 pt-5 border-t border-white/[0.06]">
                            <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-3">
                              Products Shipped Under This Company:
                            </p>
                            <div className="grid gap-2.5 sm:grid-cols-2">
                              {productsShipped.map((p) => (
                                <a
                                  key={p.name}
                                  href={p.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group flex items-center justify-between p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#66d9ed]/40 hover:bg-white/[0.04] transition-all cursor-link"
                                >
                                  <div>
                                    <p className="font-medium text-white text-xs group-hover:text-[#66d9ed] transition-colors">
                                      {p.name}
                                    </p>
                                    <p className="text-[11px] text-slate-500">{p.role}</p>
                                  </div>
                                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-[#66d9ed] transition-colors" />
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
