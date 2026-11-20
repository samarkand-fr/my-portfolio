import React from "react";

const QuoteBlock = ({ text, author, accentColor = "#4fa27d" }) => {
  return (
    <div className="w-full flex justify-center items-center py-12 relative overflow-hidden">
      {/* Text Content */}
      <div className="text-center max-w-3xl px-4 relative z-10">
        <p className="italic text-lg md:text-xl leading-relaxed text-[#111] dark:text-white transition-colors duration-500 font-raleway font-medium">
          "{text}"
        </p>
        <span
          className="block mt-4 font-semibold text-sm tracking-wide"
          style={{ color: accentColor }}
        >
          — {author}
        </span>
      </div>
    </div>
  );
};

export default QuoteBlock;
