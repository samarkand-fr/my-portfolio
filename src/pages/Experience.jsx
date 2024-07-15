import React, { useState } from "react";
import { motion } from "framer-motion";
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

const ProgressBar = ({ progress }) => (
  <div className="absolute bottom-0 left-0 w-full bg-neutral-200 rounded-b-lg">
    <div className="h-3 bg-green-700 rounded-b-lg" style={{ width: `${progress}%` }}>
      <span className="absolute left-0 text-white text-xs flex items-center pl-2 ">{progress}%</span>
    </div>
  </div>
);

const TechnologyCard = ({ src, title, progress, link, style, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <motion.div
      className={`shadow-md py-2 rounded-lg ${style} relative cursor-pointer`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ width: '220px', height: '170px' }}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      {isHovered && <ProgressBar progress={progress} />}
      <img src={src} alt={title} className="w-16 mx-auto mt-2" />
      <div className="text-center">
        <p className="text-white font-semibold">{title}</p>
        {isHovered && (
          <p className="text-xs text-white mt-3">View Projects</p>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      progress: 85,
      link: "https://github.com/samarkand-fr/tatreez",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      progress: 85,
      link: "https://github.com/samarkand-fr/Kasa_p11/tree/main/Front-End/src/sass",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      progress: 80,
      link: "https://github.com/samarkand-fr/Front-End-Fisheye",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-sky-400",
      progress: 80,
      link: "https://example.com/react-projects",
    },
    {
      id: 5,
      src: node,
      title: "NodeJs",
      style: "shadow-lime-400",
      progress: 50,
      link: "https://github.com/samarkand-fr/react-ecommerce/tree/main/src/backend",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
      progress: 40,
      link: "https://github.com/samarkand-fr/next-movie",
    },
    {
      id: 7,
      src: restApi,
      title: "Rest Api",
      style: "shadow-blue-200",
      progress: 70,
      link: "https://example.com/rest-api-projects",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-700",
      progress: 75,
      link: "https://github.com/samarkand-fr",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-cyan-400",
      progress: 70,
      link: "https://github.com/samarkand-fr/WeShop",
    },
    {
      id: 10,
      src: express,
      title: "Express",
      style: "shadow-white",
      progress: 60,
      link: "https://github.com/samarkand-fr/Auth-App/tree/main/Backend",
    },
    {
      id: 11,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
      progress: 70,
      link: "https://github.com/samarkand-fr/react-ecommerce",
    },
    {
      id: 12,
      src: redux,
      title: "Redux",
      style: "shadow-violet-500",
      progress: 65,
      link: "https://github.com/samarkand-fr/Argent-Bank-P13/tree/main/src/Redux",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-t from-sky-100 to-black w-full h-screen experience"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8 mt-5">
          <p className="text-4xl font-bold border-b-4 border-rust p-2 inline">
            Experiences
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style, progress, link }, index) => (
            <TechnologyCard
              key={id}
              src={src}
              title={title}
              style={style}
              progress={progress}
              link={link}
              delay={index * 0.3} // Delay for staggered appearance
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
