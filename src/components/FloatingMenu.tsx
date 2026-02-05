import { HiHome, HiUser, HiCode, HiBriefcase } from "react-icons/hi";

const FloatingMenu = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 p-2 rounded-full border border-slate-700 bg-slate-800/60 backdrop-blur-lg shadow-lg">
        <button
          onClick={() => scrollToSection("hero")}
          className="p-3 rounded-full text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300"
          aria-label="Home"
        >
          <HiHome className="text-xl" />
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="p-3 rounded-full text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300"
          aria-label="About"
        >
          <HiUser className="text-xl" />
        </button>
        <button
          onClick={() => scrollToSection("technologies")}
          className="p-3 rounded-full text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300"
          aria-label="Technologies"
        >
          <HiCode className="text-xl" />
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="p-3 rounded-full text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300"
          aria-label="Projects"
        >
          <HiBriefcase className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default FloatingMenu;
