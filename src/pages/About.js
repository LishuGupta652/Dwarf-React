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
      <Header
        title="About Us"
        background="linear-gradient(to right, #de6262, #ffb88c)"
      >
        <h1 className="title">About</h1>
      </Header>
      <WhoAreWe />
      <AboutInfo />
    </>
  );
};

export default About;
