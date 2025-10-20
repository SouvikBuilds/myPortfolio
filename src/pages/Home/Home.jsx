import React, { useState } from "react";
import myImage from "../../assets/myImage.png";
import blob from "../../assets/blob (1).jpg";
import Typewriter from "typewriter-effect";
import Souvik from "../../assets/Souvik.png";
import Projects from "../../components/Projects/Projects.jsx";
import Skills from "../../components/Skills/Skills.jsx";

const Home = () => {
  const [image, setImage] = useState(myImage);
  const imageList = [myImage, Souvik];

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-gradient-to-b from-slate-50 to-white lg:pt-20">
      <div className="w-full px-4 sm:px-8 md:px-16 py-12 mt-[8rem] md:mt-10 lg:mt-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 max-w-6xl mx-auto">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              <Typewriter
                options={{
                  strings: [
                    "Welcome To My Web Dev Portfolio",
                    "I am Souvik Chatterjee",
                    "I am from IT Department, First Year Student of Techno Main Saltlake",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your journey starts here. We're excited to have you with us.
            </p>
          </div>
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={blob}
                  alt="blob background"
                  className="w-full h-auto drop-shadow-lg"
                />
              </div>
              <div className="relative aspect-square flex items-center justify-center p-8 sm:p-12">
                <img
                  src={image}
                  alt="profile"
                  className="w-4/5 h-auto object-contain drop-shadow-xl transition-opacity duration-300"
                />
              </div>
              <div className="flex flex-row gap-4 items-center justify-center mt-[50px]">
                {imageList.map((img, index) => {
                  return (
                    <div key={index}>
                      <img
                        src={img}
                        alt="not found"
                        className={`cursor-pointer w-12 h-12 rounded-lg transition-all duration-300 object-contain ${
                          image === img
                            ? "shadow-lg grayscale-0 "
                            : "shadow grayscale opacity-60 hover:opacity-100 hover:scale-105"
                        }`}
                        onClick={() => setImage(img)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="projectSection flex flex-col items-center mt-[100px]">
        <h1 className="text-3xl text-center font-semibold">My Projects</h1>
        <div className="w-[1rem] h-[10px] rounded-full bg-purple-700 absolute mt-[33px]"></div>
        <div className="w-[10rem] h-[5px] rounded-2xl bg-purple-600 relative"></div>

        <Projects />
      </div>
      <div className="skillSection flex flex-col items-center mt-[80px]">
        <h1 className="text-3xl text-center font-semibold">My Skills</h1>
        <div className="w-[1rem] h-[10px] rounded-full bg-purple-700 absolute mt-[33px]"></div>
        <div className="w-[10rem] h-[5px] rounded-2xl bg-purple-600 relative"></div>

        <Skills />
      </div>
    </div>
  );
};

export default Home;
