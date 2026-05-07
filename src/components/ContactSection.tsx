"use client";

import { sendEmail } from "@/actions/sendEmail";
import { motion } from "framer-motion";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await sendEmail(formData);
      setSubmitMessage(result.message);
      if (result.success) setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitMessage("Transmission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0a0d12] py-16 sm:py-20 lg:py-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:36px_36px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f1d99f]">
            Start a project
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-6xl">
            Let&apos;s build something sharp, useful, and ready for growth.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Share the goal, the constraints, and what success should look like.
            I&apos;ll help turn it into a polished product plan and an elegant
            implementation.
          </p>

          <div className="mt-8 grid gap-3">
            <ContactCard
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value="omondielvin@gmail.com"
              href="mailto:omondielvin@gmail.com"
            />
            <ContactCard
              icon={<Phone className="h-4 w-4" />}
              label="Phone"
              value="+254 790 670 542"
              href="tel:+254790670542"
            />
            <ContactCard
              icon={<MapPin className="h-4 w-4" />}
              label="Location"
              value="Kesses, Moi Area"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="rounded-lg border border-white/10 bg-[#10141b] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.32)] sm:p-6 lg:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name">
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="premium-input"
                />
              </Field>
              <Field label="Email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="premium-input"
                />
              </Field>
            </div>

            <Field label="Project brief">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me what you want to build..."
                className="premium-input resize-none"
              />
            </Field>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-[#f1d99f] px-5 py-3 text-sm font-bold text-[#11100c] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending
                </>
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>

            {submitMessage && (
              <div
                className={`rounded-md border px-4 py-3 text-center text-xs font-semibold ${
                  submitMessage.toLowerCase().includes("failed") ||
                  submitMessage.toLowerCase().includes("error")
                    ? "border-red-400/25 bg-red-500/10 text-red-300"
                    : "border-[#f1d99f]/25 bg-[#f1d99f]/10 text-[#f1d99f]"
                }`}
              >
                {submitMessage}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactCard({
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
  const content = (
    <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-3 transition hover:border-[#f1d99f]/35 hover:bg-white/[0.055]">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#f1d99f] text-[#11100c]">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
          {label}
        </p>
        <p className="truncate text-sm font-semibold text-white">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}
