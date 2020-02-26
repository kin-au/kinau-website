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
          hello@kinau.co.uk
          <img src={email} alt="email"></img>
        </a>
      </li>
      <li>
        <a
          href="https://www.github.com/kin-au"
          rel="noopener noreferrer"
          target="_blank"
        >
          github.com/kin-au
          <img src={github} alt="github"></img>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/kin-au"
          rel="noopener noreferrer"
          target="_blank"
        >
          linkedin.com/in/kin-au
          <img src={linkedin} alt="linkedin"></img>
        </a>
      </li>
    </SC.ContactList>
  );
};

export default ContactInfo;
