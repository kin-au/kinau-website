import styled from "styled-components";

const Projects = styled.section`
  padding: 2rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  word-wrap: break-word;

  .projectDetails {
    list-style-type: none;
    padding-left: 0;
  }

  article {
    max-width: 400px;
    border: 2px solid #9dc6ec;
    margin-bottom: 1rem;
    padding: 0.5rem;
  }

  .subheading {
    font-weight: 700;
  }

  .projectName {
    font-family: "Raleway Black", sans-serif;
    font-weight: 700;
    font-size: 1.2em;
  }
`;

export { Projects };
