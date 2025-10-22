import React, { useEffect } from "react";
import hjc from "../../assets/hjc.png";
import python from "../../assets/python.jpeg";
import cpp from "../../assets/cpp.png";
import backend from "../../assets/backend.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillLists = [
    {
      image: hjc,
      description:
        "I have a strong foundation in HTML, CSS, and JavaScript, enabling me to build fully responsive and interactive web applications. I use HTML to create well-structured and accessible layouts, CSS to design visually appealing and adaptive interfaces with Flexbox, Grid, and animations, and JavaScript to bring functionality and interactivity to life through dynamic elements and seamless user experiences.",
    },
    {
      image: python,
      description:
        "Proficient in Python programming, with a solid understanding of data structures, algorithms, and object-oriented concepts. Experienced in building efficient scripts, automation tools, and backend logic for web applications, focusing on clean, readable, and optimized code.",
    },
    {
      image: cpp,
      description:
        "I have a basic to moderate understanding of C++, including concepts of data structures, algorithms, and object-oriented programming. I use C++ to strengthen my problem-solving skills and enhance my understanding of core programming logic and efficiency.",
    },
    {
      image: backend,
      description:
        "Experienced in Python and its frameworks Django and FastAPI, with a growing proficiency in building backend systems and working with MongoDB for efficient data management. I have hands-on experience in creating schemas, designing models, and implementing basic authentication. Currently, I'm enhancing my skills further to build more secure and scalable backend architectures.",
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

  return (
    <div className="flex flex-col justify-center items-center py-8 px-4 sm:px-6 lg:px-10">
      <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-5 lg:gap-6 mt-3">
        {skillLists.map((card, index) => {
          return (
            <div
              className="skill-card card flex flex-col justify-center items-center gap-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-slate-500 group h-full"
              key={index}
            >
              <div className="relative overflow-hidden rounded-xl w-full h-40 sm:h-48">
                <img
                  src={card.image}
                  alt="image Not Found"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <p className="text-sm sm:text-[15px] text-justify text-slate-400 group-hover:text-slate-300 transition-colors duration-300 line-clamp-4">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
