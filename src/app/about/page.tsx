"use client";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";
import {
  SiAmazon,
  SiFirebase,
  SiGraphql,
  SiJavascript,
  SiLangchain,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// --- DATA ---
const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Langchain", icon: SiLangchain },
  { name: "Firebase", icon: SiFirebase },
  { name: "Redux", icon: SiRedux },
  { name: "GraphQL", icon: SiGraphql },
  { name: "AWS", icon: SiAmazon },
];

const endorsements = [
  {
    text: "Elvin delivered our app ahead of schedule with flawless performance!",
    author: "Julie Jayden",
    role: "CEO, TechSpeedPart",
  },
  {
    text: "His attention to detail and creative solutions are unmatched.",
    author: "James Weed",
    role: "Product Manager",
  },
];

// --- ANIMATION VARIANTS ---
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

export default function About() {
  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden py-16 sm:py-20 md:py-24">
      {/* --- BACKGROUND LAYERS --- */}
      {/* 1. Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* 2. Atmospheric Blurs (Emerald & Cyan) */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-emerald-500/10 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-cyan-500/10 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* --- HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20"
        >
          <span className="inline-block py-1 px-2.5 sm:px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
            // The Developer
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-4 sm:mb-6 tracking-tight leading-tight">
            I transform complex problems into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              elegant solutions.
            </span>
          </h1>
        </motion.div>

        {/* --- MAIN CONTENT LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          {/* LEFT: THE STORY (Span 7) */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Bio Card */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-emerald-500/30 transition-colors duration-500"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <span className="w-1.5 sm:w-2 h-6 sm:h-8 bg-emerald-500 rounded-full"></span>
                Behind the Code
              </h2>

              <div className="space-y-3 sm:space-y-4 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                  Hi, I&apos;m <strong className="text-emerald-400">Elvin</strong>.
                  I&apos;m a Full-Stack Engineer with over{" "}
                  <span className="text-white font-medium">
                    4 years of experience
                  </span>{" "}
                  crafting seamless digital ecosystems.
                </p>
                <p>
                  My journey began with a quirky todo app that crashed every 5
                  minutes—a humbling lesson in resilience. Since then, I&apos;ve
                  scaled my skills to build high-performance applications using{" "}
                  <span className="text-slate-100 border-b border-emerald-500/30">
                    React, Node.js, and AI integrations
                  </span>
                  .
                </p>
                <p>
                  When I&apos;m not debugging, I&apos;m photographing street art or
                  perfecting my pour-over coffee. I believe in code that is{" "}
                  <span className="text-white italic">
                    clean, accessible, and remarkably fast.
                  </span>
                </p>
              </div>
            </motion.div>

            {/* Endorsements (Mini Testimonials) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {endorsements.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-slate-900/30 border border-white/5 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl hover:bg-slate-800/50 transition-colors"
                >
                  <p className="text-slate-400 text-xs sm:text-sm italic mb-3 sm:mb-4">
                    &quot;{item.text}&quot;
                  </p>
                  <div>
                    <p className="text-emerald-400 font-bold text-xs sm:text-sm">
                      {item.author}
                    </p>
                    <p className="text-slate-500 text-[10px] sm:text-xs uppercase tracking-wider">
                      {item.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: THE TOOLKIT (Span 5) */}
          <motion.div
            className="lg:col-span-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 h-full"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <SiJavascript className="text-emerald-500 text-lg sm:text-xl" />
                Technical Arsenal
              </h3>

              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(16, 185, 129, 0.1)",
                    }}
                    className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-slate-950 border border-white/5 cursor-default group transition-colors"
                  >
                    <skill.icon className="text-xl sm:text-2xl md:text-3xl text-slate-500 group-hover:text-emerald-400 transition-colors duration-300" />
                    <span className="text-[8px] sm:text-[10px] font-medium text-slate-400 group-hover:text-slate-200 uppercase tracking-wide text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/5">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-400">Current Focus:</span>
                  <span className="text-emerald-400 font-mono">
                    Agentic AI & RAG
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* --- BOTTOM CTA --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-5 sm:gap-8 border-t border-white/5 pt-12 sm:pt-16"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 text-center max-w-2xl px-2">
            Ready to create something{" "}
            <span className="text-white font-bold">extraordinary</span>?
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            {/* Primary Contact */}
            <a
              href="mailto:omondielvin@gmail.com"
              className="group relative px-6 sm:px-8 py-3 bg-emerald-500 text-slate-950 font-bold text-sm sm:text-base rounded-full overflow-hidden transition-transform hover:scale-105 text-center"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <span className="flex items-center justify-center gap-2 relative z-10">
                <FaEnvelope className="text-sm sm:text-base" /> Get In Touch
              </span>
            </a>

            {/* Secondary Actions */}
            <SocialBtn
              href="/images/Elvin-Resume-template.pdf"
              icon={<FaFileDownload />}
              text="Resume"
            />
            <SocialBtn
              href="https://linkedin.com"
              icon={<FaLinkedin />}
              text="LinkedIn"
            />
            <SocialBtn
              href="https://github.com/Elvinoacer"
              icon={<FaGithub />}
              text="GitHub"
            />
          </div>
        </motion.div>
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

// Helper Component for Social Buttons
function SocialBtn({
  href,
  icon,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-900 border border-white/10 rounded-full text-slate-300 font-medium text-sm sm:text-base hover:bg-slate-800 hover:text-white hover:border-emerald-500/30 transition-all duration-300"
    >
      <span className="text-base sm:text-lg">{icon}</span>
      <span>{text}</span>
    </a>
  );
}
