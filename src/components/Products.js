import React from "react";
import Product from "../pages/Product";
import { Link } from "react-router-dom";
import { showcase1 } from "../images/showcase_1.jpg";
import Fade from "react-reveal/Fade";
import ScrollAnimation from "react-animate-on-scroll";

const Products = () => {
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

      <div className="lg-space" />
      <div class="method ">
        <div className="method-container">
          <h1 className="text-center">OUR METHODOLOGY</h1>
          <h3>
            Our practical hands on approach to delivery are based upon Learning,
            Doing and sustaining a culture of Continuous improvement. Our proven
            and tested methods (PDCA) simultaneously address people, process and
            systems to ensure that results are not just discussed but achieved.
          </h3>
          <div className="method-wrapper text-center">
            <div className="a">
              <h1>PLAN</h1>
              <h3>
                Design or revise business process components to improve results
              </h3>
            </div>
            <div className="b">
              <h1>DO</h1>
              <h3>Implement the plan and measure its performance</h3>
            </div>
            <div className="c">
              <h1>CHECK</h1>
              <h3>
                Access the measurements and report the results to decision
                makers
              </h3>
            </div>
            <div className="d">
              <h1>ACT</h1>
              <h3>Decide on changes needed to improve the process</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
