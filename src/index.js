import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//css files
import "./css/index.css";
import "./css/about.css";
import "./css/contact.css";
import "./css/product.css";

// Context API
import { ThemeProvider } from "./context/ThemeContext";
import { ProductProvider } from "./context/ProductContext";

ReactDOM.render(
  <ThemeProvider>
    <ProductProvider>
      <marquee className="production" scrollamount="12">
        In production App
      </marquee>
      <App />
    </ProductProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
