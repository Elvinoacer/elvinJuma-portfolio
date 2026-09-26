"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Boxes,
  Cloud,
  CreditCard,
  Database,
  MonitorSmartphone,
  RadioTower,
  Wrench,
} from "lucide-react";

const layers = [
  {
    icon: MonitorSmartphone,
    label: "01 · product surface",
    title: "Interface systems",
    body: "Fast, responsive application surfaces with enough motion to feel alive without hiding the product.",
    items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Framer Motion", "Three.js"],
  },
  {
    icon: Database,
    label: "02 · application core",
    title: "Data & backend",
    body: "The part users rarely see: schemas, auth, state boundaries, server actions, APIs and failure handling.",
    items: ["PostgreSQL", "Prisma", "Node.js", "NextAuth", "TanStack Query", "REST APIs"],
  },
  {
    icon: RadioTower,
    label: "03 · distributed behavior",
    title: "Realtime & workflows",
    body: "Systems that react to people, payments and events instead of waiting for a refresh.",
    items: ["Socket.IO", "FCM", "Webhooks", "Jitsi", "Background jobs", "Event flows"],
  },
  {
    icon: CreditCard,
    label: "04 · business rails",
    title: "Payments & operations",
    body: "Local and global integrations that make software useful to actual operators, not just technically complete.",
    items: ["M-Pesa Daraja", "IntaSend", "Cloudinary", "R2", "OSM", "Email/SMS"],
  },
];

const cockpit = [
  { icon: Cloud, title: "Ship", items: ["Vercel", "Cloudflare", "DigitalOcean"] },
  { icon: Boxes, title: "Source", items: ["GitHub", "CI/CD", "Prisma migrations"] },
  { icon: Bot, title: "AI-assisted", items: ["Codex", "GitHub Copilot", "Claude", "Gemini"] },
  { icon: Wrench, title: "Observe", items: ["Runtime logs", "Sentry", "Lighthouse", "Manual E2E"] },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden border-t border-white/[0.06] bg-[#090b0b] py-24 sm:py-32">
      <div className="portfolio-grid pointer-events-none absolute inset-0 opacity-[0.16]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-300">
              Engineering stack
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              My stack is a pipeline, not a logo wall.
            </h2>
          </motion.div>
          <p className="max-w-2xl text-base leading-7 text-slate-400 lg:justify-self-end">
            The technologies change. The pattern does not: interface, application core,
            data, event flow, business integrations, deployment, observation. I choose
            tools based on what the product needs to survive in production.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <motion.article
                key={layer.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[1.6rem] border border-white/[0.07] bg-[#0c1010] p-5 sm:p-6"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-lime-300">
                      {layer.label}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white">
                      {layer.title}
                    </h3>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-slate-400">
                    <Icon className="h-4 w-4" />
                  </span>
                </div>

                <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">{layer.body}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5 font-mono text-[10px] text-slate-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-5 rounded-[1.6rem] border border-white/[0.07] bg-white/[0.02] p-5 sm:p-6">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
                Shipping cockpit
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                The tools around the code matter too.
              </h3>
            </div>
            <p className="max-w-lg text-sm leading-6 text-slate-500">
              I use AI heavily, but I keep the engineering loop grounded in source control,
              runtime evidence, deployment checks and manual product testing.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {cockpit.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.title}
                  className="rounded-2xl border border-white/[0.06] bg-[#080a0a] p-4"
                >
                  <Icon className="h-4 w-4 text-cyan-300" />
                  <p className="mt-3 text-sm font-semibold text-white">{group.title}</p>
                  <p className="mt-2 font-mono text-[10px] leading-5 text-slate-600">
                    {group.items.join(" · ")}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
