import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import KufiyaBackground from "../components/KufiyaBackground";

// Handle form reset
function handleSubmit(e) {
  e.preventDefault();
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact = () => {
  const { theme } = useTheme();
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <div
      name="contact"
      className={`relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 transition-colors duration-500  ${
        theme === "dark"
          ? "bg-[#0f0f0f] text-[#e5e5e5]"
          : "bg-white text-[#0f0f0f]"
      }`}
    >
      <KufiyaBackground />
      <div className="relative max-w-2xl w-full z-10">
        {/* Section heading */}
        <div className="pb-8 text-center">
          <h2
            className="
              text-4xl md:text-5xl font-bold inline-block border-b-4
              border-[#b85757]
            "
          >
            Contact
          </h2>

          <p
            className="
            mt-4 text-lg md:text-xl
            text-[#cfcfcf] dark:text-[#cfcfcf]
            text-black/60 
          "
          >
            I'd love to hear from you! Send me a message below.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
          action="https://getform.io/f/2d6264ba-caa9-4fb7-8b11-38194d106b4b"
          className={`
    flex flex-col gap-4 w-full p-6 rounded-xl shadow-lg backdrop-blur-lg relative overflow-hidden border
    ${
      theme === "dark"
        ? "bg-[#111111] border-[#4fa27d]/20"
        : " bg-[#0f0f0f]/70 border-gray-300"
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
            placeholder="Your name"
            required
            className={`
      p-3 rounded-md outline-none transition-all duration-300 border
      ${
        theme === "dark"
          ? "bg-[#111111] text-[#e5e5e5] border-[#4fa27d]/40 focus:border-[#b85757] focus:ring-[#4fa27d]"
          : "  text-black border-gray-400 focus:border-[#b85757] focus:ring-[#4fa27d]"
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
            placeholder="Your email"
            required
            className={`
      p-3 rounded-md outline-none transition-all duration-300 border
      ${
        theme === "dark"
          ? "bg-[#111111] text-[#e5e5e5] border-[#4fa27d]/40 focus:border-[#b85757] focus:ring-[#4fa27d]"
          : "  text-black border-gray-400 focus:border-[#b85757] focus:ring-[#4fa27d]"
      }
    `}
          />
          <motion.textarea
            custom={2}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            name="message"
            placeholder="Your message"
            rows="6"
            required
            className={`
      p-3 rounded-md outline-none transition-all duration-300 resize-none border
      ${
        theme === "dark"
          ? "bg-[#111111] text-[#e5e5e5] border-[#4fa27d]/40 focus:border-[#b85757] focus:ring-[#4fa27d]"
          : "  text-black border-gray-400 focus:border-[#b85757] focus:ring-[#4fa27d]"
      }
    `}
          />
          <motion.button
            custom={3}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            type="submit"
            className={`
    relative mx-auto px-6 py-3 font-semibold rounded-lg text-black shadow-lg overflow-hidden group
  `}
            style={{
              background: "linear-gradient(90deg,#4fa27d,#b85757)",
            }}
          >
            <span className="relative z-10">Send Message</span>
            <span
              className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-out bg-white/20"
              style={{
                maskImage:
                  "linear-gradient(120deg, transparent 0%, white 50%, transparent 100%)",
              }}
            />
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
