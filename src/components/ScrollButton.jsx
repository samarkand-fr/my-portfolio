import { RiArrowUpSLine } from "react-icons/ri";

const ScrollButton = ({ scrollToTop, isVisible }) => (
  <div className={`fixed bottom-4 right-4 ${isVisible ? "visible" : "hidden"}`}>
    <button
      onClick={scrollToTop}
      className="bg-white p-2 rounded-full shadow-lg hover:bg-yellow-500 hover:text-black focus:outline-none"
    >
      <RiArrowUpSLine size={30} />
    </button>
  </div>
);

export default ScrollButton;
