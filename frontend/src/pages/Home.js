// src/pages/Home.js
import React from 'react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { FaShippingFast } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-10 text-center px-4 md:px-10">
        <div className="flex justify-center items-center space-x-3 mb-6 animate-fade-in">
          <FaShippingFast className="text-4xl md:text-6xl text-yellow-400" />
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Jiibly
          </h1>
        </div>
        <p className="text-lg md:text-2xl mb-8 animate-fade-in-delayed">
          Reliable, fast, and secure delivery services tailored for you.
        </p>
        <div className="flex justify-center space-x-6">
          <Link to="/register">
            <Button
              text="Get Started"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold"
            />
          </Link>
          <Link to="/login">
            <Button
              text="Log In"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
            />
          </Link>
        </div>
      </div>

      {/* Image Slider Section */}
      <div className="relative z-10 bg-white py-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Service in Action
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4">
            <img
              src="https://d23xypyp2dkdqm.cloudfront.net/wp-content/uploads/2022/01/31034059/woman-hand-accepting-delivery-boxes-from-deliveryman-1-1024x683.jpg"
              alt="Delivery"
              className="w-1/3 rounded-lg shadow-md"
            />
            <img
              src="https://www.parcelandpostaltechnologyinternational.com/wp-content/uploads/2024/03/Parcel-hero-courier-scaled-e1710254637620.jpg"
              alt="Courier"
              className="w-1/3 rounded-lg shadow-md"
            />
            <img
              src="https://retail-merchandiser.com/wp-content/uploads/sites/8/2024/02/Pick-up-and-delivery-services-image.jpeg"
              alt="Logistics"
              className="w-1/3 rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 bg-gray-100 text-gray-800 py-16 px-8 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Jiibly?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 text-center border rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
            <img
              src="https://png.pngtree.com/png-clipart/20210905/original/pngtree-fast-delivery-poster-png-image_6690806.jpg"
              alt="Fast Delivery"
              className="mx-auto mb-4 rounded-full w-32 h-32 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p>Get your packages delivered on time, every time.</p>
          </div>
          <div className="p-6 text-center border rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
            <img
              src="https://www.hub-packaging.com/wp-content/uploads/2017/10/PRL10879HA_SG108HA_mailing_labelling_labels_warning_advisory_parcel_SA_handle_with_care_108mm_79mm.jpg"
              alt="Secure Service"
              className="mx-auto mb-4 rounded-full w-32 h-32 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Secure Service</h3>
            <p>Your items are handled with care and delivered safely.</p>
          </div>
          <div className="p-6 text-center border rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
            <img
              src="https://img.freepik.com/vecteurs-premium/24-7-support-icon-support-ligne-twenty-four-seven-vector_608466-89.jpg"
              alt="24/7 Support"
              className="mx-auto mb-4 rounded-full w-32 h-32 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p>We’re here for you anytime you need assistance.</p>
          </div>
        </div>
      </section>

   {/* Reviews Section */}
   <section className="bg-gray-100 py-16 px-8 md:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition bg-white">
            <p className="text-black text-lg mb-4">
              “Jiibly is the best delivery service I’ve ever used. Fast and reliable!”
            </p>
            <h4 className="font-bold text-black">- Alex D.</h4>
          </div>
          <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition bg-white">
            <p className="text-black text-lg mb-4">
              “service 7moum we 9aleba rod belkom!”
            </p>
            <h4 className="font-bold text-black">- Amen rabia.</h4>
          </div>
          <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition bg-white">
            <p className="text-black text-lg mb-4">
              “Their 24/7 support is amazing. They truly care about their customers.”
            </p>
            <h4 className="font-bold text-black">- John L.</h4>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p className="mb-4 md:mb-0">&copy; 2024 Jiibly. All Rights Reserved.</p>
          <div className="space-x-4">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
