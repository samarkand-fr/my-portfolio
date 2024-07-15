import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "../index.css";

const HeroSection = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    observer.observe(sectionRef.current);

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-start h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full z-10">
        <h1
          className={`text-4xl sm:text-7xl font-signature text-white mt-40 ${
            isVisible ? "hero-animation visible" : "hero-animation"
          }`}
        >
          FrontEnd Developer
        </h1>
        <div
          ref={sectionRef}
          className={`mt-36 p-4 ${isVisible ? "visible" : ""}`}
        >
          <p
            className={`text-white text-2xl max-w-md ${
              isVisible ? "hero-animation visible" : "hero-animation"
            }`}
          >
            {text}
          </p>
          <div
            className={`text-white py-4 max-w-md ${
              isVisible ? "hero-animation visible" : "hero-animation"
            }`}
          >
            Throughout my projects, you'll see a blend of creativity and
            technical expertise. But for me, web development is more than just
            code and design – it's about creating something that truly connects
            with users and makes a positive impact.
            <p>Explore my projects - see what drives me in web dev!</p>
          </div>
        </div>
        <div className="portfolio-btn mb-20">
          <Link to="/portfolio" className="group btn-primary cursor-pointer ">
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
