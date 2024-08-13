import React, { Component } from 'react'

export class Heading extends Component {
  render() {
    return (
        <div className='max-w-full mx-auto md:flex md:items-start md:justify-start w-[92%]'>
            <h1 className='text-xl text-red-500 font-bold md:text-3xl mt-2 text-center'>
                Robotics Academy of Nepal
            </h1>
        </div>
    )
  }
}

export default Heading