import React, { useState, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 250);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className={`
            fixed 
            bottom-24 md:bottom-10
            right-4 md:right-6
            z-50
            p-3 md:p-3
            rounded-full
            backdrop-blur-md
            border 
            shadow-md
            active:scale-95
            transition-all duration-300 
            hover:scale-110            
            hover:shadow-[0_0_12px_rgba(79,162,125,0.55)]
          `}
          style={{
            backgroundColor: "rgba(79, 162, 125, 0.1)",
            borderColor: "rgba(79, 162, 125, 0.25)",
            opacity: 0.92,
            mixBlendMode: "normal",
          }}
        >
          <MdKeyboardArrowUp
            size={28}
            className={theme === "dark" ? "text-white" : "text-black"}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollButton;
