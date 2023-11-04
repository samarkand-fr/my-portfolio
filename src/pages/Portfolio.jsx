import React from "react";
import resto from "../assets/images/portfolio/resto.png";
import fishEye from "../assets/images/portfolio/fishEye.png";
import dashboard from "../assets/images/portfolio/dashboard.png";
import petitplat from "../assets/images/portfolio/petitplats.png";
import hrnet from "../assets/images/portfolio/hrnet.png";
import argentBank from "../assets/images/portfolio/argentBank.png"
import PortfolioItem from "../components/PortfolioItem";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: fishEye,
      expandedText: 'A website that allows independent photographers to showcase their best work.', 
      link: 'https://samarkand-fr.github.io/Front-End-Fisheye/',
      repo: 'https://github.com/samarkand-fr/Front-End-Fisheye'
    },
    {
      id: 2,
      src: dashboard,
      expandedText: 'An application that allows users to track their fitness progress by providing visual representations of their activity data.', 
      link: 'https://samarkand-fr.github.io/P12-front-end-dashboard-/',
      repo: 'https://github.com/samarkand-fr/P12-front-end-dashboard-'
    },
    {
      id: 3,
      src: resto,
      expandedText: 'A food delivery website project with interactive features.', 
      link: 'https://ohmyfood-jadina.netlify.app/',
      repo: 'https://github.com/samarkand-fr/projet3-ohmyfood'
    },
    {
      id: 4,
      src: hrnet,
      expandedText: 'Modernize an existing App by converting it into a React-based application and replacing the problematic jQuery plugins with efficient React components.', 
      link: 'https://jadina-hrnet.netlify.app/',
      repo: 'https://github.com/samarkand-fr/wealth-health'
    },
    {
      id: 5,
      src: petitplat,
      expandedText: 'A search engine for recipes made with javascript.', // Expanded state text
      link: 'https://jadina-petitplats.netlify.app/',
      repo: 'https://github.com/samarkand-fr/P7-front-end-search-engine'
    },
    {
      id: 6,
      src: argentBank,
    expandedText: 'Develop a web application for the new user authentication system of Argent Bank.', 
      link: 'https://jadina-argebtbank.netlify.app/',
      repo: 'https://github.com/samarkand-fr/Argent-Bank-P13'
    },
  ];

return (
  <div name="portfolio" className="bg-gradient-to-b  from-black via-cementClaire  to-vanilla w-full text-white   min-h-screen portfolio pt-5">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-rust ">Portfolio</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 mt-5 sm:px-0">
        {portfolios.map(({ id, src, link, repo, expandedText }) => (
          <PortfolioItem key={id} src={src} link={link} repo={repo} expandedText={expandedText} />
        ))}
      </div>
    </div>
  </div>
);
};

export default Portfolio;

