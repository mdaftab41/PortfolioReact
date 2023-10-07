import React from "react";
import Image from "./aftab-Image-1.png";
import TypeWriter from "./typewriter";
import data from "./Data";
 



function Home(){
    return(
    <div className="px-5 py-32 text-white home-1">
        <div className="container grid items-center justify-center mx-auto md:grid-cols-2 md:justify-between">
          <div className="pb-5 hero-info md:pb-0">
            <h1 className="text-4xl lg:text-6xl ">
              Hi, I am <TypeWriter texts={data}  className="pt-0 text-accent"/> 
              
            </h1>
            <p className="py-5">
              I am proficient in JavaScript, React.js and Tailwind CSS
            </p>
            <a
              href="/#projects"
              className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent m-3 rounded-xl"
            >
              See Projects
            </a>
            <a
              href="/#projects"
              className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent m-3 rounded-xl"
            >
              Resume
            </a>
          </div>
  
          <div className="">
            <img
              src={Image}
              alt="coding illustration"
              className="lgw-[80%] ml-auto movearrow w-130 h-120 rounded-sm"
            />
          </div>
        </div>
    </div>
    )
}
export default Home;