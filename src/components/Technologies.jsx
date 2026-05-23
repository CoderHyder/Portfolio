import { motion } from "framer-motion";
import {
  SiClaude,
  SiGithubcopilot,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiAstro,
  SiGit,
  SiOpenai,
  SiSpringboot,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const technologies = [
  // Row 1
  {
    name: "JavaScript",
    icon: SiJavascript,
    type: "Programming Language",
    color: "text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    type: "Programming Language",
    color: "text-blue-500",
  },
  {
    name: "Java",
    icon: DiJava,
    type: "Programming Language",
    color: "text-red-500",
  },
  {
    name: "React",
    icon: SiReact,
    type: "JavaScript Library",
    color: "text-cyan-400",
  },
  // Row 2
  {
    name: "Next.js",
    icon: SiNextdotjs,
    type: "React Framework",
    color: "text-white",
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    type: "Java Framework",
    color: "text-green-500",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    type: "CSS Framework",
    color: "text-cyan-500",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    type: "JavaScript Runtime",
    color: "text-green-600",
  },
  // Row 3
  {
    name: "Python",
    icon: SiPython,
    type: "Programming Language",
    color: "text-blue-500",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    type: "Database",
    color: "text-blue-500",
  },
  {
    name: "Git",
    icon: SiGit,
    type: "Version Control",
    color: "text-red-600",
  },
  {
    name: "Astro",
    icon: SiAstro,
    type: "Web Framework",
    color: "text-white",
  },
];

const aiTools = [
  {
    name: "Claude Code",
    icon: SiClaude,
    type: "AI Coding Agent",
    color: "text-orange-300",
  },
  {
    name: "Codex",
    icon: SiOpenai,
    type: "AI Coding Agent",
    color: "text-emerald-300",
  },
  {
    name: "GitHub Copilot",
    icon: SiGithubcopilot,
    type: "AI Pair Programmer",
    color: "text-white",
  },
];

const SkillCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-[#1A1A1A] p-4 rounded-lg flex items-center gap-4"
  >
    <item.icon className={`w-8 h-8 ${item.color}`} />
    <div className="text-left">
      <h3 className="text-white font-medium">{item.name}</h3>
      <p className="text-sm text-gray-400">{item.type}</p>
    </div>
  </motion.div>
);

const Technologies = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">My Tech Stack</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm proficient in a range of modern technologies that empower me to
            build highly functional solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <SkillCard key={tech.name} item={tech} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16 mb-8"
        >
          <h3 className="text-3xl font-bold text-white mb-3 ">AI Tools</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tools I use to accelerate development, explore ideas, and ship more
            effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {aiTools.map((tool, index) => (
            <SkillCard key={tool.name} item={tool} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
