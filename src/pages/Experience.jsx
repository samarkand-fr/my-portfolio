
import React,{useState} from "react";
import html from "../assets/images/icons/html.png";
import css from "../assets/images/icons/css.png";
import javascript from "../assets/images/icons/javascript.png";
import reactImage from "../assets/images/icons/react.png";
import nextjs from "../assets/images/icons/nextjs.png";
import restApi from "../assets/images/icons/api.png";
import github from "../assets/images/icons/github.png";
import tailwind from "../assets/images/icons/tailwind.png";
import node from "../assets/images/icons/node.png";
import express from "../assets/images/icons/express.png"
import mongodb from "../assets/images/icons/mongodb.png"
import redux from "../assets/images/icons/redux.png"

const ProgressBar = ({ progress }) => (
  <div className="h-5 bg-vanilla relative rounded-lg overflow-hidden">
    <div className="h-full bg-mustardYellow" style={{ width: `${progress}%` }}>
      <div className="absolute left-0 top-0 h-full bg-transparent text-white flex items-center pl-2">
        {progress}%
      </div>
    </div>
  </div>
);

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      progress: 85,
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      progress: 85,
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      progress: 80,
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
      progress: 80,
    },
    {
      id: 5,
      src: node,
      title: "NodeJs",
      style: "shadow-green-400",
      progress: 50,
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
      progress: 40,
    },
    {
      id: 7,
      src: restApi,
      title: "Rest Api",
      style: "shadow-blue-200",
      progress: 70,
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
      progress: 80,
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
      progress: 70,
    },
    {
      id: 10,
      src: express,
      title: "Express",
      style: "shadow-white",
      progress: 60,
    },
    {
      id: 11,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
      progress: 60,
    },
    {
      id: 12,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
      progress: 80,
    },
  ];

  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black via-cementClaire to-vanilla w-full h-screen experience"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8 mt-5">
          <p className="text-4xl font-bold border-b-4 border-rust p-2 inline">
            Experiences
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style ,progress }) => (
            <div
              key={id}
              className={`shadow-md py-2 rounded-lg ${style} relative`}
              onMouseEnter={() => setHoveredItem(id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {hoveredItem === id && (
                <ProgressBar progress={progress} /> 
              )}
              <img src={src} alt="" className="w-16 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
