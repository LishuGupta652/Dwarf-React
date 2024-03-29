import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <footer>
        <section>
          <div className="footer-links">
            <Link to="/">
              <h3>Home</h3>
            </Link>

            <Link to="/about">
              <h3>About</h3>
            </Link>

            <Link to="/products">
              <h3>Services</h3>
            </Link>

            <Link to="/images">
              <h3>Gallary</h3>
            </Link>

            <Link to="/contact">
              <h3>Contact</h3>
            </Link>
          </div>
        </section>
        <h2 className="foot">© Dwarf 2020</h2>
      </footer>
    </div>
  );
};

export default Footer;
