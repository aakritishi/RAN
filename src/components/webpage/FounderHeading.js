import React, { Component } from 'react'

export class FounderHeading extends Component {
  render() {
    return (
    <div className='md:flex md:items-start md:justify-start w-[92%] mx-auto'>
        <h1 className='text-xl text-red-500 font-bold md:text-3xl text-center'>
          Message from our Founder
        </h1>
    </div>
    )
  }
}

export default FounderHeading