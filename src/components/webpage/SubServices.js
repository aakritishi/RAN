export const SubServices = ({ image, title, description, link }) => {
    return (
      <div className="course1 relative bg-transparent-black my-2 w-full md:w-1/3 lg:w-1/4 p-4">
        <div className="relative">
          <img
            src={image}
            alt=""
            className="w-full h-60 sm:h-64 lg:h-80 object-cover rounded-lg"
          />
          <div className=" w-full h-full bg-black opacity-50 rounded-lg"></div>
          <button className="bg-blue-500 px-3 py-2 text-white absolute top-4 right-4 md:right-2 lg:right-4 rounded-md shadow-md">
            {title} 
          </button>
          {/* Display description over the image */}
          <h2 className="absolute bottom-4 left-0 w-full text-lg sm:text-xl lg:text-2xl font-sans font-semibold text-white text-center px-4">
            {description}
          </h2>
        </div>
        <div className="flex justify-center items-center mt-4">
          <a
            href={link}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
            Learn More
          </a>
        </div>
      </div>
    );
  };
  