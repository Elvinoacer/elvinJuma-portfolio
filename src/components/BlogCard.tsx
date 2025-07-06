"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

export default function BlogCard({ id, title, excerpt, date }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{excerpt}</p>
      <p className="text-sm text-gray-400 mb-4">{date}</p>
      <Link href={`/blog/${id}`} className="text-blue-400 hover:underline">
        Read More
      </Link>
    </motion.div>
  );
}
