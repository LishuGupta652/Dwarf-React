import React, { useContext } from "react";
import Header from "../components/Header";
import Products from "../components/Products";

// Context Imports
import { ThemeContext } from "../context/ThemeContext";

const Product = props => {
  const data = useContext(ThemeContext);
  return (
    <div>
      <Header title="Products" />
      <h1>{data}</h1>
      <Products />
    </div>
  );
};

export default Product;
