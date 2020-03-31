import React from "react";
import Header from "../components/Header";
import Products from "../components/Products";

const Product = props => {
  return (
    <div>
      <Header title="Products" />
      <Products />
    </div>
  );
};

export default Product;
