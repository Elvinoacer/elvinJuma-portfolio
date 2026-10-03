"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { experience, site } from "@/data/site";

const toolkit = [
  { area: "Interfaces", tools: "React · Next.js · TypeScript · Tailwind CSS" },
  { area: "Systems", tools: "Node.js · PostgreSQL · Prisma · Authentication" },
  { area: "Connections", tools: "M-Pesa / Daraja · IntaSend · Socket.IO · REST APIs" },
  { area: "Local & desktop", tools: "Electron · Express · SQLite · Linux · Local networks" },
  { area: "Mobile & AI projects", tools: "Expo / React Native · Gemini · LangChain · Pinecone" },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="bg-[#10110f] text-[#f4f3ed]">
      <section className="mx-auto max-w-[1440px] px-6 pb-24 pt-36 sm:px-10 sm:pb-32 sm:pt-44 lg:px-16">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-9 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[#a2a59b] sm:text-xs"><span>About / Elvin Omondi Juma</span><span className="hidden sm:block">A little context</span></div>
          <h1 className="max-w-5xl text-[clamp(3.4rem,7.3vw,7rem)] font-medium leading-[1.03] tracking-[-0.065em]">Curiosity is the engine.<br /><span className="text-[#a2a59b]">Craft is the difference.</span></h1>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="relative isolate min-h-[480px] overflow-hidden sm:min-h-[620px] lg:min-h-[580px]">
              <div className="absolute inset-0 -z-10" style={{ maskImage: "radial-gradient(ellipse 70% 58% at 50% 48%, black 20%, transparent 88%)" }}>
                <Image src="/images/potrait5.webp" alt="" fill priority sizes="(max-width: 1024px) 90vw, 38vw" className="object-cover object-[50%_60%] opacity-45 grayscale" />
              </div>
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(244,243,237,.10) 1px, transparent 1px), linear-gradient(90deg, rgba(244,243,237,.10) 1px, transparent 1px)", backgroundSize: "80px 80px", maskImage: "radial-gradient(ellipse at center, black 25%, transparent 75%)" }} />
              <div aria-hidden="true" className="absolute inset-x-5 top-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[#a2a59b]"><span>Fig. 02 / The builder</span><span className="text-xl text-[#d7fb78]">+</span></div>
              <p className="absolute bottom-20 left-5 text-[clamp(3.65rem,6.4vw,6.5rem)] font-semibold uppercase leading-[0.91] tracking-[-0.065em] sm:bottom-24" aria-hidden="true"><span style={{ color: "transparent", WebkitTextStroke: "1px rgba(244,243,237,.75)" }}>Human<br />by</span><br /><span className="text-[#f4f3ed]">design.</span></p>
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 border-t border-white/20 pt-4"><p className="font-mono text-[9px] uppercase leading-5 tracking-[0.13em] text-[#a2a59b]">{site.location}<br />EAT / UTC +3</p><p className="font-mono text-[9px] uppercase leading-5 tracking-[0.13em] text-[#d7fb78]">Thoughtful work.<br />Human perspective.</p></div>
            </div>
            <div className="mt-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-[#a2a59b]"><span>Engineer by trade. Builder by nature.</span><ArrowDown size={14} /></div>
          </motion.div>

          <div className="lg:pt-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#d7fb78]">Hello, I’m Elvin.</p>
            <h2 className="mt-6 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-[2.5rem]">From everyday problems<br className="hidden sm:block" /> to working systems.</h2>
            <div className="mt-7 space-y-5 text-[15px] leading-7 text-[#a2a59b]">
              <p>I’m a full-stack software engineer and the founder and product engineer at <a href={site.companyUrl} target="_blank" rel="noopener noreferrer" className="text-[#f4f3ed] underline decoration-white/30 underline-offset-4 transition-colors hover:text-[#d7fb78]">{site.company}</a>. I build business software across healthcare, hospitality, commerce, and education.</p>
              <p>JavaScript foundations in 2024 grew into marketplaces and business platforms in 2025. In 2026, my work spans multi-tenant pharmacy SaaS, offline desktop infrastructure, mobile services, and AI-assisted search.</p>
              <p>I follow the workflow through the whole stack: interfaces, data models, access boundaries, payments, and deployment. Pharmacy and SME field feedback helps me refine the practical details.</p>
              <p>I study Computer Science at Moi University, with graduation expected in 2027. Earlier work in client onboarding and banking operations at Equity Bank Kenya taught me the value of careful records and clear onboarding.</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6 border-y border-white/12 py-6">
              <div><span className="text-4xl font-medium tracking-tighter">{site.yearsShipping}</span><p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-[#a2a59b]">Years building software</p></div>
              <div><span className="text-4xl font-medium tracking-tighter">Full stack.</span><p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-[#a2a59b]">From discovery to deployment</p></div>
            </div>
            <a href={site.resume} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-5 rounded-full bg-[#d7fb78] px-6 py-3.5 text-sm font-semibold text-[#10110f] transition-colors hover:bg-[#e3ff9c]">View my résumé <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </section>

      <AboutSection />

      <section aria-labelledby="experience-heading" className="border-t border-white/12 py-24 sm:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-16">
          <div><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#a2a59b]">The path so far</p><h2 id="experience-heading" className="mt-6 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">Learning by doing.<br /><span className="text-[#a2a59b]">Then doing better.</span></h2></div>
          <ol className="border-t border-white/12">
            {experience.map((item, index) => (
              <li key={item.role} className="border-b border-white/12 py-8">
                <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-wider"><span className="text-[#d7fb78]">0{index + 1}</span><span className="text-[#a2a59b]">{item.period}</span></div>
                <h3 className="mt-4 text-2xl font-medium tracking-tight">{item.role}</h3>
                <p className="mt-2 text-sm text-[#a2a59b]">{item.org} · {item.location}</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-[#a2a59b]">{item.points.map((point) => <li key={point} className="flex gap-3"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#d7fb78]" /><span>{point}</span></li>)}</ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="toolkit-heading" className="border-t border-white/12 py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-16">
          <div><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#a2a59b]">Tools of the trade</p><h2 id="toolkit-heading" className="mt-6 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">A practical toolkit.</h2><p className="mt-5 max-w-sm text-sm leading-7 text-[#a2a59b]">Chosen around the problem. Built to be maintained.</p></div>
          <div>{toolkit.map((group) => <div key={group.area} className="border-t border-white/12 py-7 last:border-b"><h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#d7fb78]">{group.area}</h3><p className="mt-3 text-lg leading-8 tracking-tight sm:text-xl">{group.tools}</p></div>)}</div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
