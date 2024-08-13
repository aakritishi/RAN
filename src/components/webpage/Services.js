import { SubServices } from "./SubServices";
import robotics from '../media/images/robotics.jpeg';
import education from "../media/images/education.jpeg";
import ideaincubation from "../media/images/ideaincubation.png";

export const Services = () => {
  return (
    <div className="">
        <h1 className='text-xl text-red-500 font-bold md:text-3xl text-center mt-5'>
          Products and Services
        </h1>

      <div className="course-desc w-full flex flex-col sm:flex-row flex-wrap justify-center mx-auto gap-6">
        <SubServices
          image={robotics}
          title={"Kanchi"}
          description={"Services Kanchi can provide is ..."}
          link={""}
        />
        <SubServices
          image={education}
          title={"product or service 2"}
          description={"description about product or service 2"}
          link={""}
        />
        <SubServices
          image={ideaincubation}
          title={"product or service 3"}
          description={"description about product or service 3"}
          link={""}
        />
      </div>
    </div>
  );
};
