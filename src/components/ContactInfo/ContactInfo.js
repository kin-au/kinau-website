import React from "react";
import * as SC from "./ContactInfo.style";
import email from "../../assets/email.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

const ContactInfo = () => {
  return (
    <SC.ContactList>
      <li>
        <a href="mailto:hello@kinau.co.uk">
          hello@kinau.co.uk
          <img src={email} alt="email" className="contact-logo"></img>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/kin-au"
          rel="noopener noreferrer"
          target="_blank"
        >
          github.com/kin-au
          <img src={github} alt="github" className="contact-logo"></img>
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com/in/kin-au"
          rel="noopener noreferrer"
          target="_blank"
        >
          linkedin.com/in/kin-au
          <img src={linkedin} alt="linkedin" className="contact-logo"></img>
        </a>
      </li>
    </SC.ContactList>
  );
};

export default ContactInfo;
