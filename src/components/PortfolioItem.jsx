import React, { useState } from "react";
import { motion } from "framer-motion";

const PortfolioItem = ({ src, link, repo, expandedText, delay }) => {
  const [showExpandedText, setShowExpandedText] = useState(false);

  const handleMouseEnter = () => {
    setShowExpandedText(true);
  };

  const handleMouseLeave = () => {
    setShowExpandedText(false);
  };

  return (
    <motion.div
      className="relative card shadow-md rounded-md border border-solid border-cement"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ overflow: "hidden" }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
    >
      <img
        src={src}
        alt="projects"
        className="rounded-t-md h-64 w-full object-cover"
      />
      <div
        className={`absolute inset-0 bg-black bg-opacity-80 rounded-b-md p-2 text-center text-white flex items-center justify-center transition-opacity duration-300 ${
          showExpandedText ? "opacity-100" : "opacity-0"
        }`}
      >
        {expandedText}
      </div>
      <div className="flex items-center justify-center card-info">
        <button
          className="w-1/2 px-4 py-2 m-2 hover:scale-105 transition-transform rounded-t-lg"
          onClick={() => window.open(link, "_blank")}
        >
          Demo
        </button>
        <button
          className="w-1/2 px-4 py-2 m-2 hover:scale-105 transition-transform"
          onClick={() => window.open(repo, "_blank")}
        >
          GitHub
        </button>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;
