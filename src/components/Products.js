import React from "react";
import Product1 from "../images/products/garden.jpeg";
import Product2 from "../images/products/desk.jpeg";
import Product3 from "../images/products/desk2.jpeg";
import Product4 from "../images/products/library.jpeg";

import text from "../images/text.jpg";

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <div>
          <h1>Products</h1>
        </div>
        <div className="grid">
          <div className="pa p01">
            <img src={Product1} />
            <h2>Gardens</h2>
          </div>
          {/* <div className="pa p02">
            <img src={Product2} />
          </div> */}
          <div className="pa p03">
            <h2>Containers</h2>
            <img src={Product3} />
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
