import React, { useState } from "react";
import { motion } from "framer-motion";
import PortfolioItem from "../components/PortfolioItem";
import { useTheme } from "../context/ThemeContext";

import resto from "../assets/images/portfolio/resto.png";
import fishEye from "../assets/images/portfolio/fishEye.png";
import dashboard from "../assets/images/portfolio/dashboard.png";
import petitplat from "../assets/images/portfolio/petitplats.png";
import hrnet from "../assets/images/portfolio/hrnet.png";
import argentBank from "../assets/images/portfolio/argentBank.png";
import KufiyaBackground from "../components/KufiyaBackground";

const Portfolio = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const { theme } = useTheme();

  const portfolios = [
    {
      id: 1,
      src: fishEye,
      expandedText:
        "A website that allows independent photographers to showcase their best work.",
      link: "...",
      repo: "...",
    },
    {
      id: 2,
      src: dashboard,
      expandedText:
        "An application that allows users to track their fitness progress.",
      link: "...",
      repo: "...",
    },
    {
      id: 3,
      src: resto,
      expandedText: "A food delivery website with interactive features.",
      link: "...",
      repo: "...",
    },
    {
      id: 4,
      src: hrnet,
      expandedText:
        "Modernized existing App into React, replacing jQuery plugins.",
      link: "...",
      repo: "...",
    },
    {
      id: 5,
      src: petitplat,
      expandedText: "A search engine for recipes made with JS.",
      link: "...",
      repo: "...",
    },
    {
      id: 6,
      src: argentBank,
      expandedText: "Authentication system for Argent Bank.",
      link: "...",
      repo: "...",
    },
  ];

  const visibleProjects = showAllProjects ? portfolios : portfolios.slice(0, 4);

  const container = {
    show: {
      transition: { staggerChildren: 0.18 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div
      name="portfolio"
      className={`
    relative
    min-h-screen w-full px-6 md:px-12 py-20
    transition-colors duration-500
    ${
      theme === "dark"
        ? "bg-[#0f0f0f] text-[#e5e5e5]"
        : "bg-white text-[#0f0f0f]"
    }
  `}
    >
      <KufiyaBackground />
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold inline-block border-b-4 border-[#b85757] pb-2">
          Portfolio
        </h2>
      </motion.div>

      {/* GRID (2 cards per row, spacious) */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="
          grid 
          grid-cols-1 sm:grid-cols-2 
          gap-12           
          max-w-5xl mx-auto
        "
      >
        {visibleProjects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <PortfolioItem {...project} />
          </motion.div>
        ))}
      </motion.div>

      {/* MORE BUTTON */}
      {!showAllProjects && (
        <motion.button
          className="mt-12 mx-auto block px-7 py-3 rounded-lg font-medium text-white"
          style={{
            background: "linear-gradient(90deg,#4fa27d,#b85757)",
            boxShadow: "0 0 12px #4fa27d",
          }}
          onClick={() => setShowAllProjects(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Show More
        </motion.button>
      )}
    </div>
  );
};

export default Portfolio;
