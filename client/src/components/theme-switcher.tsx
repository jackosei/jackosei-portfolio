import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "hsl(0, 0%, 10.2%)";
      document.body.style.color = "hsl(0, 0%, 98%)";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
      document.body.style.color = "hsl(20, 14.3%, 4.1%)";
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-300 hover:bg-white/10"
      style={{ color: 'hsl(0, 0%, 98%)' }}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}