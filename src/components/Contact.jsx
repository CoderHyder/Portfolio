import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-gray-400 text-lg mb-8">
              My inbox is always open. Whether you have a question or just want
              to say hi, I'll try my best to get back to you!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <a
              href="mailto:haiderr099@gmail.com"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Mail Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-6 mb-12"
          >
            <a
              href="https://github.com/CoderHyder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/haider-raza-0b094b1bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-500 text-sm border-t border-gray-800 pt-8"
          >
            <p>Built and designed by Haider Raza</p>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
