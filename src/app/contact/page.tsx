"use client";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
      <ContactForm />
    </motion.div>
  );
}
