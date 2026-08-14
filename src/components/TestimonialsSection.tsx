"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Since 2024 Elvin has been responsible for the development and architecture of our platforms which has been instrumental to our operational growth. Even while working remotely, he is highly responsive, organized, and strategic in his thinking. He provides exceptional advice and executes high-performance web systems.",
    author: "Mark Greenspan",
    role: "Founder",
    company: "influenceTHIS Canada",
    link: "https://influencethis.ca",
    avatar: "/images/mark_portrait_circle.png",
  },
  {
    quote:
      "Elvin is AMAZING! If you have any doubt about hiring him, look at what he builds. Deep full-stack knowledge, reliable turnaround, good communication, and high accuracy with planning and delivery in complex software projects.",
    author: "Wilfried Hajek",
    role: "Agile Coach & Speaker",
    company: "GVS EdTech",
    link: "https://germanvirtualschool.com",
    avatar: "/images/wilfried_hajek_portrait_circle.png",
  },
  {
    quote:
      "Elvin brings exceptional engineering rigor: from database schemas and authentication to pixel-perfect responsive interfaces and realtime sockets. A highly impactful partner for high-scale digital ventures.",
    author: "Jonathan Castro",
    role: "CEO & Founder",
    company: "The Cliff",
    link: "https://the-cliff.com",
    avatar: "/images/jonathan_castro_gleam.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 border-t border-white/[0.05] bg-[#0f0f11]">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center sm:text-left"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#66d9ed]">
            Endorsements
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Collaborators Say
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="has-quote-watermark relative flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-[#14151a] p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#181920]"
            >
              <div>
                <p className="relative z-10 text-sm leading-relaxed text-slate-300">
                  {item.quote}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3.5 pt-4 border-t border-white/[0.06]">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/20 bg-slate-800 shadow-md">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <h4 className="font-bold text-sm text-white truncate">
                    - {item.author}
                  </h4>
                  <p className="text-xs text-slate-400 truncate">
                    {item.role} at{" "}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#66d9ed] hover:underline cursor-link"
                    >
                      {item.company}
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
