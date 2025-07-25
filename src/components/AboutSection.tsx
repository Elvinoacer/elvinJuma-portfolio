"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <div className="lg:w-1/3">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl">
              <Image
                src="/images/profile-2.png" // Replace with your image
                alt="Profile Picture"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              About Me
            </h2>

            <p className="text-lg text-gray-300 mb-6">
              I&apos;m a passionate full-stack developer with over 5 years of
              experience building web applications. I specialize in JavaScript
              technologies including React, Next.js, Node.js, and TypeScript.
            </p>

            <p className="text-lg text-gray-300 mb-6">
              My journey in web development started when I was in college, and
              since then I&apos;ve worked with startups and established
              companies to deliver high-quality digital products that users
              love.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-gray-700/50 p-4 rounded-lg border-l-4 border-blue-400">
                <h3 className="font-bold text-blue-400">5+</h3>
                <p className="text-gray-300">Years Experience</p>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg border-l-4 border-purple-400">
                <h3 className="font-bold text-purple-400">30+</h3>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg border-l-4 border-green-400">
                <h3 className="font-bold text-green-400">15+</h3>
                <p className="text-gray-300">Happy Clients</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
