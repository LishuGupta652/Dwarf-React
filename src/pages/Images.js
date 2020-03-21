import React from "react";
import Header from "../components/Header";
import Image from "../components/Image";
import Gallary from "../components/Gallary";

const Images = () => {
  return (
    <>
      <Header title="Images" />
      <div className="lg-space" />
      <Gallary />
      <div className="space"></div>
    </>
  );
};

export default Images;
