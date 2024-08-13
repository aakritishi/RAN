import React from 'react'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container flex items-center justify-between p-4 mx-auto">
        <a className="text-xl font-bold text-red-600" href="#">Navbar</a>
        <button 
          className="p-2 text-red-600 lg:hidden" 
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div className="hidden space-x-4 lg:flex" id="navbarSupportedContent">
          <a className="text-gray-700 hover:text-blue-600" href="#">Home</a>
          <div className="relative">
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none" aria-expanded="false">
              About Us
              <svg className="inline w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <ul className="absolute hidden mt-2 space-y-2 bg-white shadow-lg">
              <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Action</a></li>
              <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Another action</a></li>
              <li><hr className="border-t border-gray-200" /></li>
              <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Something else here</a></li>
            </ul>
          </div>
          <div className="relative">
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none" aria-expanded="false">
              Our Product
              <svg className="inline w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <ul className="absolute hidden mt-2 space-y-2 bg-white shadow-lg">
              <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Action</a></li>
              <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Another action</a></li>
              <li><hr className="border-t border-gray-200" /></li>
              <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Something else here</a></li>
            </ul>
          </div>
          <div className="relative">
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none" aria-expanded="false">
              Our Services
              <svg className="inline w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <ul className="absolute hidden mt-2 space-y-2 bg-white shadow-lg">
              <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Action</a></li>
              <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Another action</a></li>
              <li><hr className="border-t border-gray-200" /></li>
              <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Something else here</a></li>
            </ul>
          </div>
          <a className="text-gray-700 hover:text-blue-600" href="#">Contact Us</a>
          <a className="text-gray-700 hover:text-blue-600" href="#">Login</a>
        </div>
      </nav>
    </header>
  )
}
