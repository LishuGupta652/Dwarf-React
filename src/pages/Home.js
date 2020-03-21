import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Mission from "../components/Mission";
import Future from "../components/Future";
import Method from "../components/Method";
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
      <Future />
      <div className="lg-space" />
      <Method />
      <div className="lg-space" />
      <Products />
    </>
  );
};

export default Home;
