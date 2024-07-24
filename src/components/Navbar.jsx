import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src="/logo2.png" alt="Logo" className="h-8 w-8 mr-2" />
              <span className="font-bold  text-red-600 text-xl">
                Online Library
              </span>
            </a>
          </div>
          <div className="space-x-4">
            <a
              href="/"
              className="text-white hover:text-red-600  px-3 py-2 rounded-md hover:bg-white"
            >
              Home
            </a>
            <a
              href="/find"
              className="text-white hover:text-red-600  px-3 py-2 rounded-md hover:bg-white"
            >
              Find Books
            </a>
            <a
              href="/services"
              className="text-white hover:text-red-600  px-3 py-2 rounded-md hover:bg-white"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-white hover:text-red-600  px-3 py-2 rounded-md hover:bg-white"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
