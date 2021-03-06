import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Product from "./pages/Product";
import Images from "./pages/Images";
import NotFound from "./pages/NotFound";
import SingleProduct from "./pages/SingleProduct";

// component
import Footer from "./components/Footer";

// Time line Max
import { TimelineMax } from "gsap";

class App extends Component {
  componentDidMount() {
    const timeline = new TimelineMax();
    timeline.to("body", 0.2, { css: { visibility: "visible" } });
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact/" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/images" component={Images} />
            <Route exact path="/products" component={Product} />
            <Route path="/products/:id" component={SingleProduct} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
