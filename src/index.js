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
      <div className="production">In production App</div>
      <App />
    </ProductProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
