import React from "react";
import * as SC from "./Projects.style";
import t4b from "../../assets/projects/g2h.gif";
import humble from "../../assets/projects/humble.gif";
import keeponflyin from "../../assets/projects/keeponflyin.gif";
import shouldigoout from "../../assets/projects/shouldigoout.gif";
import wtf from "../../assets/projects/wtf.gif";
import gifsthesia from "../../assets/projects/gifsthesia.gif";
import beartingstodo from "../../assets/projects/beartingstodo.gif";

const Projects = () => {
  return (
    <SC.Projects>
      <div className="contentWrapper">
        <h2>Recent projects:</h2>
        <div className="projectsContainer">
          <article>
            <div className="projectHeadline">
              <h3 className="projectName">Gateway 2 Heritage</h3>
              <h4>DevOps & Developer</h4>
              <div className="imageMobile">
                <img
                  src={t4b}
                  alt="tech for better project, gateway to heritage"
                />
              </div>
              <p>
                <span className="subheading">Stack/tools: </span>Airtable
                database, Netlify functions, React.js, Material UI
              </p>
              <p>
                <span className="subheading">Demo: </span>
                <a
                  href="https://gateway2heritage.netlify.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  gateway2heritage.netlify.com
                </a>
              </p>
              <p>
                <span className="subheading">Code: </span>
                <a
                  href="https://github.com/fac18/t4b-g2h"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  github.com/fac18/t4b-g2h
                </a>
              </p>
            </div>
            <div className="imageDesktop">
              <img
                src={t4b}
                alt="tech for better project, gateway to heritage"
              />
            </div>
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
            <div className="projectHeadline">
              <h3 className="projectName">Humble</h3>
              <h4>Scrum Master & Developer</h4>
              <div className="imageMobile">
                <img src={humble} alt="student project, humble" />
              </div>
              <p>
                <span className="subheading">Stack/tools: </span>Express,
                PostgreSQL, React.js, Google Maps API, Styled Components
              </p>
              <p>
                <span className="subheading">Demo: </span>
                <a
                  href="https://wearehumble.herokuapp.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  wearehumble.herokuapp.com
                </a>
              </p>
              <p>
                <span className="subheading">Code: </span>
                <a
                  href="https://github.com/fac18/humble"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  github.com/fac18/humble
                </a>
              </p>
            </div>
            <div className="imageDesktop">
              <img src={humble} alt="student project, humble" />
            </div>
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

          <article>
            <div className="projectHeadline">
              <h3 className="projectName">Keep on Flyin’</h3>
              <div className="imageMobile">
                <img
                  src={keeponflyin}
                  alt="founders and coders project, keep on flying"
                />
              </div>
              <p>
                <span className="subheading">Stack/tools: </span>React.js, HTML,
                CSS
              </p>
              <p>
                <span className="subheading">Code: </span>
                <a
                  href="https://github.com/fac18/nikkin-react-game"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  github.com/fac18/nikkin-react-game
                </a>
              </p>
            </div>
            <div className="imageDesktop">
              <img
                src={keeponflyin}
                alt="founders and coders project, keep on flying"
              />
            </div>
            <ul>
              <li>
                A Flappy-Birds inspired game where you must keep clicking to
                keep your GitHub avatar flying
              </li>
              <li>Used React with Hooks, and GitHub’s API</li>
              <li>
                Built as part of the Founders and Coders curriculum
                (introduction to React.js)
              </li>
            </ul>
          </article>

          <article>
            <div className="projectHeadline">
              <h3 className="projectName">Should I Go Out Today?</h3>
              <div className="imageMobile">
                <img
                  src={shouldigoout}
                  alt="founders and coders project, should I go out today"
                />
              </div>
              <p>
                <span className="subheading">Stack/tools: </span>Node.js, HTML,
                CSS
              </p>
              <p>
                <span className="subheading">Demo: </span>
                <a
                  href="https://dark-server-api.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  dark-server-api.herokuapp.com/
                </a>
              </p>
              <p>
                <span className="subheading">Code: </span>
                <a
                  href="https://github.com/fac18/week-5-DARK-server-Api"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  github.com/fac18/week-5-DARK-server-Api
                </a>
              </p>
            </div>
            <div className="imageDesktop">
              <img
                src={shouldigoout}
                alt="founders and coders project, should I go out today"
              />
            </div>
            <ul>
              <li>A web app to help you make that difficult decision</li>
              <li>
                Built as part of the Founders and Coders curriculum (back-end
                API calls)
              </li>
            </ul>
          </article>

          <article>
            <div className="projectHeadline">
              <h3 className="projectName">WTF – Where’s The Food</h3>
              <div className="imageMobile">
                <img src={wtf} alt="student project, WTF - where's the food" />
              </div>
              <p>
                <span className="subheading">Stack/tools: </span>Node.js, HTML,
                CSS
              </p>
              <p>
                <span className="subheading">Demo: </span>
                <a
                  href="https://wtf-wheres-the-food.herokuapp.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  wtf-wheres-the-food.herokuapp.com
                </a>
              </p>
              <p>
                <span className="subheading">Code: </span>
                <a
                  href="https://github.com/fac18/week4-cikp-autocomplete"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  github.com/fac18/week4-cikp-autocomplete
                </a>
              </p>
            </div>
            <div className="imageDesktop">
              <img src={wtf} alt="student project, WTF - where's the food" />
            </div>
            <ul>
              <li>
                An auto-complete widget site where you search for a country and
                discover its national dish
              </li>
              <li>
                Dynamic searching and filtering through a custom Dictionary file
              </li>
              <li>
                Built as part of the Founders and Coders curriculum
                (introduction to Node.js)
              </li>
            </ul>
          </article>

          <article>
            <div className="projectHeadline">
              <h3 className="projectName">Gifsthesia</h3>
              <div className="imageMobile">
                <img src={gifsthesia} alt="student project, gifsthesia" />
              </div>
              <p>
                <span className="subheading">Stack/tools: </span>XmlHttpRequest,
                HTML, CSS, JavaScript
              </p>
              <p>
                <span className="subheading">Code: </span>
                <a
                  href="https://github.com/fac18/week3-cikp-gifsthesia"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  github.com/fac18/week3-cikp-gifsthesia
                </a>
              </p>
            </div>
            <div className="imageDesktop">
              <img src={gifsthesia} alt="student project, gifsthesia" />
            </div>
            <ul>
              <li>
                Guess a random UK Chart song, with its lyrics represented as
                GIFs
              </li>
              <li>Implemented the MusixMatch and Giphy APIs </li>
              <li>
                Built as part of the Founders and Coders curriculum
                (introduction to APIs)
              </li>
            </ul>
          </article>

          <article>
            <div className="projectHeadline">
              <h3 className="projectName">Bear Tings To Do</h3>
              <div className="imageMobile">
                <img
                  src={beartingstodo}
                  alt="student project, bear tings to do"
                />
              </div>
              <p>
                <span className="subheading">Stack/tools: </span>HTML, CSS,
                JavaScript
              </p>
              <p>
                <span className="subheading">Demo: </span>
                <a
                  href="https://fac18.github.io/week2-ajnp-sbs-todolist/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  fac18.github.io/week2-ajnp-sbs-todolist/
                </a>
              </p>
              <p>
                <span className="subheading">Code: </span>
                <a
                  href="https://github.com/fac18/week2-ajnp-sbs-todolist"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  github.com/fac18/week2-ajnp-sbs-todolist
                </a>
              </p>
            </div>
            <div className="imageDesktop">
              <img
                src={beartingstodo}
                alt="student project, bear tings to do"
              />
            </div>
            <ul>
              <li>
                A to-do app with mark as done, sort by done, edit, and delete
                functionality
              </li>
              <li>Built as part of the Founders and Coders curriculum</li>
            </ul>
          </article>
        </div>
      </div>
    </SC.Projects>
  );
};

export default Projects;
