import "../css/main.css";
import{
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import ParticlesBg from "particles-bg";
import About from "./About.jsx"

export default function Main() {
    let style = {
      position: "relative",
      width: `100%`,
      height: `100%`,
      top: 0,
      left: 0,
    }
  return (
    <div style = {{height:"100vh"}}>
      <header>
      <div id="bg">
        <ParticlesBg type="circle" bg={style} num={17}/>
      </div>
      <div>
      </div>

      <div className="topnav">
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
          Kinshuk Phalke
        </p>
      </center>
      <div>
        <center>
          <p className="position-relative text-justify text-white fw-light font-monospace mb-4 mt-3 abouttext">
            A second year, Computer Science major at the Georgia Insititute of Technology, Atlanta.
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
      </div>
  )
}
