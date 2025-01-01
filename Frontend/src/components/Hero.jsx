import { assets } from "../assets/assets";
import {motion} from "framer-motion"
import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
return (
<div 
  className="h-[52vh] sm:h-[60vh] md:h-[70vh] lg:h-[100vh] bg-cover bg-center mb-4 p-6"
  style={{ backgroundImage: `url(${assets.Main})` }} 
  id="Header"
>
 <Navbar/>
<div
className="lg:mt-40 lg:ml-40">
  <motion.h1
 initial={{ opacity: 0, y: 10 }}
 transition={{ duration: 3 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-2xl lg:text-[200px] Main"
 >Step In </motion.h1>
  <motion.h1 
 initial={{ opacity: 0, y: 10 }}
 transition={{ duration: 4 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
  className="lg:text-9xl Main lg:mt-20 p-1">Style</motion.h1>
 
  <div className="mt-10">
  <motion.span
       initial={{ opacity: 0, y: 10 }}
       transition={{ duration: 2 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
  className="bg-black p-3   pro-name  text-white rounded-full cursor-pointer"> <span className="pro-name">Free Shipping & Easy Returns!</span> </motion.span>
  {/* <div className="mt-9"> */}
  {/* <motion.span
       initial={{ opacity: 0, y: 10 }}
       transition={{ duration: 2 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
  className="bg-black p-3  pro-name  text-white rounded-full cursor-pointer"> <span className="pro-name">Up to 50% off</span> </motion.span></div> */}
  </div>
  <button className="mt-5">
    <a href="http://localhost:5173/collection">
    <motion.span
     initial={{ opacity: 0, y: 10 }}
     transition={{ duration: 2 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
    className="inline-block px-5 py-2  bg-[#aa8e71] hover:bg-black hover:text-white transition duration-500 ease-in-out rounded-full"
    >Shop Now <i class="fa-solid fa-arrow-right"></i>
    </motion.span>
    </a>
  </button>
  </div>
</div>

  )
}

export default Hero