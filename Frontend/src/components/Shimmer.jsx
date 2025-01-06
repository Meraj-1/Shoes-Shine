import Navbar from "./Navbar";
import {motion} from "framer-motion"


import React from 'react'

const Shimmer = () => {
  return (
    <div className="p-6">
         <Navbar />
         {/* <div className="flex justify-center mt-40 mb-10">
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
    </div> */}
    <div className="lg:px-40">
    {/* <hr className="border-gray-700 mb-10" /> */}
    </div>
    <div className="grid place-items-center h-screen">
          <motion.div
            className="w-12 h-12 border-t-4 border-black border-solid rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
          />
        </div>
  
      </div>
  )
}

export default Shimmer