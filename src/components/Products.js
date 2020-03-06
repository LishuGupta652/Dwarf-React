import React from "react";

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <h1 style={{ textAlign: "center", color: "#e67e22" }}>Our Products</h1>
      </div>
      <div className="container">
        <div className="poster">
          <h1>Container</h1>
        </div>
        <div className="poster">
          <h1>Bicycle</h1>
        </div>
        <div className="poster">
          <h1>Parks</h1>
        </div>
        <div className="poster">
          <h1>Subway</h1>
        </div>
      </div>
    </div>
  );
};

export default Products;
