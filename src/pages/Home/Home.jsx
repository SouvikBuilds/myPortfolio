import React, { useState, useEffect, useRef } from "react";
import myImage from "../../assets/myImage3.PNG";
import Typewriter from "typewriter-effect";
import Projects from "../../components/Projects/Projects.jsx";
import Skills from "../../components/Skills/Skills.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [image, setImage] = useState(myImage);
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);
  const projectTitleRef = useRef(null);
  const skillTitleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroTextRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      heroImageRef.current,
      { x: 100, opacity: 0, scale: 0.8 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      }
    );

    gsap.fromTo(
      projectTitleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: projectTitleRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      skillTitleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: skillTitleRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-[#202223] lg:pt-20 md:pt-20">
      <div className="w-full px-4 sm:px-8 md:px-16 py-12 mt-[8rem] md:mt-10 lg:mt-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 max-w-6xl mx-auto">
          <div ref={heroTextRef} className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              <Typewriter
                options={{
                  strings: [
                    "Hey there! ",
                    "Welcome to my Portfolio",
                    "I'm Souvik Chatterjee",
                    "An IT Enthusiast & First-Year UG Student at Techno Main Salt Lake",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 30,
                }}
              />
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Explore my portfolio and learn more about my skills, projects, and
              journey as an IT student.
            </p>
          </div>
          <div
            ref={heroImageRef}
            className="flex-1 w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md shadow-xs shadow-blue-600">
              <div className="absolute inset-0 flex items-center justify-center"></div>
              <div className="relative aspect-square flex items-center justify-center p-8 sm:p-12 bg-[#202223]">
                <img
                  src={image}
                  alt="profile"
                  className="w-[100%] h-auto object-contain drop-shadow-xl transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={projectTitleRef}
        className="projectSection flex flex-col items-center mt-[100px]"
      >
        <h1 className="text-3xl text-center font-semibold text-white">
          My Projects
        </h1>
        <div className="w-[1rem] h-[10px] rounded-full bg-blue-700 absolute mt-[33px]"></div>
        <div className="w-[10rem] h-[5px] rounded-2xl bg-blue-600 relative"></div>

        <Projects />
      </div>
      <div
        ref={skillTitleRef}
        className="skillSection flex flex-col items-center mt-[80px]"
      >
        <h1 className="text-3xl text-center font-semibold text-white">
          My Skills
        </h1>
        <div className="w-[1rem] h-[10px] rounded-full bg-blue-700 absolute mt-[33px]"></div>
        <div className="w-[10rem] h-[5px] rounded-2xl bg-blue-600 relative"></div>

        <Skills />
      </div>
    </div>
  );
};

export default Home;
