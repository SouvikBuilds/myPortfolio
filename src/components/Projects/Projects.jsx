import React, { useEffect, useState } from "react";
import netflix from "../../assets/netflix.png";
import weather from "../../assets/weather.png";
import Button from "../Button/Button";
import rockPaper from "../../assets/rockPaper.png";
import rollDice from "../../assets/rollDice.png";
import whackMole from "../../assets/whackMole.png";
import cryptoDashboard from "../../assets/cryptoDashboard.png";
import { NavLink } from "react-router-dom";
import { MoveRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUp } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [expandedCards, setExpandedCards] = useState(new Set());

  const cardLists = [
    {
      id: 1,
      image: netflix,
      description:
        "A fully responsive Netflix Clone built using React JS to showcase my frontend development expertise. It includes secure user authentication for login, signup, and logout, along with a dynamic movie catalog and trailer viewing feature, all within a sleek Netflix-inspired UI for an immersive streaming experience.",
      title: "Netflix Clone",
      link: "https://a-clone-of-a-movie-app.vercel.app/",
    },
    {
      id: 2,
      image: weather,
      description:
        "A modern and responsive Weather App crafted with React JS and OpenWeather API integration. It provides accurate, real-time weather forecasts with temperature, humidity, and location-based updates, all presented through a clean, elegant UI designed to demonstrate my frontend and API integration skills effectively.",
      title: "A Modern Weather App",
      link: "https://enhanced-weather-app-clone-by-react.vercel.app/",
    },
    {
      id: 3,
      image: rollDice,
      description:
        "An engaging Number Guessing Game created using HTML, CSS, and JavaScript to highlight my creativity and fundamental web development abilities. Players can roll the dice and guess numbers in a simple yet interactive interface that combines fun gameplay mechanics with smooth animations and responsive design.",
      title: "Roll The Dice",
      link: "https://roll-dice-game-xi.vercel.app/",
    },
    {
      id: 4,
      image: cryptoDashboard,
      description:
        "A sleek Cryptocurrency Dashboard developed using React JS to demonstrate my frontend and data visualization skills. It features live crypto market data, interactive charts, and smooth navigation — built with a focus on performance, responsiveness, and a visually appealing UI inspired by professional trading dashboards.",
      title: "Crypto Currency Dashboard",
      link: "https://crypto-dashboard-template-with-reac.vercel.app/",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 85%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const handleMore = (cardId) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-10">
      <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-5 lg:gap-6">
        {cardLists.map((card) => {
          const isExpanded = expandedCards.has(card.id);

          return (
            <div
              className="project-card card flex flex-col justify-center items-center gap-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-slate-500 group h-full"
              key={card.id}
            >
              <div className="relative overflow-hidden rounded-xl w-full h-40 sm:h-48">
                <LazyLoadImage
                  src={card.image}
                  effect="blur"
                  alt="image Not Found"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-300">
                {card.title}
              </h2>

              <p className="text-sm sm:text-[15px] text-justify text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                {isExpanded
                  ? card.description
                  : card.description.slice(0, 100).concat("...")}
              </p>

              <div className="mt-2">
                <p
                  className="text-blue-500 active:text-blue-700 cursor-pointer flex items-center justify-center gap-2"
                  onClick={() => handleMore(card.id)}
                >
                  {isExpanded ? (
                    <>
                      Show Less
                      <span>
                        <ArrowUp
                          size={20}
                          className="text-blue-500 animate-pulse"
                        />
                      </span>
                    </>
                  ) : (
                    <>
                      Show More
                      <span>
                        <ArrowDown
                          size={20}
                          className="text-blue-500 animate-pulse"
                        />
                      </span>
                    </>
                  )}{" "}
                </p>
              </div>

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
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
