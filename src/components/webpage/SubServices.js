export const SubServices = ({ image, title, description, link }) => {
    return (
      <div className="services relative bg-transparent-black my-3 w-full md:w-1/3 lg:w-1/4 p-2">
        <div className="p-3 my-1 bg-slate-200 rounded-lg  ease-in">
        {/* card image */}
        <div className="flex justify-center">
          <img
              src={image}
              alt=""
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover rounded-full"
          />
        </div>
          
        <div>
          <h2 className=" px-3 py-2 text-black text-xl font-semibold md:right-2 lg:right-4  text-center">
            {title} 
          </h2>
        </div>
          
        <h2 className=" left-0 w-full text-lg sm:text-xl lg:text-xl font-sans text-black text-center px-4">
            {description}
        </h2>

        <div className="flex justify-center items-center mt-4">
          <a
            href={link}
            className="bg-blue-500 text-white px-3 py-2 font-semibold rounded-md hover:bg-blue-600 transition-colors duration-200">
            Learn More
          </a>
        </div>
        </div>
      </div>
    );
  };
  