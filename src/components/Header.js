import React, { useState } from "react";
// import Logo from "../images/icon.png";
import { Link } from "react-router-dom";

const Header = props => {
  console.log(props);
  let element;
  if (props.title) {
    element = <h1>{props.title}</h1>;
  }

  return (
    <>
      <header>
        <div className="nav-container">
          <nav>
            <h1 className="logo">D</h1>

            <i className="fa fa-bars nav-links" aria-hidden="true"></i>
            <ul className="nav-links">
              <li className="nav-link-active">
                <Link to="/">Home</Link>
              </li>

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
            {props.title ? (
              <h1 className="title">{props.title}</h1>
            ) : (
              <div>
                <h1>Dwarf</h1>
                <h2>Building Smart </h2>
                <h2>
                  India<span className="dot">.</span>
                </h2>
              </div>
            )}
          </div>
          <div className="right"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
