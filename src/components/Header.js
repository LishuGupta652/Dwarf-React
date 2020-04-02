import React, { useState, useEffect } from "react";
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
  timeline.to("body", 0.2, { css: { visibility: "visible" } });

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
      { opacity: 1, ease: "Power2.easeInOut", stagger: 0.5 },
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
      "-=.5"
    );
    timeline.fromTo(
      ".fixed-nav",
      0.35,
      {
        opacity: 0,
        x: "-10px",
        overflow: "hidden"
      },
      {
        opacity: 1,
        x: "0px",
        ease: "Power2.easeInOut"
      },
      "-=.5"
    );
    timeline.fromTo(
      ".social-stag",
      0.35,
      {
        opacity: 0,
        x: "-10px"
      },
      {
        opacity: 1,
        x: "0px",
        ease: "Power2.easeInOut",
        stagger: 0.2
      }
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
      ".title",
      0.5,
      { opacity: 0 },
      { opacity: 1, ease: "Power2.easeInOut" },
      "-=.2"
    );
    timeline.fromTo(
      ".social-stag",
      0.35,
      {
        opacity: 0,
        x: "-10px"
      },
      {
        opacity: 1,
        x: "0px",
        ease: "Power2.easeInOut",
        stagger: 0.2
      }
    );
  };

  const expandNavWithAnim = () => {
    setIsExpandable(!isExpandable);

    const timeline = new TimelineMax();

    timeline.fromTo(
      ".nav-open",
      0.8,
      { x: "-100vw" },
      { x: "0vw", ease: "Power2.easeInOut" }
    );
    timeline.fromTo(
      ".nav-open ul li",
      1,
      { x: "-20px", opacity: 0 },
      { x: "0px", opacity: 1, ease: "Power2.easeInOut" },
      "-=.5"
    );
  };

  return (
    <>
      <header>
        <div className="header">
          <div className="nav-container">
            <nav>
              <Link to="/" className="logo">
                <div></div>
              </Link>
            </nav>
            <div className="fixed-nav" onClick={expandNavWithAnim}>
              <div className="bar">
                <div className="fa-line"></div>
                <div className="fa-line"></div>
                <div className="fa-line"></div>
              </div>
            </div>
            <div className={`nav-open ${isExpandable ? "" : "nav-display"}`}>
              <div>
                <ul>
                  <Link to="/" onClick={() => setIsExpandable(false)}>
                    <li className="nav-link-stag">Home</li>
                  </Link>
                  <Link to="/products/#" onClick={() => setIsExpandable(false)}>
                    <li className="nav-link-stag">Products</li>
                  </Link>
                  <Link to="/Images/#" onClick={() => setIsExpandable(false)}>
                    <li className="nav-link-stag">Gallary</li>
                  </Link>
                  <Link to="/about/#" onClick={() => setIsExpandable(false)}>
                    <li className="nav-link-stag">About</li>
                  </Link>
                  <Link to="/contact/#" onClick={() => setIsExpandable(false)}>
                    <li className="nav-link-stag">Contact</li>
                  </Link>
                </ul>
              </div>
            </div>
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
                        strings: ["Dwarf", "By   You For You"],
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
          <div className="social-icons">
            <div className="facebook social-stag">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
            <div className="twitter social-stag">
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
            <div className="linkedin social-stag">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
