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
      <Header title="About Us" backgroundImage="about.jpg">
        <h1 className="title">About Us</h1>
      </Header>
      <WhoAreWe />
      <AboutInfo />
    </>
  );
};

export default About;
