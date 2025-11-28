import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

import html from "../assets/images/icons/html.png";
import css from "../assets/images/icons/css.png";
import javascript from "../assets/images/icons/javascript.png";
import reactImage from "../assets/images/icons/react.png";
import nextjs from "../assets/images/icons/nextjs.png";
import restApi from "../assets/images/icons/api.png";
import github from "../assets/images/icons/github.png";
import tailwind from "../assets/images/icons/tailwind.png";
import node from "../assets/images/icons/node.png";
import express from "../assets/images/icons/express.png";
import mongodb from "../assets/images/icons/mongodb.png";
import redux from "../assets/images/icons/redux.png";
import KufiyaBackground from "../components/KufiyaBackground";

// ------------------- PROGRESS BAR -------------------
const ProgressBar = ({ progress, theme }) => (
  <div
    className={`absolute bottom-0 left-0 w-full rounded-b-lg ${
      theme === "dark" ? "bg-[#1b1b1b]" : "bg-[#dcdcdc]"
    }`}
  >
    <div
      className={`h-2 rounded-b-lg ${
        theme === "dark" ? "bg-green-500" : "bg-green-600"
      }`}
      style={{ width: `${progress}%` }}
    />
  </div>
);

// ------------------- TECHNOLOGY CARD -------------------
const TechnologyCard = ({ src, title, progress, link, delay }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`
        relative cursor-pointer rounded-xl p-4 transition-all duration-300
        flex flex-col items-center justify-center border shadow-sm
        ${
          theme === "dark"
            ? "bg-[#0f0f0f] border-[#1f1f1f] text-white shadow-lg hover:shadow-green-400"
            : "bg-white border-[#e6e6e6] text-[#0f0f0f] hover:shadow-green-300"
        }
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(link, "_blank")}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <img src={src} alt={title} className="w-16 h-16 mb-2" />

      <p className="font-semibold mb-2">{title}</p>

      {isHovered && <ProgressBar progress={progress} theme={theme} />}
    </motion.div>
  );
};

// ------------------- EXPERIENCE SECTION -------------------
const Experience = () => {
  const { theme } = useTheme();

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      progress: 85,
      link: "https://github.com/samarkand-fr/tatreez",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      progress: 85,
      link: "https://github.com/samarkand-fr/Kasa_p11/tree/main/Front-End/src/sass",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      progress: 80,
      link: "https://github.com/samarkand-fr/Front-End-Fisheye",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      progress: 80,
      link: "https://example.com/react-projects",
    },
    {
      id: 5,
      src: node,
      title: "NodeJS",
      progress: 50,
      link: "https://github.com/samarkand-fr/react-ecommerce/tree/main/src/backend",
    },
    {
      id: 6,
      src: nextjs,
      title: "NextJS",
      progress: 40,
      link: "https://github.com/samarkand-fr/next-movie",
    },
    {
      id: 7,
      src: restApi,
      title: "REST API",
      progress: 70,
      link: "https://example.com/rest-api-projects",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      progress: 75,
      link: "https://github.com/samarkand-fr",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      progress: 70,
      link: "https://github.com/samarkand-fr/WeShop",
    },
    {
      id: 10,
      src: express,
      title: "Express",
      progress: 60,
      link: "https://github.com/samarkand-fr/Auth-App/tree/main/Backend",
    },
    {
      id: 11,
      src: mongodb,
      title: "MongoDB",
      progress: 70,
      link: "https://github.com/samarkand-fr/react-ecommerce",
    },
    {
      id: 12,
      src: redux,
      title: "Redux",
      progress: 65,
      link: "https://github.com/samarkand-fr/Argent-Bank-P13/tree/main/src/Redux",
    },
  ];

  return (
    <div
      name="experience"
      className={`
        relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12
        transition-colors duration-500
        ${
          theme === "dark"
            ? "bg-[#0f0f0f] text-[#e5e5e5]"
            : "bg-white text-[#0f0f0f]"
        }
      `}
    >
      <KufiyaBackground />
      <div className="relative max-w-6xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="pb-8 text-center mt-20"
        >
          <h2
            className="text-4xl md:text-5xl font-bold inline-block border-b-4"
            style={{
              borderColor: theme === "dark" ? "#b85757" : "#4fa27d",
            }}
          >
            Experience
          </h2>
        </motion.div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 py-8">
          {techs.map((tech, index) => (
            <TechnologyCard
              key={tech.id}
              src={tech.src}
              title={tech.title}
              progress={tech.progress}
              link={tech.link}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
