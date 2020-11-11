import React from "react";
import * as SC from "./About.style";

const About = () => {
  return (
    <SC.Section>
      <div className="contentWrapper">
        <h3>
          Hi, I’m Kin! Thanks for visiting my portfolio website and taking the
          time to learn more about me.
        </h3>
        <div className="detailsContainer">
          <details open="true">
            <summary>Who am I?</summary>
            <p>
              I am a <strong>web developer</strong> who loves building and
              fixing things with simple, robust solutions. For me, this means
              writing <strong>efficient</strong>, <strong>uncomplicated</strong>{" "}
              code, in a way that is easy for anyone to read, maintain and
              update. I really enjoy the process of taking a complex problem and
              breaking it down into much smaller, simpler components to solve.
              What I’m most excited about is using my skills and tools to create
              a positive <strong>impact</strong> by delivering{" "}
              <strong>pragmatic solutions</strong> to real-world problems,
              making people’s lives easier and better.
            </p>
            <p>
              I’m looking forward to bringing my enthusiasm and positive
              attitude into an environment that promotes autonomy and taking on{" "}
              <strong>responsibility</strong> and <strong>ownership</strong> of
              work. Personally, as a driven and self-motivated individual, I’m
              constantly pushing and challenging myself. I always strive to be
              my best self and am keen to hit the ground running,{" "}
              <strong>collaborating</strong> with a <strong>diverse</strong>{" "}
              team that encourages <strong>continuous learning</strong> and
              growth as a developer.
            </p>
            <p>
              In my spare time, you’ll probably find me scaling the wall at a
              bouldering gym, playing the piano and learning new music, or
              tinkering on my project car.
            </p>
            <p>
              If you would like to get in touch, just say{" "}
              <strong>
                <a href="mailto:hello@kinau.co.uk">hello@kinau.co.uk</a>
              </strong>
            </p>
          </details>
          <details open="true">
            <summary>Timeline</summary>
            <h4>2018</h4>
            <p>
              Oct – I was introduced to programming whilst working closely with
              external software developers
            </p>
            <p>
              Dec – Most of my free time was being spent teaching myself HTML,
              CSS and JavaScript
            </p>
            <h4>2019</h4>
            <p>
              Feb – My interest in coding grew as I started attending meetup
              events and conferences, and speaking to different people in the
              tech industry
            </p>
            <p>May – I made it my goal to transition to tech</p>
            <p>
              Aug – Being accepted onto{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.foundersandcoders.com/"
              >
                Founders and Coders (FAC)
              </a>
              , a highly selective full stack JavaScript bootcamp, was a major
              turning point in achieving this
            </p>
            <p>Oct – I quit my insurance job to start FAC</p>
            <h4>2020</h4>
            <p>
              Jan – Whilst still at FAC, I began teaching students at{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://codebar.io"
              >
                Codebar.io
              </a>
            </p>
            <p>Feb – Graduated from Founders and Coders</p>
            <p>
              Mar – Mentored current students at FAC, teaching the curriculum
              and guiding teams through weekly projects
            </p>
            <p>
              Jul – Launched my career in tech as a Frontend Developer at{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://smartway2.com"
              >
                Smartway2
              </a>
            </p>
          </details>
          <details open="true">
            <summary>Recent adventures and new learnings</summary>
            <p>I'm not really the type to sit still! Recently I have:</p>
            <ul>
              <li>
                Continued to mentor (remotely) at{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://codebar.io"
                >
                  Codebar.io
                </a>
              </li>
              <li>
                Been playing with{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.arduino.cc"
                >
                  Arduino
                </a>
                , an electronics platform for hardware prototyping
              </li>
              <li>
                Completed{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://cs50.harvard.edu/x/2020/puzzles"
                >
                  Harvard's CS50x Puzzle Day 2020
                </a>
                , being 1 of only 299 teams to successfully solve all 8 puzzles
              </li>
              <li>
                Tried out different tech and tools like{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://vuejs.org"
                >
                  Vue.js
                </a>{" "}
                and{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://emberjs.com"
                >
                  Ember.js
                </a>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </SC.Section>
  );
};

export default About;
