import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterEffect = (props) => {
  return (
    <h1>
      <Typewriter
        options={{
          strings: [props.title],
          autoStart: true,
          loop: true,
          delay: 100,
          cursor: ".",
          start: 3000,
        }}
      />
    </h1>
  );
};

export default TypewriterEffect;
