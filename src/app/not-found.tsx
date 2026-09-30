import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#10110f] px-6 py-32 text-[#f4f3ed] sm:px-10">
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1fr_auto] md:items-center">
        <div className="relative z-10 max-w-xl">
          <p className="mb-7 text-xs font-medium uppercase tracking-[0.22em] text-[#d7fb78]">
            A small detour · Error 404
          </p>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-7xl">
            Good work.
            <br />
            Wrong address.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[#a6a89e]">
            This page doesn&apos;t exist, but there&apos;s plenty to explore.
            Let&apos;s get you back to the good stuff.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-full bg-[#d7fb78] px-6 py-3.5 text-sm font-semibold text-[#10110f] transition-colors hover:bg-[#e4ff9d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d7fb78]"
            >
              Back to home <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 py-3 text-sm font-medium transition-colors hover:text-[#d7fb78] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d7fb78]"
            >
              Explore the work <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <p
          aria-hidden="true"
          className="select-none text-[clamp(9rem,22vw,20rem)] font-semibold leading-none tracking-[-0.1em] text-[#d7fb78]/10"
        >
          404
        </p>
      </div>
    </section>
  );
}
