import React from "react";
import ecommerceImg from "../assets/eco.jpg";
import spotifyImg from "../assets/spotify.png";
import passwordImg from "../assets/password.jpg";
import aiChatbotImg from "../assets/chatbot.jpg";
import weatherImg from "../assets/weather.jpg";

const projects = [
  {
    id: 1,
    name: "Cultural E-Commerce Website",
    technologies: "React + Vite frontend project",
    image: ecommerceImg,
    github: "https://github.com/yousuf391/Cultural-Delights-E-commerce-website",
    demo: "https://cultural-delights-ecommerce-website.netlify.app/",
  },
  {
    id: 2,
    name: "Spotify Clone",
    technologies: "HTML + CSS ",
    image: spotifyImg,
    github: "https://github.com/yousuf391/spotify-clone1",
    demo: "https://spotifycloneyh.netlify.app/",
  },
  {
    id: 3,
    name: "Password Generator",
    technologies: "JavaScript Project",
    image: passwordImg,
    github: "https://github.com/yousuf391/Password-genrator",
    demo: "https://passwordgenrator1010.netlify.app/",
  },
  {
    id: 4,
    name: "AI Chatbot UI",
    technologies: "React + Vite + OpenAI API",
    image: aiChatbotImg,
    github: "https://github.com/yousuf391/AI--Chatbot",
    demo: "https://your-ai-chatbot.netlify.app",
  },
  {
    id: 5,
    name: "Weather App",
    technologies: "HTML, CSS, JS (API-based)",
    image: weatherImg,
    github: "https://github.com/yousuf391/weather-app",
    demo: "https://your-weather-app.netlify.app",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
              transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
