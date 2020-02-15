import styled from "styled-components";

const Nav = styled.nav`
  background-color: #15416b;
  color: #ffffff;
  position: fixed;
  width: 100vw;
  bottom: 0;
  right: 0;
  font-size: 1.5rem;
  text-align: right;

  ul {
    padding-left: 0;
    list-style-type: none;
    text-transform: uppercase;
  }

  /*   a:hover {
    border-bottom: 10px solid #9dc6ec;
    animation-name: onHover;
    animation-duration: 0.2s;
  }

  @keyframes onHover {
    from {
      border-bottom: none;
    }
    to {
      border-bottom: 10px solid #9dc6ec;
    }
  } */

  li {
    padding: 0.8rem;
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
  bottom: 0;
  right: 0;
  font-size: 2rem;
  height: 3rem;
  width: 3rem;
`;

export { Nav, NavButton };
