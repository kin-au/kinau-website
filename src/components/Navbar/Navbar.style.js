import styled from "styled-components";

const Nav = styled.nav`
  font-size: 1.5rem;

  ul {
    padding-left: 0;
    list-style-type: none;
    text-transform: uppercase;
  }

  li {
    margin-top: 0.8rem;
  }

  a.selected {
    border-bottom: 10px solid #9dc6ec;
  }

  a:hover {
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
  }
`;

export default Nav;
