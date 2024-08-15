import React, { Component } from "react";

export class ContactTop extends Component {
  render() {
    return (
      <div className="flex flex-wrap justify-center items-start w-[94%] mx-auto my-3">
        <div className="w-full px-4 mb-8 text-xl md:w-1/3 md:mb-0" style={{ fontFamily: "'Merriweather', serif" }}>
          <h1 className="mb-6 text-3xl font-semibold text-center text-green-500 md:text-left ">
            Get in Touch
          </h1>
          <ul className="space-y-6 text-lg text-gray-300">
            <li>
              <span className="text-xl font-semibold text-blue-400">RAN</span>
              <br />
              Lalitpur 44600
            </li>
            <li>
              <span className="text-xl font-semibold text-blue-400">Telephone</span>
              <br />
              00000000
            </li>
            <li>
              <span className="text-xl font-semibold text-blue-400">Email</span>
              <br />
              <a href="mailto:info@ran.edu.np" className="text-blue-500 hover:underline">
                info@ran.edu.np
              </a>
            </li>
            <li>
              <span className="text-xl font-semibold text-blue-400">Work Hours</span>
              <br />
              8:00 am to 5:00 pm
            </li>
          </ul>
        </div>
        <div className="w-full px-4 md:w-2/3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.15787896947!2d85.32536487426651!3d27.68151487619731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b413bdd171%3A0xc840b9546bce0f91!2sRobotics%20Academy%20Of%20Nepal!5e0!3m2!1sen!2snp!4v1723628253169!5m2!1sen!2snp"
            className="w-full mt-8 border-2 border-blue-500 rounded-lg h-80 md:h-96 md:mt-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default ContactTop;
