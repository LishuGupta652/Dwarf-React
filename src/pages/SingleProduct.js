import React, { useContext } from "react";
import Header from "../components/Header";
import { ProductContext } from "../context/ProductContext";
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

  if (state.loading) {
    return <div className="loading">Loading</div>;
  }

  return (
    <div>
      <Header title={currentProd.fields.title}>
        {currentProd.fields.title}
      </Header>
      <div className="sp">
        <h1>{currentProd.fields.title}</h1>
        <h3>{currentProd.fields.description}</h3>
      </div>
    </div>
  );
};

export default SingleProduct;
