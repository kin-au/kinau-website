import styled from "styled-components";

const ContactList = styled.ul`
  display: none;
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  font-size: 1.5rem;
  list-style-type: none;
  padding-left: 0;

  @media (min-width: 768px) {
    display: block;
  }

  li {
    opacity: 1;
    transition: 0.4s;
  }

  li:hover {
    opacity: 0.7;
    transition: 0.2s;
  }

  a {
    display: inline-block;
    width: 100%;
    text-align: right;
    text-decoration: none;
    color: #15416b;
  }

  a:visited {
    color: #15416b;
  }

  img {
    vertical-align: middle;
    height: 4rem;
    width: 4rem;
    padding: 0.3rem 0 0.3rem 0.8rem;
  }
`;

export { ContactList };
