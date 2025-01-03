// import { assets } from "../assets/assets";
// import {motion} from "framer-motion"
// import React from 'react'
// import Navbar from './Navbar'

// const Hero = () => {
// return (
// <div 
//   className="h-[20vh] sm:h-[60vh] md:h-[70vh] lg:h-[100vh]  bg-cover bg-center  md:p-6"
//   style={{ backgroundImage: `url(${assets.Main})` }} 
//   id="Header"
// >
//   <div className="px-3"> <Navbar/> </div>

// <div
// className="lg:mt-40 ml-2 lg:ml-40">
//   <motion.h1
//  initial={{ opacity: 0, y: 10 }}
//  transition={{ duration: 3 }}
//  whileInView={{ opacity: 1, y: 0 }}
//  viewport={{ once: true }}
//  className="text-2xl lg:text-[200px] Main"
//  >Step In </motion.h1>
//   <motion.h1 
//  initial={{ opacity: 0, y: 10 }}
//  transition={{ duration: 4 }}
//  whileInView={{ opacity: 1, y: 0 }}
//  viewport={{ once: true }}
//   className="lg:text-9xl text-sm Main  lg:mt-20 md:p-1 ">Style</motion.h1>
 
//   <div className="md:mt-10 mt-0">
//   <motion.span
//        initial={{ opacity: 0, y: 10 }}
//        transition={{ duration: 2 }}
//        whileInView={{ opacity: 1, y: 0 }}
//        viewport={{ once: true }}
//   className="md:bg-black md:p-3 pro-name text-black   md:text-white rounded-full cursor-pointer pro-name md:text-2xl text-[6px]">Free Shipping & Easy Returns!</motion.span>
//   {/* <div className="mt-9"> */}
//   {/* <motion.span
//        initial={{ opacity: 0, y: 10 }}
//        transition={{ duration: 2 }}
//        whileInView={{ opacity: 1, y: 0 }}
//        viewport={{ once: true }}
//   className="bg-black p-3  pro-name  text-white rounded-full cursor-pointer"> <span className="pro-name">Up to 50% off</span> </motion.span></div> */}
//   </div>
//   <button className="md:mt-5 ">
//     <a href="http://localhost:5173/collection">
//     <motion.span
//      initial={{ opacity: 0, y: 10 }}
//      transition={{ duration: 2 }}
//      whileInView={{ opacity: 1, y: 0 }}
//      viewport={{ once: true }}
//     className="inline-block md:px-5 md:py-2  bg-[#aa8e71] hover:bg-black text-[8px]  hover:text-white transition duration-500 ease-in-out rounded-full"
//     >Shop Now <i class="fa-solid fa-arrow-right"></i>
//     </motion.span>
//     </a>
//   </button>
//   </div>
// </div>

//   )
// }

// export default Hero

import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div
      className="h-[20vh]  lg:h-[700px] xl:h-[100vh] bg-cover bg-center md:p-6"
      style={{ backgroundImage: `url(${assets.Main})` }}
      id="Header"
    >
      {/* Navbar */}
      <div className="p-3 px-1">
        <Navbar />
      </div>

      {/* Hero Content */}
      {/* <div className="lg:mt-40 ml-2 lg:ml-40 mt-10"> */}
      <div className="ml-2 sm:ml-3 md:ml-10 ">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 3 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-7xl md:text-9xl lg:text-[200px] font-bold  Main"
        >
          Step In
        </motion.h1>

        {/* Subheading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm sm:text-4xl sm:mb-2   md:text-5xl lg:text-9xl font-light  Main  lg:mt-10"
        >
          Style
        </motion.h1>

        {/* Offer and CTA */}
        <div className="lg:mt-10 md:mt-2">
          {/* Offer Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block sm:mb-2 bg-black md:bg-black text-white md:text-white rounded-full cursor-pointer px-3 py-1 md:px-5 md:py-2  text-[6px] sm:text-sm md:text-xl pro-name"
          >
            Free Shipping & Easy Returns!
          </motion.span>
        </div>

        {/* Shop Now Button */}
        <button className="md:mt-5">
          <a href="http://localhost:5173/collection">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-[#aa8e71] text-white text-[8px] sm:text-sm md:text-md hover:bg-black hover:text-white transition duration-500 ease-in-out rounded-full px-3 py-1 md:px-5 md:py-2"
            >
              Shop Now <i className="fa-solid fa-arrow-right"></i>
            </motion.span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
