"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { principles, site } from "@/data/site";
import { fadeUp, stagger } from "@/lib/motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto w-full max-w-sm lg:mx-0">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-emerald-500/15 via-transparent to-cyan-500/10 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
                <Image
                  src="/images/potrait5.webp"
                  alt={site.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 320px, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-emerald-400/90">
                    {site.location}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {site.company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-7"
          >
            <motion.p
              variants={fadeUp}
              className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-emerald-400/90"
            >
              About
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Engineer first.
              <span className="font-normal text-slate-500"> Designer of systems second.</span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-400 sm:text-base"
            >
              <p>
                I&apos;m{" "}
                <span className="text-slate-200">{site.name}</span> — founding
                engineer at{" "}
                <span className="text-slate-200">{site.company}</span>. For{" "}
                {site.yearsShipping} years I&apos;ve been shipping full-stack
                products used by real businesses: schools, hotels, construction
                firms, churches, and local commerce.
              </p>
              <p>
                My stack is pragmatic —{" "}
                <span className="text-slate-200">
                  Next.js, TypeScript, PostgreSQL, Prisma, realtime, payments
                </span>
                . I care about clean models, boring reliability, and interfaces
                that feel inevitable.
              </p>
              <p>
                I&apos;m also a Computer Science student at Moi University and an
                Equity Leadership Program alumnus. Formal fundamentals, daily
                production practice.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 grid gap-3 sm:grid-cols-3"
            >
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                >
                  <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {p.body}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
              >
                Full story & experience
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
