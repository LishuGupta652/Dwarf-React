import React from "react";
import Header from "../components/Header";
import WhoAreWe from "../components/AboutPage/WhoAreWe";
import AboutInfo from "../components/AboutPage/AboutInfo";

const About = () => {
  return (
    <>
      <Header title="About Us" />
      <WhoAreWe />
      <AboutInfo />
    </>
  );
};

export default About;
