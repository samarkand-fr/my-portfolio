import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const PortfolioItem = ({
  src,
  title,
  subtitle,
  link,
  repo,
  expandedText,
  tags = [],
  statusBadge,
}) => {
  const { theme } = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`
        relative rounded-xl overflow-hidden cursor-pointer
        bg-white dark:bg-[#111]
        border border-gray-200 dark:border-gray-800
        group transition-all duration-300
        ${
          theme === "dark"
            ? "shadow-[0_0_18px_rgba(79,162,125,0.18)] hover:shadow-[0_0_28px_rgba(79,162,125,0.35),0_0_38px_rgba(184,87,87,0.25)]"
            : "shadow-md hover:shadow-xl hover:border-[#4fa27d]/40"
        }
      `}
    >
      {/* IMAGE */}
      <div className="relative w-full h-56 md:h-64 overflow-hidden">
        <img
          src={src}
          alt={title || "Project"}
          className={`
            w-full h-full object-cover transition-all duration-500
            ${theme === "light" ? "opacity-95" : "opacity-100"}
          `}
        />

        {/* Status Badge */}
        {statusBadge && (
          <span className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#00ff88] border border-[#00ff88]/30 shadow-md z-10">
            {statusBadge}
          </span>
        )}

        {/* DARK OVERLAY ON HOVER */}
        <div
          className="
            absolute inset-0 bg-black bg-opacity-0
            transition-all duration-500
            group-hover:bg-opacity-85
          "
        />

        {/* OVERLAY CONTENT */}
        <div
          className="
            absolute inset-0 flex flex-col justify-center items-center text-center
            opacity-0 group-hover:opacity-100
            transition-all duration-500
            px-6 z-20 pointer-events-none group-hover:pointer-events-auto
          "
        >
          {title && (
            <h4 className="text-lg font-bold text-white mb-1 font-grotesk">
              {title}
            </h4>
          )}
          {subtitle && (
            <p className="text-xs font-semibold text-[#00ff88] mb-3">
              {subtitle}
            </p>
          )}

          <p className="text-xs md:text-sm text-gray-200 mb-4 line-clamp-4 leading-relaxed">
            {expandedText}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {/* LIVE DEMO */}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="
                  px-4 py-2 text-xs md:text-sm rounded-lg font-bold
                  border-2 border-[#4fa27d]
                  text-white bg-[#4fa27d]/30
                  transition-all duration-300
                  hover:bg-[#4fa27d] hover:text-white
                  hover:shadow-[0_0_12px_#4fa27d]
                "
              >
                Live Demo
              </a>
            )}

            {/* GITHUB */}
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                className="
                  px-4 py-2 text-xs md:text-sm rounded-lg font-bold
                  border-2 border-[#b85757]
                  text-white bg-[#b85757]/30
                  transition-all duration-300
                  hover:bg-[#b85757] hover:text-white
                  hover:shadow-[0_0_12px_#b85757]
                "
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER INFO (Visible permanently below image) */}
      <div className="p-4 border-t border-gray-100 dark:border-gray-800/80">
        <div className="flex items-center justify-between mb-1.5">
          <h3 className="font-bold text-base text-gray-900 dark:text-white truncate">
            {title}
          </h3>
          {subtitle && (
            <span className="text-[11px] font-semibold text-[#b85757] dark:text-[#4fa27d] shrink-0 ml-2">
              {subtitle}
            </span>
          )}
        </div>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold px-2 py-0.5 rounded bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white border border-gray-200 dark:border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PortfolioItem;
