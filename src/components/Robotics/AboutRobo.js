import React from 'react';
import robotImage from '../media/images/robot.jpeg';
import robotvideo from '../media/video/jec.mp4'

export default function AboutRobo() {
  return (
    <>
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <div className="my-3 text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          <h1>Robot Name</h1>
        </div>

        {/* Image and Description Section */}
        <div className="flex flex-wrap items-center justify-center my-8 space-y-8 md:space-y-0">
          <div className="flex items-center justify-center w-full md:w-1/2">
            <img
              src={robotImage}
              alt="Robot"
              className="h-[350px] w-[350px] object-cover rounded-full shadow-2xl transition-transform duration-500 ease-in-out hover:rotate-6 hover:scale-110"
            />
          </div>
          <div className="w-full px-6 md:w-1/2">
            <p className="p-6 text-lg text-gray-300 shadow-xl bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl">
              <strong className="text-blue-300">Robot Name</strong> is a cutting-edge robot designed to perform a wide array of tasks efficiently and reliably. Whether in a home, office, or industrial setting, this robot adapts to various needs seamlessly, showcasing advanced capabilities and intuitive functionalities.
            </p>
          </div>
        </div>

        {/* Video and Description Section */}
        <div className="flex flex-wrap items-center justify-center my-8 space-y-8 md:space-y-0">
          <div className="w-full px-6 md:w-1/2">
            <p className="p-6 text-lg text-gray-300 shadow-xl bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl">
              <strong className="text-purple-300">Robot Name</strong> has been engineered with precision and intelligence, making it a versatile tool in today's technology-driven world. It excels in handling complex tasks, enhancing productivity and efficiency across various applications.
            </p>
          </div>
          <div className="flex items-center justify-center w-full md:w-1/2">
            <video
              src={robotvideo} 
              className="h-[300px] w-[450px] object-cover rounded-3xl shadow-2xl transition-transform duration-500 ease-in-out hover:rotate-6 hover:scale-110"
              loop
              autoPlay
              muted
            />
          </div>
        </div>
      </div>
    </>
  );
}
