import React, { Component } from 'react';
import logo from '../media/images/ranlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export class Footer extends Component {
  render() {
    return (
      <>
        

        <div className="pb-4 bg-slate-600">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center text-center">
              {/* Logo and Description */}
              <div className="w-full p-4 md:w-1/3">
                <img src={logo} alt="RAN Logo" className="mx-auto h-24 w-[150px]" />
                <p className="text-gray-300">
                  Welcome to Robotics Academy of Nepal Pvt. Ltd.,
                  <br /> widely recognized as RAN. Established in 2017.
                </p>
                <div className="flex justify-center mt-4 space-x-4">
                  <FontAwesomeIcon icon={faFacebook} className="text-2xl text-white transition hover:text-gray-400" />
                  <FontAwesomeIcon icon={faTwitter} className="text-2xl text-white transition hover:text-gray-400" />
                  <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-white transition hover:text-gray-400" />
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl text-white transition hover:text-gray-400" />
                  <FontAwesomeIcon icon={faYoutube} className="text-2xl text-white transition hover:text-gray-400" />
                </div>
              </div>

              {/* Quick Links */}
              <div className="w-full p-4 md:w-1/3">
                <h2 className="text-xl font-bold text-white">Quick Links</h2>
                <div className="flex flex-col gap-2 mt-2">
                  <Link to="/" className="text-gray-300 transition hover:text-gray-100">
                    Home
                  </Link>
                  <Link to="/about" className="text-gray-300 transition hover:text-gray-100">
                    About Us
                  </Link>
                  <Link to="/contact" className="text-gray-300 transition hover:text-gray-100">
                    Contact Us
                  </Link>
                  <Link to="/admission" className="text-gray-300 transition hover:text-gray-100">
                    Admission
                  </Link>
                </div>
              </div>

              {/* Contact Information */}
              <div className="w-full p-4 md:w-1/3">
                <div>
                  <h2 className="text-xl font-bold text-white">Get in Touch</h2>
                  <p className="text-gray-300">Headquarter</p>
                  <p className="text-gray-300">Street 6, Chakupat, Lalitpur</p>
                  <p className="text-gray-300">+977 970-397-3538</p>
                  <p className="text-gray-300">info@ran.edu.np</p>
                </div>
                <div className="mt-4">
                  <h2 className="text-xl font-bold text-white">Education Block</h2>
                  <p className="text-gray-300">Kupondole, Lalitpur</p>
                  <p className="text-gray-300">+977 970-397-3538</p>
                  <p className="text-gray-300">info@ran.edu.np</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
