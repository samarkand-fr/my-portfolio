import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/images/edge.jpeg";

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const typingSpeed = 80;

  useEffect(() => {
    const textToType = "Hello my name is Dina";

    if (index < textToType.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + textToType[index]);
        setIndex(index + 1);
      }, typingSpeed);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [index]);

  const heroStyle = {
    backgroundImage: `url("${HeroImage}")`,
  };

  return (
    <div
      name="home"
      style={heroStyle}
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat home"
    >
      {/* Add the gradient overlay using a ::before pseudo-element */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-cement"
      ></div>

      <div className="max-w-screen-lg mx-auto flex flex-col  items-center justify-start h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full z-10 ">
          <h1 className="text-4xl sm:text-7xl font-signature text-white mt-40">
            FrontEnd Developer
          </h1>
          <div className="mt-40">
            <p className="text-white text-2xl max-w-md">{text}</p>
            <p className="text-vanilla py-4 max-w-md">
            Welcome to my portfolio! With one year of professional experience, I specialize in transforming designs into seamless and captivating web experiences. Explore my projects and discover how I blend creativity with technical expertise to make the web a better place.
            </p>
          </div>
          <div className="portfolio-btn mb-20">
            <Link
              to="/portfolio"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-l from-rust to-mustardYellow cursor-pointer hover:from-sageGreen hover:to-vanilla"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
