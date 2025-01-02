import React from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div className=''>
      <div className='p-6'>
      <Navbar/>
      </div>
    <section className="py-10 md:px-20   text-black">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-5 pro-name">Contact Us</h2>
      <hr className="border-gray-700 mb-10" />
      {/* Contact Form Section */}
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-12">
        {/* Contact Form */}
        <div className="bg-white md:p-8 p-2 rounded-lg ">
          <h3 className="md:text-3xl text-xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col justify-center p-2 md:p-0 items-start space-y-6">
          <h3 className="md:text-3xl text-2xl font-semibold text-gray-800 md:mb-6">Our Contact Information</h3>
          
          {/* Phone Number */}
          <div className="flex items-center text-lg text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M3 12h18M3 21h18" />
            </svg>
            <span>+1 800 123 4567</span>
          </div>

          {/* Email Address */}
          <div className="flex items-center text-lg text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l9 7-9 7-9-7 9-7z" />
            </svg>
            <span>support@shoestore.com</span>
          </div>

          {/* Address */}
          <div className="flex items-center text-lg text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11l-7 7-7-7" />
            </svg>
            <span>123 Shoe St, Shoe City, SC 12345</span>
          </div>

          {/* Business Hours */}
          <div className="flex items-center text-lg text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6h12M5 6H3v13h2v-4h6v4h2v-7h6v7h2V6h-2" />
            </svg>
            <span>Mon-Fri: 9am - 6pm, Sat: 10am - 4pm</span>
          </div>

          {/* Social Media */}
          <div className="flex space-x-6 mt-6">
            <a href="https://facebook.com" className="text-blue-600" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 2.047c-5.446 0-9.855 4.233-9.855 9.861 0 5.623 4.394 10.316 9.855 10.316 5.451 0 9.855-4.693 9.855-10.316 0-5.628-4.404-9.861-9.855-9.861zm0 17.644c-4.197 0-7.579-3.549-7.579-7.784 0-4.233 3.382-7.782 7.579-7.782 4.197 0 7.579 3.549 7.579 7.782 0 4.235-3.382 7.784-7.579 7.784z" />
              </svg>
            </a>
            <a href="https://instagram.com" className="text-pink-600" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M8.25 1.5h7.5a6.75 6.75 0 016.75 6.75v7.5a6.75 6.75 0 01-6.75 6.75h-7.5a6.75 6.75 0 01-6.75-6.75v-7.5a6.75 6.75 0 
                01-6.75-6.75v-7.5a6.75 6.75 0 016.75-6.75zm0 1.5a5.25 5.25 0 00-5.25 5.25v7.5a5.25 5.25 0 005.25 5.25h7.5a5.25 5.25 0 005.25-5.25v-7.5a5.25 5.25 0 00-5.25-5.25h-7.5zm3.75 2.25a3 3 0 110 6 3 3 0 010-6zm0 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.375.375a.75.75 0 110 1.5.75.75 0 010-1.5zm-6.375 2.625a4.875 4.875 0 100 9.75 4.875 4.875 0 000-9.75zm0 1.5a3.375 3.375 0 110 6.75 3.375 3.375 0 010-6.75z" />
              </svg>
            </a>
            <a href="https://twitter.com" className="text-blue-400" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M7.55 22c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63a10.08 10.08 0 002.47-2.54 9.88 9.88 0 01-2.83.77 4.92 4.92 0 002.16-2.71 9.78 9.78 0 01-3.11 1.19 4.88 4.88 0 00-8.31 4.44A13.89 13.89 0 013.24 4.65a4.87 4.87 0 001.51 6.5 4.8 4.8 0 01-2.21-.61v.06a4.88 4.88 0 003.92 4.78 4.9 4.9 0 01-2.2.08 4.89 4.89 0 004.57 3.39 9.79 9.79 0 01-6.05 2.08c-.39 0-.77-.02-1.15-.07a13.88 13.88 0 007.55 2.21" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;
