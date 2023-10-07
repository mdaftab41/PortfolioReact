import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram ,    faGithub,faLinkedin } from "@fortawesome/free-brands-svg-icons";

function ContactDetail() {
  return (
    <div className="mx-40">
      <h1>
        I am currently open for a fulltime Frontend Developer role. If you want
        to discuss about that feel free to email me or call me.
      </h1>
      <h1>  Email:mdaftabalam49041@gmail.com</h1>
      <h1> mh3473@srmist.edu.in</h1>
      <h1>  Mobile Number: 7352205782</h1>
      <div class="social-container">
        <h3>Social Follow</h3>
      <a href="https://www.facebook.com/profile.php?id=100020936580838"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
      <a href="https://instagram.com/aftab9631?igshid=OGQ5ZDc2ODk2ZA=="
        className="instagram social" >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
      <a href="https://instagram.com/aftab9631?igshid=OGQ5ZDc2ODk2ZA=="
        className="instagram social">
        <FontAwesomeIcon icon={ faGithub} size="2x" />
      </a>
      <a href="https://instagram.com/aftab9631?igshid=OGQ5ZDc2ODk2ZA=="
        className="instagram social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      </div>
    </div>
  );
}

export default ContactDetail;
