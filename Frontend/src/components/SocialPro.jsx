import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaShareAlt } from 'react-icons/fa'; // Social Media icons
import { MdShoppingCart } from 'react-icons/md'; // Shopping Cart Icon

const SocialPro = () => {
  return (
    <section className="md:py-20 py-10 px-10 md:px-30  text-black">
      <h2 className="md:text-4xl text-2xl font-bold text-center text-gray-800 md:mb-12 mb-2 pro-name"> HAPPY CUSTOMER<hr className="mt-3 bg-gray-600 border-none h-px" />
      </h2>

      {/* Social Media Links */}
      {/* <div className="flex justify-center gap-8 mb-12">
        <a href="https://www.instagram.com/yourstore" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-4xl "/>
        </a>
        <a href="https://www.facebook.com/yourstore" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-4xl" />
        </a>
        <a href="https://twitter.com/yourstore" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-4xl" />
        </a>
      </div> */}

      {/* Customer Photos/Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white cursor-pointer  md:p-6 ">
          <img
            src="https://media.istockphoto.com/id/2161334685/photo/mid-adult-man-unboxing-a-package-with-new-shoes-he-ordered-online-while-sitting-in-an-armchair.jpg?s=612x612&w=0&k=20&c=9G7YPqFCU2rMLiFdWF9_27Tmk48Sr4y2iEHi_NtLHrA=" 
            alt="Customer 1"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-md text-gray-700 font-bold pro-name">Jane Doe</p>
          <p className="md:text-lg text-sm text-gray-600 mb-4 pro-name">These shoes are amazing! So comfortable and stylish!</p>
        </div>

        <div className="bg-white md:p-6">
          <img
            src="https://media.istockphoto.com/id/1472384462/photo/smiling-happy-senior-european-man-blogger-with-beard-records-video-review-on-shoes-unpacks.jpg?s=612x612&w=0&k=20&c=KUEk4WevlUiTGBN2O4MQBZuZlN5J-4yHltT44QkiP68="
            alt="Customer 2"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="md:text-md text-gray-700 font-bold pro-name">John Smith</p>
          <p className="md:text-lg text-sm text-gray-600 mb-4 pro-name">I get compliments every time I wear these shoes!</p>
        </div>

        <div className="bg-white md:p-6  ">
          <img
            src="https://media.istockphoto.com/id/1464865656/photo/happy-female-buyer-unpacking-cardboard-box-with-delivered-shoes-indoors.jpg?s=612x612&w=0&k=20&c=KG-yZXP7HotLIKou3vheEeCufVempslaDaO2soDGl5Y="
            alt="Customer 3"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="md:text-md text-gray-700 font-bold pro-name">Sarah Lee</p>
          <p className="text-lg text-gray-600 mb-4 pro-name">Best purchase ever! I love them!</p>
        </div>
      </div>

      {/* Social Share Buttons for Products */}
      <div className="flex justify-center flex-col md:flex-row gap-2 mt-4">
        <button className="flex items-center bg-black text-white px-6 py-3  hover:bg-white hover:text-black transition rounded-full  duration-300 ">
          <FaShareAlt className="mr-2 text-xl" />
          Share This Product
        </button>
        <button className="flex items-center bg-black text-white px-6 py-3  hover:bg-white hover:text-black rounded-full transition duration-300">
          <MdShoppingCart className="mr-2 text-xl" />
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default SocialPro;
