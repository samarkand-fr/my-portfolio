import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/resume.pdf";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      label: "Linkedin",
      icon: <FaLinkedin size={24} />,
      href: "https://linkedin.com/in/dinajannoun",
      glow: "shadow-[0_0_10px_rgba(79,162,125,0.45)]",
    },
    {
      id: 2,
      label: "Github",
      icon: <FaGithub size={24} />,
      href: "https://github.com/samarkand-fr",
      glow: "shadow-[0_0_10px_rgba(158,250,201,0.45)]",
    },
    {
      id: 3,
      label: "Mail",
      icon: <HiOutlineMail size={24} />,
      href: "mailto:jdina2004@gmail.com",
      glow: "shadow-[0_0_10px_rgba(184,87,87,0.45)]",
    },
    {
      id: 4,
      label: "Resume",
      icon: <BsFillPersonLinesFill size={24} />,
      href: resume,
      download: true,
      glow: "shadow-[0_0_10px_rgba(229,229,229,0.45)]",
    },
  ];

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden lg:flex flex-col fixed left-6 top-1/2 -translate-y-1/2 z-50">
        <ul className="space-y-4">
          {links.map(({ id, label, icon, href, download, glow }) => (
            <li
              key={id}
              className={`
                group relative flex items-center 
                bg-[#0f0f0f]/70 backdrop-blur-xl
                border border-white/10 
                p-3 rounded-xl cursor-pointer
                transition-all duration-300 
                hover:bg-[#1b1b1b]/90 
                ${glow}
              `}
            >
              {/* Icon only */}
              <a
                href={href}
                download={download}
                target="_blank"
                rel="noreferrer"
                className="text-palestineWhiteSoft hover:text-palestineGreenSoft transition"
              >
                {icon}
              </a>

              {/* Slide-out label */}
              <span
                className="
                  absolute left-full ml-3 
                  opacity-0 group-hover:opacity-100 
                  translate-x-[-10px] group-hover:translate-x-0 
                  transition-all duration-300
                  whitespace-nowrap px-3 py-1 
                  text-sm font-medium
                  bg-[#0f0f0f]/80 rounded-lg 
                  border border-white/10
                  text-palestineWhiteSoft
                  shadow-lg
                "
              >
                {label}
              </span>
            </li>
          ))}
        </ul>

        {/* Kufiya divider */}
        <div className="mt-6 w-12 h-1 bg-gradient-to-r from-[#b85757]/60 to-[#4fa27d]/60 rounded-full opacity-90"></div>
      </div>

      {/* MOBILE */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-[#0f0f0f]/85 backdrop-blur-xl border-t border-white/10">
          <ul className="flex justify-around items-center py-3">
            {links.map(({ id, label, icon, href, download }) => (
              <li key={id}>
                <a
                  href={href}
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center text-palestineWhiteSoft hover:text-palestineGreenSoft transition"
                >
                  <span className="text-xl mb-1">{icon}</span>
                  <span className="text-xs">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
