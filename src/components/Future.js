import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Future = () => {
  return (
    <>
      <div className="showcase">
        <ScrollAnimation animateIn="fadeIn">
          <div className="showcase-two ">
            <div className="showcase-img showcase-img-1"></div>
            <div className="showcase-content">
              <h1>Futuristic</h1>
              <h3>
                Business strategies designed to help you define a new future by
                rejecting status quo.
              </h3>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" delay={300}>
          <div className="showcase-two">
            <div className="showcase-img showcase-img-2"></div>
            <div className="showcase-content">
              <h1>Focus on breakthrough</h1>
              <h3>
                Our company delivers solutions that drive business results every
                minute!
              </h3>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default Future;
