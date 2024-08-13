import React, { useState } from 'react';
import logo from '../media/images/ranlogo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isRoboticsOpen, setIsRoboticsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);

  const toggleRoboticsDropdown = () => setIsRoboticsOpen(!isRoboticsOpen);
  const toggleProductDropdown = () => setIsProductOpen(!isProductOpen);

  return (
    <header className="text-white shadow-lg bg-gradient-to-r from-red-500 via-blue-500 to-green-500">
      <nav className="container flex items-center justify-between p-4 mx-auto">
        <a className="flex items-center text-2xl font-bold" href="#">
          <img src={logo} className='h-[50px] w-[100px] mr-2' alt="Logo" />
        </a>

        <div className="items-center hidden space-x-8 lg:flex" id="navbarSupportedContent">
          <Link to="/" className="font-medium text-white transition-colors duration-300 hover:text-yellow-300">Home</Link>
          <Link to='/aboutus' className="font-medium text-white transition-colors duration-300 hover:text-yellow-300">About Us</Link>

          <div className="relative">
            <button
              className="flex items-center px-4 py-2 font-medium text-white transition-all duration-300 rounded-lg shadow-md hover:text-yellow-300 focus:outline-none"
              onClick={toggleRoboticsDropdown}
              aria-expanded={isRoboticsOpen}
              aria-controls="robotics-menu"
            >
              Robotics
              <svg className="inline w-4 h-4 ml-2 transition-transform duration-300 transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transform: isRoboticsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <ul
              id="robotics-menu"
              className={`absolute mt-2 space-y-2 bg-gray-800 text-white shadow-lg border border-gray-700 rounded-xl transition-transform transform ${isRoboticsOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} transition-all duration-300`}
              role="menu"
            >
              <li><a className="block px-6 py-3 transition-colors duration-300 hover:bg-gray-700" href="#">Autonomous Vehicles</a></li>
              <li><hr className="border-gray-700" /></li>
              <li><a className="block px-6 py-3 transition-colors duration-300 hover:bg-gray-700" href="#">Industrial Robots</a></li>
              <li><hr className="border-gray-700" /></li>
              <li><a className="block px-6 py-3 transition-colors duration-300 hover:bg-gray-700" href="#">Robotic Arms</a></li>
            </ul>
          </div>

          <div className="relative">
            <button
              className="flex items-center px-4 py-2 font-medium text-white transition-all duration-300 rounded-lg shadow-md hover:text-yellow-300 focus:outline-none"
              onClick={toggleProductDropdown}
              aria-expanded={isProductOpen}
              aria-controls="product-menu"
            >
              Our Products
              <svg className="inline w-4 h-4 ml-2 transition-transform duration-300 transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transform: isProductOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <ul
              id="product-menu"
              className={`absolute mt-2 space-y-2 bg-gray-800 text-white shadow-lg border border-gray-700 rounded-xl transition-transform transform ${isProductOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} transition-all duration-300`}
              role="menu"
            >
              <li><a className="block px-6 py-3 transition-colors duration-300 hover:bg-gray-700" href="#">Robotic Kits</a></li>
              <li><hr className="border-gray-700" /></li>
              <li><a className="block px-6 py-3 transition-colors duration-300 hover:bg-gray-700" href="#">Sensors & Modules</a></li>
              <li><hr className="border-gray-700" /></li>
              <li><a className="block px-6 py-3 transition-colors duration-300 hover:bg-gray-700" href="#">Accessories</a></li>
            </ul>
          </div>

          <a className="font-medium text-white transition-colors duration-300 hover:text-yellow-300" href="#">Careers</a>
          <a className="font-medium text-white transition-colors duration-300 hover:text-yellow-300" href="#">Contact Us</a>
          {/* <a className="font-medium text-white transition-colors duration-300 hover:text-yellow-300" href="#">Login</a> */}

          <button
                                className="px-5 py-3 text-[30px] font-semibold text-white transition duration-300 bg-blue-600 rounded-lg shadow-md md:text-base hover:bg-blue-700 hover:shadow-lg focus:outline-none"
                            >
                               Login
                            </button>
        </div>
      </nav>
    </header>
  );
}
