import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaFolder, FaCode, FaEnvelope } from "react-icons/fa";

const NavBar = () => {
  // State to control the menu open/close state
  const [nav, setNav] = useState(false);

  // Array of navigation links with their text and icons
  const links = [
    { to: "/", text: "Home", icon: <FaHome /> },
    { to: "/about", text: "About", icon: <FaUser /> },
    { to: "/portfolio", text: "Portfolio", icon: <FaFolder /> },
    { to: "/experience", text: "Experience", icon: <FaCode /> },
    { to: "/contact", text: "Contact", icon: <FaEnvelope /> },
  ];

  // Function to close the mobile menu
  const closeMenu = () => {
    setNav(false);
  };

  return (
    <div className={`fixed top-10 right-0 z-50 p-4 bg-gradient-to-l from-rust to-mustardYellow  shadow bg-white rounded-lg ${nav ? 'h-auto' : 'w-16'} transition-all ease-in-out duration-300 flex flex-col sm:flex-row items-end justify-end`}>
      {nav && (
        // Mobile menu when 'nav' is true, displayed as a vertical list
        <ul className={`flex ${nav ? 'flex-col sm:flex-row' : ''} space-y-10 sm:space-y-0 space-x-2 sm:space-x-10 mt-4 sm:mt-0`}>

          {links.map(({ to, text, icon }) => (
            <li key={to} className="nav-links cursor-pointer text-vanilla hover:text-white duration-200 transition-transform transform translate-x-0 hover:translate-x-2">
              <Link to={to} onClick={closeMenu} className="flex items-center space-x-2 mr-3">
                {icon}
                <span>{text}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      
      <div onClick={() => setNav(!nav)} className="cursor-pointer text-vanilla">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </div>
  );
};

export default NavBar;
