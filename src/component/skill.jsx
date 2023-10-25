import React from "react";
//import ProgressBar from "@ramonak/react-progress-bar";
import SkillIcon from "./Skill-icon";
import Bar from "./Progress";

function Skill() {
  return (
    <div className=" bg-zinc-950 bar">
      <h1 className="text-center border-b-4 border-gray-500 border-dotted about md:mx-48">
        Skills
      </h1>
      <div className="mx-8 mt-0 text-white md:mx-44 ">
        <p>
          I have a passion for acquiring new skills and keeping up with the
          latest advancements in technology. Currently, I am most proficient in
          using the following technical tools and technologies:
        </p>
      </div>
      <div className="container grid justify-center w-auto h-auto mx-4 bg-white rounded-lg md:grid-cols-2 md:justify-between md:h-auto md:mx-36">
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
