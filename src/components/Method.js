import React from "react";
import BannerImg from "../images/method.png";

const Method = () => {
  return (
    <>
      <div class="method ">
        <div className="method-container">
          <div className="flex">
            <div className="flex-left">
              <h1 className="text-center">OUR METHODOLOGY</h1>
              <h3>
                Our practical hands on approach to delivery are based upon
                Learning, Doing and sustaining a culture of Continuous
                improvement. Our proven and tested methods (PDCA) simultaneously
                address people, process and systems to ensure that results are
                not just discussed but achieved.
              </h3>
            </div>
            <div className="flex-right">
              <img src={BannerImg} />
            </div>
          </div>
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

export default Method;
