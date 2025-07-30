import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThemeSwitcher from "./theme-switcher";

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
        isScrolled ? "backdrop-blur-md border-b border-white/10" : ""
      }`}
      style={{
        backgroundColor: isScrolled ? 'hsla(0, 0%, 10.2%, 0.8)' : 'transparent',
        color: 'hsl(0, 0%, 98%)'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold" style={{ color: 'hsl(0, 0%, 98%)' }}>aiko.</div>
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm transition-colors hover:text-green-accent"
            style={{ color: 'hsl(0, 0%, 98%)' }}
          >
            SERVICES
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className="text-sm transition-colors hover:text-green-accent"
            style={{ color: 'hsl(0, 0%, 98%)' }}
          >
            WORK
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm transition-colors hover:text-green-accent"
            style={{ color: 'hsl(0, 0%, 98%)' }}
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection("blog")}
            className="text-sm transition-colors hover:text-green-accent"
            style={{ color: 'hsl(0, 0%, 98%)' }}
          >
            BLOG
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm transition-colors hover:text-green-accent"
            style={{ color: 'hsl(0, 0%, 98%)' }}
          >
            LET'S TALK
          </button>
        </div>
        <ThemeSwitcher />
      </nav>
    </motion.header>
  );
}
