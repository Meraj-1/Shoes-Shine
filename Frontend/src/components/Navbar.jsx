import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar({ favoritesCount }) {
  const [visible, setVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual login status logic

  return (
    <div className="flex items-center justify-between font-medium relative">
      {/* Logo */}
      <Link to="/" className="flex items-center justify-center">
        <h2 className="sm:text-xl Main">Shoes Shine</h2>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-5 text-sm ">
        <NavLink to="/" className="flex flex-col items-center gap-1 group">
          <p>HOME</p>
          <hr className="w-full border-none h-[1.2px] bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1 group">
          <p>COLLECTION</p>
          <hr className="w-full border-none h-[1.2px] bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </NavLink>
        <NavLink to="/brands" className="flex flex-col items-center gap-1 group">
          <p>ABOUT</p>
          <hr className="w-full border-none h-[1.2px] bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1 group">
          <p>CONTACT</p>
          <hr className="w-full border-none h-[1.2px] bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </NavLink>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-4">
        {/* Favorites Icon */}
        <Link to="/favorites" className="relative">
          <i className="fas fa-heart text-xl text-gray-500"></i>
          {favoritesCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {favoritesCount}
            </span>
          )}
        </Link>

        {/* User Profile Dropdown */}
        <div className="group relative">
          <i className="fas fa-user text-xl"></i> {/* Profile icon */}
          <div className="hidden group-hover:block absolute right-0 pt-4 z-50">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 text-gray-500 rounded">
              {isLoggedIn ? (
                <>
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                  <p className="cursor-pointer hover:text-black">Orders</p>
                  <p
                    className="cursor-pointer hover:text-black"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    LogOut
                  </p>
                </>
              ) : (
                <>
                  <Link
                    to="/create-user"
                    className="cursor-pointer bg-[#dfb68b] p-2 rounded-lg flex items-center justify-center text-black hover:text-black"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <i className="fas fa-shopping-cart text-xl"></i>
        </Link>

        {/* Mobile Menu Toggle */}
        <img
          onClick={() => setVisible(true)}
          src="/menu-icon.png"
          className="w-6 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>

      {/* Mobile Menu */}
      {visible && (
        <div className="fixed inset-0 z-50 bg-[#a79685]">
          <div
            className={`fixed top-0 right-0 h-full w-4/5 transition-transform transform ${
              visible ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-2 p-3 cursor-pointer"
            >
              <i className="fas fa-arrow-left text-xl"></i>
              <h2>BACK</h2>
            </div>

            <div className="flex flex-col">
              <NavLink
                onClick={() => setVisible(false)}
                className="py-4 pl-6 border-b"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-4 pl-6 border-b"
                to="/collection"
              >
                COLLECTION
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-4 pl-6 border-b"
                to="/brands"
              >
                About
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-4 pl-6 border-b"
                to="/contact"
              >
                CONTACT
              </NavLink>
              {!isLoggedIn && (
                <NavLink
                  onClick={() => setVisible(false)}
                  className="py-4 pl-6 border-b"
                  to="/login"
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

// export default Navbar;
