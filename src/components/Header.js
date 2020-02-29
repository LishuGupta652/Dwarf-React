import React from "react";
import Logo from "../images/icon.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="nav-container">
          <nav>
            <img src={Logo} alt="logo" className="logo" />

            <i class="fa fa-bars nav-links" aria-hidden="true"></i>
            <ul className="nav-links">
              <li className="nav-link-active">Home</li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <div className="left">
            <h1>Dwarf</h1>
            <h2>Building Smart </h2>
            <h2>
              India<span className="dot">.</span>
            </h2>
          </div>
          <div className="right"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
