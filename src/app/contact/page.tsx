"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { sendEmail } from "@/actions/sendEmail";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HiTerminal } from "react-icons/hi";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden py-16 sm:py-20 md:py-24">
      {/* --- BACKGROUND LAYERS --- */}

      {/* 1. Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* 2. Dynamic Glowing Orbs */}
      <motion.div
        animate={{
          x: mousePosition.x * 0.03,
          y: mousePosition.y * 0.03,
        }}
        className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-emerald-500/10 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen"
      />
      <motion.div
        animate={{
          x: mousePosition.x * -0.03,
          y: mousePosition.y * -0.03,
        }}
        className="absolute bottom-0 left-0 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-cyan-500/10 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen"
      />

      {/* 3. Subtle Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* --- HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-10 sm:mb-12 md:mb-16"
        >
          <span className="inline-block py-1 px-2.5 sm:px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
            // Let&apos;s Connect
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-4 sm:mb-6 tracking-tight leading-tight">
            Ready to build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              extraordinary?
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto px-2">
            I&apos;m always excited to collaborate on new projects. Whether you
            have a question or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        {/* --- MAIN CONTENT LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* LEFT: Contact Info (Span 5) */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Terminal-style Info Card */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-colors duration-500"
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-slate-900/80 border-b border-white/5">
                <div className="flex gap-1 sm:gap-1.5">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-slate-500 text-[10px] sm:text-xs font-mono ml-1 sm:ml-2 flex items-center gap-1">
                  <HiTerminal className="text-emerald-500" />
                  contact_info.sh
                </span>
              </div>

              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="font-mono text-xs sm:text-sm">
                  <span className="text-emerald-400">$</span>
                  <span className="text-slate-400 ml-2">
                    cat contact_details
                  </span>
                </div>

                <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
                  <ContactItem
                    href="mailto:omondielvin@gmail.com"
                    icon={<FaEnvelope />}
                    label="Email"
                    value="omondielvin@gmail.com"
                  />
                  <ContactItem
                    href="tel:+254790670542"
                    icon={<FaPhone />}
                    label="Phone"
                    value="+254 790 670542"
                  />
                  <ContactItem
                    href="https://wa.me/254790670542"
                    icon={<FaWhatsapp />}
                    label="WhatsApp"
                    value="Chat on WhatsApp"
                  />
                  <ContactItem
                    href="#"
                    icon={<FaMapMarkerAlt />}
                    label="Location"
                    value="Nairobi, Kenya"
                  />
                </div>
              </div>
            </motion.div>

            {/* Social Links Card */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-900/30 backdrop-blur-md border border-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-emerald-500/30 transition-colors duration-500"
            >
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-1.5 sm:w-2 h-5 sm:h-6 bg-emerald-500 rounded-full"></span>
                Find Me Online
              </h3>
              <div className="flex gap-2 sm:gap-3">
                <SocialLink
                  href="https://github.com/Elvinoacer"
                  icon={<FaGithub />}
                />
                <SocialLink
                  href="https://linkedin.com"
                  icon={<FaLinkedin />}
                />
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              variants={itemVariants}
              className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-500"></span>
                </span>
                <div>
                  <p className="text-emerald-400 font-medium text-sm sm:text-base">
                    Available for Work
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    Response time: ~24 hours
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Contact Form (Span 7) */}
          <motion.div
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ContactFormComponent />
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

// --- Helper Components ---

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
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-slate-950/50 border border-white/5 hover:border-emerald-500/30 hover:bg-slate-900/50 transition-all duration-300 group"
      whileHover={{ x: 5 }}
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors text-sm sm:text-base">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">
          {label}
        </p>
        <p className="text-slate-200 font-medium text-xs sm:text-sm md:text-base truncate">
          {value}
        </p>
      </div>
    </motion.a>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-slate-950 border border-white/5 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-slate-900 transition-all duration-300"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-lg sm:text-xl">{icon}</span>
    </motion.a>
  );
}

function ContactFormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");

    const result = await sendEmail(formData);

    setStatus(result.message);
    setIsSubmitting(false);
    if (result.success) {
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-colors duration-500"
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-slate-900/80 border-b border-white/5">
        <div className="flex gap-1 sm:gap-1.5">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80"></div>
        </div>
        <span className="text-slate-500 text-[10px] sm:text-xs font-mono ml-1 sm:ml-2 flex items-center gap-1">
          <HiTerminal className="text-emerald-500" />
          send_message.sh
        </span>
      </div>

      <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
        <div className="font-mono text-xs sm:text-sm mb-4 sm:mb-6">
          <span className="text-emerald-400">$</span>
          <span className="text-slate-400 ml-2">./compose_message</span>
        </div>

        <div className="space-y-4 sm:space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-slate-300"
            >
              Your Name
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-950/50 text-white text-sm sm:text-base border border-white/10 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 placeholder:text-slate-600"
              placeholder="John Doe"
              required
              whileFocus={{ scale: 1.01 }}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-slate-300"
            >
              Email Address
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-950/50 text-white text-sm sm:text-base border border-white/10 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 placeholder:text-slate-600"
              placeholder="john@example.com"
              required
              whileFocus={{ scale: 1.01 }}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-slate-300"
            >
              Your Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-950/50 text-white text-sm sm:text-base border border-white/10 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 placeholder:text-slate-600 resize-none"
              rows={4}
              placeholder="Tell me about your project..."
              required
              whileFocus={{ scale: 1.01 }}
            />
          </div>
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="group relative w-full px-6 sm:px-8 py-3 sm:py-4 bg-emerald-500 text-slate-950 font-bold text-sm sm:text-base rounded-lg sm:rounded-xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
          <span className="relative z-10">
            {isSubmitting ? "Sending..." : "Send Message"}
          </span>
        </motion.button>

        <AnimatePresence>
          {status && !isSubmitting && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`text-center text-xs sm:text-sm ${
                status.includes("success") || status.includes("sent")
                  ? "text-emerald-400"
                  : "text-slate-400"
              }`}
            >
              {status}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
}
