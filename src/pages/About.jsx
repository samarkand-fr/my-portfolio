import React from "react";
import { Link } from "react-router-dom"; 

const About = () => {
  return (
    <div name="about" className="w-full h-100 bg-gradient-to-b from-black via-cementClaire  to-vanilla   text-white about">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-40 pb-30">
          <p className="text-4xl font-bold inline border-b-4 border-rust">About</p>
        </div>

        <p className="text-xl mt-5">
          I am a web developer, working in frontend programming. Excited for improving my skills and learning new technologies. I'm open to learn and work with any web technology and currently interested in improving the Backend programming.
        </p>

        <br />

        <p className="text-xl mb-10">
          I thrive on crafting code from the ground up and transforming concepts into reality. If you're looking for a dedicated professional to bring your ideas to life, let's connect and collaborate on your project. <br /> <br />
          My approach values minimalistic design, purposeful content branding, and creating user-centric experiences. Together, we can explore how to optimize your project for higher conversion rates.<br /> <br />
          I take pleasure in crafting and refining unique identities for products and services, increasing visibility on search engines and social media platforms, and driving more organic traffic. Let's work together to achieve your goals!
        </p>

        {/* Add a link button to navigate to the "CV" component */}
        <Link to="/cv">
          <button className="bg-blue-500 text-vanilla font-bold py-2 px-4 rounded text-white bg-gradient-to-b from-vanilla to-rust px-6 py-3 my-8 mx-auto  rounded-md hover:scale-110 duration-300 hover:from-sageGreen hover:to-vanilla  ">
            View My CV
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
