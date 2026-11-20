import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#0f0f0f] text-gray-800 dark:text-gray-300 py-10 px-6 border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="h-0.5 w-12 bg-gradient-to-r from-[#b85757] to-[#4fa27d]" />
          <span
            className="
              text-2xl font-extrabold tracking-widest
              bg-gradient-to-r from-[#b85757] to-[#4fa27d]
              bg-clip-text text-transparent
              animate-gradient-vertical px-2
            "
          >
            DINA JANNOUN
          </span>
          <span className="h-0.5 w-12 bg-gradient-to-r from-[#4fa27d] to-[#b85757]" />
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-200 font-medium">
          Python Developer & Software Engineer • Culture & Code
        </p>

        <div className="mt-6 text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} DINA — All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
