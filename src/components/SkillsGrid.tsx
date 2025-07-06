// components/SkillsGrid.tsx
"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "TensorFlow.js",
  "Stripe",
  "LangChain",
];

export default function SkillsGrid() {
  return (
    <div className="mt-32">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        My Tech Stack
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center text-white hover:bg-white/20 transition-all cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
