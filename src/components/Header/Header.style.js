import styled from "styled-components";

const Header = styled.header`
  margin: 1rem;
  text-align: center;
  text-transform: uppercase;

  h1 {
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: 5rem;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: #15416b;
  }

  h3 {
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: 1.3rem;
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
