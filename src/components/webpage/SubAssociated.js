import React from 'react';

export const SubAssociated = ({ link, image, title }) => {
  return (
    <div className='text-center sm:w-full'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img 
          src={image} 
          alt={title} 
          className='mx-auto w-40 h-40 max-w-[250px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] p-0 hover:p-2 transition-all duration-300 rounded-full object-cover' 
        />
      </a>
      <h2 className='text-lg font-semibold mt-2'>{title}</h2>
    </div>
  );
};
