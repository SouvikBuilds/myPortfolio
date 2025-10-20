import React from "react";
import { Code, BookOpen, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20">
      <div className="w-full px-4 sm:px-8 md:px-16 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              About Me
            </h1>
            <p className="text-lg text-gray-600">
              Get to know me better and discover my journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Who I Am
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm Souvik Chatterjee, a first-year student in the IT Department
                at Techno Main Saltlake. I'm passionate about web development
                and creating beautiful, functional digital experiences.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                With a strong foundation in web technologies, I'm committed to
                continuous learning and staying updated with the latest trends
                in the tech industry.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, I love exploring new projects, contributing
                to open source, and connecting with like-minded developers in
                the community.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                My Focus
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Code className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Web Development
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Building responsive and interactive web applications
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <BookOpen className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Continuous Learning
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Always exploring new technologies and best practices
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Target className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Problem Solving
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Creating elegant solutions to complex challenges
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Education
            </h2>
            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Techno Main Saltlake
              </h3>
              <p className="text-blue-600 font-medium mb-2">
                IT Department - First Year Student
              </p>
              <p className="text-gray-600">
                Currently pursuing my studies in Information Technology with
                focus on web development and software engineering
              </p>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">Let's Work Together</h2>
            <p className="mb-6 text-blue-100">
              I'm always interested in hearing about new projects and
              opportunities.
            </p>
            <button
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
