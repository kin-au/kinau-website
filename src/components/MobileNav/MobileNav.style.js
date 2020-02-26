import styled from "styled-components";

const Nav = styled.nav`
  background-color: #15416b;
  color: #ffffff;
  position: fixed;
  width: 100vw;
  bottom: 1rem;
  right: 0;
  text-align: right;

  @media (min-width: 768px) {
    display: none;
  }

  ul {
    padding-left: 0;
    list-style-type: none;
    text-transform: uppercase;
    font-family: "Raleway Black", sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
  }

  li {
    padding: 0.8rem;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }

  a:visited {
    color: #ffffff;
  }

  a.selected {
    border-bottom: 10px solid #9dc6ec;
  }

  .bottomLink {
    margin-bottom: 3rem;
  }
`;

const NavButton = styled.button`
  background-color: #15416b;
  color: #ffffff;
  border: none;
  position: fixed;
  bottom: 1rem;
  right: 0;
  font-size: 2rem;
  height: 3rem;
  width: 3rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export { Nav, NavButton };
