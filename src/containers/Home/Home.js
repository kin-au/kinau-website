import React from "react";
import * as SC from "./Home.style";

const Home = () => {
  return (
    <SC.Section>
      <div className="contentWrapper">
        <h3>Hi, I’m Kin, thanks for checking out my website!</h3>
        <p>As you’ve probably guessed, I'm a software engineer.</p>
        <p>
          I love building things that deliver{" "}
          <strong>pragmatic solutions</strong> to real-world problems, always
          striving for clean, robust and efficient code that is easy to read and
          maintain. My commercial experience includes building industry-leading{" "}
          <strong>web</strong> and <strong>mobile</strong> based apps, and
          proficiency in working across the full project life-cycle.
        </p>
        <p>
          I enjoy being in a positive environment that promotes{" "}
          <strong>autonomy</strong>, taking on <strong>responsibility</strong>{" "}
          and ownership of work. I am a driven and self-motivated individual,
          both personally and professionally – I hate turning down a challenge!
        </p>
        <p>
          Some of the things I value, in no particular order: team
          collaboration; continued learning and growth; fresh coffee; direct and
          honest feedback; people who <strong>share their snacks</strong>.
        </p>
        <p>
          In my spare time, you’ll probably find me scaling the wall at a
          bouldering gym, playing the piano and learning new music, or tinkering
          on my project car. If you would like to get in touch, just say{" "}
          <strong>
            <a href="mailto:hello@kinau.co.uk">hello@kinau.co.uk</a>
          </strong>
        </p>
      </div>
    </SC.Section>
  );
};

export default Home;
