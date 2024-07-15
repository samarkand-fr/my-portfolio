import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import "../index.css";

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.7,
      },
    }),
  };

  return (
    <div name="about" className="about background-theme">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={0}
          className="pb-8 mt-40"
        >
          <p className="text-4xl font-bold inline border-b-4 border-rust">About</p>
        </motion.div>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={1}
          className="text-xl mt-5"
        >
          I am a web developer, working in frontend programming. Excited for
          improving my skills and learning new technologies. I'm open to learn
          and work with any web technology and currently interested in improving
          the Backend programming.
        </motion.p>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={2}
          className="text-xl mb-10"
        >
          I thrive on crafting code from the ground up and transforming concepts
          into reality. If you're looking for a dedicated professional to bring
          your ideas to life, let's connect and collaborate on your project.{" "}
          <br /> <br />
          My approach values minimalistic design, purposeful content branding,
          and creating user-centric experiences. Together, we can explore how to
          optimize your project for higher conversion rates.
          <br /> <br />I take pleasure in crafting and refining unique
          identities for products and services, increasing visibility on search
          engines and social media platforms, and driving more organic traffic.
          Let's work together to achieve your goals!
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={3}
        >
          <Link to="/cv" className="btn-primary group">
            View My CV
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
