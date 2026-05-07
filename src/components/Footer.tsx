"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-10 overflow-hidden">
      {/* --- DECORATIVE BACKGROUND --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Massive Watermark Text - hidden on mobile */}
      <div className="absolute bottom-0 left-0 right-0 select-none pointer-events-none overflow-hidden hidden sm:block">
        <h1 className="text-[12vw] sm:text-[15vw] font-bold text-white/[0.02] leading-none text-center tracking-tighter">
          ELVIN
        </h1>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* --- TOP GRID --- */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-10 sm:mb-12 md:mb-16 border-b border-white/5 pb-8 sm:pb-10 md:pb-12">
          {/* Column 1: Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-2">
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-md sm:rounded-lg flex items-center justify-center text-slate-950 font-bold font-mono text-sm sm:text-base md:text-xl">
                  E
                </div>
                <span className="text-base sm:text-lg md:text-xl font-bold text-slate-100 tracking-tight">
                  Elvin<span className="text-emerald-500">.</span>
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-sm">
              Building digital experiences that combine technical precision with
              visual elegance. Always learning, always creating.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-slate-100 font-bold text-sm sm:text-base mb-3 sm:mb-4 md:mb-6">Navigation</h3>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-slate-400 text-xs sm:text-sm md:text-base hover:text-emerald-400 transition-colors duration-300 flex items-center gap-1.5 sm:gap-2 group"
                  >
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div>
            <h3 className="text-slate-100 font-bold text-sm sm:text-base mb-3 sm:mb-4 md:mb-6">Connect</h3>
            <div className="flex gap-2 sm:gap-3 md:gap-4">
              <SocialLink
                href="https://github.com/Elvinoacer"
                icon={<GithubIcon />}
                label="GitHub"
              />
              <SocialLink
                href="https://linkedin.com"
                icon={<LinkedinIcon />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://x.com/Elvinoace"
                icon={<TwitterIcon />}
                label="X (Twitter)"
              />
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[10px] sm:text-xs md:text-sm text-slate-500">
          <p className="text-center sm:text-left">&copy; {currentYear} Elvin Juma. All rights reserved.</p>

          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-wrap justify-center">
            <span className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Operational
            </span>
            <p className="hidden xs:block">Designed & Built with Next.js</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- SUBCOMPONENTS ---

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-md sm:rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);
