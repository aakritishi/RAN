import { SubServices } from "./SubServices";
import robotics from '../media/images/robotics.jpeg';
import education from "../media/images/education.jpeg";
import ideaincubation from "../media/images/ideaincubation.png";

export const Services = () => {
  return (
    <div className="text-2xl">

        Services
      </div>

      <div className="course-desc w-[94%] flex flex-col sm:flex-row flex-wrap justify-center mx-auto gap-6">
        <SubServices
          image={robotics}
          title={"Robotics"}
          description={"Learn about robotics"}
          link={""}
        />
        <SubServices
          image={education}
          title={"Education"}
          description={"learn about education which we provide"}
          link={""}
        />
        <SubServices
          image={ideaincubation}
          title={"Idea Incubation"}
          description={"idea incubation "}
          link={""}
        />
      </div>
    </div>
  );
};
