import React from "react";
import * as SC from "./ContactInfo.style";
import email from "../../assets/icons/email.svg";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";

const ContactInfo = () => {
  return (
    <SC.ContactList>
      <li>
        <a href="mailto:hello@kinau.co.uk">
          <img src={email} alt="email"></img>
          hello@kinau.co.uk
        </a>
      </li>
      <li>
        <a
          href="https://github.com/kin-au"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={github} alt="github"></img>
          github.com/kin-au
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com/in/kin-au"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin"></img>
          linkedin.com/in/kin-au
        </a>
      </li>
    </SC.ContactList>
  );
};

export default ContactInfo;
