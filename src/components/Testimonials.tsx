"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    content:
      "Working with this developer was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and with exceptional quality. Their attention to detail and problem-solving skills are top-notch.",
    avatar: "/avatar1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager at DesignHub",
    content:
      "The task management app they built for our team has revolutionized our workflow. Their understanding of user experience and clean code practices is impressive.",
    avatar: "/avatar2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director at BrandVision",
    content:
      "We've worked with many developers, but none have shown the level of professionalism and technical expertise as this developer. They're our go-to for all web projects now.",
    avatar: "/avatar3.jpg",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what clients and
            colleagues say about working with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
                  {/* Replace with actual avatar image */}
                  <span className="text-white text-xl font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-600"}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
