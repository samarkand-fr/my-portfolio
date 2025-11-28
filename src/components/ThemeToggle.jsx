import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        fixed top-6 right-6 z-50
        p-3 rounded-full transition-all duration-300
        shadow-lg border
        hover:scale-110
        bg-[#0f0f0f] text-[#e5e5e5] border-white/20
        dark:bg-[#e5e5e5] dark:text-[#0f0f0f] dark:border-black/20
        animate-[pulse_2.2s_ease-in-out_infinite]
      "
      style={{
        boxShadow:
          theme === "dark"
            ? "0 0 14px rgba(79,162,125,0.7)"
            : "0 0 14px rgba(0,0,0,0.18)",
      }}
    >
      {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default ThemeToggle;
