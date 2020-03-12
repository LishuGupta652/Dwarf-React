import React, { useState, useEffect } from "react";
// import Logo from "../images/icon.png";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { TimelineMax } from "gsap";

import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);

const Header = props => {
  const [isExpandable, setIsExpandable] = useState(false);
  const pageTitle = props.title;

  const timeline = new TimelineMax();
  timeline.to("body", 1, { css: { visibility: "visible" } });

  useEffect(props => {
    window.addEventListener("scroll", e => {
      // console.log(window.scrollY);
    });

    const anim =
      pageTitle === "Home" ? homePageAnimation() : otherPageAnimations();
  }, []);

  const homePageAnimation = () => {
    timeline.fromTo(
      ".header",
      1,
      { height: "0%" },
      { height: "100%", ease: "Power2.easeInOut" }
    );
    timeline.fromTo(
      ".sub-heading",
      0.5,
      { opacity: 0 },
      { opacity: 1, ease: "Power2.easeInOut" },
      "-=.2"
    );
    timeline.fromTo(
      ".nav-links",
      0.35,
      { opacity: 0 },
      { opacity: 1, ease: "Power2.easeInOut" },
      "-=0.1"
    );
    timeline.fromTo(
      ".logo",
      0.35,
      {
        width: "0px",
        padding: "0px",
        overflow: "hidden"
      },
      {
        width: "30px",
        padding: "3px",
        ease: "Power2.easeInOut"
      },
      "-=.1"
    );
  };
  const otherPageAnimations = () => {
    timeline.fromTo(
      ".header",
      1,
      { height: "0%" },
      { height: "100%", ease: "Power2.easeInOut" }
    );
    timeline.fromTo(
      ".sub-heading",
      0.5,
      { opacity: 0 },
      { opacity: 1, ease: "Power2.easeInOut" },
      "-=.2"
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
                <li className={`${pageTitle === "Images" ? "active" : ""}`}>
                  <Link to="/images" onClick={() => setIsExpandable(false)}>
                    Gallary
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
                        strings: ["Dwarf", "By You For You"],
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
                  <button
                    className="button"
                    onClick={e => {
                      window.scrollTo(0, 770);
                    }}
                  >
                    <i class="fa fa-angle-double-down" aria-hidden="true"></i>
                  </button>
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
