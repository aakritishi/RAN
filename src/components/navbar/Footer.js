import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <>
        <div className='container font-semibold  justify-end mt-5 font-sans text-[25px] text-decoration-none className="fixed z-50 flex flex-col space-y-4 bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8'>
          <div className='row'>
            <div className='flex items-center justify-center col-md-4 text-decoration-none'>
              <a href="#">About</a>
            </div>
            <div className='flex items-center justify-center col-md-4 text-decoration-none'>
              <a href="#">Admission</a>
            </div>
            <div className='flex items-center justify-center col-md-4 decoration-none'>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Footer
