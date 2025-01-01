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
 transition={{ duration: 2 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-2xl lg:text-[199px] Main"
 >Step In </motion.h1>
  <motion.h1 
 initial={{ opacity: 0, y: 10 }}
 transition={{ duration: 2 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
  className="lg:text-7xl Main lg:mt-20">Style</motion.h1>
   <button className="mt-10">
    <a href="http://localhost:5173/collection">
    <motion.span
     initial={{ opacity: 0, y: 10 }}
     transition={{ duration: 2 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
    className="inline-block px-6 py-3  bg-[#aa8e71] hover:bg-[#000000] hover:text-white transition duration-500 ease-in-out rounded-full"
    >
      Shop Now
    </motion.span>
    </a>
  </button>
  </div>
</div>

  )
}

export default Hero