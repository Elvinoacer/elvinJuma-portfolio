"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/Elvinoacer", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "X", href: "https://x.com/Elvinoace", icon: Twitter },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#080a0e] py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#f1d99f] text-sm font-black text-[#11100c]">
                E
              </span>
              <span className="text-base font-semibold text-white">
                Elvin Omondi
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Full-stack developer building elegant, reliable digital products
              with strong interfaces and clean systems.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:flex sm:gap-14">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Navigate
              </h2>
              <div className="mt-4 grid gap-2">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-slate-400 transition hover:text-[#f1d99f]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Connect
              </h2>
              <div className="mt-4 flex gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.035] text-slate-400 transition hover:border-[#f1d99f]/35 hover:text-[#f1d99f]"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs font-medium text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} Elvin Juma. All rights reserved.</p>
          <p>Designed and built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
