import React from "react";
import Header from "../components/Header";
import Products from "../components/Products";

// Context Imports

const Product = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header
        title="Products"
        background="linear-gradient(to right, #9d50bb, #6e48aa)"
      />
      <Products />
    </div>
  );
};

export default Product;
