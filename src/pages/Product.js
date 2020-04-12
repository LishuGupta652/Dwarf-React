import React from "react";
import Header from "../components/Header";
import Services from "../components/Services";

// Context Imports

const Product = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header title="Services" backgroundImage="services.jpg">
        <h1 className="title text-black">Services</h1>
      </Header>
      <Services />
    </div>
  );
};

export default Product;
