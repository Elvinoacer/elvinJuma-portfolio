"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    content:
      "Working with Elvin was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and with exceptional quality. Their attention to detail is top-notch.",
    initials: "SJ",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "PM at DesignHub",
    content:
      "The task management app they built for our team has revolutionized our workflow. Their understanding of user experience and clean code practices is impressive.",
    initials: "MC",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Director at BrandVision",
    content:
      "We've worked with many developers, but none have shown the level of professionalism and technical expertise as Elvin. He is our go-to for all web projects now.",
    initials: "ER",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 bg-slate-950 overflow-hidden"
    >
      {/* --- BACKGROUND DECOR --- */}
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Radial Glows */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="container relative z-10 mx-auto px-6">
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase bg-emerald-950/30 px-4 py-2 rounded-full border border-emerald-500/20">
              // Client Feedback
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-100"
          >
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              innovators.
            </span>
          </motion.h2>
        </div>

        {/* --- TESTIMONIALS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative group h-full"
            >
              {/* Card Container */}
              <div className="relative h-full p-8 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm transition-colors duration-300 hover:bg-slate-900/60 hover:border-emerald-500/30">
                {/* Decorative Quote Mark (Watermark) */}
                <div className="absolute top-6 right-8 text-8xl font-serif text-white/[0.03] group-hover:text-emerald-500/[0.05] transition-colors leading-none select-none pointer-events-none">
                  &rdquo;
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-5 h-5 ${
                        i < item.rating ? "text-emerald-400" : "text-slate-700"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-300 text-lg leading-relaxed mb-8 relative z-10">
                  {item.content}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                  {/* Avatar Placeholder with Gradient Ring */}
                  <div className="relative w-12 h-12 rounded-full flex items-center justify-center bg-slate-800 text-slate-300 font-bold overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20"></div>
                    {item.initials}
                  </div>

                  <div>
                    <h4 className="text-slate-100 font-bold text-base group-hover:text-emerald-400 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-slate-500 text-sm font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Glow Line on Hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* --- COMPANY LOGO STRIP (Placeholder) --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 pt-10 border-t border-white/5"
        >
          <p className="text-center text-slate-500 text-sm mb-8 uppercase tracking-widest">
            Also worked with
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale mix-blend-screen">
            {/* Simple Text Placeholders for Logos to keep it copy-pasteable */}
            {[
              "Startup Inc",
              "Enterprise Corp",
              "Future Tech",
              "Global Systems",
            ].map((logo) => (
              <span
                key={logo}
                className="text-xl font-bold font-mono text-slate-300 hover:text-white transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
