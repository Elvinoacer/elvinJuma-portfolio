"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  // Starry background animation variants
  const starVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: [0.2, 0.8, 0.2],
      scale: [0.8, 1.2, 0.8],
      transition: {
        repeat: Infinity,
        duration: Math.random() * 2 + 1,
        ease: "easeInOut", // use a valid string easing
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Starry Background */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          variants={starVariants}
          initial="initial"
          animate="animate"
        />
      ))}

      {/* Meteor Streaks */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`meteor-${i}`}
          className="absolute bg-gradient-to-r from-white to-transparent"
          style={{
            width: 100,
            height: 2,
            top: `${Math.random() * 30}%`,
            left: "100%",
          }}
          animate={{
            x: -2000,
            opacity: [0, 1, 0],
            transition: {
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatDelay: Math.random() * 10 + 5,
            },
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto px-4 py-8 sm:py-12 md:py-16 relative z-10"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-8 sm:mb-10 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        >
          Connect with the Cosmos
        </motion.h1>

        {/* Static Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-center mb-8 sm:mb-10 md:mb-12 text-gray-200"
        >
          <p className="text-base sm:text-lg mb-4">
            I&apos;m thrilled to hear from you! Whether you have a project idea,
            a question, or just want to chat about the universe, drop me a
            message below.
          </p>
          <p className="text-sm sm:text-md">
            Reach out and let&apos;s create something stellar together!
          </p>
        </motion.div>

        {/* Additional Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-lg mx-auto mb-8 sm:mb-10 md:mb-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <motion.a
            href="tel:+254790670542"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center p-4 bg-gradient-to-r from-gray-800/90 to-indigo-900/90 rounded-lg shadow-lg text-gray-200"
          >
            <FaPhone className="mr-2 text-purple-400" />
            <span className="text-sm sm:text-base">+254 790 670542</span>
          </motion.a>
          <motion.a
            href="mailto:omondielvin@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center p-4 bg-gradient-to-r from-gray-800/90 to-indigo-900/90 rounded-lg shadow-lg text-gray-200"
          >
            <FaEnvelope className="mr-2 text-purple-400" />
            <span className="text-sm sm:text-base">omondielvin@gmail.com</span>
          </motion.a>
          <motion.a
            href="https://wa.me/254790670542"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center p-4 bg-gradient-to-r from-gray-800/90 to-indigo-900/90 rounded-lg shadow-lg text-gray-200"
          >
            <FaWhatsapp className="mr-2 text-purple-400" />
            <span className="text-sm sm:text-base">WhatsApp Me</span>
          </motion.a>
        </motion.div>

        <ContactForm />
      </motion.div>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const result = await sendEmail(formData);

    setStatus(result.message);
    if (result.success) {
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputVariants = {
    focus: {
      scale: 1.05,
      borderColor: "#a78bfa",
      transition: { duration: 0.3 },
    },
    blur: { scale: 1, borderColor: "#4b5563", transition: { duration: 0.3 } },
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-gradient-to-br from-gray-800/90 to-indigo-900/90 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-gray-700/50"
    >
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-2 text-gray-200"
        >
          Name
        </label>
        <motion.input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-900/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
          variants={inputVariants}
          whileFocus="focus"
          initial="blur"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2 text-gray-200"
        >
          Email
        </label>
        <motion.input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-900/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
          variants={inputVariants}
          whileFocus="focus"
          initial="blur"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2 text-gray-200"
        >
          Message
        </label>
        <motion.textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-900/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows={5}
          required
          variants={inputVariants}
          whileFocus="focus"
          initial="blur"
        />
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05, backgroundColor: "#7c3aed" }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white p-3 rounded-lg font-semibold"
      >
        Send Message
      </motion.button>
      <AnimatePresence>
        {status && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-4 text-center text-gray-200 text-sm sm:text-base"
          >
            {status}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
