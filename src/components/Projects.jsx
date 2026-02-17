import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "SmartMealz",
    description:
      "A modern web application with features like user authentication, real-time updates, and responsive design.",
    image: "/img/projects/smartmealz_portfolio.jpeg",
    technologies: ["Spring Boot", "Java", "MySQL", "Javascript"],
    githubLink: "https://github.com/CoderHyder/SmartMealz",
    liveLink: "https://github.com/CoderHyder/SmartMealz",
  },
  {
    title: "GC International FZCO",
    description:
      "A modern corporate website for an industrial valve company, with careers and blog page, fasting loading, and responsive layout.",
    image: "/img/projects/project2.jpeg",
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "Airtable"],
    githubLink: "https://github.com/CoderHyder/forked-gc",
    liveLink: "https://www.gcintle.com/",
  },
  {
    title: "AMZ Vintage Wholesale",
    description:
      "Built an aesthetic product showcase site for a vintage clothing brand—focused on browsing and media-rich product viewing.",
    image: "/img/projects/project3.jpeg",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    githubLink: "https://github.com/CoderHyder/amz-vintage",
    liveLink: "https://amz-vintage-client.onrender.com/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Designs in Action</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1A1A1A] rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-primary/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    <FaGithub className="w-8 h-8" />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-7 h-7" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-red-600 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
