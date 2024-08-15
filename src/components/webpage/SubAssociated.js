import React from 'react';

export const SubAssociated = ({ link, image, title }) => {
  return (
    <div className='text-center sm:w-full'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img 
          src={image} 
          alt={title} 
          className='mx-auto w-full max-w-xs sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] p-0 hover:p-2 transition-all duration-300' 
        />
      </a>
      <h2 className='text-lg font-semibold mt-2'>{title}</h2>
    </div>
  );
};
