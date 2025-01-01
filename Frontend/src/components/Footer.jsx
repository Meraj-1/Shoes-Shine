import React from 'react';
import { assets } from '../assets/assets';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';  // Import social media icons

const Footer = () => {
  return (
    <div className='bg-gray-400 text-black '>
      <div className='max-w-screen-xl mx-auto px-10 py-10'>
        <div className='flex flex-wrap justify-between items-center'>
          {/* Logo Section */}
          <div className='mb-6'>
            <img src={assets.weblogo} className='h-20 w-auto' alt="Website Logo" />
          </div>

          {/* Navigation Links */}
          <div className='mb-6'>
            <ul className='flex gap-10 justify-evenly'>
              <li className='font-semibold hover:text-gray-400 cursor-pointer'>About</li>
              <li className='font-semibold hover:text-gray-400 cursor-pointer'>Contact</li>
              <li className='font-semibold hover:text-gray-400 cursor-pointer'>Brand Ambassador</li>
              {/* <li className='font-semibold hover:text-gray-400 cursor-pointer'>FAQ</li> */}
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className='mb-6'>
            <ul className='flex gap-5'>
              <li>
                <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                  <FaFacebookF className='text-2xl hover:text-blue-600' />
                </a>
              </li>
              <li>
                <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                  <FaTwitter className='text-2xl hover:text-blue-400' />
                </a>
              </li>
              <li>
                <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                  <FaInstagram className='text-2xl hover:text-pink-600' />
                </a>
              </li>
              <li>
                <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
                  <FaLinkedinIn className='text-2xl hover:text-blue-700' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
