import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import KufiyaBackground from "../components/KufiyaBackground";

const About = () => {
  const { theme } = useTheme();

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.7 },
    }),
  };

  return (
    <div
      name="about"
      className={`relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 transition-colors duration-500  ${
        theme === "dark"
          ? "bg-[#0f0f0f] text-[#e5e5e5]"
          : "bg-white text-[#0f0f0f]"
      }`}
    >
      <KufiyaBackground />

      <div className="relative max-w-3xl w-full z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={0}
          className="pb-8 text-center mt-32"
        >
          <h2
            className="
              text-4xl md:text-5xl font-bold inline-block border-b-4
              border-[#4fa27d] 
              dark:border-[#b85757]
            "
          >
            About
          </h2>
        </motion.div>

        {/* PARAGRAPH 1 */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={1}
          className="
            text-lg md:text-xl mb-6 leading-relaxed
            text-[#444] 
            dark:text-[#cfcfcf]
          "
        >
          I am a front-end developer dedicated to building modern, interactive
          web experiences. Drawing inspiration from cultural patterns, colors,
          and storytelling, I design intuitive, user-centered interfaces with a
          clean and minimalistic approach.
        </motion.p>

        {/* PARAGRAPH 2 */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={2}
          className="
            text-lg md:text-xl mb-8 leading-relaxed
            text-[#444]
            dark:text-[#cfcfcf]
          "
        >
          My work emphasizes performance, accessibility, smooth motion, and
          layouts subtly influenced by identity patterns.
        </motion.p>

        {/* BUTTON */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={3}
          className="text-center"
        >
          <Link
            to="/cv"
            className="
              inline-flex items-center px-6 py-3 rounded-md font-semibold 
              text-white dark:text-[#0f0f0f]
            "
            style={{
              background:
                "linear-gradient(90deg, rgba(79,162,125,0.95), rgba(184,87,87,0.95))",
              boxShadow: "0 6px 18px rgba(79,162,125,0.12)",
            }}
          >
            View My CV
            <span className="ml-2 transition-transform duration-300 group-hover:rotate-90">
              <MdOutlineKeyboardArrowRight size={25} />
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
