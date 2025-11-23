"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
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
      if (result.success) {
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setSubmitMessage("Transmission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-slate-950 overflow-hidden"
    >
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* --- LEFT COLUMN: CONTEXT & INFO --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase">
                System Status: Online
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6 leading-tight">
              Let&apos;s build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                future-proof.
              </span>
            </h2>

            <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-lg">
              Have a project in mind? I am currently accepting new contracts.
              Let&apos;s discuss how we can solve your specific problems with
              modern tech.
            </p>

            {/* Contact Channels Grid */}
            <div className="grid gap-6">
              <ContactCard
                icon={<MailIcon />}
                label="Email Interface"
                value="omondielvin@gmail.com"
                href="mailto:omondielvin@gmail.com"
                delay={0.1}
              />
              <ContactCard
                icon={<PhoneIcon />}
                label="Voice Channel"
                value="+254 (790) 670-542"
                href="tel:+254790670542"
                delay={0.2}
              />
              <ContactCard
                icon={<MapPinIcon />}
                label="Base of Operations"
                value="Kesses, Moi Area"
                delay={0.3}
              />
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: THE FORM --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow Effect behind form */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl opacity-20 blur"></div>

            <div className="relative bg-slate-900 border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-slate-400 ml-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-slate-400 ml-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-400 ml-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full group relative px-8 py-4 bg-emerald-500 text-slate-950 font-bold rounded-xl overflow-hidden transition-all hover:bg-emerald-400 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <LoaderIcon className="animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Initialize Request
                        <SendIcon />
                      </>
                    )}
                  </span>
                </motion.button>

                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg text-sm font-medium text-center ${
                      submitMessage.includes("error") ||
                      submitMessage.includes("failed")
                        ? "bg-red-500/10 text-red-400 border border-red-500/20"
                        : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    }`}
                  >
                    {submitMessage}
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

// --- SUBCOMPONENTS & ICONS (Self-contained) ---

function ContactCard({ icon, label, value, href, delay = 0 }: any) {
  const Content = (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all duration-300 group cursor-pointer">
      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-emerald-500/50 group-hover:text-emerald-400 text-slate-400 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-0.5 group-hover:text-emerald-400/70 transition-colors">
          {label}
        </p>
        <p className="text-slate-200 font-medium group-hover:text-white transition-colors">
          {value}
        </p>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      {href ? <a href={href}>{Content}</a> : Content}
    </motion.div>
  );
}

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const LoaderIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);
