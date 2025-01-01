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
        <div className='flex justify-center  mt-20'>
        <motion.span
           initial={{ opacity: 0, y: 10 }}
           transition={{ duration: 2 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        className='text-2xl bg-black text-white p-10 rounded-full lg:text-5xl'>
        "Step Into Style : Explore Our Latest Trends"
        <button to="/collections"  className='text-xl p-3  ml-10 bg-black text-white pro-name rounded-full hover:text-black hover:bg-white  transition duration-500 ease-in-out'><a href="/collection">Shop Now <i class="fa-solid fa-arrow-right"></i></a></button>
        </motion.span></div>
        {/* </div> */}
        <RelatedProduct/>
        <Offer/>
        <SocialPro/>
        <CustomerSupport/>
        
        <NewsLetter/>

        {/* <Article/> */}
           
    </div>
  )
}

export default Home