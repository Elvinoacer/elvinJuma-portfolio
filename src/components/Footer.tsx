"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 bg-opacity-90 py-6"
    >
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 Elvin Juma. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/Elvinoacer" target="_blank" className="text-blue-400 hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" className="text-blue-400 hover:underline">
            LinkedIn
          </a>
          <a href="https://x.com/Elvinoace" target="_blank" className="text-blue-400 hover:underline">
            X
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
