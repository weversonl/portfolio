import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-slate-100 transition-all duration-300 hover:shadow-lg"
      aria-label="Alternar tema"
    >
      {theme === "dark" ? (
        <HiSun className="text-xl" />
      ) : (
        <HiMoon className="text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
