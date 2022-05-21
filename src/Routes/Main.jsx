import "../css/main.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ParticlesBg from "particles-bg";
import About from "./About.jsx";
import Portfolio from "./Portfolio.jsx";
import Footer from "./Footer.jsx";
import React, { useEffect, useState, useCallback } from "react";
import Scroll from "./Scrolling.jsx"

export default function Main() {
  let style = {
    position: "relative",
    width: `105%`,
    height: `100%`,
    padding: `0`,
    top: 0,
    left: 0,
  };
 const [visible, setVisible] = useState(false);
 const [background, setBackground] = useState(false);
 const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = (event) => {
    let scrollPos = window.pageYOffset;
    const background = scrollPos > document.getElementById("about").offsetTop;
    const visible = !(scrollPos > (document.getElementById("fullName").offsetTop - 100) && !background);
    setBackground(background);
    setVisible(visible);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => {
     window.removeEventListener("scroll", handleScroll, true);
    }
  }, [handleScroll]);

  return (
    <div style={{ height: "100vh", width: `100%`, padding: `0`}}>
      <header id="home">
        <div id="bg">
          <ParticlesBg type="circle" bg={style} num={17} />
        </div>
        <div></div>
        <div id="topnav" className={`topnav ${background ? "bg-dark pb-2" : ""} ${visible ? "" : "invisible"}`}>
          <a className="active fw-light font-monospace" href="/">
            HOME
          </a>
          <a className="active fw-light font-monospace" href="/resume">
            RESUME
          </a>
          <a className="active fw-light font-monospace" href="/blog">
            BLOG
          </a>
        </div>
        <center>
          <p className="position-relative display-1 text-white font-weight-light font-monospace title mt-5">
            <div id="fullName">Kinshuk Phalke</div>
          </p>
        </center>
        <div>
          <center>
            <p className="position-relative text-justify text-white fw-light font-monospace mb-4 mt-3 abouttext">
              A second year, Computer Science major at the Georgia Insititute of
              Technology, Atlanta.
            </p>
            <hr className="text-white-50 mb-4" width="45%" />
          </center>
        </div>
        <center className="mt-2">
          <a href="https://www.linkedin.com/in/kinshukphalke/" target="_blank">
            <button
              id="startButton"
              className="me-5 btn btn-info fw-light font-monospace"
            >
              <i class="devicon-linkedin-plain"></i> LinkedIn
            </button>
          </a>
          <a href="https://github.com/xinslu" target="_blank">
            <button
              id="tutorialButton"
              className="ms-2 btn btn-secondary fw-light font-monospace"
            >
              <i class="devicon-github-original"></i> GitHub
            </button>
          </a>
        </center>
      </header>
      <div class="clear"></div>
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}
