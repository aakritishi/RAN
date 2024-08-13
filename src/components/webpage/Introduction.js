import React, { Component } from 'react'
import robotimg from '../media/images/robot.jpeg'

export class Introduction extends Component {
  render() {
    return (
      <div className='w-[92%] mx-auto mt-5 mb-3'>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <div className='text-base sm:text-lg md:text-xl lg:text-2xl text-slate-800 md:w-1/2'>
            <p>Welcome to Robotics Academy of Nepal Pvt. Ltd., widely recognized as RAN. Established in 2017, our academy has rapidly evolved into a pioneering institution offering Bachelor’s degrees in Computer Engineering and Electronics and Information Technology. We proudly stand affiliated with Tribhuvan University, in collaboration with Janakpur Engineering College.</p>
            <br />
            <p>At RAN, we have solidified our position as leaders in the fields of Robotics, Artificial Intelligence (AI), Machine Learning (ML), and both hardware and software development within Nepal. Our commitment to excellence is evident through our involvement in impactful national and international projects.</p>
            <br />
          </div>
          <div className="md:w-1/2">
            <img src={robotimg} alt="robot" className="w-[80%] h-auto object-cover mx-auto md:h-[400px] lg:h-[450px] rounded-xl" />
          </div>
        </div>
      </div>
    )
  }
}

export default Introduction
