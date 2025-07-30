import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark/80 backdrop-blur-md border-b border-white/10" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">aiko.</div>
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm hover:text-green-accent transition-colors"
          >
            SERVICES
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className="text-sm hover:text-green-accent transition-colors"
          >
            WORK
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm hover:text-green-accent transition-colors"
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection("blog")}
            className="text-sm hover:text-green-accent transition-colors"
          >
            BLOG
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm hover:text-green-accent transition-colors"
          >
            LET'S TALK
          </button>
        </div>
        <div className="text-sm text-light-gray">(0)</div>
      </nav>
    </motion.header>
  );
}
