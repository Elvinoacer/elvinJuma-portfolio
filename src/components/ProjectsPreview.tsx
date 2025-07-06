"use client";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPreview() {
  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve
            specific problems and deliver exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-700/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-600/50 text-blue-300 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="inline-block text-blue-400 hover:text-blue-300 font-medium"
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-lg transition-all duration-300"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
