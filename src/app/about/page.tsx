"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaGithub,
  FaFileDownload,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiDocker,
  SiFirebase,
} from "react-icons/si";
import { experience, principles, site } from "@/data/site";
import { githubProfile } from "@/data/github";
import { fadeUp, stagger } from "@/lib/motion";

const skills = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Prisma", icon: SiPrisma },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Docker", icon: SiDocker },
  { name: "Firebase", icon: SiFirebase },
];

export default function About() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712] pb-20 pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-14 max-w-3xl sm:mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-emerald-400/90"
          >
            About
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            A builder who measures work in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              shipped systems
            </span>
            , not slides.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {site.tagline}
          </motion.p>
        </motion.div>

        <div className="mb-16 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src="/images/potrait5.webp"
                    alt={site.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">{site.name}</h2>
                  <p className="text-sm text-emerald-400/90">{site.title}</p>
                  <p className="text-xs text-slate-500">{site.company}</p>
                </div>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-slate-400 sm:text-[15px]">
                <p>
                  I started like most developers — small apps that broke in
                  entertaining ways. The difference is I kept shipping until the
                  work became systems that real organizations depend on.
                </p>
                <p>
                  Today I&apos;m founding engineer at{" "}
                  <strong className="font-medium text-slate-200">
                    {site.company}
                  </strong>
                  , building multi-product software for hotels, marketplaces,
                  education, and local business operations. On the side (and
                  often overlapping) I deliver client platforms end-to-end:
                  auth, payments, realtime, media, and admin tooling.
                </p>
                <p>
                  On GitHub, that shows up as{" "}
                  <strong className="font-medium text-slate-200">
                    {githubProfile.totalContributions.toLocaleString()}{" "}
                    contributions
                  </strong>{" "}
                  in the last year across{" "}
                  <strong className="font-medium text-slate-200">
                    {githubProfile.totalRepos} repositories
                  </strong>
                  — most of the heavy lifting in private production code.
                </p>
                <p>
                  I study Computer Science at Moi University and am an Equity
                  Leadership Program alumnus. I believe clean architecture and
                  clear UX are the same job viewed from different angles.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
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
            </div>
          </motion.div>

          {/* Toolkit + facts */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-slate-500">
                Core stack
              </h3>
              <div className="grid grid-cols-5 gap-2 sm:grid-cols-5">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-1.5 rounded-xl border border-white/[0.05] bg-slate-950/50 p-2.5 transition-colors hover:border-emerald-500/25"
                    title={skill.name}
                  >
                    <skill.icon className="text-xl text-slate-400" />
                    <span className="text-[8px] uppercase tracking-wide text-slate-500">
                      {skill.name.split(" ")[0]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4 text-sm">
                <span className="text-slate-500">Current focus</span>
                <span className="font-mono text-xs text-emerald-400">
                  Product systems · Realtime · AI tooling
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  v: githubProfile.totalContributions.toLocaleString(),
                  l: "Contributions / yr",
                },
                { v: String(githubProfile.totalRepos), l: "Repositories" },
                { v: `${site.yearsShipping} yrs`, l: "Shipping software" },
                { v: "18+", l: "Live products" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                >
                  <p className="text-xl font-semibold text-white">{s.v}</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience timeline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-8 text-2xl font-semibold text-white">Experience</h2>
          <ol className="space-y-0 border-l border-white/[0.08] pl-6 sm:pl-8">
            {experience.map((item) => (
              <li key={item.role + item.org} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[1.9rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-emerald-400 bg-[#030712] sm:-left-[2.4rem]" />
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="text-base font-semibold text-white">
                    {item.role}
                  </h3>
                  <span className="font-mono text-xs text-slate-500">
                    {item.period}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-emerald-400/90">
                  {item.org} · {item.location}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {item.points.map((pt) => (
                    <li key={pt} className="text-sm text-slate-400">
                      {pt}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-6 border-t border-white/[0.06] pt-12 text-center">
          <p className="max-w-lg text-lg text-slate-300">
            Want someone who ships end-to-end and owns the outcome?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              <FaEnvelope /> Get in touch
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-slate-300 transition hover:border-emerald-500/30 hover:text-white"
            >
              <FaFileDownload /> Resume
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-slate-300 transition hover:border-emerald-500/30 hover:text-white"
            >
              <FaGithub /> GitHub
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-slate-300 transition hover:border-emerald-500/30 hover:text-white"
            >
              Contact form
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
