import React,{useEffect} from "react";
import Image from "./programming.jpg";
 

import TypeWriter from "./typewriter";
import data from "./Data";
import AOS from 'aos';
import 'aos/dist/aos.css';

import About from "./About";
 
//import {  BsArrowDownSquareFill } from "react-icons/bs";



function Home(){
  useEffect(() => {
    AOS.init();
});
// const onButtonClick = () => {
//    const pdfUrl = "AftabResume.pdf";  
//    const link = document.createElement("a");
//    link.href = pdfUrl;
//    link.download = "AftabResum.pdf";
//   // Append the link to the document body
//   document.body.appendChild(link);
//   link.click();
  
   
//   document.body.removeChild(link);
//};
const openPdfInNewTab = () => {
  const pdfUrl = "AftabResume.pdf"; // Replace with the actual path to your PDF file

  // Open the PDF in a new tab or window
  const newWindow = window.open(pdfUrl, '_blank');

  // After opening the new tab/window, check if it's loaded and then provide download option
  if (newWindow) {
      // Provide a download button or link on your original page
      const downloadButton = document.createElement("button");
      downloadButton.textContent = "Download PDF";
      downloadButton.onclick = () => {
          // Create a new link element
          const link = document.createElement("a");

          // Set the href attribute to the PDF URL
          link.href = pdfUrl;

          // Set the download attribute with the desired file name for the downloaded file
          link.download = "AftabResume.pdf"; // This is optional, you can change the downloaded file name

          // Append the link to the document body
          document.body.appendChild(link);

          // Programmatically click the link to start the download
          link.click();

          // Clean up and remove the link from the document
          document.body.removeChild(link);
      };

      // Append the download button to your original page
      document.body.appendChild(downloadButton);
  } else {
      alert("allow");
  }
};
    return(
      <div>
    <div className="px-5 pt-32 pb-8 text-white home-1">
        <div className="container grid items-center justify-center mx-auto md:grid-cols-2 md:justify-between">
          <div className="pb-5 hero-info md:pb-60 md:pt-0"  >
            <h1 className="text-4xl lg:text-5xl">
              Hi, I am <TypeWriter texts={data}  className="pt-0 text-accent" /> 
              
            </h1>
            <p className="pt-10 pb-10 font-mono text-xl">
              I am proficient in JavaScript, React.js and Tailwind CSS
            </p>
            <div  data-aos="zoom-in-right"
            data-aos-duration="2500"
              > 
              
            <a
              href=" https://github.com/mdaftab41?tab=repositories "
              className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent m-3 rounded-xl"
            >
              See Projects
            </a>
            <a
              href="/#projects"
              className="px-6 py-3    text-white download-btn bg-accent hover:bg-transparent rounded-xl m-3 border-2 border-[#7477FF]   md:w-full"
            >
            <button onClick={ openPdfInNewTab}>
            RESUME
        </button>
            </a>
            </div>
          </div>
  
          <div className="pb-0" data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="2500"
          >
            <img
              src={Image}
              alt="coding illustration"
              className="lgw-[80%] ml-auto movearrow w-130 h-120 rounded-sm "
            />
          </div>
        </div>
        </div>
        <About /> 
    </div>
    )
}
export default Home;