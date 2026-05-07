"use client";
import { projects } from "@/data/projects"; // Keep your data source
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react"; // Make sure to install lucide-react or use svg below

export default function ProjectsPreview() {
  return (
    <section
      id="projects"
      className="relative py-16 sm:py-20 md:py-24 bg-slate-950 overflow-hidden"
    >
      {/* Background Elements (Consistent with Hero) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-emerald-500/10 blur-[60px] sm:blur-[80px] md:blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12 md:mb-16 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-emerald-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2 block">
              // Selected Works
            </span>
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-2 sm:mb-4">
              Digital products{" "}
              <span className="text-slate-500">that deliver results.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-sm sm:text-base text-slate-300 hover:text-emerald-400 transition-colors duration-300 pb-1 border-b border-transparent hover:border-emerald-400"
            >
              View Full Portfolio
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* --- PROJECTS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col h-full bg-slate-900/50 border border-white/5 rounded-xl sm:rounded-2xl overflow-hidden hover:border-emerald-500/50 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)] transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-32 sm:h-48 md:h-64 overflow-hidden">
                {/* Overlay Gradient for contrast */}
                <div className="absolute inset-0 bg-slate-950/20 z-10 group-hover:bg-slate-950/0 transition-colors duration-500"></div>

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Floating Action Button (Top Right) */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-slate-950/90 backdrop-blur border border-emerald-500/30 p-1.5 sm:p-2 rounded-full text-emerald-400">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-1 p-3 sm:p-5 md:p-6">
                <div className="mb-2 sm:mb-4">
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold text-slate-100 mb-1 sm:mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-[10px] sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto pt-3 sm:pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[9px] sm:text-xs font-medium px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-800 text-slate-300 border border-white/5 group-hover:border-emerald-500/20 group-hover:text-emerald-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 text-slate-500">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Clickable Area Overlay */}
              <Link
                href={project.link || "#"}
                className="absolute inset-0 z-30 focus:outline-none"
              >
                <span className="sr-only">View {project.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
