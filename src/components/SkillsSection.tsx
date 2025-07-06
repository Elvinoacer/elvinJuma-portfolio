"use client";
import { motion } from "framer-motion";

// Organized skills by category
const skillCategories = [
  {
    name: "Core Technologies",
    skills: [
      { name: "JavaScript", level: 95, color: "from-yellow-400 to-yellow-600" },
      { name: "TypeScript", level: 90, color: "from-blue-500 to-blue-700" },
      { name: "HTML", level: 90, color: "from-orange-300 to-orange-500" },
      { name: "CSS", level: 90, color: "from-blue-300 to-blue-500" },
      { name: "Tailwind CSS", level: 95, color: "from-teal-400 to-teal-600" },
      { name: "Next.js", level: 95, color: "from-gray-300 to-gray-500" },
      { name: "Node.js", level: 85, color: "from-green-500 to-green-700" },
      { name: "React", level: 95, color: "from-cyan-400 to-cyan-600" },
      { name: "React Native", level: 85, color: "from-cyan-300 to-cyan-500" },
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 85, color: "from-blue-400 to-blue-600" },
      { name: "Kubernetes", level: 75, color: "from-blue-500 to-blue-700" },
      { name: "AWS", level: 80, color: "from-orange-400 to-orange-600" },
      { name: "Azure", level: 75, color: "from-blue-300 to-blue-500" },
      { name: "Google Cloud", level: 70, color: "from-green-400 to-green-600" },
      { name: "Terraform", level: 75, color: "from-purple-400 to-purple-600" },
      { name: "Ansible", level: 70, color: "from-red-400 to-red-600" },
      {
        name: "CI/CD Pipelines",
        level: 85,
        color: "from-green-500 to-green-700",
      },
      { name: "GitHub Actions", level: 80, color: "from-gray-400 to-gray-600" },
      { name: "Jenkins", level: 75, color: "from-red-500 to-red-700" },
      { name: "NGINX", level: 80, color: "from-green-300 to-green-500" },
      {
        name: "Linux Server",
        level: 85,
        color: "from-yellow-400 to-yellow-600",
      },
      { name: "Bash Scripting", level: 80, color: "from-gray-300 to-gray-500" },
      { name: "Serverless", level: 75, color: "from-blue-200 to-blue-400" },
    ],
  },
  {
    name: "State Management",
    skills: [
      { name: "Redux", level: 85, color: "from-purple-400 to-purple-600" },
      {
        name: "Redux Toolkit",
        level: 85,
        color: "from-purple-500 to-purple-700",
      },
      { name: "RTK Query", level: 85, color: "from-purple-300 to-purple-500" },
      { name: "Zustand", level: 85, color: "from-indigo-400 to-indigo-600" },
      { name: "Tanstack Query", level: 85, color: "from-red-400 to-red-600" },
      { name: "React Query", level: 85, color: "from-red-300 to-red-500" },
    ],
  },
  {
    name: "Backend & Databases",
    skills: [
      { name: "Express", level: 85, color: "from-gray-500 to-gray-700" },
      { name: "PostgreSQL", level: 85, color: "from-blue-400 to-blue-600" },
      { name: "MongoDB", level: 85, color: "from-green-400 to-green-600" },
      { name: "Redis", level: 80, color: "from-red-500 to-red-700" },
      { name: "MySQL", level: 80, color: "from-blue-300 to-blue-500" },
      { name: "Prisma", level: 80, color: "from-gray-400 to-gray-600" },
      { name: "TypeORM", level: 75, color: "from-purple-400 to-purple-600" },
      { name: "Sequelize", level: 75, color: "from-blue-500 to-blue-700" },
    ],
  },
  {
    name: "Authentication & Security",
    skills: [
      { name: "Passport.js", level: 80, color: "from-blue-400 to-blue-600" },
      {
        name: "JSON Web Tokens (JWT)",
        level: 85,
        color: "from-purple-400 to-purple-600",
      },
      { name: "Bcrypt.js", level: 80, color: "from-green-400 to-green-600" },
      {
        name: "Express-session",
        level: 80,
        color: "from-gray-400 to-gray-600",
      },
      { name: "NextAuth", level: 80, color: "from-orange-400 to-orange-600" },
      { name: "OpenID Connect", level: 75, color: "from-blue-300 to-blue-500" },
      { name: "SSL/TLS", level: 80, color: "from-green-500 to-green-700" },
      { name: "Web Security", level: 85, color: "from-red-400 to-red-600" },
    ],
  },
  {
    name: "Payments & APIs",
    skills: [
      { name: "Daraja API", level: 80, color: "from-green-300 to-green-500" },
      { name: "PayPal", level: 80, color: "from-blue-200 to-blue-400" },
      { name: "IntaSend", level: 80, color: "from-yellow-300 to-yellow-500" },
      { name: "Stripe", level: 80, color: "from-indigo-300 to-indigo-500" },
      { name: "OpenAPI", level: 80, color: "from-yellow-400 to-yellow-600" },
      { name: "GraphQL", level: 80, color: "from-pink-400 to-pink-600" },
      {
        name: "RESTful API Design",
        level: 85,
        color: "from-blue-400 to-blue-600",
      },
    ],
  },
  {
    name: "Infrastructure & Monitoring",
    skills: [
      { name: "Prometheus", level: 75, color: "from-orange-400 to-orange-600" },
      { name: "Grafana", level: 75, color: "from-orange-300 to-orange-500" },
      { name: "ELK Stack", level: 70, color: "from-blue-400 to-blue-600" },
      { name: "Datadog", level: 70, color: "from-purple-400 to-purple-600" },
      { name: "New Relic", level: 65, color: "from-blue-500 to-blue-700" },
      { name: "Sentry", level: 75, color: "from-purple-300 to-purple-500" },
      { name: "CloudWatch", level: 80, color: "from-orange-500 to-orange-700" },
    ],
  },
  {
    name: "Email Services",
    skills: [
      { name: "Nodemailer", level: 80, color: "from-gray-400 to-gray-600" },
      { name: "SendGrid", level: 80, color: "from-blue-600 to-blue-800" },
      { name: "Mailgun", level: 80, color: "from-orange-400 to-orange-600" },
      { name: "AWS SES", level: 80, color: "from-orange-500 to-orange-700" },
      { name: "Resend", level: 80, color: "from-teal-300 to-teal-500" },
    ],
  },
  {
    name: "AI & WebSockets",
    skills: [
      {
        name: "TensorFlow.js",
        level: 80,
        color: "from-orange-400 to-orange-600",
      },
      { name: "Brain.js", level: 80, color: "from-red-400 to-red-600" },
      { name: "LangChain.js", level: 80, color: "from-blue-500 to-blue-700" },
      { name: "OpenAI", level: 80, color: "from-green-500 to-green-700" },
      { name: "Pinecone", level: 80, color: "from-indigo-400 to-indigo-600" },
      { name: "Langraph", level: 80, color: "from-blue-300 to-blue-500" },
      { name: "Socket.io", level: 80, color: "from-gray-300 to-gray-500" },
    ],
  },
  {
    name: "Graphics & Design",
    skills: [
      { name: "Three.js", level: 80, color: "from-purple-300 to-purple-500" },
      { name: "Framer Motion", level: 80, color: "from-pink-400 to-pink-600" },
      { name: "Figma", level: 80, color: "from-pink-300 to-pink-500" },
    ],
  },
  {
    name: "Development Practices",
    skills: [
      {
        name: "Good Coding Practices",
        level: 90,
        color: "from-gray-200 to-gray-400",
      },
      {
        name: "Agile Methodologies",
        level: 85,
        color: "from-blue-400 to-blue-600",
      },
      {
        name: "Git Workflows",
        level: 90,
        color: "from-orange-400 to-orange-600",
      },
      { name: "Code Reviews", level: 85, color: "from-green-400 to-green-600" },
      {
        name: "Testing (Unit, Integration)",
        level: 80,
        color: "from-red-400 to-red-600",
      },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            My Skills
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I&apos;ve mastered a diverse set of technologies across the full
            stack. Here&apos;s how I categorize my expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-blue-400/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 w-3 h-3 rounded-full mr-2"></span>
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300 font-medium text-sm md:text-base">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-xs md:text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} shadow-md`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm text-gray-300">
              Currently learning new technologies
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
