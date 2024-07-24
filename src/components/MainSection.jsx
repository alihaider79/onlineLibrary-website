import React from "react";
import { useNavigate } from "react-router-dom";

const MainSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-screen-lg bg-white rounded-lg shadow-md p-8 flex flex-col lg:flex-row items-center">
        <div className="flex-1 mb-8 lg:mb-0 lg:pr-4">
          <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-6">
            Online Library: Your Gateway to Unlimited Knowledge
          </h1>
          <p className="text-gray-800 mb-8">
            Welcome to our Online Library, a digital haven for book lovers!
            Discover a vast collection of eBooks, audiobooks, and articles
            across various genres. Enjoy personalized recommendations, advanced
            search features, and seamless access on any device. Dive into your
            next great read today!
          </p>
          <button
            onClick={() => navigate("/find")}
            className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
          >
            Find Books
          </button>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            className="rounded-lg shadow-md w-full h-auto"
            src="main6.webp"
            alt="fruit"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
