import styled from "styled-components";

const Header = styled.header`
  text-align: right;
  text-transform: uppercase;

  h1 {
    margin-right: 2rem;
    margin-block-start: 1rem;
    margin-block-end: 0;
    font-family: "Raleway Black", sans-serif;
    font-weight: 1000;
    letter-spacing: 0.4rem;
    font-size: 3.5rem;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: #15416b;
  }

  h3 {
    margin-right: 2rem;
    margin-block-start: 0;
    margin-block-end: 1rem;
    font-family: "Open Sans", sans-serif;
    letter-spacing: 0.2rem;
    font-size: 0.85rem;
  }

  hr {
    border: 0.5rem solid;
    color: #9dc6ec;
    background-color: #9dc6ec;
    width: calc(100vw - 3rem);
    margin-left: 0;
  }

  .mobileView {
    @media (min-width: 450px) {
      display: none;
    }
  }

  .desktopView {
    display: none;
    @media (min-width: 450px) {
      display: block;
    }
  }
`;

export { Header };
