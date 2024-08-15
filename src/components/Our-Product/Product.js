import React from 'react';
import productImage1 from '../media/images/education.jpeg';
import productImage2 from '../media/images/robot.jpeg';
import productImage3 from '../media/images/robotics.jpeg';

export default function Product() {
  return (
    <>
      <div className="container px-6 py-12 mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
            Our Products
          </h1>
          <p className="text-xl text-gray-300">
            Discover our innovative robotics and software solutions designed for a cutting-edge future.
          </p>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 gap-8 my-12 md:grid-cols-3">
          {/* Product 1 */}
          <div className="overflow-hidden transition-transform duration-300 bg-gray-900 shadow-xl rounded-xl hover:scale-105">
            <img
              src={productImage1}
              alt="Product 1"
              className="object-cover w-full h-48 border-b-4 border-teal-500"
            />
            <div className="p-6">
              <h2 className="mb-4 text-3xl font-bold text-white">Robot X1</h2>
              <p className="mb-4 text-gray-400">
                The Robot X1 is a versatile tool designed for both industrial and domestic tasks with advanced features.
              </p>
              <button className="px-5 py-2.5 font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-teal-500 to-blue-500 hover:bg-gradient-to-l">
                Learn More
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="overflow-hidden transition-transform duration-300 bg-gray-900 shadow-xl rounded-xl hover:scale-105">
            <img
              src={productImage2}
              alt="Product 2"
              className="object-cover w-full h-48 border-b-4 border-teal-500"
            />
            <div className="p-6">
              <h2 className="mb-4 text-3xl font-bold text-white">Software Suite A</h2>
              <p className="mb-4 text-gray-400">
                Our Software Suite A offers cutting-edge solutions for automation and comprehensive data analysis.
              </p>
              <button className="px-5 py-2.5 font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-teal-500 to-blue-500 hover:bg-gradient-to-l">
                Learn More
              </button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="overflow-hidden transition-transform duration-300 bg-gray-900 shadow-xl rounded-xl hover:scale-105">
            <img
              src={productImage3}
              alt="Product 3"
              className="object-cover w-full h-48 border-b-4 border-teal-500"
            />
            <div className="p-6">
              <h2 className="mb-4 text-3xl font-bold text-white">AI Assistant B</h2>
              <p className="mb-4 text-gray-400">
                The AI Assistant B provides intelligent solutions and automation for everyday tasks, enhancing productivity.
              </p>
              <button className="px-5 py-2.5 font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-teal-500 to-blue-500 hover:bg-gradient-to-l">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="my-12">
          <h2 className="mb-8 text-5xl font-bold text-center text-white">Why Choose Us?</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 bg-gray-800 border-l-4 border-teal-500 shadow-xl rounded-xl">
              <h3 className="mb-4 text-2xl font-bold text-teal-400">Innovation</h3>
              <p className="text-gray-300">
                We lead in technology, offering innovative solutions to address modern challenges effectively.
              </p>
            </div>
            <div className="p-6 bg-gray-800 border-l-4 border-teal-500 shadow-xl rounded-xl">
              <h3 className="mb-4 text-2xl font-bold text-teal-400">Quality</h3>
              <p className="text-gray-300">
                Our products are built to the highest standards, ensuring durability and top performance.
              </p>
            </div>
            <div className="p-6 bg-gray-800 border-l-4 border-teal-500 shadow-xl rounded-xl">
              <h3 className="mb-4 text-2xl font-bold text-teal-400">Support</h3>
              <p className="text-gray-300">
                Our dedicated support team is always ready to assist you with any questions or issues.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="my-12 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">Experience the Future Today</h2>
          <button className="px-6 py-3 font-semibold text-white transition-colors duration-300 rounded-full shadow-lg bg-gradient-to-r from-teal-500 to-blue-500 hover:bg-gradient-to-l">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}
