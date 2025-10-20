import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full bg-black mt-11">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-gray-400 text-sm md:text-base">
            © 2025 Souvik Chatterjee. All rights reserved.
          </p>

          <div className="flex flex-row gap-8 md:gap-12">
            <a
              href="https://github.com/SouvikBuilds"
              target="blank"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/souvikbuilds04/"
              target="blank"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/mr_souvik_chatterjee/"
              target="blank"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-center text-gray-500 text-xs">
            Designed with passion | Built with React
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
