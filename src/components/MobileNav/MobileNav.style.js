import styled from "styled-components";

const Nav = styled.nav`
  font-size: 1.5rem;

  ul {
    padding-left: 0;
    list-style-type: none;
    text-transform: uppercase;
  }

  a {
    padding: 1rem;
  }

  a.selected {
    border-bottom: 10px solid #9dc6ec;
  }
`;

export { Nav };
