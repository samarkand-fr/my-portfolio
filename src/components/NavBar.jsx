import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaFolder, FaCode, FaEnvelope } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const [navVisible, setNavVisible] = useState(true);
  const [nav, setNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current && navVisible) {
        setNavVisible(false);
      } else if (currentScrollY < prevScrollY.current || currentScrollY === 0) {
        setNavVisible(true);
        setNav(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navVisible]);

  const links = [
    { to: "/", text: "Home", icon: <FaHome /> },
    { to: "/about", text: "About", icon: <FaUser /> },
    { to: "/portfolio", text: "Portfolio", icon: <FaFolder /> },
    { to: "/experience", text: "Experience", icon: <FaCode /> },
    { to: "/contact", text: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <div className="relative">
      {/* DESKTOP NAV */}
      <div
        className={`fixed top-1/2 right-6 -translate-y-1/2 z-50 transition-all duration-300
          ${navVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
          bg-[#0f0f0f]/70 backdrop-blur-xl p-4 rounded-2xl shadow-xl`}
      >
        <ul className="flex flex-col space-y-6">
          {links.map(({ to, text, icon }) => (
            <li key={to} className="group relative text-[#e5e5e5]">
              <Link
                to={to}
                className="flex items-center gap-3 text-lg font-medium hover:text-[#4fa27d] transition-all"
              >
                {icon}
              </Link>

              <span
                className="absolute right-full mr-3 opacity-0 group-hover:opacity-100
                bg-[#0f0f0f]/80 px-3 py-1 rounded-md text-sm transition-all duration-300 shadow-md"
              >
                {text}
              </span>
            </li>
          ))}
        </ul>

        {/* Animated kufiya vertical line */}
        <div
          className="mx-auto mt-6 w-1 h-24 bg-gradient-to-b from-[#b85757] to-[#4fa27d] rounded-full"
          style={{ animation: "kufiyaPulseStrong 2.8s ease-in-out infinite" }}
        />
      </div>

      {/* MOBILE MENU */}
      {isMobile && nav && (
        <div
          className="fixed top-0 left-0 w-full h-full z-40 
           bg-[#0f0f0f]/95 flex flex-col items-center justify-center backdrop-blur-xl"
        >
          <ul className="flex flex-col space-y-8 text-center">
            {links.map(({ to, text, icon }) => (
              <li
                key={to}
                className="text-[#e5e5e5] cursor-pointer text-2xl font-medium hover:text-[#4fa27d] transition-all"
              >
                <Link
                  to={to}
                  onClick={() => setNav(false)}
                  className="flex items-center space-x-3 justify-center"
                >
                  {icon}
                  <span>{text}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div
            className="absolute bottom-12 w-2/3 h-[2px] 
            bg-gradient-to-r from-[#b85757] to-[#4fa27d] rounded-full opacity-40"
          />
        </div>
      )}

      <ThemeToggle />
    </div>
  );
};

export default NavBar;
