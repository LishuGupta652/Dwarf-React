import React from "react";
import Header from "../components/Header";
import WhoAreWe from "../components/AboutPage/WhoAreWe";
import AboutInfo from "../components/AboutPage/AboutInfo";
import TypewriterEffect from "../components/TypewriterEffect";

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header title="About Us" backgroundImage="about.jpg">
        <TypewriterEffect title="About Us .." />
      </Header>
      <WhoAreWe />
      <AboutInfo />
    </>
  );
};

export default About;
