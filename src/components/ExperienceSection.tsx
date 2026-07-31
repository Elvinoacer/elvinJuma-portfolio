"use client";

import { motion } from "framer-motion";
import { experience, productsShipped } from "@/data/site";
import { fadeUp } from "@/lib/motion";
import { ArrowUpRight } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12 sm:mb-14"
        >
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-emerald-400/90">
            Experience
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Where the work happens
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Timeline */}
          <div className="lg:col-span-7">
            <ol className="relative space-y-0 border-l border-white/[0.08] pl-6 sm:pl-8">
              {experience.map((item, i) => (
                <motion.li
                  key={item.role + item.org}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="relative pb-10 last:pb-0"
                >
                  <span className="absolute -left-[1.9rem] top-1.5 flex h-3 w-3 items-center justify-center sm:-left-[2.4rem]">
                    <span className="h-2.5 w-2.5 rounded-full border-2 border-emerald-400 bg-[#030712]" />
                  </span>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-base font-semibold text-white sm:text-lg">
                      {item.role}
                    </h3>
                    <span className="font-mono text-xs text-slate-500">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-emerald-400/90">
                    {item.org}
                    <span className="text-slate-600"> · {item.location}</span>
                  </p>
                  <ul className="mt-3 space-y-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="text-sm leading-relaxed text-slate-400"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Products shipped — real social proof */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6"
            >
              <p className="mb-1 font-mono text-[11px] uppercase tracking-widest text-slate-500">
                In the wild
              </p>
              <h3 className="mb-5 text-lg font-semibold text-white">
                Products & platforms shipped
              </h3>
              <ul className="space-y-4">
                {productsShipped.map((p) => (
                  <li key={p.name}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-xl border border-transparent p-3 transition-colors hover:border-white/[0.06] hover:bg-white/[0.03]"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-sm font-medium text-slate-100 group-hover:text-emerald-300">
                            {p.name}
                          </p>
                          <p className="mt-0.5 text-[11px] uppercase tracking-wider text-slate-500">
                            {p.role}
                          </p>
                        </div>
                        <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-600 transition-colors group-hover:text-emerald-400" />
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-slate-500">
                        {p.blurb}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
