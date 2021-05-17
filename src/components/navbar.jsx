import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Body from './body';
import Scroll from './scrolling.jsx';
import "devicon/devicon.min.css";
import{
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom';

import NotFoundPage from '../pages/404'

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
          <nav className="nav navbar-light bg-primary nav-pills d-flex flex-column h-100 justify-content-center" style={{position: "fixed", fontFamily: "Tahoma"}}>
            <div className="nav-item">
              <a id="home link" href="#" className="nav-link active">
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
        <div className="col" style={{boxShadow: "0 0px 15px #000"}}><Body /><Scroll /></div>
    </div>
</div>
  );
}
};

export default NavigationBar;
