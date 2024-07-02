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
    <div className="mx-0 text-white bg-gray-900"> 
    <h className="mx-auto text-center border-b-4 border-gray-500 border-dotted about md:mx-40 lg:mx-80" data-aos="fade-in">
    Contact Me
  </h>
    <div className="grid items-center justify-center mx-auto md:grid-cols-2 md:justify-between lg:mx-20">
      <div data-aos="zoom-in">
        <Form  className="text-black ms:px-0 min-w-screen"/>
      </div>
      <div className="py-10 md:pt-0"  >
        <ContactDetail />
      </div>
    </div>
    </div>
  );
}
export default Contact;
