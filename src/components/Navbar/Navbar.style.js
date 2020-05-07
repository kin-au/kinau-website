import styled from "styled-components";

const Nav = styled.nav`
  display: none;
  font-family: "Raleway Black", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  margin-top: 1.6rem;
  text-transform: uppercase;

  @media (min-width: 768px) {
    display: block;
  }

  ul {
    margin-block-start: 0;
    padding-left: 0;
    list-style-type: none;
    text-transform: uppercase;
    display: flex;
    flex-flow: row wrap;
  }

  li {
    flex: 1;
    margin: 2rem 2rem 0 2rem;
    text-align: left;
    white-space: nowrap;
  }

  a {
    color: #15416b;
    text-decoration: none;
    animation-name: offHoverBorder;
    animation-duration: 0.4s;
  }

  a.selected {
    border-bottom: 1.2rem solid #9dc6ec;
  }

  a:hover:not(.selected) {
    border-bottom: 1.2rem solid #9dc6ec;
    animation-name: onHoverBorder;
    animation-duration: 0.2s;
  }

  a:visited {
    color: #15416b;
  }

  @keyframes onHoverBorder {
    from {
      border-bottom: none;
    }
    to {
      border-bottom: 1.2rem solid #9dc6ec;
    }
  }

  @keyframes offHoverBorder {
    from {
      border-bottom: 1.2rem solid #9dc6ec;
    }
    to {
      border-bottom: none;
    }
  }
`;

export default Nav;
