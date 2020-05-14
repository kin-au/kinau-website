import React from "react";
import * as SC from "./About.style";

const About = () => {
  return (
    <SC.Section>
      <div className="contentWrapper">
        <h3>
          Hi! Thanks for visiting my portfolio site and taking the time to learn
          more about me.
        </h3>
        <div className="detailsContainer">
          <details open="true">
            <summary>Who am I?</summary>
            <p>
              I am a <strong>web developer</strong> with a successful previous
              career in insurance, now looking to bring my professional
              experience into a new challenge and{" "}
              <strong>build a career</strong> in the tech industry. In my spare
              time, you’re most likely to find me playing the piano and learning
              new music, scaling the wall at a bouldering gym, or tinkering on
              my project car.
            </p>
          </details>
          <details open="true">
            <summary>What's my background?</summary>
            <p>
              I was first introduced to programming in early 2019 whilst working
              closely with external software developers, and was intrigued by
              how it seemed you could build anything and solve all kinds of
              problems using code. I started spending all my free time teaching
              myself HTML, CSS and JavaScript. My interest in coding grew as I
              started attending <strong>meetup events</strong> and{" "}
              <strong>conferences</strong>, and speaking to different people in
              the tech industry. Soon enough, I made it my goal to transition to
              tech.
            </p>
            <p>
              Being accepted onto{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.foundersandcoders.com"
              >
                Founders and Coders (FAC)
              </a>
              , a <strong>highly selective</strong> full stack JavaScript
              bootcamp, was a major turning point in achieving this. Throughout
              the 4 month course, I cemented my existing knowledge and learnt
              not only new technical skills, but also developed crucial soft
              skills through peer-led learning, <strong>self-organising</strong>{" "}
              to meet time sensitive deadlines, and working in{" "}
              <strong>multidisciplinary teams</strong>. Having started my
              journey as a self-taught developer, I am proud to now be{" "}
              <strong>mentoring students</strong> at{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://codebar.io"
              >
                Codebar.io
              </a>{" "}
              and FAC.
            </p>
          </details>
          <details open="true">
            <summary>What makes me different?</summary>
            <p>
              I am looking for a role that aligns with my core values and career
              goals. With an <strong>industry-leading education</strong> from
              FAC, combined with years of{" "}
              <strong>professional experience</strong>, I have gained a set of
              skills that set me apart from the typical graduate, including:
            </p>
            <ul>
              <li>
                <strong>Agile</strong> development (
                <strong>Scrum Master</strong> for <a href="/Projects">humble</a>
                )
              </li>
              <li>
                Using <strong>Test Driven Development</strong>
              </li>
              <li>
                Familiarity with <strong>Git</strong> workflow
              </li>
              <li>
                Implementing accessible, responsive{" "}
                <strong>mobile-first</strong> design
              </li>
              <li>
                Experience with <strong>pair programming</strong>, giving{" "}
                <strong>code reviews</strong>, <strong>mentoring</strong>
              </li>
              <li>
                Managing the <strong>full life cycle</strong> of projects (from
                wire-framing, prototyping and user testing, through to iterative
                development and product handover).
              </li>
            </ul>
            <p>
              What I’m most interested in is building and fixing things with
              simple, robust solutions. In terms of programming, this means
              writing code in a way that is efficient, uncomplicated, and easy
              for anyone to read, maintain and update. I would love to use my
              skills and tools to create a <strong>positive impact</strong> by
              solving real world problems, making people’s lives easier and
              better.
            </p>
            <p>
              Personally, as a very driven and self-motivated individual, I
              really enjoy pushing and challenging myself. I always strive to be
              my best self, and I want to bring my enthusiasm and positive
              attitude into an environment that promotes autonomy, taking on{" "}
              <strong>responsibility</strong> and <strong>ownership</strong> of
              work. I am keen to hit the ground running, contributing and
              collaborating with a <strong>diverse</strong> team in a culture
              that encourages <strong>continued learning</strong> and growth as
              a developer.
            </p>
            <p>
              If you would like to get in touch, just say{" "}
              <a href="mailto:hello@kinau.co.uk">hello@kinau.co.uk</a>
            </p>
          </details>
          <details open="true">
            <summary>Recent adventures and new learnings</summary>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.arduino.cc"
              >
                Arduino
              </a>
            </p>
            <ul>
              <li>an electronics platform for hardware prototyping</li>
            </ul>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://cs50.harvard.edu/x/2020/puzzles"
              >
                Harvard CS50x Puzzle Day 2020
              </a>
            </p>
            <ul>
              <li>1 of only 299 teams to successfully solve all 8 puzzles</li>
            </ul>
            <p>New tech/tools:</p>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://vuejs.org"
                >
                  Vue.js
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
