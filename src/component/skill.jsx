import React,{useEffect} from "react";
//import ProgressBar from "@ramonak/react-progress-bar";
import SkillIcon from "./Skill-icon";
import Bar from "./Progress";
import AOS from 'aos';
import 'aos/dist/aos.css';
  
 import Contact from "./Contact";

function Skill() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
});
  return (
    <div> 
    <div className=" bg-zinc-950 bar">
      <h1 className="text-center border-b-4 border-gray-500 border-dotted about md:mx-48 " data-aos="flip-up">
        Skills
      </h1>
      <div className="py-5 mx-8 mt-0 font-serif text-white md:mx-44"  data-aos="fade-up">
        <p>
          I have a passion for acquiring new skills and keeping up with the
          latest advancements in technology. Currently, I am most proficient in
          using the following technical tools and technologies:
        </p>
      </div>
      <div className="container grid justify-center w-auto h-auto mx-4 bg-white rounded-lg md:grid-cols-2 md:justify-between md:h-auto md:mx-28 lg:mx36">
        <div className="text-black ">
          <h2 className="my-5 font-serif font-bold text-center " data-aos="fade-up">I have experience with these technologies</h2>
          <SkillIcon className="" data-aos="fade-up-right"/>
        </div>
        <div className="w-auto text-black" data-aos="fade-left">
        <Bar data-aos="zoom-in"/>
        </div>
      </div>
      </div>
      <Contact />
    </div>
  );
}
export default Skill;
