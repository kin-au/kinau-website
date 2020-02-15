import styled from "styled-components";

const Header = styled.header`
  text-transform: uppercase;

  h1 {
    font-size: 4rem;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: #15416b;
  }

  h3 {
    font-size: 1.5rem;
  }

  .mobileView {
    @media (min-width: 321px) {
      display: none;
    }
  }

  .desktopView {
    display: none;
    @media (min-width: 321px) {
      display: block;
    }
  }
`;

export { Header };
