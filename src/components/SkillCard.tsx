"use client";
import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  icon: string;
}

export default function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg flex items-center space-x-4"
    >
      <div className="text-3xl">{icon}</div>
      <h3 className="text-xl font-semibold">{name}</h3>
    </motion.div>
  );
}
