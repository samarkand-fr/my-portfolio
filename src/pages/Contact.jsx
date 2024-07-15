import React from "react";
import { motion } from "framer-motion";

// Function for form reset
function handleSubmit(e) {
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact = () => {
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div name="contact" className="contact background-theme">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 mt-40">
          <p className="text-4xl font-bold inline border-b-4 border-red-700">
            Contact
          </p>
          <p className="py-6">Get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            action="https://getform.io/f/2d6264ba-caa9-4fb7-8b11-38194d106b4b"
            className="flex flex-col w-full md:w-1/2"
          >
            <motion.input
              custom={0}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <motion.input
              custom={1}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <motion.textarea
              custom={2}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></motion.textarea>
            <motion.button
              custom={3}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              type="submit"
              className="btn-primary mx-auto flex items-center rounded-md hover:scale-105 duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
