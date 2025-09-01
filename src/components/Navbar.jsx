import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-100 fixed top-0 w-full shadow-md z-50">
    <div className="container mx-auto flex justify-between items-center px-6 py-4">
      {/* Logo / Site Name */}
      <Link
        to="/"
        className="text-2xl font-bold text-gray-800 hover:text-yellow-400 transition-colors"
      >
        Portfolio
      </Link> 


      {/* Right-aligned Links */}
      <div className="hidden md:flex space-x-6 items-center">
        <Link
          to="/resume"
          className="px-4 py-2 font-semibold text-gray-700 hover:text-yellow-400 transition-colors"
        >
          Resume
        </Link>
        <Link
          to="/projects"
          className="px-4 py-2 font-semibold text-gray-700 hover:text-yellow-400 transition-colors"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="px-4 py-2 font-semibold text-gray-700 hover:text-yellow-400 transition-colors"
        >
          Contact
        </Link>
        {/* <Link
          to="/login"
          className="px-4 py-2 font-semibold text-gray-700 hover:text-yellow-400 transition-colors"
        >
          Login
        </Link> */}
      </div>
    </div>
  </nav>
);

export default Navbar;
