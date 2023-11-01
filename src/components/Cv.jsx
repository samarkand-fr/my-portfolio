import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import CVImage from "../assets/images/cv.png";
function Cv() {
  return (
    <div
      name="cv"
      className="cv w-full h-screen bg-gradient-to-b from-black via-cementClaire  to-vanilla p-4 text-white flex flex-col items-center justify-center"
    >
      <div className="w-full h-3/4 overflow-auto">
        <img src={CVImage} alt="CV" className="w-5/6 md:w-4/6 lg:w-3/6 mx-auto" />
      </div>
      <div className="mt-2 text-rust">
        <FaArrowDown size={32} />
      </div>
    </div>
  );
}

export default Cv;
