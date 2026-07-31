"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  contributionDays,
  getContributionLevel,
  githubProfile,
} from "@/data/github";
import { fadeUp } from "@/lib/motion";

/** Group days into weeks (columns) for the contribution graph */
function buildWeeks() {
  const weeks: { c: number; d: string }[][] = [];
  let current: { c: number; d: string }[] = [];

  // Pad so first week starts on Sunday (GitHub style)
  const first = new Date(contributionDays[0].d + "T12:00:00");
  const firstDow = first.getDay();
  for (let i = 0; i < firstDow; i++) {
    current.push({ c: -1, d: "" });
  }

  for (const day of contributionDays) {
    current.push(day);
    if (current.length === 7) {
      weeks.push(current);
      current = [];
    }
  }
  if (current.length) weeks.push(current);
  return weeks;
}

const weeks = buildWeeks();

const monthLabels = (() => {
  const labels: { label: string; weekIndex: number }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, wi) => {
    const day = week.find((d) => d.d);
    if (!day?.d) return;
    const m = new Date(day.d + "T12:00:00").getMonth();
    if (m !== lastMonth) {
      labels.push({
        label: new Date(day.d + "T12:00:00").toLocaleString("en", {
          month: "short",
        }),
        weekIndex: wi,
      });
      lastMonth = m;
    }
  });
  return labels;
})();

export default function GitHubActivity() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-emerald-400/90">
              Proof of work
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
              Real GitHub activity.
              <span className="mt-1 block font-normal text-slate-500">
                Not a vanity counter — a year of shipping.
              </span>
            </h2>
          </div>
          <a
            href={githubProfile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 self-start text-sm text-slate-400 transition-colors hover:text-emerald-400 sm:self-auto"
          >
            @{githubProfile.username}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0b1220]/80 p-4 sm:p-6 md:p-8"
        >
          {/* Headline metrics */}
          <div className="mb-8 grid grid-cols-2 gap-4 border-b border-white/[0.06] pb-6 sm:grid-cols-4">
            <Metric
              value={githubProfile.totalContributions.toLocaleString()}
              label="Contributions"
              hint="12 months"
            />
            <Metric
              value={String(githubProfile.activeDays)}
              label="Active days"
              hint="Of ~365"
            />
            <Metric
              value={String(githubProfile.totalRepos)}
              label="Repositories"
              hint="Owner"
            />
            <Metric
              value="TypeScript"
              label="Primary language"
              hint={`${githubProfile.languages[0].count} repos`}
            />
          </div>

          {/* Contribution graph */}
          <div className="overflow-x-auto pb-2">
            <div className="min-w-[680px]">
              {/* Month labels — 11px cell + 3px gap = 14px per week column */}
              <div className="relative mb-2 ml-8 h-4">
                {monthLabels.map((m) => (
                  <span
                    key={`${m.label}-${m.weekIndex}`}
                    className="absolute text-[10px] text-slate-500"
                    style={{ left: `${m.weekIndex * 14}px` }}
                  >
                    {m.label}
                  </span>
                ))}
              </div>

              <div className="flex gap-0.5">
                <div className="mr-2 flex w-6 flex-col justify-between py-px text-[9px] leading-none text-slate-600">
                  <span className="h-[11px]" />
                  <span>Mon</span>
                  <span className="h-[11px]" />
                  <span>Wed</span>
                  <span className="h-[11px]" />
                  <span>Fri</span>
                  <span className="h-[11px]" />
                </div>

                <div className="flex gap-[3px]">
                  {weeks.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[3px]">
                      {week.map((day, di) => {
                        if (day.c < 0) {
                          return (
                            <div
                              key={`${wi}-${di}`}
                              className="h-[11px] w-[11px] rounded-[2px] bg-transparent"
                            />
                          );
                        }
                        const level = getContributionLevel(day.c);
                        return (
                          <div
                            key={day.d}
                            title={`${day.c} contribution${day.c === 1 ? "" : "s"} on ${day.d}`}
                            className={`h-[11px] w-[11px] rounded-[2px] contrib-${level} transition-transform hover:scale-125 hover:ring-1 hover:ring-emerald-400/40`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                <span>
                  Snapshot of public + private activity ·{" "}
                  {contributionDays[0]?.d} →{" "}
                  {contributionDays[contributionDays.length - 1]?.d}
                </span>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  {[0, 1, 2, 3, 4].map((l) => (
                    <span
                      key={l}
                      className={`h-[11px] w-[11px] rounded-[2px] contrib-${l}`}
                    />
                  ))}
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-400">
            Includes private work at{" "}
            <span className="text-slate-200">{githubProfile.company}</span> and
            client systems.{" "}
            <span className="text-slate-300">
              {githubProfile.privateContributions.toLocaleString()}
            </span>{" "}
            contributions came from private repositories — the kind of work that
            never shows on a public star count.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Metric({
  value,
  label,
  hint,
}: {
  value: string;
  label: string;
  hint: string;
}) {
  return (
    <div>
      <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {value}
      </p>
      <p className="mt-0.5 text-xs font-medium text-slate-300 sm:text-sm">
        {label}
      </p>
      <p className="text-[11px] text-slate-500">{hint}</p>
    </div>
  );
}
