import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Mission from "../components/Mission";
import Products from "../components/Products";

import ScrollAnimation from "react-animate-on-scroll";

const Home = () => {
  return (
    <>
      <Header title="Home" />

      <ScrollAnimation animateIn="fadeIn">
        <About />
      </ScrollAnimation>

      <div className="md-space" />
      <Mission />

      <div className="md-space" />
      <Products />
      <div className="space"></div>
    </>
  );
};

export default Home;
