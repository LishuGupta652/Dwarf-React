import React from "react";
import Product1 from "../images/products/garden.jpeg";
import Product2 from "../images/products/desk.jpeg";
import Product3 from "../images/products/desk2.jpeg";
import Product4 from "../images/products/digital.jpeg";
import Product5 from "../images/products/library.jpeg";

import text from "../images/text.jpg";

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <div>
          <h1>Products</h1>
        </div>
        <div className="grid">
          <div>
            <img src={Product1} />
          </div>
          <div>
            <img src={Product5} />
          </div>
          <div>
            <img src={Product2} />
          </div>
          <div>
            <img src={Product3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
