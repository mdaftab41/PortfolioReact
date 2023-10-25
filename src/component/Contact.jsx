import ContactDetail from "./ContactDetail";
import Form from "./contactForm";
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
});
  return (
    <div className="text-white bg-gray-900"> 
    <h className ="mx-5 text-center border-b-4 border-gray-500 border-dotted about md:mx-40 lg:mx-96 " data-aos="fade-in">Contact Me</h>
    <div className="grid items-center justify-center mx-auto md:grid-cols-2 md:justify-between lg:mx-20">
      <div data-aos="zoom-in">
        <Form  className="text-black"/>
      </div>
      <div className="py-10 md:pt-0"  >
        <ContactDetail />
      </div>
    </div>
    </div>
  );
}
export default Contact;
