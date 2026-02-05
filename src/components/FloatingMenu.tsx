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
      {/* Outer glow */}
      <div
        className={`absolute inset-0 rounded-full blur-xl opacity-40 ${
          isLight
            ? "bg-gradient-to-r from-slate-300 via-white to-slate-300"
            : "bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600"
        }`}
      />
      {/* Main container */}
      <div
        className={`relative flex items-center gap-1 p-1.5 rounded-full backdrop-blur-2xl transition-all duration-300 sm:gap-2 sm:p-2 ${
          isLight
            ? "bg-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.05)] border border-white/60"
            : "bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.2)] border border-white/20"
        }`}
        style={{
          background: isLight
            ? "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.5) 100%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)",
        }}
      >
        {sections.map(({ id, icon: Icon, label }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`relative p-2 rounded-full transition-all duration-300 sm:p-3 ${
                isActive
                  ? isLight
                    ? "bg-slate-800/80 text-white shadow-lg backdrop-blur-sm"
                    : "bg-white/90 text-slate-900 shadow-lg"
                  : isLight
                    ? "text-slate-700 hover:bg-white/50 hover:text-slate-900"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
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
