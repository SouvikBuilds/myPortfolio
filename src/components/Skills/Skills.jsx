import React, { useEffect, useState } from "react";
import hjc from "../../assets/hjc.png";
import python from "../../assets/python.jpeg";
import react from "../../assets/react.png";
import cpp from "../../assets/cpp.png";
import backend from "../../assets/backend.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp, ArrowDown } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const [expandedCards, setExpandedCards] = useState(new Set());
  const skillLists = [
    {
      id: 1,
      image: hjc,
      description:
        "I have a strong foundation in HTML, CSS, and JavaScript, which allows me to craft fully responsive and visually appealing web applications. With HTML, I create well-structured layouts; with CSS, I design adaptive interfaces using Flexbox, Grid, and animations; and with JavaScript, I bring interactivity and seamless user experiences to life.",
    },
    {
      id: 2,
      image: python,
      description:
        "Proficient in Python programming with a solid grasp of data structures, algorithms, and object-oriented design. I use Python to build automation tools, backend logic, and efficient scripts that focus on clean, optimized, and maintainable code — ensuring reliability and clarity in every project I create or collaborate on.",
    },

    {
      id: 3,
      image: backend,
      description:
        "Skilled in Python and its frameworks Django and FastAPI, with hands-on experience in MongoDB for data management. I can design schemas, create models, and implement secure authentication systems. Currently, I’m expanding my backend skills to develop more robust, scalable, and efficient architectures for real-world web applications.",
    },
    {
      id: 4,
      image: react,
      description:
        "Proficient in building dynamic, responsive, and high-performance interfaces using React.js. I create reusable components, manage state efficiently with hooks and context, and integrate APIs for smooth data flow. I focus on scalability, clean architecture, and delivering seamless user experiences across all devices.",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      ".skill-card",
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-grid",
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
    <div className="flex flex-col justify-center items-center py-8 px-4 sm:px-6 lg:px-10">
      <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-5 lg:gap-6 mt-3">
        {skillLists.map((card, index) => {
          const isExpanded = expandedCards.has(card.id);

          return (
            <div
              className="skill-card card flex flex-col justify-center items-center gap-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-slate-500 group h-full"
              key={index}
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

              <p className="text-sm sm:text-[15px] text-justify text-slate-400 group-hover:text-slate-300 transition-colors duration-300 ">
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
                          className="text-blue-500 animate-pulse "
                        />
                      </span>
                    </>
                  ) : (
                    <>
                      Show More
                      <span>
                        <ArrowDown
                          size={20}
                          className="text-blue-500 animate-pulse "
                        />
                      </span>
                    </>
                  )}{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
