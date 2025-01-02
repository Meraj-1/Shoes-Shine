import React from 'react'
import Navbar from '../components/Navbar';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className='p-6'>
      <Navbar/>
      <section className="py-20 px-10 md:px-40 text-black">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 pro-name">
        About Us
      </h2>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={assets.about} // Replace with actual image path
            alt="About Us"
            className="w-30 h-auto  "
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-semibold text-gray-700 mb-4">Our Story</h3>
          <p className="text-lg text-gray-600 mb-6">
            Welcome to My Shoe Store! Founded in 2020, we started with one simple idea: to provide premium-quality shoes for all types of people. Whether you're an athlete looking for performance footwear or someone in search of the latest fashion trends, we've got you covered.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            What started as a small local shop has now transformed into a popular online store, offering a wide range of shoes from global brands like Nike, Adidas, Puma, and more. We've always been passionate about curating the best footwear, blending style, comfort, and durability in every pair.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Our team of experts carefully selects every shoe in our collection to ensure that it meets the highest standards of quality. Whether you're looking for athletic sneakers, everyday casual shoes, or something formal for a special occasion, we have something for every need and preference.
          </p>
          {/* <img src={} alt="" /> */}
        </div>
      </div> 

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
        <p className="text-lg text-gray-600 mb-6">
          At My Shoe Store, our mission is simple: to help you find the perfect shoes that make you feel confident, comfortable, and stylish. We believe that the right footwear can elevate your look, improve your performance, and provide you with lasting comfort.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          We are committed to providing exceptional customer service, ensuring a seamless shopping experience, and offering fast, reliable shipping worldwide. Our goal is to make your shoe shopping journey easy and enjoyable, with no compromises on quality.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Join us on our journey, step by step, to discover the best in footwear. Thank you for choosing My Shoe Store!
        </p>
      </div>

      {/* <div className="text-center mt-20">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
        <p className="text-lg text-gray-600 mb-6">
          We don't just sell shoes, we provide a personalized shopping experience tailored to your needs. Here's why thousands of customers trust us:
        </p>
        <ul className="text-lg text-gray-600 list-disc pl-5">
          <li>Wide selection of high-quality brands and styles.</li>
          <li>Affordable prices without compromising on quality.</li>
          <li>Fast, secure, and worldwide shipping options.</li>
          <li>Exceptional customer service and easy returns.</li>
          <li>Exclusive deals and promotions for newsletter subscribers.</li>
        </ul>
      </div> */}

      <div className="mt-12 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h3>
        <p className="text-lg text-gray-600 mb-6">
          Our vision is to become the go-to destination for footwear lovers everywhere. We aim to expand our collection, introduce new and exciting brands, and offer more convenient shopping options. We want to inspire and empower people to feel confident in every step they take.
        </p>
        <p className="text-lg text-gray-600">
          Whether you're running a marathon or heading to a dinner party, we'll always have the perfect pair waiting for you.
        </p>
      </div>
    </section>
      </div>
  )
}

export default About;