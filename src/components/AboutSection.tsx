"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  // Animation variants for staggered reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-slate-950 text-slate-200"
    >
      {/* Background Grid (Consistent with Hero) */}
      <div className="absolute inset-0 z-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row items-center lg:items-start gap-10 sm:gap-12 md:gap-16"
        >
          {/* --- LEFT COLUMN: IMAGE COMPOSITION --- */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end relative group">
            {/* Decorative Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-[2rem] blur-2xl transform rotate-6 scale-90 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            {/* Main Image Container */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: -2 }}
              transition={{ duration: 0.4 }}
              className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 shadow-2xl backdrop-blur-sm"
            >
              {/* Image Overlay Gradient (Better text readability if you add text later) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10"></div>

              <Image
                src="/images/profile-2.png"
                alt="Elvin Omondi"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />

              {/* Tech Badge on Image */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-20 flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-950/60 border border-white/10 backdrop-blur-md">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] sm:text-xs font-mono text-emerald-400">
                  System Online
                </span>
              </div>
            </motion.div>

            {/* Floating Decorative Element */}
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-slate-900 rounded-lg sm:rounded-xl border border-emerald-500/30 flex items-center justify-center shadow-xl hidden sm:flex">
              <span className="text-2xl sm:text-3xl md:text-4xl">🚀</span>
            </div>
          </div>

          {/* --- RIGHT COLUMN: CONTENT --- */}
          <div className="w-full lg:w-7/12 text-center lg:text-left">
            <motion.div variants={itemVariants}>
              <h2 className="text-emerald-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
                // About The Developer
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Crafting digital{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500">
                  masterpieces with code.
                </span>
              </h3>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed"
            >
              <p>
                I am not just a coder; I am a digital architect. With over{" "}
                <span className="text-emerald-400 font-medium">
                  5 years of experience
                </span>
                , I specialize in translating complex logic into elegant,
                user-centric interfaces.
              </p>
              <p>
                My toolbelt is stocked with modern heavyweights like{" "}
                <span className="text-slate-200">
                  React, Next.js, GSAP, and Three.js
                </span>
                . I believe that a website should not just inform—it should
                perform and captivate.
              </p>
            </motion.div>

            {/* --- METRICS GRID --- */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-8 sm:mt-10"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.05] hover:border-emerald-500/30 transition-colors duration-300 group"
                >
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1 group-hover:text-emerald-400 transition-colors">
                    {stat.value}
                  </h4>
                  <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 uppercase tracking-wider font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const stats = [
  { value: "05+", label: "Years Exp." },
  { value: "30+", label: "Projects" },
  { value: "15+", label: "Happy Clients" },
];
