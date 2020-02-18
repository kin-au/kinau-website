import styled from "styled-components";

const Projects = styled.section`
  margin: 2rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  word-wrap: break-word;

  article {
    max-width: 400px;
    border: 2px solid #9dc6ec;
    margin-bottom: 1rem;
    padding: 0.5rem;
  }

  a {
    text-decoration: none;
    color: #15416b;
  }

  a:visited {
    color: #15416b;
  }

  .projectDetails {
    list-style-type: none;
    color: #333333;
    padding-left: 0;
  }

  .subheading {
    font-weight: 700;
  }

  .projectName {
    font-family: "Raleway Black", sans-serif;
    font-weight: 700;
    font-size: 1.2em;
    text-transform: uppercase;
  }
`;

export { Projects };
