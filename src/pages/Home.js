import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Mission from "../components/Mission";
import Products from "../components/Products";
const Home = () => {
  return (
    <>
      <Header title="Home" />
      <About title="About" />
      <Mission />
      <Products />

      <div className="space"></div>
    </>
  );
};

export default Home;
