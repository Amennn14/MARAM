// src/pages/AboutPage.js
import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D12AQGpybSVf8TqOg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1680352950026?e=2147483647&v=beta&t=YsIZBVuRdAT0bhvfD8D1s58EmAOwHDpao0v2m_cDVsU"
          alt="Delivery logistics"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About Jiibly</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            At Jiibly, we provide top-notch delivery services with speed, reliability, and professionalism. Our mission is to connect people through the power of efficient logistics.
          </p>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <img
                src="https://www.econonord.com/wp-content/uploads/2016/05/AdobeStock_55569182.jpeg"
                alt="Pickup"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Step 1: Pickup</h3>
              <p className="text-gray-600">We pick up your package from your specified location, ensuring a smooth start to the process.</p>
            </div>
            {/* Step 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <img
                src="https://img.freepik.com/premium-photo/sorting-center-boxes-parcels-moving-along-conveyor-belt-dispatch-concept-logistics-sorting-center-conveyor-belt-boxes-parcels_918839-235464.jpg"
                alt="Sorting"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Step 2: Sorting & Dispatch</h3>
              <p className="text-gray-600">Your package is sorted and sent to its destination with our advanced logistics system.</p>
            </div>
            {/* Step 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <img
                src="https://d23xypyp2dkdqm.cloudfront.net/wp-content/uploads/2022/01/31034059/woman-hand-accepting-delivery-boxes-from-deliveryman-1-1024x683.jpg"
                alt="Delivery"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Step 3: Delivery</h3>
              <p className="text-gray-600">The package is delivered safely to its destination, ensuring satisfaction for all.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-gradient-to-b from-blue-100 to-blue-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Choose Jiibly?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:scale-105 transform transition">
              <h3 className="text-xl font-semibold mb-2">Reliable Service</h3>
              <p className="text-gray-600">Timely and secure deliveries you can count on.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:scale-105 transform transition">
              <h3 className="text-xl font-semibold mb-2">Affordable Rates</h3>
              <p className="text-gray-600">Cost-effective solutions tailored to your needs.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:scale-105 transform transition">
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Friendly customer service whenever you need us.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Partners in Logistics</h2>
          <div className="relative overflow-hidden">
            <div className="flex space-x-6">
              <img
                src="https://www.onerail.com/wp-content/uploads/2024/05/outsourced-delivery.jpg"
                alt="Fleet"
                className="w-64 h-36 object-cover rounded-lg shadow-md"
              />
              <img
                src="https://cdn-ilaeadh.nitrocdn.com/UnAFfTqfoHKRwMhikRtSYtATXULTzYKf/assets/images/optimized/rev-af5d355/www.amsc-usa.com/wp-content/uploads/2023/07/a-warehouse-full-of-goods-and-services.jpg"
                alt="Warehouse"
                className="w-64 h-36 object-cover rounded-lg shadow-md"
              />
              <img
                src="https://etimg.etb2bimg.com/photo/77717851.cms"
                alt="Delivery truck"
                className="w-64 h-36 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gray-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Experience Jiibly?</h2>
        <p className="text-lg mb-6">Sign up today to start your hassle-free delivery journey.</p>
        <a
          href="/register"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
