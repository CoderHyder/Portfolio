import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl text-white font-semibold mb-4">
              BASED IN DUBAI, UAE
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent mb-4">
              Web Developer
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-gray-400 mb-8">
              Hi, I'm Haider Raza. A final year university student passionate
              about software and web development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center items-center space-x-6"
          >
            <a
              href="https://github.com/CoderHyder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 transition-colors"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/haider-raza-0b094b1bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 transition-colors"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:haiderr099@gmail.com"
              className="text-white hover:text-red-500 transition-colors"
            >
              <MdEmail className="w-8 h-8" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 space-x-4"
          >
            <a
              href="#projects"
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors inline-flex items-center"
            >
              See My Projects
              <span className="ml-2">→</span>
            </a>
            <a
              href="/resume_portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A1A1A] text-white px-8 py-3 rounded-lg hover:text-red-500 transition-colors inline-flex items-center"
            >
              Download Resume
              <span className="ml-2">↓</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
