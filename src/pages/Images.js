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
      <Header
        title="Images"
        background="linear-gradient(to right, #ff4e50, #f9d423)"
      >
        <h1 className="title">Images</h1>
      </Header>
      <div className="lg-space" />
      <Gallary />
    </>
  );
};

export default Images;
