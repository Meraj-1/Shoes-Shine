import React from 'react'
import Navbar from '../components/Navbar'
import Hero from "../components/Hero"
import RelatedProduct from '../components/Relatedproduct'
// import Article from '../components/Article'
import {motion} from "framer-motion"
import Offer from '../components/Offer'
import NewsLetter from '../components/NewsLetter'
import CustomerSupport from '../components/Customer'
import SocialPro from '../components/SocialPro'

const Home = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Hero/>
        {/* <div className='flex'> */}
        <div className='flex justify-center flex-col sm:mt-2 mt-3 md:mt-20'>
        <motion.span
           initial={{ opacity: 0, y: 10 }}
           transition={{ duration: 2 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        className='md:text-7xl text-2xl text-center bg-black text-white md:p-10 p-3 sm:rounded-full lg:text-5xl'>
        Explore Our Latest Trends
        <button to="/collections"  className='text-xl mt-3 md:text-3xl  sm:p-3 px-3 py-2 ml-5 md:ml-10 bg-black text-white pro-name rounded-full hover:text-black hover:bg-white  transition duration-500 ease-in-out'><a href="/collection">Shop Now <i class="fa-solid fa-arrow-right"></i></a></button>
        </motion.span></div>
        {/* </div> */}
        <RelatedProduct/>
        <Offer/>
        <SocialPro/>
        <CustomerSupport/>
        {/* <NewsLetter/> */}

        {/* <Article/> */}
           
    </div>
  )
}

export default Home