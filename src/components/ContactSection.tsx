"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, Mail, MessageSquare, ExternalLink, CheckCircle } from "lucide-react";
import { sendEmail } from "@/actions/sendEmail";
import { site } from "@/data/site";

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
      setSubmitMessage("Something went wrong. Please reach out via email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: "WhatsApp", href: site.whatsapp },
    { name: "LinkedIn", href: site.linkedin },
    { name: "GitHub", href: site.github },
    { name: "Twitter / X", href: site.twitter },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32 border-t border-white/[0.05] bg-[#070909]"
    >
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#9440e8]/5 blur-[160px]" />
      <div className="pointer-events-none absolute top-10 left-10 h-[400px] w-[400px] rounded-full bg-lime-300/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Headline, Big Underlined Email, Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
              Available for select freelance &amp; engineering opportunities.
            </h2>

            <p className="mt-6 text-base text-slate-300 sm:text-lg leading-relaxed">
              Have an exciting project you need help with?
              <br />
              Send me an email or contact me via instant message!
            </p>

            {/* Big Chonky Underline Email */}
            <div className="mt-8">
              <a
                href={`mailto:${site.email}`}
                className="chonky-underline-violet has-hover-anim font-mono text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white transition-colors cursor-link"
              >
                {site.email}
              </a>
            </div>

            {/* Instant Message & Social Links */}
            <div className="mt-10">
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-4">
                Instant Message &amp; Social
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-sm text-slate-400 hover:text-lime-300 transition-colors cursor-link"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="h-3 w-3 text-slate-500" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Status Pill */}
            <div className="mt-10 inline-flex items-center gap-2.5 rounded-full border border-lime-300/25 bg-lime-300/10 px-4 py-2 text-xs font-mono text-lime-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-300 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-300" />
              </span>
              <span>Available for projects in {new Date().getFullYear()}</span>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl border border-white/10 bg-[#0c1010] p-7 sm:p-9 shadow-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
                <MessageSquare className="h-5 w-5 text-lime-300" />
                <span>Send a Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block font-mono text-xs text-slate-400"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      className="w-full rounded-xl border border-white/10 bg-[#070909] px-4 py-3 font-sans text-sm text-white placeholder:text-slate-600 focus:border-lime-300 focus:outline-none focus:ring-1 focus:ring-[#bef264] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block font-mono text-xs text-slate-400"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      required
                      className="w-full rounded-xl border border-white/10 bg-[#070909] px-4 py-3 font-sans text-sm text-white placeholder:text-slate-600 focus:border-lime-300 focus:outline-none focus:ring-1 focus:ring-[#bef264] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block font-mono text-xs text-slate-400"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or idea..."
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#070909] px-4 py-3 font-sans text-sm text-white placeholder:text-slate-600 focus:border-lime-300 focus:outline-none focus:ring-1 focus:ring-[#bef264] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-lime-300 py-3.5 font-mono text-xs font-bold text-[#070909] transition-all hover:bg-[#52cde2] hover:shadow-[0_0_25px_rgba(102,217,237,0.4)] disabled:opacity-60 cursor-link"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>

                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 rounded-xl p-3.5 font-mono text-xs ${
                      isError
                        ? "border border-red-500/30 bg-red-500/10 text-red-400"
                        : "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                    }`}
                  >
                    {!isError && <CheckCircle className="h-4 w-4 shrink-0" />}
                    <span>{submitMessage}</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
