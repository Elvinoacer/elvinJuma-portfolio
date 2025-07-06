"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import {
  SiAmazon,
  SiFirebase,
  SiGraphql,
  SiJavascript,
  SiLangchain,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Langchain", icon: SiLangchain },
  { name: "Firebase", icon: SiFirebase },
  { name: "Redux", icon: SiRedux },
  { name: "GraphQL", icon: SiGraphql },
  { name: "AWS", icon: SiAmazon },
];

const floatingVariants = {
  float: {
    y: [-15, 15, -15],
    transition: {
      y: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
};

const testimonials = [
  {
    quote:
      "Elvin delivered our app ahead of schedule with flawless performance!",
    author: "Julie Jayden, CEO of TechSpeedPart",
  },
  {
    quote: "His attention to detail and creative solutions are unmatched.",
    author: "James Weed, Product Manager",
  },
];

// SkillCard Component to Render Icons
function SkillCard({ name, Icon }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Icon className="text-3xl sm:text-4xl md:text-5xl text-white/90 group-hover:text-purple-300 transition-colors duration-300" />
      <span className="text-sm sm:text-base md:text-lg font-medium text-gray-300 text-center">
        {name}
      </span>
    </div>
  );
}

export default function About() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gray-900">
      {/* Dynamic Background with Radial Gradients and Infinite Animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-gradient-radial from-purple-600/30 to-transparent rounded-full mix-blend-overlay filter blur-3xl opacity-60 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-20 right-1/4 w-[480px] sm:w-[600px] h-[480px] sm:h-[600px] bg-gradient-radial from-blue-600/30 to-transparent rounded-full mix-blend-overlay filter blur-3xl opacity-60 animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-10 left-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-gradient-radial from-teal-500/30 to-transparent rounded-full mix-blend-overlay filter blur-3xl opacity-60 animate-pulse"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10"
      >
        {/* Headline with Enhanced Animation */}
        <motion.div
          variants={floatingVariants}
          animate="float"
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-600">
            About Elvin
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            I transform{" "}
            <span className="font-semibold text-purple-300">ideas</span> into{" "}
            <span className="font-semibold text-blue-300">innovative</span>{" "}
            digital experiences.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-16 sm:mb-20">
          {/* Bio Section with Professional Background and Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl hover:shadow-purple-500/10 transition-shadow duration-300"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">
              Hi, I'm <span className="text-purple-300">Elvin</span> 👋
            </h2>
            <p className="text-gray-300 mb-4 text-sm sm:text-base md:text-lg">
              I'm a{" "}
              <span className="font-semibold text-blue-300">
                Web & Mobile Developer
              </span>{" "}
              with over{" "}
              <span className="font-semibold">4 years of experience</span>{" "}
              crafting seamless applications using{" "}
              <span className="font-semibold">
                React Native, Node, and Next.js
              </span>
              . My journey began with a quirky todo app that crashed every 5
              minutes—a humbling lesson in resilience!
            </p>
            <p className="text-gray-300 mb-4 text-sm sm:text-base md:text-lg">
              Since then, I've collaborated with{" "}
              <span className="font-semibold">
                startups, fintech, and e-commerce
              </span>{" "}
              companies to launch{" "}
              <span className="font-semibold">10+ apps</span> that have
              delighted thousands of users. My mission is to build{" "}
              <span className="font-semibold text-teal-300">
                user-first, scalable solutions
              </span>{" "}
              that blend performance with accessibility.
            </p>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg">
              When I'm not coding, you'll find me{" "}
              <span className="font-semibold">
                photographing vibrant street art
              </span>
              ,{" "}
              <span className="font-semibold">
                perfecting my pour-over coffee
              </span>
              , or diving into{" "}
              <span className="font-semibold text-teal-300">
                AI-driven app integrations
              </span>
              . Fun fact: I once built an app to settle a debate with a friend
              over the best pizza topping (pineapple won, obviously).
            </p>
          </motion.div>

          {/* Skills Section with Interactive Icon Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-3 sm:gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -8, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 hover:border-purple-400/50 hover:shadow-lg transition-all duration-300 cursor-default"
              >
                <SkillCard name={skill.name} Icon={skill.icon} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-white mb-6 sm:mb-8">
            What People Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.2, duration: 0.8 }}
                className="bg-white/5 backdrop-blur-lg p-4 sm:p-6 rounded-xl border border-white/10 hover:shadow-purple-500/10 transition-shadow"
              >
                <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <p className="text-xs sm:text-sm text-gray-400 font-semibold">
                  — {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call-to-Action with Social Links */}
     <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 0.8 }}
  className="text-center mt-12"
>
  <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6">
    Ready to create something{" "}
    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
      extraordinary
    </span>
    ? Let's make it happen!
  </p>
  <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
    <motion.a
      href="mailto:omondielvin@gmail.com"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-sm sm:text-base text-white shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2"
    >
      <FaEnvelope className="text-lg sm:text-xl" /> Get In Touch
    </motion.a>
    <motion.a
      href="/images/Elvin-Resume-template.pdf"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 rounded-full font-semibold text-sm sm:text-base text-white shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
    >
      <FaFileDownload className="text-lg sm:text-xl" /> View Resume
    </motion.a>
    <motion.a
      href="https://linkedin.com"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 rounded-full font-semibold text-sm sm:text-base text-white shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
    >
      <FaLinkedin className="text-lg sm:text-xl" /> LinkedIn
    </motion.a>
    <motion.a
      href="https://github.com/Elvinoacer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 rounded-full font-semibold text-sm sm:text-base text-white shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
    >
      <FaGithub className="text-lg sm:text-xl" /> GitHub
    </motion.a>
  </div>
  <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-6">
    Currently open to{" "}
    <span className="font-semibold text-teal-300">
      freelance projects
    </span>{" "}
    and exploring{" "}
    <span className="font-semibold text-teal-300">AI integrations</span>.
  </p>
</motion.div>
      </motion.div>
    </div>
  );
}
