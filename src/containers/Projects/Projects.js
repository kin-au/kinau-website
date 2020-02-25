import React from "react";
import * as SC from "./Projects.style";

const Projects = () => {
  return (
    <SC.Projects>
      <div className="contentWrapper">
        <h2>Recent projects:</h2>
        <div class="projectsContainer">
          <article>
            <div className="leftContent">
              <h3 className="projectName">Gateway 2 Heritage</h3>
              <h4>DevOps & Developer</h4>
              <p>
                <span className="subheading">Stack: </span>Airtable database,
                Netlify functions, React.js
              </p>
              <p>
                <span className="subheading">Demo: </span>
                <a
                  href="github.com/fac18/t4b-g2h"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  gateway2heritage.netlify.com
                </a>
              </p>
              <p>
                <span className="subheading">Code: </span>
                <a
                  href="github.com/fac18/t4b-g2h"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  github.com/fac18/t4b-g2h
                </a>
              </p>
            </div>
            <div className="rightContent">PHOTO HERE</div>
            <ul>
              <li>
                An image licensing platform for small heritage and cultural{" "}
                museums in the UK
              </li>
              <li>
                As DevOps lead for our team, took on responsibility of planning
                and setting up the project <strong>architecture</strong> and{" "}
                <strong>infrastructure</strong>
              </li>
              <li>
                Selected and implemented tools that would be suitable for the{" "}
                project specification, including for <strong>deployment</strong>
                , <strong>continuous integration</strong> and{" "}
                <strong>code consistency</strong> across the team
              </li>
            </ul>
          </article>
          <article>
            <div className="leftContent">
              <h3 className="projectName">Humble</h3>
              <h4>Scrum Master & Developer</h4>
              <p>
                <span className="subheading">Stack: </span>Express, PostgreSQL,
                React.js
              </p>
              <p>
                <span className="subheading">Demo: </span>
                <a
                  href="wearehumble.herokuapp.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  wearehumble.herokuapp.com
                </a>
              </p>
              <p>
                <span className="subheading">Code: </span>
                <a
                  href="github.com/fac18/humble"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  github.com/fac18/humble
                </a>
              </p>
            </div>
            <div className="rightContent">PHOTO HERE</div>
            <ul>
              <li>
                A social platform enabling people to connect with their local{" "}
                community by offering up and receiving skills to share
              </li>
              <li>
                As Scrum Master in our team of four, ensured that the team{" "}
                followed <strong>Agile development principles</strong>, and held{" "}
                <strong>scrum events</strong> such as the daily standup, sprint
                planning, sprint review and sprint retrospective
              </li>
              <li>
                Facilitated efficient teamwork by guiding{" "}
                <strong>decision making</strong>,{" "}
                <strong>clearing blockers</strong> and{" "}
                <strong>communicating project goals</strong>
              </li>
              <li>
                Implemented a global process guide, including{" "}
                <strong>linting</strong> and naming conventions, to ensure{" "}
                consistent code style and a{" "}
                <strong>standardised team workflow</strong>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </SC.Projects>
  );
};

export default Projects;
