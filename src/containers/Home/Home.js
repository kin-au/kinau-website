import React from "react";
import * as SC from "./Home.style";

const Home = () => {
  return (
    <SC.Section>
      <div className="contentWrapper">
        <h3>
          Hi, I’m Kin! Thanks for visiting my portfolio website and taking the
          time to learn more about me.
        </h3>
        <p>
          I am a <strong>web developer</strong> who loves building and fixing
          things with simple, robust solutions. For me, this means writing{" "}
          <strong>efficient</strong>, <strong>uncomplicated</strong> code, in a
          way that is easy for anyone to read, maintain and update. I really
          enjoy the process of taking a complex problem and breaking it down
          into much smaller, simpler components to solve. What I’m most excited
          about is using my skills and tools to create a positive{" "}
          <strong>impact</strong> by delivering{" "}
          <strong>pragmatic solutions</strong> to real-world problems, making
          people’s lives easier and better.
        </p>
        <p>
          I’m looking forward to bringing my enthusiasm and positive attitude
          into an environment that promotes autonomy and taking on{" "}
          <strong>responsibility</strong> and <strong>ownership</strong> of
          work. Personally, as a driven and self-motivated individual, I’m
          constantly pushing and challenging myself. I always strive to be my
          best self and am keen to hit the ground running,{" "}
          <strong>collaborating</strong> with a <strong>diverse</strong> team
          that encourages <strong>continuous learning</strong> and growth as a
          developer.
        </p>
        <p>
          In my spare time, you’ll probably find me scaling the wall at a
          bouldering gym, playing the piano and learning new music, or tinkering
          on my project car.
        </p>
      </div>
    </SC.Section>
  );
};

export default Home;
