import React from "react";

const Product = props => {
  const params = props.match.params;
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
};

export default Product;
