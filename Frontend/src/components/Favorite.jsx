import React from 'react'
import Navbar from './Navbar';

const Favorite = () => {
  return (
    <div className='p-6'>
       <Navbar/>
       <div className='flex justify-center mt-20'>
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
  </div>
</div>


  )
}

export default Favorite;