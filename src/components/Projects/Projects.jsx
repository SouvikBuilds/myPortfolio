import React from "react";
import netflix from "../../assets/netflix.png";
import weather from "../../assets/weather.png";
import Button from "../Button/Button";
import rockPaper from "../../assets/rockPaper.png";
import rollDice from "../../assets/rollDice.png";
import whackMole from "../../assets/whackMole.png";
import cryptoDashboard from "../../assets/cryptoDashboard.png";
import { NavLink } from "react-router-dom";
import { MoveRight } from "lucide-react";

const Projects = () => {
  const cardLists = [
    {
      id: 1,
      image: netflix,
      description:
        "A fully responsive Netflix Clone Application designed to highlight my frontend development skills. It includes secure user authentication (login, registration, and logout) and an engaging interface where users can explore and watch trailers of their favorite movies, all within a modern and intuitive Netflix-inspired design.",
      title: "Netflix Clone",
      link: "https://a-clone-of-a-movie-app.vercel.app/",
    },
    {
      id: 2,
      image: weather,
      description:
        "A fully responsive Weather App that provides real-time weather updates with a clean, modern UI and smooth user experience — designed to showcase my frontend and API integration skills.",
      title: "A Modern Weather App",
      link: "https://enhanced-weather-app-clone-by-react.vercel.app/",
    },

    {
      id: 3,
      image: rollDice,
      description:
        "A simple yet fun Number Guessing Game built using HTML, CSS, and JavaScript, where users guess a number and roll the dice to test their luck — showcasing my creativity and core web development skills.",
      title: "Roll The Dice",
      link: "https://roll-dice-game-xi.vercel.app/",
    },

    {
      id: 4,
      image: cryptoDashboard,
      description:
        "A Frontend Template of Crypto Currency App Dashboard Made by React JS To Showcase My Frontend Skills",
      title: "Crypto Currency Dashboard",
      link: "https://crypto-dashboard-template-with-reac.vercel.app/",
    },
  ];
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-5 lg:gap-6">
        {cardLists.map((card) => (
          <div
            className="card flex flex-col justify-center items-center gap-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-slate-500 group h-full"
            key={card.id}
          >
            <div className="relative overflow-hidden rounded-xl w-full h-40 sm:h-48">
              <img
                src={card.image}
                alt="image Not Found"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-300">
              {card.title}
            </h2>

            <p className="text-sm sm:text-[15px] text-justify text-slate-400 group-hover:text-slate-300 transition-colors duration-300 line-clamp-4">
              {card.description}
            </p>

            <div className="mt-auto w-full">
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button title={"Live Demo"} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
