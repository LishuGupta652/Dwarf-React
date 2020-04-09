import React from "react";
import Header from "../components/Header";
import Image from "../components/Image";
import Gallary from "../components/Gallary";

const Images = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header title="Images" />
      <div className="lg-space" />
      <Gallary />
    </>
  );
};

export default Images;
