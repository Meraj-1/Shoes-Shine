import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div
      className="h-[40vh] md:h-[80vh] lg:h-[100vh]  bg-cover bg-center md:p-6"
      style={{ backgroundImage: `url(${assets.Main})` }}
      id="Header"
    >
      {/* Navbar */}
      <div className=" ">
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
          className="text-sm sm:text-4xl sm:mb-2   md:text-5xl lg:text-9xl font-light  Main  "
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
          <a href="https://shoes-shine.vercel.app/api/products">
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
