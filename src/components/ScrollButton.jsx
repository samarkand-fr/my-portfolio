import { RiArrowUpSLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 w-10 h-10 bg-rust hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-50"
      aria-label="Scroll to top"
    >
      <RiArrowUpSLine size={22} />
    </button>
  );
};

export default ScrollButton;
