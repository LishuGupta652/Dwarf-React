import React, { useContext } from "react";
import Header from "../components/Header";
import { ProductContext } from "../context/ProductContext";
import Video from "../images/header/library.mp4";

const SingleProduct = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //checking title from Prop
  const productId = props.match.params.id;

  // loading the data from server context
  const [state, dispatch] = useContext(ProductContext);
  var currentProd = [];
  if (!state.loading) {
    currentProd = state.prod.filter((product) => {
      return product.fields.title === productId;
    });
    currentProd = currentProd[0];
    console.log(currentProd);
  }

  return (
    <div>
      <Header
        title={currentProd.fields.title}
        background="linear-gradient(to right, #70e1f5, #ffd194)"
      >
        <h1 className="title text-black">{currentProd.fields.title}</h1>
      </Header>

      {!state.loading ? (
        <div className="sp">
          <h1>{currentProd.fields.title}</h1>
          <h3>{currentProd.fields.description}</h3>
        </div>
      ) : (
        <div className="loading">Loading</div>
      )}

      <div className="video-banner">
        <video src={Video} autoPlay muted />
      </div>
    </div>
  );
};

export default SingleProduct;
