import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6">About Me</h2>

              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  I build scalable software, AI-powered systems, and modern web
                  experiences focused on solving real-world problems. My work
                  spans full-stack development, automation, and AI research,
                  with a strong focus on performance, usability, and intelligent
                  systems.
                </p>

                <p>
                  Currently, I'm contributing to AI research at{" "}
                  <span className="text-red-400">Khayal</span>, developing
                  EEG-based imagined speech decoding systems that use deep
                  learning and signal processing to help non-verbal individuals
                  communicate more naturally through brain-computer interface
                  technologies.
                </p>

                <p>
                  Previously, I worked at{" "}
                  <span className="text-red-400">Mashreq Bank</span> on OCR and
                  automation systems, and at{" "}
                  <span className="text-red-400">GC International FZCO</span> as
                  a Full Stack Developer Intern, building high-performance web
                  applications and interactive digital experiences.
                </p>

                <p>
                  Outside of development, I enjoy following advancements in AI
                  and big tech, reading literary fiction, creating content, and
                  playing strategy games.
                </p>

                <div className="mt-8">
                  <p className="text-white font-semibold mb-4">
                    Here are some technologies I have been working with:
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-80 h-126 rounded-2xl overflow-hidden shadow-xl border border-gray-800">
                <img
                  src="/img/professional_dp.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
