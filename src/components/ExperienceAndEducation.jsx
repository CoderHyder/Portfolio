import { motion } from "framer-motion";
import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "GC International",
    period: "Jun 2025 - Aug 2025",
    description: [
      "Created GC International’s first corporate website for an industrial valve & flow-control company, giving customers a clear, modern place to discover products and services and helping the Dubai branch gain 1,000+ visits.",
      "Added a full careers application flow that made it easier for candidates to apply online and enabled the company to hire faster, improving recruiting outcomes by ~30%.",
      "Increased homepage engagement by 50%, as measured by user-interaction analytics, by integrating a 3D interactive valve animation using Three.js and GSAP.",
      "Delivered fast-loading media + resume uploads via Cloudinary CDN, improving page speed and reliability for heavy assets.",
      "Built a CMS-powered blog (Sanity) so the team can publish content easily, improving discoverability and SEO over time.",
    ],
    logo: "/img/companies/gc_portfolio.jpeg",
  },
  {
    title: "Web Developer",
    company: "AMZ Vintage Wholesale",
    period: "May 2025 - Jun 2025",
    description: [
      "Built full-stack product showcase platform enabling client to reach wholesale buyers online and streamline inquiries",
      "Implemented WhatsApp integration in contact form, reducing friction in customer communication and improving lead conversion",
      "Designed responsive gallery experience that works seamlessly across desktop and mobile devices, expanding market reach",
      "Created responsive product gallery with lazy-loaded images/videos and infinite scroll functionality using grid layout and pagination logic",
    ],
    logo: "/img/companies/amz.png",
  },
  {
    title: "Digital Intern",
    company: "Mashreq",
    period: "Jul 2024 - Aug 2024",
    description: [
      "Developed a robust Python-based solution leveraging Optical Character Recognition (OCR) technology to accurately extract text from Emirates and Egyptian national ID cards.",
      "Built a preprocessing pipeline to handle variations in image quality, lighting conditions, orientation, and background noise, significantly improving text recognition accuracy across real-world document uploads.",
      "Engineered custom parsing logic to accurately identify and extract key fields such as full name, ID number, nationality, date of birth, expiry date, and gender from both card formats despite layout differences.",
      "Reduced onboarding processing time by automating ID data extraction, enabling faster KYC verification and improving overall customer experience.",
    ],
    logo: "/img/companies/mashreq.png",
  },
];

const education = [
  {
    degree: "Bachelors of Science in Computer Science",
    department: "College of Engineering",
    school: "American University of Sharjah",
    period: "August 2022 - May 2026",
    description: [
      "Specialized in Software Engineering and Web Technologies",
      "Key coursework: Data Structures, Algorithms, Database Management, Web Development, Software Engineering",
      "Final year project on EEG signals and LLMs for non-verbal people",
    ],
    logo: "/img/education/AUS_portfolio.png",
  },
];

const ExperienceAndEducation = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const TabButton = ({ id, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-12 py-3 text-lg font-medium transition-colors duration-300 ${
        activeTab === id
          ? "text-white border-b-2 border-white"
          : "text-gray-400 hover:text-gray-200"
      }`}
    >
      {label}
    </button>
  );

  const TimelineItem = ({ data, type }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-24 mb-16 last:mb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-8 top-16 w-0.5 h-[calc(100%-4rem)] bg-gray-800" />

      {/* Company Logo with Timeline dot */}
      <div className="absolute left-0 top-8">
        <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-gray-800 overflow-hidden">
          <img
            src={data.logo}
            alt={data.company || data.school}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="bg-[#1A1A1A] rounded-lg p-6">
        <div className="mb-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-white">
                {type === "education" ? data.degree : data.title}
              </h3>
              <p className="text-gray-400">
                {type === "education" ? data.department : data.company}
              </p>
              {type === "education" && (
                <p className="text-gray-500">{data.school}</p>
              )}
            </div>
            <p className="text-sm text-gray-500">{data.period}</p>
          </div>
        </div>
        <ul className="space-y-2 text-gray-400">
          {data.description.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A glimpse into my academic and professional experience, shaping my
            growth in the tech world.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <TabButton id="experience" label="Experience" />
          <TabButton id="education" label="Education" />
        </div>

        <div className="max-w-5xl mx-auto">
          {activeTab === "experience" &&
            experiences.map((exp, index) => (
              <TimelineItem key={index} data={exp} type="experience" />
            ))}
          {activeTab === "education" &&
            education.map((edu, index) => (
              <TimelineItem key={index} data={edu} type="education" />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndEducation;
