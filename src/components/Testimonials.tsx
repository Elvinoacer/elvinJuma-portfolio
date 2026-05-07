"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    content:
      "Elvin translated a vague product idea into a clean, reliable platform. The final experience felt considered at every breakpoint.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager at DesignHub",
    content:
      "The workflow app he built simplified how our team manages daily operations. Strong engineering, thoughtful UX, and clear communication.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Director at BrandVision",
    content:
      "He brings the rare mix of technical depth and visual taste. Our site now feels premium, fast, and easy for clients to trust.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#080a0e] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f1d99f]">
            Client notes
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Trusted for clean execution and refined digital experiences.
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-14 lg:gap-5">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-lg border border-white/10 bg-[#10141b] p-5 transition hover:border-[#f1d99f]/35 hover:bg-[#121821] sm:p-6"
            >
              <div className="mb-5 flex items-center justify-between">
                <Quote className="h-5 w-5 text-[#f1d99f]" />
                <div className="flex gap-0.5 text-[#f1d99f]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-sm leading-7 text-slate-300">{item.content}</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <h3 className="text-sm font-semibold text-white">{item.name}</h3>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  {item.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
