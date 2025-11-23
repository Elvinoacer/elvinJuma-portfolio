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
    <section className="relative min-h-screen bg-slate-950 overflow-hidden py-24">
      {/* --- BACKGROUND LAYERS --- */}
      {/* 1. Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* 2. Atmospheric Blurs (Emerald & Cyan) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="container relative z-10 mx-auto px-6">
        {/* --- HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4">
            // The Developer
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6 tracking-tight">
            I transform complex problems into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              elegant solutions.
            </span>
          </h1>
        </motion.div>

        {/* --- MAIN CONTENT LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* LEFT: THE STORY (Span 7) */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Bio Card */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-colors duration-500"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
                Behind the Code
              </h2>

              <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                <p>
                  Hi, I'm <strong className="text-emerald-400">Elvin</strong>.
                  I'm a Full-Stack Engineer with over{" "}
                  <span className="text-white font-medium">
                    4 years of experience
                  </span>{" "}
                  crafting seamless digital ecosystems.
                </p>
                <p>
                  My journey began with a quirky todo app that crashed every 5
                  minutes—a humbling lesson in resilience. Since then, I've
                  scaled my skills to build high-performance applications using{" "}
                  <span className="text-slate-100 border-b border-emerald-500/30">
                    React, Node.js, and AI integrations
                  </span>
                  .
                </p>
                <p>
                  When I'm not debugging, I'm photographing street art or
                  perfecting my pour-over coffee. I believe in code that is{" "}
                  <span className="text-white italic">
                    clean, accessible, and remarkably fast.
                  </span>
                </p>
              </div>
            </motion.div>

            {/* Endorsements (Mini Testimonials) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {endorsements.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-slate-900/30 border border-white/5 p-6 rounded-xl hover:bg-slate-800/50 transition-colors"
                >
                  <p className="text-slate-400 text-sm italic mb-4">
                    "{item.text}"
                  </p>
                  <div>
                    <p className="text-emerald-400 font-bold text-sm">
                      {item.author}
                    </p>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">
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
              className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <SiJavascript className="text-emerald-500" />
                Technical Arsenal
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(16, 185, 129, 0.1)",
                    }}
                    className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-slate-950 border border-white/5 cursor-default group transition-colors"
                  >
                    <skill.icon className="text-3xl text-slate-500 group-hover:text-emerald-400 transition-colors duration-300" />
                    <span className="text-[10px] font-medium text-slate-400 group-hover:text-slate-200 uppercase tracking-wide">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex items-center justify-between text-sm">
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
          className="flex flex-col items-center justify-center gap-8 border-t border-white/5 pt-16"
        >
          <p className="text-2xl text-slate-300 text-center max-w-2xl">
            Ready to create something{" "}
            <span className="text-white font-bold">extraordinary</span>?
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* Primary Contact */}
            <a
              href="mailto:omondielvin@gmail.com"
              className="group relative px-8 py-3 bg-emerald-500 text-slate-950 font-bold rounded-full overflow-hidden transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <span className="flex items-center gap-2 relative z-10">
                <FaEnvelope /> Get In Touch
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
      className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-white/10 rounded-full text-slate-300 font-medium hover:bg-slate-800 hover:text-white hover:border-emerald-500/30 transition-all duration-300"
    >
      <span className="text-lg">{icon}</span>
      <span>{text}</span>
    </a>
  );
}
