import React, { Component } from 'react';
import founderimg from '../media/images/robotics.jpeg';

export class FounderSection extends Component {
  render() {
    return (
      <div className='w-[92%] mx-auto my-2'>
        <div className="flex flex-col md:flex-row items-center md:items-start mt-2">
          <div className='w-full md:w-1/2 mx-auto col1'>
            <div className="h-[50vh] flex items-center justify-center md:items-start md:justify-start ">
              <img 
                src={founderimg} 
                alt="robot" 
                className="md:w-[80%] w-full h-full object-cover rounded-xl mt-2" 
              />
            </div>
          </div>
          <div className='text-base sm:text-lg md:text-xl lg:text-xl text-slate-800 md:w-1/2 py-2'>
            <p>Robotics Academy of Nepal Pvt. Ltd., widely recognized as RAN. Established in 2017, our academy has rapidly evolved into a pioneering institution offering Bachelor’s degrees in Computer Engineering and Electronics and Information Technology. We proudly stand affiliated with Tribhuvan University, in collaboration with Janakpur Engineering College.</p>
            <br />
            <p>At RAN, we have solidified our position as leaders in the fields of Robotics, Artificial Intelligence (AI), Machine Learning (ML), and both hardware and software development within Nepal. Our commitment to excellence is evident through our involvement in impactful national and international projects.</p>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default FounderSection;
