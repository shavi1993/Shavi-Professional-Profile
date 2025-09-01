import React from "react";
import profileImg from "../assets/mypic.jpeg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <header className="flex flex-col md:flex-row items-center justify-center flex-grow p-6 md:p-16">
    {/* Left: Profile Image */}
    <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-16">
      <img
        src={profileImg}
        alt="Profile"
        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
      />
    </div>

    {/* Right: Text + Buttons */}
    <div className="text-center md:text-left max-w-xl">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
      Hi, I'm Shavi Rishi 👋 
      </h1>
      <p className="text-xl text-gray-600 mb-2">Full-Stack Developer | API Expert | Problem Solver  </p>
      <p className="text-gray-500 mb-6">
      Well-rounded Full Stack Developer with deep knowledge of modern frameworks and databases. Experienced in crafting responsive UIs and robust server-side logic. Known for writing clean, maintainable code and consistently meeting project deadlines. Strong focus on innovation, scalability, and delivering real value to businesses.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
      <button
        onClick={() => navigate("/resume")}
        className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
      >
        Resume
      </button>
      <button
        onClick={() => navigate("/projects")}
        className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-400 transition"
      >
        Projects
      </button>
      <button
        onClick={() => navigate("/contact")}
        className="bg-cyan-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-300 transition"
      >
        Contact
      </button>
    </div>
    </div>
  </header>
  );
}

export default Hero;
