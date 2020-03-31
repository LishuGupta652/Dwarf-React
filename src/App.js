import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact/" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/images" component={Images} />
          <Route exact path="/products" component={Product} />
          <Route path="/dwarf/product/:id" component={Product} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      <div className="md-space" />
      <Footer />
    </>
  );
}

export default App;
