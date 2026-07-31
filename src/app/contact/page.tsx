"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { site } from "@/data/site";
import { fadeUp, stagger } from "@/lib/motion";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Loader2, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712] pb-20 pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-12 max-w-2xl sm:mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-emerald-400/90"
          >
            Contact
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Tell me what you&apos;re building.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base leading-relaxed text-slate-400"
          >
            {site.availability}. Share context, constraints, and timeline — I
            reply with clarity, not fluff.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">
                Direct channels
              </h2>
              <div className="space-y-2.5">
                <ContactItem
                  href={`mailto:${site.email}`}
                  icon={<FaEnvelope />}
                  label="Email"
                  value={site.email}
                />
                <ContactItem
                  href={site.phoneHref}
                  icon={<FaPhone />}
                  label="Phone"
                  value={site.phone}
                />
                <ContactItem
                  href={site.whatsapp}
                  icon={<FaWhatsapp />}
                  label="WhatsApp"
                  value="Message on WhatsApp"
                />
                <ContactItem
                  href={site.github}
                  icon={<FaGithub />}
                  label="GitHub"
                  value="@Elvinoacer"
                />
                <ContactItem
                  href="#"
                  icon={<FaMapMarkerAlt />}
                  label="Location"
                  value={site.location}
                />
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <div>
                  <p className="text-sm font-medium text-emerald-300">
                    Accepting new work
                  </p>
                  <p className="text-xs text-slate-400">
                    Typical response · under 24 hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  const isExternal = href.startsWith("http");
  const Comp = href === "#" ? "div" : "a";
  return (
    <Comp
      {...(href !== "#"
        ? {
            href,
            target: isExternal ? "_blank" : undefined,
            rel: isExternal ? "noopener noreferrer" : undefined,
          }
        : {})}
      className="flex items-center gap-3.5 rounded-xl border border-white/[0.05] bg-slate-950/40 p-3 transition-colors hover:border-emerald-500/25 hover:bg-slate-900/40"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-sm text-emerald-400">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-wider text-slate-500">
          {label}
        </p>
        <p className="truncate text-sm font-medium text-slate-200">{value}</p>
      </div>
    </Comp>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    const result = await sendEmail(formData);
    setIsError(!result.success);
    setStatus(result.message);
    setIsSubmitting(false);
    if (result.success) {
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/[0.08] bg-[#0b1220]/90 p-5 sm:p-7 md:p-8"
    >
      <h2 className="mb-6 text-lg font-semibold text-white">Send a message</h2>
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="c-name"
              className="mb-1.5 block text-xs font-medium text-slate-400"
            >
              Name
            </label>
            <input
              id="c-name"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-3.5 py-3 text-sm text-white placeholder:text-slate-600 focus:border-emerald-500/40 focus:outline-none focus:ring-1 focus:ring-emerald-500/30"
            />
          </div>
          <div>
            <label
              htmlFor="c-email"
              className="mb-1.5 block text-xs font-medium text-slate-400"
            >
              Email
            </label>
            <input
              id="c-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              placeholder="you@company.com"
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-3.5 py-3 text-sm text-white placeholder:text-slate-600 focus:border-emerald-500/40 focus:outline-none focus:ring-1 focus:ring-emerald-500/30"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="c-message"
            className="mb-1.5 block text-xs font-medium text-slate-400"
          >
            Message
          </label>
          <textarea
            id="c-message"
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
            rows={6}
            placeholder="Project context, goals, timeline…"
            className="w-full resize-none rounded-xl border border-white/10 bg-slate-950/60 px-3.5 py-3 text-sm text-white placeholder:text-slate-600 focus:border-emerald-500/40 focus:outline-none focus:ring-1 focus:ring-emerald-500/30"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <Send className="h-3.5 w-3.5" />
            </>
          )}
        </button>

        <AnimatePresence>
          {status && !isSubmitting && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`rounded-lg px-3 py-2.5 text-center text-sm ${
                isError
                  ? "border border-red-500/20 bg-red-500/10 text-red-400"
                  : "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
              }`}
            >
              {status}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
