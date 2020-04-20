import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Context API
const Services = () => {
  return (
    <>
      {/* <Link to="/products/smart_library">
        <div className="products">
          <div className="card">
            <div className="wrapper">
              <h3>
                Smart Library
                <span>
                  <i
                    className="fa fa-arrow-circle-o-right"
                    aria-hidden="true"
                  ></i>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </Link> */}
      <div className="sp-container">
        <Link to="/products/smart_library">
          <div className="sp-card">
            <h1>Smart Library</h1>
          </div>
        </Link>
      </div>
      <div className="sp-container">
        <Link to="/products/digital_classes">
          <div className="sp-card background-second">
            <h1>Digital Classes</h1>
          </div>
        </Link>
      </div>
      <div className="sp-container ">
        <Link to="/products/health_center">
          <div className="sp-card background-third">
            <h1>Health Center</h1>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Services;
