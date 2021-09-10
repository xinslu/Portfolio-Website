import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
export default class Scroll extends Component{
  constructor(props) {
    super(props)
    this.state={}
  }
  componentDidMount =()=> {
  var skillstopPos = document.getElementById("skills").offsetTop-300;
  var abouttopPos = document.getElementById("about_me").offsetTop-300;
  var internshipstopPos = document.getElementById("internships").offsetTop-300;
  var experiencetopPos = document.getElementById("experience").offsetTop-300;
  var projectstopPos = document.getElementById("projects").offsetTop-300;
  var awardstopPos = document.getElementById("awards").offsetTop-300;

  window.onscroll = () => {
    let currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition<abouttopPos){
    	document.getElementById("home link").classList.add("active");
        document.getElementById("home link mobile").classList.add("active");
    }
    else{
    	document.getElementById("home link").classList.remove("active");
        document.getElementById("home link mobile").classList.remove("active");
    }
    if (currentScrollPosition >= abouttopPos && currentScrollPosition<internshipstopPos){
    	document.getElementById("about link").classList.add("active");
        document.getElementById("about link mobile").classList.add("active");
    	document.getElementById("about_me").classList.add("shadow-lg");
    	document.getElementById("about_me").classList.add("p-3");
    	document.getElementById("about_me").classList.add("mb-5");
    } else { 
    	document.getElementById("about link").classList.remove("active");
        document.getElementById("about link mobile").classList.remove("active");
    	document.getElementById("about_me").classList.remove("shadow-lg");
    	document.getElementById("about_me").classList.remove("p-3");
    	document.getElementById("about_me").classList.remove("mb-5");
    }
   	if (currentScrollPosition >= internshipstopPos && currentScrollPosition<experiencetopPos){
    	document.getElementById("internships link").classList.add("active");
        document.getElementById("internships link mobile").classList.add("active");
    	document.getElementById("internships").classList.add("shadow-lg");
    	document.getElementById("internships").classList.add("p-3");
    	document.getElementById("internships").classList.add("mb-5");
    } else { 
    	document.getElementById("internships link").classList.remove("active");
        document.getElementById("internships link mobile").classList.remove("active");
    	document.getElementById("internships").classList.remove("shadow-lg");
    	document.getElementById("internships").classList.remove("p-3");
    	document.getElementById("internships").classList.remove("mb-5");
    }
    if (currentScrollPosition >= experiencetopPos && currentScrollPosition<projectstopPos){
    	document.getElementById("experience link").classList.add("active");
        document.getElementById("experience link mobile").classList.add("active");
    	document.getElementById("experience").classList.add("shadow-lg");
    	document.getElementById("experience").classList.add("p-3");
    	document.getElementById("experience").classList.add("mb-5");
    } else { 
    	document.getElementById("experience link").classList.remove("active");
        document.getElementById("experience link mobile").classList.remove("active");
    	document.getElementById("experience").classList.remove("shadow-lg");
    	document.getElementById("experience").classList.remove("p-3");
    	document.getElementById("experience").classList.remove("mb-5");
    }
    if (currentScrollPosition >= projectstopPos && currentScrollPosition<awardstopPos){
        document.getElementById("projects link").classList.add("active");
        document.getElementById("projects link mobile").classList.add("active");
        document.getElementById("projects").classList.add("shadow-lg");
        document.getElementById("projects").classList.add("p-3");
        document.getElementById("projects").classList.add("mb-5");
    } else {
        document.getElementById("projects link").classList.remove("active");
        document.getElementById("projects link mobile").classList.remove("active");
        document.getElementById("projects").classList.remove("shadow-lg");
        document.getElementById("projects").classList.remove("p-3");
        document.getElementById("projects").classList.remove("mb-5");
    }
    if(currentScrollPosition >= awardstopPos && currentScrollPosition<skillstopPos) {
    	document.getElementById("awards link").classList.add("active");
        document.getElementById("awards link mobile").classList.add("active");
    	document.getElementById("awards").classList.add("shadow-lg");
    	document.getElementById("awards").classList.add("p-3");
    	document.getElementById("awards").classList.add("mb-5");
    } else { 
    	document.getElementById("awards link").classList.remove("active");
        document.getElementById("awards link mobile").classList.remove("active");
    	document.getElementById("awards").classList.remove("shadow-lg");
    	document.getElementById("awards").classList.remove("p-3");
    	document.getElementById("awards").classList.remove("mb-5");

    }
    if(currentScrollPosition >= skillstopPos) {
    	document.getElementById("skills link").classList.add("active");
        document.getElementById("skills link mobile").classList.add("active");
    	document.getElementById("skills").classList.add("shadow-lg");
    	document.getElementById("skills").classList.add("p-3");
    	document.getElementById("skills").classList.add("mb-5");
    } else { 
    	document.getElementById("skills link").classList.remove("active");
        document.getElementById("skills link mobile").classList.remove("active");
    	document.getElementById("skills").classList.remove("shadow-lg");
    	document.getElementById("skills").classList.remove("p-3");
    	document.getElementById("skills").classList.remove("mb-5");

    }
  }
}
render(){
	return null
}
}
