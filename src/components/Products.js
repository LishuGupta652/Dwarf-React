import React from "react";
import { Link } from "react-router-dom";

import Product1 from "../images/products/garden.jpeg";
import Product2 from "../images/products/desk.jpeg";
import Product3 from "../images/products/desk2.jpeg";
import Product4 from "../images/products/library.jpeg";

import ScrollAnimation from "react-animate-on-scroll";

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <div>{/* <h1>Products</h1> */}</div>
        <div className="grid">
          <div className="pa p01">
            <div className="img">
              <ScrollAnimation animateOnce animateIn="fadeIn">
                <Link to="/dwarf/product/garden" className="logo">
                  <img src={Product1} />
                </Link>
              </ScrollAnimation>
            </div>
            <h2>Gardens</h2>
          </div>
          {/* <div className="pa p02">
            <img src={Product2} />
          </div> */}
          <div className="pa p03">
            <h2>Containers</h2>
            <div className="img">
              <ScrollAnimation animateOnce animateIn="fadeIn">
                <Link to="/dwarf/product/container" className="logo">
                  <img src={Product3} />
                </Link>
              </ScrollAnimation>
            </div>
          </div>
          {/* <div className="pa p04">
            <img src={Product4} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
