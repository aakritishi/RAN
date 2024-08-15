import React from 'react';

export default function AboutUs() {
  return (
    <>
      <div className='container px-6 py-12 mx-auto'>
        {/* History Section */}
        <div className='flex flex-wrap items-center my-12'>
          <div className='w-full md:w-1/2 lg:w-1/2'>
            <h1 className='mb-6 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500'>History of RAN</h1>
            <p className='text-lg text-gray-800'>
              RAN was founded in 1994 by a group of visionary individuals who set out to revolutionize technology. Since then, we have become pioneers in robotics, consistently pushing the boundaries of innovation and excellence.
            </p>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/2'>
            <img 
              src="https://via.placeholder.com/350" 
              alt="Company History" 
              className='object-cover transition-shadow duration-300 border-4 rounded-lg shadow-2xl hover:shadow-2xl hover:shadow-teal-500/50 hover:scale-105' 
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className='my-12'>
          <h1 className='mb-6 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500'>Our Mission</h1>
          <p className='text-lg text-gray-800'>
            Our mission is to drive the future of robotics with advanced, intelligent solutions. We are committed to innovation, excellence, and fostering a culture that embraces cutting-edge technologies and collaboration.
          </p>
        </div>

        {/* Team Section */}
        <div className='my-12'>
          <h1 className='mb-8 text-4xl font-extrabold text-center text-transparent bg-clip-text '>Meet Our Team</h1>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {Array(8).fill().map((_, index) => (
              <div className='max-w-sm mx-auto' key={index}>
                <div className="relative overflow-hidden transition-transform duration-500 transform border-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50">
                  <img 
                    src="https://via.placeholder.com/150" 
                    className="object-cover rounded-t-lg" 
                    style={{ height: "200px", width: '100%' }} 
                    alt="Team Member" 
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 "></div>
                  <div className="relative p-4 bg-gray-800">
                    <h5 className="text-xl font-semibold text-purple-500 transition-colors duration-300 hover:text-teal-400">
                      NAME
                    </h5>
                    <p className="text-sm font-medium text-gray-400">POSITION</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
