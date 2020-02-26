import styled from "styled-components";

const Footer = styled.footer`
  position: fixed;
  border-bottom: 1.1rem solid #9dc6ec;
  bottom: 0;
  left: 0;
  right: 0%;

  @media (min-width: 768px) {
    border-bottom-width: 1.5rem;
  }
`;

export { Footer };
