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
      className="relative py-16 sm:py-20 md:py-24 bg-slate-950 overflow-hidden"
    >
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-emerald-500/5 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-24 items-start">
          {/* --- LEFT COLUMN: CONTEXT & INFO --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="pt-4 sm:pt-6 md:pt-8"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-mono text-xs sm:text-sm tracking-widest uppercase">
                System Status: Online
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-100 mb-3 sm:mb-6 leading-tight">
              Let&apos;s build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                future-proof.
              </span>
            </h2>

            <p className="text-xs sm:text-base md:text-lg text-slate-400 mb-6 sm:mb-10 md:mb-12 leading-relaxed max-w-lg">
              Have a project in mind? I am currently accepting new contracts.
              Let&apos;s discuss how we can solve your specific problems with
              modern tech.
            </p>

            {/* Contact Channels Grid */}
            <div className="grid gap-3 sm:gap-4 md:gap-6">
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
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl sm:rounded-2xl opacity-20 blur"></div>

            <div className="relative bg-slate-900 border border-white/10 p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-2xl">
              <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs sm:text-sm font-medium text-slate-400 ml-1"
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
                      className="w-full px-2.5 sm:px-4 py-2 sm:py-3 bg-slate-950 border border-slate-800 rounded-lg sm:rounded-xl text-slate-100 text-xs sm:text-base placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs sm:text-sm font-medium text-slate-400 ml-1"
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
                      className="w-full px-2.5 sm:px-4 py-2 sm:py-3 bg-slate-950 border border-slate-800 rounded-lg sm:rounded-xl text-slate-100 text-xs sm:text-base placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs sm:text-sm font-medium text-slate-400 ml-1"
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
                    className="w-full px-2.5 sm:px-4 py-2 sm:py-3 bg-slate-950 border border-slate-800 rounded-lg sm:rounded-xl text-slate-100 text-xs sm:text-base placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full group relative px-4 sm:px-8 py-2.5 sm:py-4 bg-emerald-500 text-slate-950 font-bold text-xs sm:text-base rounded-lg sm:rounded-xl overflow-hidden transition-all hover:bg-emerald-400 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]"
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
                    className={`p-3 sm:p-4 rounded-lg text-xs sm:text-sm font-medium text-center ${
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

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s linear infinite;
        }
      `}</style>
    </section>
  );
}

// --- SUBCOMPONENTS & ICONS (Self-contained) ---

function ContactCard({ icon, label, value, href, delay = 0 }: any) {
  const Content = (
    <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all duration-300 group cursor-pointer">
      <div className="p-2 sm:p-3 rounded-md sm:rounded-lg bg-slate-950 border border-slate-800 group-hover:border-emerald-500/50 group-hover:text-emerald-400 text-slate-400 transition-colors">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] sm:text-xs font-mono text-slate-500 uppercase tracking-wider mb-0.5 group-hover:text-emerald-400/70 transition-colors">
          {label}
        </p>
        <p className="text-slate-200 font-medium text-sm sm:text-base group-hover:text-white transition-colors truncate">
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
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 sm:w-5 sm:h-5"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
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
    className="w-4 h-4 sm:w-5 sm:h-5"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapPinIcon = () => (
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
    className="w-4 h-4 sm:w-5 sm:h-5"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-3.5 h-3.5 sm:w-4 sm:h-4"
  >
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const LoaderIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${className || ""}`}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);
