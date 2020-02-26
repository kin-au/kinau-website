import React from "react";
import * as SC from "./Contact.style";
import email from "../../assets/icons/email.svg";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";

const Contact = () => {
  return (
    <SC.Contact>
      <h2>Get in touch! You'll find me at:</h2>
      <ul>
        <li>
          <a href="mailto:hello@kinau.co.uk">
            <img src={email} alt="email" className="contact-logo" />
            hello@kinau.co.uk
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/kin-au"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={github} alt="github" className="contact-logo" />
            github.com/kin-au
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kin-au"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" className="contact-logo" />
            linkedin.com/in/kin-au
          </a>
        </li>
      </ul>
    </SC.Contact>
  );
};

export default Contact;
