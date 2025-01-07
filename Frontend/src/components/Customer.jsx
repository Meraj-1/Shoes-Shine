import React from 'react';
import { AiOutlinePhone, AiOutlineMail, AiOutlineQuestionCircle } from 'react-icons/ai'; // Icons for phone, email, FAQs

const Customer = () => {
  return (
    <section className="md:py-20 py-10 px-10  md:px-20 text-black">
      <h2 className="md:text-4xl text-2xl font-bold text-center text-gray-800 mb-12 pro-name">Customer Support<hr className='mt-3 bg-gray-600 border-none h-px'/> </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Live Chat */}
        <div className="bg-white md:p-6 ">
            <i class="fa-solid fa-headset md:text-5xl text-3xl  text-black mb-4"></i>
          <h3 className="md:text-2xl text-xl font-bold pro-name text-gray-700 mb-4">Live Chat</h3>
          <p className="md:text-lg text-sm text-gray-600 mb-4 pro-name">Get immediate assistance from our support team via live chat.</p>
          <button className="px-6 py-2 bg-black text-white rounded-lg pro-name transition duration-300">
            Start Chat
          </button>
        </div>
oon
        {/* Phone Support */}
        <div className="bg-white md:p-6 ">
          <AiOutlinePhone className="md:text-5xl text-3xl  text-black mb-4" />
          <h3 className="md:text-2xl text-xl font-bold text-gray-700 pro-name mb-4">Phone Support</h3>
          <p className="md:text-lg text-sm text-gray-600 mb-4 pro-name">Speak with our support team directly for immediate help.</p>
          <p className="md:text-lg text-sm text-gray-700 font-bold pro-name">Call Us: (123) 456-7890</p>
        </div>

        {/* Email Support */}
        <div className="bg-white md:p-6 ">
          <AiOutlineMail className="md:text-5xl text-3xl text-black mb-4" />
          <h3 className="md:text-2xl text-xl  font-bold text-gray-700 pro-name mb-4">Email Support</h3>
          <p className="md:text-lg text-sm text-gray-600 mb-4 pro-name">Email our support team for assistance with your queries.</p>
          <p className="md:text-lg text-sm text-gray-700 font-bold pro-name">Email Us: support@example.com</p>
        </div>
      </div>

      {/* FAQs Section */}
      {/* <div className="mt-16"> */}
        {/* <h3 className="text-3xl  text-gray-800 pro-name text-center mb-6">Frequently Asked Questions (FAQs)</h3> */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 ">
            <AiOutlineQuestionCircle className="text-3xl text-black mb-4" />
            <h4 className="text-xl font-semibold text-gray-700 mb-4 pro-name">How do I return an item?</h4>
            <p className="text-gray-600 pro-name">
              You can return items within 30 days of purchase. Simply contact our support team or visit our returns page for detailed instructions.
            </p>
          </div>

          <div className="bg-white p-6">
            <AiOutlineQuestionCircle className="text-3xl text-black mb-4" />
            <h4 className="text-xl font-semibold text-gray-700 mb-4 pro-name">What are the shipping charges?</h4>
            <p className="text-gray-600 pro-name">
              Shipping charges are calculated based on your location. You can find the exact charges at checkout before completing your purchase.
            </p>
          </div>
        </div>
      </div> */}

      {/* Shipping and Return Policies */}
      {/* <div className="mt-16"> */}
        {/* <h3 className="text-3xl font-semibold text-gray-800 text-center mb-6 pro-name">Our Policies</h3> */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
          {/* Return & Exchange Policy */}
          {/* <div className="bg-white p-6 ">
            <h4 className="text-xl pro-name font-semibold text-gray-700 mb-4">Returns & Exchanges</h4>
            <p className="text-gray-600 pro-name">
              We offer hassle-free returns and exchanges within 30 days of your purchase. Items must be unused and in their original packaging.
            </p>
          </div>

          {/* Shipping Policy */}
          {/* <div className="bg-white p-6 ">
            <h4 className="text-xl pro-name font-semibold text-gray-700 mb-4">Shipping Policy</h4>
            <p className="text-gray-600 pro-name">
              We offer free shipping on orders over $50. Shipping times vary depending on your location, but most orders arrive within 3-5 business days.
            </p>
          </div>
        </div> */} 
      {/* </div> */}
    </section>
  );
};

export default Customer;
