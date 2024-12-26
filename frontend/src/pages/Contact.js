// src/pages/Contact.js
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white flex flex-col items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?fit=crop&w=1280&q=80")',
        }}
      ></div>

      {/* Header */}
      <div className="text-center py-10 relative z-10">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg font-medium">We’re here to assist you anytime!</p>
      </div>

      {/* Contact Details Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 mb-10 relative z-10">
        {/* Phone Section */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 flex items-center">
          <FaPhoneAlt className="text-blue-500 text-3xl mr-4" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Call Us</h2>
            <p className="text-lg mb-1">+1 (800) 123-4567</p>
            <p className="text-lg">+1 (800) 987-6543</p>
          </div>
        </div>

        {/* Email Section */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 flex items-center">
          <FaEnvelope className="text-blue-500 text-3xl mr-4" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Email Us</h2>
            <p className="text-lg mb-1">support@jiibly.com</p>
            <p className="text-lg">info@jiibly.com</p>
          </div>
        </div>

        {/* Location Section */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 flex items-center">
          <FaMapMarkerAlt className="text-blue-500 text-3xl mr-4" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Visit Us</h2>
            <p className="text-lg mb-1">123 Delivery Lane,</p>
            <p className="text-lg">lafayet, TN 12345</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-4xl bg-white text-gray-800 p-8 rounded-lg shadow-lg mb-12 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-6">Get In Touch</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="w-full h-64 bg-gray-300 relative z-10">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.8382040058473!2d-122.08424938468168!3d37.42199977982547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24f6e5ab6e5%3A0x478c8f9dd8f935af!2sGoogleplex!5e0!3m2!1sen!2sus!4v1605242702035!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-purple-500 w-full relative z-10">
        <p className="text-lg">&copy; 2024 Jiibly. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
