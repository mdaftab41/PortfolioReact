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
    <div className="min-h-screen mx-0 text-white bg-gray-900"> 
    <h1 className="mx-auto text-center border-b-4 border-gray-500 border-dotted about" data-aos="fade-in">
  Contact Me
</h1>

    <div className="grid items-center justify-center mx-auto md:grid-cols-2 md:justify-between lg:mx-20">
      <div data-aos="zoom-in">
        <Form  className="w-full text-black ms:px-0 min-w-screen"/>
      </div>
      <div className="pt-4 pb-28 md:pt-0 md:text-xl "  >
        <ContactDetail />
      </div>
    </div>
    </div>
  );
}
export default Contact;
