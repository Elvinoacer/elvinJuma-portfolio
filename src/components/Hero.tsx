"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Download,
  Layers3,
  MousePointer2,
  Sparkles,
} from "lucide-react";

const metrics = [
  { value: "30+", label: "Shipped projects" },
  { value: "5+", label: "Years building" },
  { value: "15+", label: "Client wins" },
];

const capabilities = [
  "Product strategy",
  "Full-stack systems",
  "Motion-rich UI",
  "Secure delivery",
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#080a0e] pt-24 text-white sm:pt-28 lg:pt-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:36px_36px]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(220,198,156,0.14),transparent_36%),linear-gradient(135deg,rgba(7,48,42,0.55),transparent_42%),linear-gradient(225deg,rgba(49,38,25,0.35),transparent_38%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-black/70 to-transparent" />

      <div className="mx-auto grid min-h-[calc(100svh-7rem)] w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d7c08a]/25 bg-[#d7c08a]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f2dca6] sm:text-xs"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#f2dca6]" />
            Available for select builds
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="max-w-4xl text-[2.55rem] font-semibold leading-[0.96] tracking-normal text-white sm:text-6xl md:text-7xl xl:text-8xl"
          >
            Premium web products with clarity, speed, and presence.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-6 sm:text-lg"
          >
            I&apos;m Elvin Omondi, a full-stack developer shaping elegant,
            reliable systems for ambitious teams. I blend product thinking,
            polished interface craft, and production-grade engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row"
          >
            <Link
              href="/projects"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#f1d99f] px-5 py-3 text-sm font-bold text-[#10100d] shadow-[0_18px_60px_rgba(241,217,159,0.18)] transition hover:bg-white sm:px-6"
            >
              Explore Work
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/images/Elvin-Resume-template.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-[#f1d99f]/40 hover:bg-white/[0.08] sm:px-6"
            >
              <Download className="h-4 w-4" />
              Resume
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:mt-11 sm:max-w-xl"
          >
            {metrics.map((metric) => (
              <div key={metric.label} className="bg-[#0c1016]/90 p-3 sm:p-4">
                <p className="text-xl font-semibold text-white sm:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-500 sm:text-xs">
                  {metric.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="relative mx-auto w-full max-w-[35rem] lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-lg border border-white/12 bg-[#10141b] shadow-[0_30px_120px_rgba(0,0,0,0.48)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-3 py-2.5 sm:px-4">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b5f]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f5c45d]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#51d88a]" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Portfolio OS
              </span>
            </div>

            <div className="grid gap-3 p-3 sm:gap-4 sm:p-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-white/10 bg-slate-900">
                <Image
                  src="/images/gtss.png"
                  alt="Great Thumbs Software Solutions project preview"
                  fill
                  priority
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f1d99f]">
                        Featured build
                      </p>
                      <h2 className="mt-1 text-lg font-semibold text-white sm:text-2xl">
                        GTSS Product Suite
                      </h2>
                    </div>
                    <div className="hidden rounded-md border border-white/15 bg-black/35 px-3 py-2 text-xs text-slate-200 backdrop-blur sm:block">
                      Next.js 16
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[0.8fr_1.2fr] gap-3 sm:gap-4">
                <div className="rounded-md border border-white/10 bg-[#0b0f15] p-3 sm:p-4">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md bg-[#f1d99f] text-[#11100c]">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-medium text-slate-400">
                    Interface polish, animation, accessibility, and responsive
                    systems.
                  </p>
                </div>
                <div className="rounded-md border border-white/10 bg-[#0b0f15] p-3 sm:p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <Layers3 className="h-4 w-4 text-[#f1d99f]" />
                      Delivery Stack
                    </div>
                    <MousePointer2 className="h-4 w-4 text-slate-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {capabilities.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-1.5 rounded border border-white/8 bg-white/[0.03] px-2 py-1.5 text-[10px] font-medium text-slate-300 sm:text-xs"
                      >
                        <CheckCircle2 className="h-3 w-3 shrink-0 text-[#f1d99f]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0d12] to-transparent" />
    </section>
  );
}
