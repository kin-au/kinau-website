import styled from "styled-components";

const Projects = styled.section`
  margin: 2rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  word-wrap: break-word;

  article {
    /* max-width: 400px; */
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

  p {
    margin: 0;
  }
  /* .projectDetails {
    list-style-type: none;
    color: #333333;
    padding-left: 0;
  } */

  .subheading {
    font-weight: 700;
  }

  .projectName {
    font-family: "Raleway Black", sans-serif;
    font-weight: 700;
    font-size: 1.2em;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    /* display: block; */
    /* margin: 12rem 2rem 30vw 35vw; */
    margin-top: 1.65rem;
    margin-bottom: 1.5rem;
    position: relative;
    height: 100%;
    overflow: auto;

    .projectsContainer {
      /* display: flex; */
      margin-top: 1rem;
      /* align-content: space-around; */
      width: 100%;
    }

    .contentWrapper {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }

    article {
      margin-right: 1rem;
      padding: 1rem;
      /* min-width: 300px; */
    }

    .leftContent {
      display: inline-block;
      width: 50%;
    }

    .rightContent {
      display: inline-block;
      width: 50%;
    }
  }
`;

export { Projects };
