import React, { createContext, useState, useReducer, useEffect } from "react";

//contentful
import { useContentfulData } from "../Contentful/contentful";

export const ProductContext = createContext();

const ProductReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { prod: action.payload.product, loading: action.payload.loading };
    default:
      return state;
  }
};

export const ProductProvider = (props) => {
  const [state, dispatch] = useReducer(ProductReducer, {
    prod: [],
    loading: true,
  });

  const [product, loading] = useContentfulData("product");

  useEffect(() => {
    dispatch({
      type: "ADD",
      payload: {
        product: product.items,
        loading,
      },
    });
  }, [product, loading]);

  return (
    <ProductContext.Provider value={[state, dispatch]}>
      {props.children}
    </ProductContext.Provider>
  );
};
