// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold tracking-wide flex items-center">
              <img
                src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/112018/untitled-1_142.png?UMrFwIBD468G_bsPLgi6s1JIXTAtuhiq&itok=xZKed8Ea"
                alt="Jiibly Logo"
                className="h-10 w-10 rounded-full mr-2"
              />
              Jiibly
            </Link>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-300 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-300 transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-600 text-white shadow-lg">
          <div className="space-y-2 px-4 py-4">
            <Link
              to="/"
              className="block hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block hover:text-gray-300 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block hover:text-gray-300 transition duration-300"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="block bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
