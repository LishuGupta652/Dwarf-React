import React, { createContext, useState } from "react";

//contentful
import Client from "../Contentful/contentful";

export const ProductContext = createContext();

const prodList = [];
Client.getEntries().then(entries => {
  entries.items.forEach(entry => {
    prodList.push(entry.fields);
  });
});

export const ProductProvider = props => {
  const [products, setProducts] = useState(prodList);

  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  );
};
