import React from "react";
import { Link } from "react-router-dom";

//Context API
const Services = () => {
  return (
    <>
      <Link to="/products/smart_library">
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
      </Link>

      <Link to="/products/digital_classes">
        <div className="products">
          <div className="card">
            <div className="wrapper">
              <h3>
                Digital Classes
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
      </Link>
      <Link to="/products/health_center">
        <div className="products">
          <div className="card">
            <div className="wrapper">
              <h3>
                Health Center
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
      </Link>
    </>
  );
};

export default Services;
