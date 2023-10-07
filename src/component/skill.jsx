import React from "react";
//import ProgressBar from "@ramonak/react-progress-bar";
import SkillIcon from "./Skill-icon";
import Bar from "./Progress";

function Skill() {
  return (
    <div className=" bg-cyan-900 bar">
      <h1 className="text-center border-b-4 border-indigo-600 border-dotted about md:mx-52">
        Skills
      </h1>
      <div className="mt-0 text-white mx-80 md:mx-44 about-info">
        <p>
          I have a passion for acquiring new skills and keeping up with the
          latest advancements in technology. Currently, I am most proficient in
          using the following technical tools and technologies:
        </p>
      </div>
      <div className="container grid justify-center w-auto h-auto bg-white rounded-lg md:grid-cols-2 md:justify-between md:h-auto md:mx-36">
        <div className="text-black ">
          <h2 className="my-5 font-bold text-center">I have experience with these technologies</h2>
          <SkillIcon className="" />
        </div>
        <div className="w-auto text-black">
        <Bar />
        </div>
      </div>
    </div>
  );
}
export default Skill;
