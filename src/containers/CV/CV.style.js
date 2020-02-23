import styled from "styled-components";

const CV = styled.section`
  margin: 2rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 100;

  div {
    display: block;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: #15416b;
    font-size: 1.2rem;
  }

  a:visited {
    color: #15416b;
  }

  @media (min-width: 768px) {
    position: fixed;
    margin: 17rem 2rem 30vw 35vw;
  }
`;

export { CV };
