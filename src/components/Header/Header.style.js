import styled from "styled-components";

const Header = styled.header`
  text-align: right;
  text-transform: uppercase;

  h1 {
    margin-right: 2rem;
    margin-block-start: 1rem;
    margin-block-end: 0;
    font-size: 4.3rem;
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
    font-size: 1rem;
  }

  hr {
    border: 0.5rem solid #9dc6ec;
    width: 50%;
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
