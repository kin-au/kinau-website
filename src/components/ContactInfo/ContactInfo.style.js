import styled from "styled-components";

const ContactList = styled.ul`
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  margin: 0;
  font-size: 1.5rem;
  list-style-type: none;
  padding-left: 0;

  a {
    text-decoration: none;
    color: #15416b;
    text-align: right;
    margin-right: 65vw;
  }

  a:visited {
    color: #15416b;
  }

  .contact-logo {
    vertical-align: middle;
    height: 4rem;
    width: 4rem;
    padding: 0.3rem 0.5rem;
  }
`;

export { ContactList };
