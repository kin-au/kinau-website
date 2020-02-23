import styled from "styled-components";

const Footer = styled.footer`
  hr {
    position: fixed;
    border: 0.5rem solid;
    color: #9dc6ec;
    background-color: #9dc6ec;
    width: 100vw;
    bottom: 0;
    margin-block-end: 0;
  }

  @media (min-width: 768px) {
    hr {
      border: 0.8rem solid;
    }
  }
`;

export { Footer };