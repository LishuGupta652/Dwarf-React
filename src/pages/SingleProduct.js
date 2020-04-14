import React, { useContext } from "react";
import Header from "../components/Header";
import { ProductContext } from "../context/ProductContext";
import Video from "../images/header/library.mp4";

// Product Component
import SmartLibrary from "../components/Products/SmartLibrary";
import DigitalClasses from "../components/Products/DigitalClasses";
import HealthCenter from "../components/Products/HealthCenter";

const SingleProduct = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = props.match.params.id;
  console.log(product);

  if (product === "smart_library") {
    window.scrollTo(0, 0);
    return <SmartLibrary />;
  }
  if (product === "digital_classes") {
    window.scrollTo(0, 0);
    return <DigitalClasses />;
  }
  if (product === "health_center") {
    window.scrollTo(0, 0);
    return <HealthCenter />;
  }
};

export default SingleProduct;
