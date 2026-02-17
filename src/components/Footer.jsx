import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} | All rights reserved.</p>
            <p>Made by Haider Raza</p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/CoderHyder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/haider-raza-0b094b1bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
