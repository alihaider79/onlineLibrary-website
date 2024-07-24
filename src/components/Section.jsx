import React from "react";

const Section = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-screen-lg">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <p className="text-gray-600">
            "We offer books in a variety of categories."
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Fiction", "Non-Fiction", "Science", "History"].map((category) => (
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:bg-red-600 hover:scale-105 hover:shadow-lgtext-xl font-bold text-black  duration-300 hover:text-white">
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
