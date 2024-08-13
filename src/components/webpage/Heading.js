import React, { Component } from 'react';

export class Heading extends Component {
  render() {
    return (
      <div className='w-full max-w-[92%] mx-auto'>
        <h1 className='text-xl text-red-500 font-bold text-center md:text-3xl my-2'>
          Robotics Academy of Nepal
        </h1>
      </div>
    );
  }
}

export default Heading;
