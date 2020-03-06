import React, { useState, useEffect } from "react";
// import Logo from "../images/icon.png";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { TimelineMax } from "gsap";

const Header = props => {
  const [isExpandable, setIsExpandable] = useState(false);
  const pageTitle = props.title;

  useEffect(() => {
    const anim = pageTitle === "Home" ? homePageAnimation() : null;
  }, []);

  const homePageAnimation = () => {
    const timeline = new TimelineMax();
    timeline.fromTo(
      ".header",
      0.7,
      { x: "-100vh", height: "0%", opacity: 0 },
      { x: "0vh", height: "100%", opacity: 1 }
    );
    timeline.fromTo(
      ".sub-heading",
      0.5,
      { opacity: 0 },
      { opacity: 1 },
      "-=.2"
    );
    timeline.fromTo(
      ".nav-links",
      0.25,
      { opacity: 0 },
      { opacity: 1 },
      "-=0.3"
    );
    timeline.fromTo(
      ".logo",
      0.25,
      {
        width: "0px",
        padding: "0px",
        overflow: "hidden"
      },
      {
        width: "30px",
        padding: "3px"
      },
      "-=.1"
    );
  };

  return (
    <>
      <header>
        <div className="header">
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
                <li className={` ${pageTitle === "Home" ? "active" : ""}`}>
                  <Link to="/" onClick={() => setIsExpandable(false)}>
                    Home
                  </Link>
                </li>

                <li className={`${pageTitle === "About Us" ? "active" : ""}`}>
                  <Link to="/about" onClick={() => setIsExpandable(false)}>
                    About
                  </Link>
                </li>
                <li className={`${pageTitle === "Contact Us" ? "active" : ""}`}>
                  <Link to="/contact" onClick={() => setIsExpandable(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="content">
            <div className="left">
              {props.title !== "Home" ? (
                <h1 className="title">{pageTitle}</h1>
              ) : (
                <div className="sub-heading">
                  <h1>
                    <Typewriter
                      options={{
                        strings: ["Dwarf", "We are here"],
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        cursor: ".",
                        start: 3000
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
        </div>
      </header>
    </>
  );
};

export default Header;
