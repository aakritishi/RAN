import React, { useState } from 'react';
import logo from '../media/images/ranlogo.png';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isRoboticsOpen, setIsRoboticsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  
  const location = useLocation(); // Get the current path
  
  const toggleRoboticsDropdown = () => setIsRoboticsOpen(!isRoboticsOpen);
  const toggleProductDropdown = () => setIsProductOpen(!isProductOpen);

  return (
    <header className="text-white shadow-lg bg-slate-600">
      <nav className="container flex items-center justify-between p-4 mx-auto navbar-links">
        <Link to="/" className="flex items-center text-2xl font-bold">
          <img src={logo} className='w-28 h-16 mr-2' alt="Logo" />
        </Link>

        <div className="items-center hidden space-x-8 lg:flex" id="navbarSupportedContent">

          {location.pathname !== '/' && (
            <Link to="/" className="flex items-center px-4 py-2 font-medium text-white transition-all duration-300 rounded-lg hover:text-yellow-300 focus:outline-none">
              Home
            </Link>
          )}

          <Link to='/aboutus' className="flex items-center px-4 py-2 font-medium text-white transition-all duration-300 rounded-lg hover:text-yellow-300 focus:outline-none">About Us</Link>

          <div className="relative">
            <button
              className="flex items-center px-4 py-2 font-medium text-white transition-all duration-300 rounded-lg hover:text-yellow-300 focus:outline-none"
              onClick={toggleRoboticsDropdown}
              aria-expanded={isRoboticsOpen}
              aria-controls="robotics-menu"
            >
              Robotics
              <svg className={`inline w-4 h-4 ml-2 transition-transform duration-300 transform ${isRoboticsOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <ul
              id="robotics-menu"
              className={`absolute mt-2 space-y-2 bg-gray-800 text-white shadow-lg border border-gray-700 w-[100%] rounded-xl transition-transform transform ${isRoboticsOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} transition-all duration-300`}
              role="menu"
            >
              <li><Link className="block px-6 py-3 transition-colors duration-300 hover:bg-gray-700 rounded-t-xl" to="/robotics">Kanchi</Link></li>
              <li><hr className="border-gray-700" /></li>
              <li><Link className="block px-6 py-3 transition-colors duration-300 hover:bg-gray-700" to="/robotics/maili">Maili</Link></li>
              <li><hr className="border-gray-700" /></li>
              <li><Link className="block px-6 py-3 transition-colors duration-300 hover:bg-gray-700 rounded-b-lg" to="/robotics/jethi">Jethi</Link></li>
            </ul>
          </div>

          <Link to="/product" className="flex items-center px-4 py-2 font-medium text-white transition-all duration-300 rounded-lg hover:text-yellow-300 focus:outline-none">Our Product</Link>
          <Link to="/careers" className="flex items-center px-4 py-2 font-medium text-white transition-all duration-300 rounded-lg hover:text-yellow-300 focus:outline-none">Careers</Link>
          <Link to="/contact" className="flex items-center px-4 py-2 font-medium text-white transition-all duration-300 rounded-lg hover:text-yellow-300 focus:outline-none">Contact Us</Link>

          <Link to="/login">
            <button className="px-5 py-3 text-[30px] font-semibold text-white transition duration-300 bg-blue-600 rounded-lg md:text-base hover:bg-blue-700 hover:shadow-lg focus:outline-none">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
