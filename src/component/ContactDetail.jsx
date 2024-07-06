import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FaInstagram } from 'react-icons/fa';

function ContactDetail() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div className="mx-5">
      <h1 className="font-mono" data-aos="fade-up">
        I am currently open for a fulltime Frontend Developer role. If you want
        to discuss about that feel free to email me or call me.
      </h1>
      <h1 className="font-serif" data-aos="fade-up">
        {" "}
        Email:mdaftabalam49041@gmail.com
      </h1>
      <h1 className="ml-12 font-serif"> mh3473@srmist.edu.in</h1>
      <h1 className="font-serif" data-aos="fade-up">
        {" "}
        Mobile Number: 7352205782
      </h1>
      <div className="">
      <div
        class="social-container flex justify-around pt-10 md:mx-4 lg:mx-20"
        data-aos="zoom-in"
      >
        <a
          href="https://www.facebook.com/profile.php?id=100020936580838"
          className=" facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        
          <a
        href="https://instagram.com/aftab9631?igshid=OGQ5ZDc2ODk2ZA=="
        className="instagram social insta-icon"
        id="gram"
        
        aria-label="Instagram"
      >
        <FaInstagram className="w-0 h-0" />
      </a>
        <a href=" https://github.com/mdaftab41" className="Github social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/md-aftab-alam-1bba22237/"
          className="linkedin social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        </div>
      </div>
    </div>
  );
}

export default ContactDetail;
//<FontAwesomeIcon icon={faInstagram} size="2x" />
//'service_043pogj', 'template_pv1bpah', form.current, 'llfasA3P2kyVi1tOC'
