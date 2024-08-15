import React, { Component } from 'react';
import { SubAssociated } from './SubAssociated';
import partner1 from '../media/images/partner1.png';
import partner2 from '../media/images/partner2.png';

export class AssociatedCompanies extends Component {
  render() {
    return (
      <div className='w-[92%] mx-auto'>
        <div className='text-center'>
          <h1 className='text-xl text-red-500 font-bold md:text-3xl text-center mt-5'>
            Associated Companies
          </h1>
        </div>

        <div className='flex flex-wrap justify-center gap-4 sm:flex-col sm:items-center md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3'>
          <SubAssociated
            link={""}
            image={partner1}
            title={"Our LMS partner"}
          />
          <SubAssociated
            link={""}
            image={partner2}
            title={"Our Non Credit Course Partner"}
          />
          <SubAssociated
            link={""}
            image={partner1}
            title={"Our LMS partner"}
          />
          <SubAssociated
            link={""}
            image={partner1}
            title={"Our LMS partner"}
          />
          <SubAssociated
            link={""}
            image={partner1}
            title={"Our LMS partner"}
          />
        </div>
      </div>
    );
  }
}

export default AssociatedCompanies;
