import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaFolder, FaCode, FaEnvelope } from "react-icons/fa";

const NavBar = () => {
  const [navVisible, setNavVisible] = useState(true);
  const [nav, setNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current && navVisible) {
        // Scrolling down
        setNavVisible(false);
      } else if (currentScrollY < prevScrollY.current || currentScrollY === 0) {
        // Scrolling up or at the top
        setNavVisible(true);
        setNav(false); // Ensure that the mobile menu is closed when scrolling up
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

  const closeMenu = () => {
    setNav(false);
  };

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="relative">
      <div
        className={`fixed top-0 right-0 py-10 z-50 md:pr-[5%] md:hover:pr-[5%] bg-transparent
        hover:bg-gradient-to-b from-neutral-600 to-transparent w-full hover:p-8 transition-all ease-in-out duration-300 
        ${navVisible ? "h-auto" : "h-0"}
        overflow-hidden flex flex-col sm:flex-row items-center justify-end`}
      >
        {!isMobile && (
          <ul className="flex space-x-10">
            {links.map(({ to, text, icon }) => (
              <li
                key={to}
                className="nav-links cursor-pointer text-neutral-300 hover:text-white duration-200 transition-transform transform translate-x-0 hover:translate-x-2"
              >
                <Link to={to} className="flex items-center space-x-2">
                  {icon}
                  <span>{text}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {isMobile && (
          <div className="cursor-pointer text-vanilla" onClick={toggleNav}>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        )}
      </div>

      {isMobile && nav && (
        <div className="fixed top-0 left-0 w-full h-full z-40 bg-neutral-900 bg-opacity-90 flex flex-col items-center justify-center">
          <ul className="flex flex-col space-y-4 mt-4 text-center">
            {links.map(({ to, text, icon }) => (
              <li
                key={to}
                className="nav-links cursor-pointer text-vanilla hover:text-white duration-200 transition-transform transform translate-x-0 hover:translate-x-2"
              >
                <Link
                  to={to}
                  onClick={closeMenu}
                  className="flex items-center space-x-2 justify-center"
                >
                  {icon}
                  <span>{text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
