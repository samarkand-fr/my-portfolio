import React from "react";

//function for form reset
function handleSubmit(e){
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact = () => {
  return (
    <div
      name="contact"
      className="contact w-full h-screen bg-gradient-to-b from-vanilla via-black  to-vanilla   p-4  text-white "
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 mt-40">
          <p className="text-4xl font-bold inline border-b-4 border-rust ">
            Contact
          </p>
          <p className="py-6"> Get in touch with me</p>
        </div>
        
        <div className=" flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            action="https://getform.io/f/2d6264ba-caa9-4fb7-8b11-38194d106b4b"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md  focus:outline-none "
    
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button type="submit" className="text-white bg-gradient-to-b from-rust to-mustardYellow  px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 hover:from-sageGreen hover:to-vanilla  ">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
