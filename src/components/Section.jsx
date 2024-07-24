import React from "react";

const Section = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-screen-lg px-4">
        <div className="mb-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Categories</h2>
          <p className="text-gray-600 text-sm md:text-base">
            "We offer books in a variety of categories."
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {["Fiction", "Non-Fiction", "Science", "History"].map((category) => (
            <div
              key={category}
              className="bg-white p-4 rounded-lg shadow-md text-center transition-transform transform hover:bg-red-600 hover:scale-105 hover:shadow-lg text-xl font-bold text-black duration-300 hover:text-white"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
