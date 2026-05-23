import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Khayal EEG",
    description:
      "An AI-powered EEG platform for sentence-level imagined speech decoding, translating brain signals into structured Arabic sentences.",
    image: "/img/projects/khayal.jpeg",
    technologies: ["Next.js", "TypeScript", "Python", "FastAPI"],
    githubLink: "https://github.com/CoderHyder/Khayal-EEG",
    liveLink: "https://khayal-eeg.vercel.app/",
    liveLabel: "Visit",
  },
  {
    title: "GC International FZCO",
    description:
      "A modern corporate website for an industrial valve company, with careers and blog page, fasting loading, and responsive layout.",
    image: "/img/projects/project2.jpeg",
    technologies: ["Astro", "TypeScript", "Tailwind", "Airtable"],
    githubLink: "https://github.com/CoderHyder/forked-gc",
    liveLink: "https://www.gcintle.com/",
    liveLabel: "Visit",
  },
  {
    title: "AMZ Vintage Wholesale",
    description:
      "Built an aesthetic product showcase site for a vintage clothing brand-focused on browsing and media-rich product viewing.",
    image: "/img/projects/project3.jpeg",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    githubLink: "https://github.com/CoderHyder/amz-vintage",
    liveLink: "https://amz-vintage-client.onrender.com/",
    liveLabel: "Visit",
  },
  {
    title: "Coffee Health Analysis",
    description:
      "Binary classification of health issues in coffee drinkers using lifestyle factors, with comparisons across multiple ML models.",
    image: "/img/projects/coffee.jpeg",
    technologies: ["Python", "Scikit-learn", "Pandas", "Jupyter"],
    githubLink: "https://github.com/CoderHyder/coffee_project",
    liveLink: "https://github.com/CoderHyder/coffee_project",
    liveLabel: "Repo",
  },
  {
    title: "Steam Game Recommendations",
    description:
      "A recommendation and ranking system for Steam games using review data, positive-rating ratios, Wilson scores, and association mining.",
    image: "/img/projects/steam.jpeg",
    technologies: ["Python", "Pandas", "NumPy", "Jupyter"],
    githubLink:
      "https://github.com/CoderHyder/Steam-Games-Recommendation-System",
    liveLink: "https://github.com/CoderHyder/Steam-Games-Recommendation-System",
    liveLabel: "Repo",
  },
  {
    title: "SmartMealz",
    description:
      "Full-stack meal planning platform with database-backed workflows built using Java, Spring Boot, and MySQL",
    image: "/img/projects/smartmealz_portfolio.jpeg",
    technologies: ["Spring Boot", "Java", "MySQL", "Javascript"],
    githubLink: "https://github.com/CoderHyder/SmartMealz",
    liveLink: "https://github.com/CoderHyder/SmartMealz",
    liveLabel: "Repo",
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
          <p className="text-gray-400 max-w-2xl mx-auto">
            Selected AI, web, and data projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1A1A1A] rounded-xl shadow-lg overflow-hidden flex h-full flex-col"
            >
              <div className="bg-[#111]">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(event) => {
                    event.currentTarget.style.visibility = "hidden";
                  }}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-6 flex flex-1 flex-col">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-red-600 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-3 border-t border-gray-800 pt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-black/40 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600"
                  >
                    <FaGithub className="w-5 h-5" />
                    GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    {project.liveLabel}
                  </a>
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
