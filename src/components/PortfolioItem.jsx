import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const PortfolioItem = ({ src, link, repo, expandedText }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`
        relative rounded-xl overflow-hidden cursor-pointer
        bg-white dark:bg-[#111]
        border border-gray-200 dark:border-gray-700
        group transition-shadow duration-300
        ${theme === "dark" ? "shadow-[0_0_18px_rgba(79,162,125,0.18)] hover:shadow-[0_0_28px_rgba(79,162,125,0.35),0_0_38px_rgba(184,87,87,0.25)]" : "shadow-lg"}
      `}
    >
      {/* IMAGE */}
      <div className="relative w-full h-52 md:h-56 overflow-hidden">
        <img
          src={src}
          alt=""
          className={`
            w-full h-full object-cover transition-all duration-500
            ${theme === "light" ? "opacity-95" : "opacity-100"}
          `}
        />
        {/* DARK OVERLAY */}
        <div
          className="
          absolute inset-0 bg-black bg-opacity-0
          transition-all duration-500
          group-hover:bg-opacity-80
        "
        ></div>
      </div>

      {/* OVERLAY CONTENT */}
      <div
        className="
          absolute inset-0 flex flex-col justify-center items-center text-center
          opacity-0 group-hover:opacity-100
          transition-all duration-500
          px-4
        "
      >
        <p className="text-sm text-gray-100 mb-4">{expandedText}</p>

        <div className="flex gap-4">
          {/* LIVE DEMO */}
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="
              px-4 py-2 text-sm rounded-lg font-medium
              border-2 border-transparent
              bg-gradient-to-r from-[#4fa27d] to-[#b85757]
              text-transparent bg-clip-text
              transition-all duration-300
              hover:border-[#4fa27d]
              active:bg-[#4fa27d]/10
            "
          >
            Live Demo
          </a>

          {/* GITHUB */}
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="
              px-4 py-2 text-sm rounded-lg font-medium
              border-2 border-transparent
              bg-gradient-to-r from-[#b85757] to-[#4fa27d]
              text-transparent bg-clip-text
              transition-all duration-300
              hover:border-[#b85757]
              active:bg-[#b85757]/10
            "
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;
