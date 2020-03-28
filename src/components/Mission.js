import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Mission = () => {
  return (
    <>
      <div className="mission">
        <div className="mission-container">
          <ScrollAnimation animateOnce animateIn="fadeIn">
            <h1 className="heading">Our mission</h1>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="fadeIn">
            <p>
              To Help India Achieve its smart City Objective, by Providing
              Innovation, Best in Class Consulting, Solutions and services. We
              shall make a joy for all stakeholders to work with us.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
};

export default Mission;
