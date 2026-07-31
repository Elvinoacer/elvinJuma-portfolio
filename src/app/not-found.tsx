"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-[#030712] px-4">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-md text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400/90">
          404
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-400">
          This route doesn&apos;t exist — or it shipped somewhere else. Head
          home and keep exploring the work.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
        >
          Back to home
        </Link>
      </motion.div>
    </section>
  );
}
