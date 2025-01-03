import React from "react";
import Navbar from "./Navbar";

const Shimmer = () => (
  <div className="p-6">
  <Navbar />
  <div className="flex justify-center mt-20 mb-10">
  <div className="relative w-1/2">
    <input
      type="text"
      placeholder="Wait For Searching Product...."
      className="w-full p-3 pl-10 border border-gray-300 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 19a8 8 0 100-16 8 8 0 000 16zm10 2l-4.35-4.35"
      />
    </svg>
  </div>
</div>
<div className="lg:px-40">
<hr className="border-gray-700 mb-10" />
</div>
<div className="flex flex-wrap mt-20 px-40 justify-center">
  {Array(10).fill().map((_, index) => (
    <div key={index} className="border border-gray-300 p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 bg-white shadow-md rounded-lg animate-pulse">
      {/* Image Placeholder */}
      <div className="bg-gray-300 h-48 w-full rounded-t-lg"></div>

      {/* Text Placeholders */}
      <div className="mt-2">
        <div className="bg-gray-300 h-6 w-3/4 mb-2"></div>
        <div className="bg-gray-300 h-4 w-1/2 mb-4"></div>
        {/* Button Placeholder */}
        <div className="bg-gray-300 h-8 w-2/5 mx-auto rounded-full"></div>
      </div>
    </div>
  ))}
</div>
  </div>
);

export default Shimmer;