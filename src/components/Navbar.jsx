import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo2.png" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="font-bold text-red-600 text-xl">
              Online Library
            </span>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Link
            to="/"
            className="text-white hover:text-red-600 px-3 py-2 rounded-md hover:bg-white"
          >
            Home
          </Link>
          <Link
            to="/find"
            className="text-white hover:text-red-600 px-3 py-2 rounded-md hover:bg-white"
          >
            Find Books
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-red-600 px-3 py-2 rounded-md hover:bg-white"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-red-600 px-3 py-2 rounded-md hover:bg-white"
          >
            Contact
          </Link>
        </div>

        <div
          className={`lg:hidden ${isOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-gray-800 border-t border-gray-700`}
        >
          <Link
            to="/"
            className="block text-white hover:text-red-600 px-3 py-2 rounded-md hover:bg-white"
          >
            Home
          </Link>
          <Link
            to="/find"
            className="block text-white hover:text-red-600 px-3 py-2 rounded-md hover:bg-white"
          >
            Find Books
          </Link>
          <Link
            to="/services"
            className="block text-white hover:text-red-600 px-3 py-2 rounded-md hover:bg-white"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-red-600 px-3 py-2 rounded-md hover:bg-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
