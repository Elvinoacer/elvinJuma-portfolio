"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { site } from "@/data/site";
import { fadeUp } from "@/lib/motion";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    try {
      const result = await sendEmail(formData);
      setIsError(!result.success);
      setSubmitMessage(result.message);
      if (result.success) {
        setFormData({ name: "", email: "", message: "" });
      }
    } catch {
      setIsError(true);
      setSubmitMessage("Something went wrong. Please try email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-emerald-400/90">
              Contact
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Let&apos;s build something that lasts.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
              Open to thoughtful freelance engagements and full-time roles.
              Prefer clear problems, real users, and teams that care about craft.
            </p>

            <div className="mt-8 space-y-3">
              <ContactRow
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value={site.email}
                href={`mailto:${site.email}`}
              />
              <ContactRow
                icon={<Phone className="h-4 w-4" />}
                label="Phone"
                value={site.phone}
                href={site.phoneHref}
              />
              <ContactRow
                icon={<MapPin className="h-4 w-4" />}
                label="Based in"
                value={site.location}
              />
            </div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Typically replies within 24 hours
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-emerald-500/20 via-transparent to-cyan-500/10 opacity-60" />
            <form
              onSubmit={handleSubmit}
              className="relative rounded-2xl border border-white/[0.08] bg-[#0b1220]/90 p-5 sm:p-7 md:p-8"
            >
              <h3 className="mb-6 text-lg font-semibold text-white">
                Send a message
              </h3>

              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Name"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                  <Field
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-medium text-slate-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="What are you building? Timeline? Constraints?"
                    className="w-full resize-none rounded-xl border border-white/10 bg-slate-950/60 px-3.5 py-3 text-sm text-slate-100 placeholder:text-slate-600 transition focus:border-emerald-500/40 focus:outline-none focus:ring-1 focus:ring-emerald-500/30"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                {submitMessage && (
                  <p
                    className={`rounded-lg px-3 py-2.5 text-center text-xs sm:text-sm ${
                      isError
                        ? "border border-red-500/20 bg-red-500/10 text-red-400"
                        : "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                    }`}
                  >
                    {submitMessage}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; id: string }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-medium text-slate-400"
      >
        {label}
      </label>
      <input
        id={id}
        className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-3.5 py-3 text-sm text-slate-100 placeholder:text-slate-600 transition focus:border-emerald-500/40 focus:outline-none focus:ring-1 focus:ring-emerald-500/30"
        {...props}
      />
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-3.5 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3.5 transition-colors hover:border-emerald-500/25 hover:bg-white/[0.04]">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-slate-950 text-slate-400">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-wider text-slate-500">
          {label}
        </p>
        <p className="truncate text-sm font-medium text-slate-200">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {inner}
      </a>
    );
  }
  return inner;
}
