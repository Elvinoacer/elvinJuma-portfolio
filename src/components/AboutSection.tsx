"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Compass, ShieldCheck } from "lucide-react";

const principles = [
  {
    icon: Compass,
    title: "Product-minded",
    text: "I shape flows around the business goal, the user journey, and the smallest path to real value.",
  },
  {
    icon: Code2,
    title: "Engineered cleanly",
    text: "Readable architecture, typed interfaces, measured performance, and delivery habits that scale.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last",
    text: "Security, maintainability, and polish are treated as core product features from day one.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0a0d12] py-16 text-slate-200 sm:py-20 lg:py-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:36px_36px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-lg border border-white/10 bg-[#11161d] p-2 shadow-2xl lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-slate-900">
              <Image
                src="/images/profile-2.png"
                alt="Elvin Omondi"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f1d99f]">
                  Full-stack Developer
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  Elvin Omondi Juma
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f1d99f]">
              About
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-6xl">
              Calm execution for products that need to feel exceptional.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              I design and build modern web and mobile experiences with Next.js,
              React, Node.js, databases, authentication, payments, and AI
              integrations. The work is practical, polished, and organized
              around outcomes: faster launches, cleaner operations, and better
              user trust.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {principles.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-4 transition hover:border-[#f1d99f]/35 hover:bg-white/[0.055]"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-[#f1d99f] text-[#11100c]">
                  <item.icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
