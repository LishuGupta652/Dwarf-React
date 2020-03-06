import React, { useState } from "react";
// import Logo from "../images/icon.png";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Header = props => {
  const [isExpandable, setIsExpandable] = useState(false);
  return (
    <>
      <header>
        <div className="nav-container">
          <nav>
            <h1 className="logo">D</h1>

            {/* <i
              className="fa fa-bars"
              aria-hidden="true"
            ></i> */}
            <div
              className={`bar  ${isExpandable ? "close" : ""}`}
              onClick={() => {
                setIsExpandable(!isExpandable);
              }}
            >
              <div className="fa-line"></div>
              <div className="fa-line"></div>
              <div className="fa-line"></div>
            </div>
            <ul className={`nav-links  ${isExpandable ? "mobile" : ""}`}>
              <li className="active">
                <Link to="/" onClick={() => setIsExpandable(false)}>
                  Home
                </Link>
              </li>

              <li>
                <Link to="/contact" onClick={() => setIsExpandable(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setIsExpandable(false)}>
                  About
                </Link>
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
                <h1>
                  <Typewriter
                    options={{
                      strings: ["Dwarf", "We are here."],
                      autoStart: true,
                      loop: true
                    }}
                  />
                </h1>
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
