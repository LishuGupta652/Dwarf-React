import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//css files
import "./css/index.css";
import "./css/about.css";
import "./css/contact.css";

// Context API
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.render(
  <ThemeProvider>
    <div className="production">In production App</div>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
