import React from 'react';

export default function AboutUs() {
  return (
    <>
      <div className='container px-4 mx-auto'>
        <div className='row h-[300px] my-5'>
          <div className='col-6'>
            <h1 className='mb-4 text-3xl font-bold'>History of RAN</h1>
            <p className='text-lg'>
              RAN was founded in 1994 by a group of passionate individuals who aimed to create a groundbreaking platform in technology. Over the years, we have grown into a leading entity in the field, constantly innovating and striving to exceed expectations.
            </p>
          </div>
          <div className='col-6'>
            <img src="https://via.placeholder.com/350" alt="Company History" className='object-cover rounded-lg shadow-lg' />
          </div>
        </div>

        <div className='my-5'>
          <h1 className='mb-4 text-3xl font-bold'>Our Mission</h1>
          <p className='text-lg'>
            Our mission is to revolutionize the industry with cutting-edge solutions and technologies. We are dedicated to delivering excellence and fostering a culture of innovation and collaboration.
          </p>
        </div>

        <div>
          <h1 className='mb-6 text-3xl font-semibold text-center'>Meet Our Team</h1>
        </div>

        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {Array(8).fill().map((_, index) => (
              <div className='max-w-sm mx-auto' key={index}>
                <div className="transition-all duration-500 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105">
                  <img src="https://via.placeholder.com/150" className="transition-transform duration-500 transform rounded-t-lg hover:scale-110" style={{ height: "200px", objectFit: "cover", width: '100%' }} alt="Team Member" />
                  <div className="p-4">
                    <h5 className="text-xl font-semibold text-blue-900 transition-all duration-300 hover:text-blue-700">
                      NAME
                    </h5>
                    <p className="text-sm font-medium text-gray-600">FACULTY</p>
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
