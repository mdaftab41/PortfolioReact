import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skill from "./skill";
 

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
});
  return ( <div>
 <section className="mt-0 bg-zinc-950 " id="about">
  <div className="" >
      <h2 className="text-center border-b-4 border-gray-500 border-dotted about md:mx-48" data-aos="flip-left">
        About Me
      </h2>
      <div className="mx-10 text-white md:mx-40 about-info"> 
      <p className="pt-5 font-serif" data-aos="fade-up">
        Hi, My Name Is Md Aftab Alam everyone calls me Alam. I am a
        Frontend Developer. I build beautifull websites with React, JavaScript, Css, Bootstrap and
        Tailwind CSS.
      </p>
      <p className="mt-3 font-serif" data-aos="fade-up">
        I am proficient in Frontend skills like React.js, Redux, Redux Tool
        Bootstrap, Tailwind CSS, SaSS, Css3 and many more.
      </p>

      <p className="mt-3 font-serif" data-aos="fade-up">In backend I know Node.js, Express.js, MongoDB, Database, API and Mongoose</p>

      <p className="mt-3 font-serif" data-aos="fade-up">
      I am pursuing B.Tech from SRM univercity,NCR Delhi. I have always been fascinated by technology and its potential to change the world, 
      and that's what led me to pursue a career in computer science.
      </p>
      </div>
    </div>
</section>
 <Skill />
</div>);
}

export default About;
