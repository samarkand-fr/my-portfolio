import React from "react";

const Section = ({
  refProp,
  imageUrl,
  className,
  title,
  content,
  githubLink,
  siteLink,
}) => (
  <div ref={refProp} className={`h-screen ${className}`}>
    <div className="max-w-screen-lg mx-auto py-8">
      {imageUrl && (
        <div className="flex items-center mt-[10%] gap-8 flex-col-reverse">
          <div className="w-3/4 pr-4 ">
            <img src={imageUrl} alt="" className="w-full h-auto" />
          </div>
          <div className="w-[90%]">
          <h2 className="text-white text-4xl animate__animated animate__fadeInLeft">{title}</h2>
                 <p className="text-white text-lg mt-4 animate__animated animate__fadeInLeft">{content}</p>

            {/* GitHub Button */}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mt-4 ml-4 inline-block bg-neutral-800 hover:bg-neutral-300 hover:text-black px-4 py-2 rounded-md animate__animated animate__fadeInRight"
              >
                GitHub
              </a>
            )}

            {/* Netlify Button */}
            {siteLink && (
              <a
                href={siteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mt-4 ml-4 inline-block bg-neutral-800 hover:bg-neutral-300 hover:text-black px-4 py-2 rounded-md animate__animated animate__fadeInRight"
              >
                Siteweb
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  </div>
);

export default Section;
