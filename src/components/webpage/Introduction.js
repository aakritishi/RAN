import React, { Component } from 'react'
import robotimg from '../media/images/robot.jpeg'

export class Introduction extends Component {
  render() {
    return (
      <div className='w-[92%] mx-auto mt-3 mb-5 '>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <div className='text-base sm:text-lg md:text-xl lg:text-xl text-slate-800 md:w-1/2'>
            <p>Robotics Academy of Nepal Pvt. Ltd., widely recognized as RAN. Established in 2017, our academy has rapidly evolved into a pioneering institution offering Bachelor’s degrees in Computer Engineering and Electronics and Information Technology. We proudly stand affiliated with Tribhuvan University, in collaboration with Janakpur Engineering College.</p>
            <br />
            <p>At RAN, we have solidified our position as leaders in the fields of Robotics, Artificial Intelligence (AI), Machine Learning (ML), and both hardware and software development within Nepal. Our commitment to excellence is evident through our involvement in impactful national and international projects.</p>
            <br />
          </div>
          <div className="md:w-1/2 h-[50vh]">
            <img src={robotimg} alt="robot" className="md:w-[80%] h-full object-cover mx-auto rounded-xl mt-2" />
        </div>
        </div>
      </div>
    )
  }
}

export default Introduction
