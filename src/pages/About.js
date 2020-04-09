import React from "react";
import Header from "../components/Header";
import WhoAreWe from "../components/AboutPage/WhoAreWe";
import AboutInfo from "../components/AboutPage/AboutInfo";

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header title="About Us" />
      <WhoAreWe />
      <AboutInfo />
    </>
  );
};

export default About;
