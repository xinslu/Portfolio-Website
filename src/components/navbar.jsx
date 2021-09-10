import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Body from './body';
import Scroll from './scrolling.jsx';
import "devicon/devicon.min.css";
import "jquery/dist/jquery.min.js";

class NavigationBar extends Component {
  render(){
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-auto"
          id="navbar-example2"
          style={{
            backgroundColor: "#007BFF",
            width: "30vh",
            minHeight: "100vh",
          }}
        >
          <nav id="sideNav" className="nav navbar-light bg-primary nav-pills d-flex flex-column h-100 justify-content-center" style={{position: "fixed", fontFamily: "Tahoma"}} id="sideNav">
            <div className="nav-item">
              <a id="home link" href="#home" className="nav-link active">
                HOME
              </a>  
            </div>
            <div className="nav-item">
              <a id="about link" href="#About_me" className="nav-link">
                ABOUT
              </a>
            </div>
            <div className="nav-item">
              <a id="internships link" href="#Internships" className="nav-link">
                INTERNSHIPS
              </a>
            </div>
            <div className="nav-item">
              <a id="experience link" href="#Experience" className="nav-link">
                EXPERIENCE
              </a>
            </div>
            <div className="nav-item">
              <a id="projects link" href="#projects" className="nav-link">
                PROJECTS
              </a>
            </div>
            <div className="nav-item">
              <a id="awards link" href="#Awards" className="nav-link">
                AWARDS
              </a>
            </div>
            <div className="nav-item">
              <a id="skills link"href="#Skills" className="nav-link">
                SKILLS
              </a>
            </div>  
           </nav>
        </div>
        <div id="body" className="col" style={{boxShadow: "0 0px 15px #000"}}><Body /><Scroll /></div>
    </div>
            <div id="mobile-navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" style={{fontFamily: "Tahoma"}}>
            <a class="navbar-brand" href="#">Kinshuk Phalke</a>
            <button class="navbar-toggler justify-content-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul class="navbar-nav" style={{listStyleType: "none"}}>
            <li className="nav-item">
              <a id="home link mobile" href="#" className="nav-link active">
                HOME
              </a>  
            </li>
            <li className="nav-item">
              <a id="about link mobile" href="#About_me" className="nav-link">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a id="internships link mobile" href="#Internships" className="nav-link">
                INTERNSHIPS
              </a>
            </li>
            <li className="nav-item">
              <a id="experience link mobile" href="#Experience" className="nav-link">
                EXPERIENCE
              </a>
            </li>
            <li className="nav-item">
              <a id="projects link mobile" href="#Awards" className="nav-link">
                AWARDS
              </a>
            </li>
            <li className="nav-item">
              <a id="awards link mobile" href="#Awards" className="nav-link">
                AWARDS
              </a>
            </li>
            <li className="nav-item">
              <a id="skills link mobile"href="#Skills" className="nav-link">
                SKILLS
              </a>
            </li>
            </ul>
            </div>
           </nav>
          </div>
  </div>
  );
}
};

export default NavigationBar;
