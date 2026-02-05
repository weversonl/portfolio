import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="glass-btn p-2"
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
