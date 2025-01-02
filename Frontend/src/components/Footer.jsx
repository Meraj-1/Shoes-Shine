import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Quick Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
          <Link to="/" className="">
        <h2 className="sm:text-5xl  Main">Shoes Shine</h2>
      </Link>
            <ul>
              <li><a href="#" className="hover:text-yellow-600">Home</a></li>
              <li><a href="#" className="hover:text-yellow-600">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-600">Shop</a></li>
              <li><a href="#" className="hover:text-yellow-600">FAQ</a></li>
              <li><a href="#" className="hover:text-yellow-600">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4 className="font-bold text-xl mb-4">Follow Us</h4>
            <ul>
              <li><a href="#" className="hover:text-yellow-600">Instagram</a></li>
              <li><a href="#" className="hover:text-yellow-600">Facebook</a></li>
              <li><a href="#" className="hover:text-yellow-600">Twitter</a></li>
              <li><a href="#" className="hover:text-yellow-600">Pinterest</a></li>
            </ul>
          </div>

          {/* Newsletter Signup Section */}
          <div>
            <h4 className="font-bold text-xl mb-4">Newsletter Signup</h4>
            <div className="flex flex-col">
              <input type="email" className="p-2 mb-4 rounded text-black" placeholder="Enter your email" />
              <button className="bg-white text-xl text-black w-28 p-2 rounded">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Customer Service, Payment Methods, and Contact Info Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div>
            <h4 className="font-bold text-xl mb-4">Customer Service</h4>
            <ul>
              <li><a href="#" className="hover:text-yellow-600">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-yellow-600">Shipping Information</a></li>
              <li><a href="#" className="hover:text-yellow-600">Order Tracking</a></li>
            </ul>
          </div>

          {/* Payment Methods Section */}
          <div>
  <h4 className="font-bold text-xl mb-4">Payment Methods</h4>
  <ul className="flex space-x-4">
    <li>
      <i className="fa-brands fa-cc-visa text-3xl"></i> {/* Visa Icon */}
    </li>
    <li>
      <i className="fa-brands fa-cc-mastercard text-3xl"></i> {/* MasterCard Icon */}
    </li>
    <li>
      <i className="fa-brands fa-cc-paypal text-3xl"></i> {/* PayPal Icon */}
    </li>
    <li>
      <i className="fa-brands fa-apple-pay text-3xl"></i> {/* Apple Pay Icon */}
    </li>
    <li>
      <i className="fa-brands fa-google-pay text-3xl"></i> {/* Google Pay Icon */}
    </li>
  </ul>
</div>


          {/* Contact Information Section */}
          <div>
            <h4 className="font-bold text-xl mb-4">Contact Information</h4>
            <p>Phone: <a href="tel:+1-XXX-XXX-XXXX" className="hover:text-yellow-600">XXX-XXX-XXXX</a></p>
            <p>Email: <a href="mailto:support@yourstore.com" className="hover:text-yellow-600">support@yourstore.com</a></p>
            <p>Address: 123 Store Street, City, Country</p>
          </div>
        </div>

        {/* Legal Information, Security & Trust, Copyright */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div>
            <h4 className="font-bold text-xl mb-4">Legal Information</h4>
            <ul>
              <li><a href="#" className="hover:text-yellow-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-600">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
