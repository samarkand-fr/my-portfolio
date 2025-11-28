import React from "react";

const QuoteBlock = ({ text, author, accentColor = "#4fa27d" }) => {
  return (
    <div className="w-full flex justify-center items-center py-12 relative overflow-hidden">
      {/* Animated Kufiya Waves Background */}

      {/* Text Content */}
      <div className="text-center max-w-3xl px-4 relative z-10">
        <p className="italic text-lg md:text-xl leading-relaxed text-[#444] dark:text-[#cfcfcf] transition-colors duration-500">
          {text}
        </p>
        <span
          className="block mt-4 font-semibold text-sm"
          style={{ color: accentColor }}
        >
          — {author}
        </span>
      </div>
    </div>
  );
};

export default QuoteBlock;
