import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Product from "./pages/Product";
import Images from "./pages/Images";
import NotFound from "./pages/NotFound";

// component
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact/">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/images">
            <Images />
          </Route>
          <Route path="/product/dwarf/:id" component={Product} />
          <Route component={NotFound} />
        </Switch>
        <div className="md-space" />
        <Footer />
      </Router>
    </>
  );
}

export default App;
