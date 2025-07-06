"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-16 text-center"
    >
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Oops! Page not found.</p>
      <Link href="/" className="text-blue-400 hover:underline">
        Back to Home
      </Link>
    </motion.div>
  );
}
