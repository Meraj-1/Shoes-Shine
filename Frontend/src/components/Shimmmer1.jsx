import React from "react";
import Navbar from "./Navbar";

const Shimmer1 = () => (
  <div className="p-6 ">
    <Navbar />
   <hr  className="bg-gray-700"/>
    <div className="space-x-2 h-screen flex flex-col justify-center items-center" >
      {/* Spinning Circle */}
      <div className="w-12 h-12 border-4 border-t-4 border-gray-500 border-solid rounded-full animate-spin"></div>
      <span className="text-lg font-semibold text-gray-500">LOADING...</span>
    </div>
  </div>
);

export default Shimmer1;
