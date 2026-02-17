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
                  I am currently a{" "}
                  <span className="text-white font-semibold">
                    final year Student
                  </span>
                  , researching on how to help the non-verbal population
                  communicate naturally using EEG. Previously, I was at{" "}
                  <span className="text-red-400">Mashreq</span> and{" "}
                  <span className="text-red-400">GC International FZCO</span>.
                  At the same time, I am a full-time student pursuing a degree
                  in{" "}
                  <span className="text-white font-semibold">
                    Bachelor's of Science in Computer Science
                  </span>{" "}
                  at{" "}
                  <span className="text-red-400">
                    American University of Sharjah
                  </span>
                  .
                </p>

                <p>
                  Outside of work, I'm nerdy about tech giants, love literary
                  fiction, and play way too many strategic games. Oh, I make
                  content too.
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
