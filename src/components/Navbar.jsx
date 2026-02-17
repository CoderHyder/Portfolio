import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setActiveTab(id);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="w-full py-4 fixed top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-black/40 backdrop-blur-lg border border-red-500/80 rounded-full px-6 py-3 shadow-xl">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={`px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeTab === item.id
                      ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center justify-center">
            <button
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu Items */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              height: isOpen ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden mt-2"
          >
            <div className="py-2 space-y-1 flex flex-col items-center">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 w-full text-center ${
                    activeTab === item.id
                      ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
