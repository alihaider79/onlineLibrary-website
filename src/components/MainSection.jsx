import React from "react";
import { useNavigate } from "react-router-dom";

const MainSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex bg-gray-100 min-h-screen items-center justify-center">
        <div className="max-w-screen-lg bg-white rounded-lg shadow-md p-8 flex">
          <div className="mt-12 flex-1 pr-4">
            <h1 className="text-3xl font-bold text-red-600 mb-6">
              Online Library: Your Gateway to Unlimited Knowledge
            </h1>
            <p className="text-gray-800 mb-8">
              Welcome to our Online Library, a digital haven for book lovers!
              Discover a vast collection of eBooks, audiobooks, and articles
              across various genres. Enjoy personalized recommendations,
              advanced search features, and seamless access on any device. Dive
              into your next great read today!
            </p>
            <button
              onClick={() => navigate("/find")}
              className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
            >
              Find Books
            </button>
          </div>
          <div className="w-1/2 pl-16">
            <img
              className="rounded-lg shadow-md h-96 w-auto"
              src="main6.webp"
              alt="fruit"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
