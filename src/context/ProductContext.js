import React, { createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = props => {
  return (
    <ProductContext.Provider value="data">
      {props.children}
    </ProductContext.Provider>
  );
};
