import React from 'react';
import { HiOutlineMail } from 'react-icons/hi'; // Mail icon from react-icons

const NewsLetter = () => {
  return (
    <section className="md:py-20 py-4 md:px-20 gap-0 flex flex-col md:flex-row items-center justify-between text-black">
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h2 className="md:text-4xl text-3xl font-bold text-gray-800 pro-name">Stay Updated on Our Latest Offers</h2>
        <p className="md:text-lg mt-4 text-gray-600 pro-name">Sign up for our newsletter to receive exclusive deals and updates.</p>
      </div>
      
      {/* Right side - Input and Button */}
      <div className="flex items-center  w-full md:w-auto">
        <div className="flex items-center bg-white  w-full max-w-md">
          {/* Email input field with icon */}
          <div className="flex items-center pl-4 pr-2 py-2 w-full">
            <HiOutlineMail className="text-gray-500 text-2xl mr-2" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg text-black"
            />
          </div>
          {/* Subscribe button */}
          <button className="px-6 py-2 bg-black text-white rounded-r-lg transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
