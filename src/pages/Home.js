import React from "react";
import Header from "../components/Header";
import WhoAreWe from "../components/AboutPage/WhoAreWe";
import Mission from "../components/Mission";
import Future from "../components/Future";
import Method from "../components/Method";
import Products from "../components/Products";

import ScrollAnimation from "react-animate-on-scroll";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header title="Home" />

      <ScrollAnimation animateOnce animateIn="fadeIn">
        <WhoAreWe />
      </ScrollAnimation>

      <div className="md-space" />
      <Mission />

      <div className="md-space" />
      <Future />
      <div className="lg-space" />
      <Method />

      <div className="heading ex-vp">
        <Link to="/products">
          <h1>View Products</h1>
          <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
        </Link>
      </div>
    </>
  );
};

export default Home;
