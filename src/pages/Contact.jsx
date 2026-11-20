import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import KufiyaBackground from "../components/KufiyaBackground";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdSend } from "react-icons/md";

// Handle form reset
function handleSubmit(e) {
  setTimeout(() => {
    e.target.reset();
  }, 2500);
}

const Contact = () => {
  const { theme } = useTheme();

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.5,
      },
    }),
  };

  return (
    <div
      name="contact"
      className={`relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-24 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-[#0f0f0f] text-[#e5e5e5]"
          : "bg-white text-[#0f0f0f]"
      }`}
    >
      <KufiyaBackground />

      <div className="relative max-w-4xl w-full z-10">
        {/* SECTION HEADING */}
        <div className="pb-8 text-center mt-8 md:mt-12">
          <h2
            className="
              text-4xl md:text-5xl font-bold inline-block border-b-4
              border-[#b85757] pb-2
            "
          >
            Contact
          </h2>

          <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-100 font-medium max-w-xl mx-auto">
            Vous avez un projet Python/Django, une mission backend ou une opportunité d'embauche ? Discutons-en !
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* COLONNE GAUCHE : COORDONNÉES & DISPONIBILITÉ (5 colonnes) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 flex flex-col gap-4"
          >
            {/* Quick Contact Box */}
            <div
              className={`p-6 rounded-2xl border backdrop-blur-md transition-colors ${
                theme === "dark"
                  ? "bg-[#111]/80 border-white/10"
                  : "bg-gray-50/90 border-gray-200"
              }`}
            >
              <h3 className="font-bold text-base mb-4 text-[#111] dark:text-white">
                Coordonnées Directes
              </h3>

              <div className="flex flex-col gap-3.5 text-sm">
                <a
                  href="mailto:jdina2004@gmail.com"
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#4fa27d]/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#4fa27d]/15 border border-[#4fa27d]/30 flex items-center justify-center text-[#4fa27d] group-hover:scale-110 transition-transform shrink-0">
                    <HiOutlineMail size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 dark:text-gray-300 block">Email direct</span>
                    <span className="font-semibold text-gray-800 dark:text-white group-hover:text-[#4fa27d]">
                      jdina2004@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/dinajannoun"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#4fa27d]/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#4fa27d]/15 border border-[#4fa27d]/30 flex items-center justify-center text-[#4fa27d] group-hover:scale-110 transition-transform shrink-0">
                    <FaLinkedin size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 dark:text-gray-300 block">LinkedIn</span>
                    <span className="font-semibold text-gray-800 dark:text-white group-hover:text-[#4fa27d]">
                      linkedin.com/in/dinajannoun
                    </span>
                  </div>
                </a>

                <a
                  href="https://github.com/samarkand-fr"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#b85757]/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#b85757]/15 border border-[#b85757]/30 flex items-center justify-center text-[#b85757] group-hover:scale-110 transition-transform shrink-0">
                    <FaGithub size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 dark:text-gray-300 block">GitHub</span>
                    <span className="font-semibold text-gray-800 dark:text-white group-hover:text-[#b85757]">
                      github.com/samarkand-fr
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Disponibilité */}
            <div className="p-4 rounded-xl border border-[#4fa27d]/40 bg-[#4fa27d]/10 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#00ff88] animate-pulse shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#4fa27d] dark:text-[#00ff88]">
                  À l'écoute d'opportunités
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-200 font-medium">
                  Disponible immédiatement (CDI, Freelance, Mission)
                </p>
              </div>
            </div>
          </motion.div>

          {/* COLONNE DROITE : FORMULAIRE GETFORM (7 colonnes) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              action="https://getform.io/f/2d6264ba-caa9-4fb7-8b11-38194d106b4b"
              className={`
                flex flex-col gap-4 w-full p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur-lg relative overflow-hidden border
                ${
                  theme === "dark"
                    ? "bg-[#111111]/90 border-[#4fa27d]/20"
                    : "bg-white/95 border-gray-200"
                }
              `}
            >
              <motion.input
                custom={0}
                variants={formVariants}
                initial="hidden"
                animate="visible"
                type="text"
                name="name"
                placeholder="Votre nom"
                required
                className={`
                  p-3 rounded-lg outline-none transition-all duration-300 border text-sm
                  ${
                    theme === "dark"
                      ? "bg-[#181818] text-[#e5e5e5] border-white/10 focus:border-[#4fa27d] focus:ring-1 focus:ring-[#4fa27d]"
                      : "bg-gray-50 text-black border-gray-300 focus:border-[#4fa27d] focus:ring-1 focus:ring-[#4fa27d]"
                  }
                `}
              />

              <motion.input
                custom={1}
                variants={formVariants}
                initial="hidden"
                animate="visible"
                type="email"
                name="email"
                placeholder="Votre adresse email"
                required
                className={`
                  p-3 rounded-lg outline-none transition-all duration-300 border text-sm
                  ${
                    theme === "dark"
                      ? "bg-[#181818] text-[#e5e5e5] border-white/10 focus:border-[#4fa27d] focus:ring-1 focus:ring-[#4fa27d]"
                      : "bg-gray-50 text-black border-gray-300 focus:border-[#4fa27d] focus:ring-1 focus:ring-[#4fa27d]"
                  }
                `}
              />

              <motion.input
                custom={2}
                variants={formVariants}
                initial="hidden"
                animate="visible"
                type="text"
                name="subject"
                placeholder="Objet (ex: Projet Python / Mission Backend)"
                className={`
                  p-3 rounded-lg outline-none transition-all duration-300 border text-sm
                  ${
                    theme === "dark"
                      ? "bg-[#181818] text-[#e5e5e5] border-white/10 focus:border-[#4fa27d] focus:ring-1 focus:ring-[#4fa27d]"
                      : "bg-gray-50 text-black border-gray-300 focus:border-[#4fa27d] focus:ring-1 focus:ring-[#4fa27d]"
                  }
                `}
              />

              <motion.textarea
                custom={3}
                variants={formVariants}
                initial="hidden"
                animate="visible"
                name="message"
                placeholder="Votre message..."
                rows="5"
                required
                className={`
                  p-3 rounded-lg outline-none transition-all duration-300 resize-none border text-sm
                  ${
                    theme === "dark"
                      ? "bg-[#181818] text-[#e5e5e5] border-white/10 focus:border-[#4fa27d] focus:ring-1 focus:ring-[#4fa27d]"
                      : "bg-gray-50 text-black border-gray-300 focus:border-[#4fa27d] focus:ring-1 focus:ring-[#4fa27d]"
                  }
                `}
              />

              <motion.button
                custom={4}
                variants={formVariants}
                initial="hidden"
                animate="visible"
                type="submit"
                className="
                  relative px-7 py-3.5 font-bold rounded-lg text-white shadow-lg overflow-hidden group self-start flex items-center gap-2 cursor-pointer
                  hover:scale-105 transition-all
                "
                style={{
                  background: "linear-gradient(90deg,#4fa27d,#b85757)",
                  boxShadow: "0 4px 15px rgba(79,162,125,0.3)",
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Envoyer le Message</span>
                  <MdSend size={18} />
                </span>
                <span
                  className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-out bg-white/20"
                  style={{
                    maskImage:
                      "linear-gradient(120deg, transparent 0%, white 50%, transparent 100%)",
                  }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
