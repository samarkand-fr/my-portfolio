import React, { useState, useEffect, useRef } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import HeroImage from "../assets/images/nature.jpeg";
import Tatreez from "../assets/images/portfolio/tatreez.png";
import  Glowup from "../assets/images/portfolio/glowup.png";
import HeroSection from "../components/HeroSection";
import Section from "../components/Section";
import ScrollButton from "../components/ScrollButton";
import "../index.css"; // Import your global styles here

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [scrolledDown, setScrolledDown] = useState(false);
  const typingSpeed = 80;
  const firstSectionRef = useRef();
  const secondSectionRef = useRef();
  const prevScrollY = useRef(0); // Define prevScrollY here

  const scrollToSection = (sectionRef) => {
    console.log("Scrolling to section:", sectionRef.current);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const textToType = "Hi there! I'm Dina";

    if (index < textToType.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + textToType[index]);
        setIndex(index + 1);
      }, typingSpeed);

      return () => {
        clearTimeout(timeout);
      };
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolledUp = currentScrollY < prevScrollY.current;
      setScrolledDown(!scrolledUp);
      prevScrollY.current = currentScrollY;

      if (scrolledUp) {
        document.body.classList.add("scroll-up");
      } else {
        document.body.classList.remove("scroll-up");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [index]);

  const heroStyle = {
    backgroundImage: `url("${HeroImage}")`,
  };

  return (
    <div name="home" className="overflow-hidden">
      <div
        style={heroStyle}
        className="relative h-screen w-full bg-cover bg-no-repeat bg-center "
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neutral-900 via-transparent to-neutral-900"></div>
        <HeroSection text={text} />
        <div
          className="absolute bottom-4 right-4 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection(firstSectionRef)}
        >
          <RiArrowDownSLine
            size={40}
            className="bg-white p-2 rounded-full shadow-lg hover:bg-yellow-500 hover:text-black focus:outline-none"
          />
        </div>
      </div>
      <Section
        refProp={firstSectionRef}
        imageUrl={Tatreez}
        className=" bg-gradient-to-t from-sky-100 to-black"
        title="Tatreez"
        content="This app is built with HTML, styled using Tailwind CSS, and uses JavaScript (Alpine.js) for functionality. It includes Font Awesome for icons and uses the Intersection Observer API for animations. "
        githubLink="https://github.com/samarkand-fr/tatreez"
        siteLink="https://tatreez.netlify.app/"
      />
      <Section
        refProp={secondSectionRef}
        imageUrl={Glowup}
        className="bg-gradient-to-b from-black to-sky-100"
        title="GlowUp"
        content="The GlowUp App is a modern, visually engaging web application built with React. It uses pure CSS animations to create an interactive and aesthetically pleasing user experience."
        githubLink="https://github.com/samarkand-fr/glowup"
        siteLink="https://glowup-fk3w.vercel.app/"
      />

      <ScrollButton scrollToTop={scrollToTop} isVisible={scrolledDown} />
    </div>
  );
};

export default Home;


   

 