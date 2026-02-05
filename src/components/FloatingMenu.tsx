import { useState, useEffect } from "react";
import { HiHome, HiUser, HiCode, HiBriefcase } from "react-icons/hi";
import { useTheme } from "../contexts/ThemeContext";

const sections = [
  { id: "hero", icon: HiHome, label: "Home" },
  { id: "about", icon: HiUser, label: "About" },
  { id: "technologies", icon: HiCode, label: "Technologies" },
  { id: "projects", icon: HiBriefcase, label: "Projects" },
];

const FloatingMenu = () => {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isLight = theme === "light";

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 sm:bottom-4">
      <div
        className={`flex items-center gap-1 p-1.5 rounded-full border backdrop-blur-lg shadow-lg transition-colors duration-300 sm:gap-2 sm:p-2 ${
          isLight
            ? "border-slate-300 bg-white/70 shadow-slate-300/50"
            : "border-slate-700 bg-slate-800/60 shadow-black/30"
        }`}
      >
        {sections.map(({ id, icon: Icon, label }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`p-2 rounded-full transition-all duration-300 sm:p-3 ${
                isActive
                  ? isLight
                    ? "bg-slate-700 text-white shadow-md"
                    : "bg-slate-100 text-slate-900 shadow-md"
                  : isLight
                    ? "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
              aria-label={label}
            >
              <Icon className="text-lg sm:text-xl" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingMenu;
