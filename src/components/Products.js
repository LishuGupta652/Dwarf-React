import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//Context API

const Products = () => {
  return (
    <div className="products">
      <div className="card">
        <div className="wrapper">
          <h3>
            Smart Library
            <span>
              <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
            </span>
          </h3>
        </div>
      </div>
      <div className="card">
        <div className="wrapper">
          <h3>
            Digital Classes
            <span>
              <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
            </span>
          </h3>
        </div>
      </div>
      <div className="card">
        <div className="wrapper">
          <h3>
            Health Center
            <span>
              <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Products;
