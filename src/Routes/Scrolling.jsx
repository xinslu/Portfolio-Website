import React, { Component } from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

export default class Scroll extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount = () => {
        var resume = document.getElementById("resume").offsetTop;
        console.log(resume);
        window.onscroll = () => {
            let currentScrollPosition = window.pageYOffset;
            console.log(window.pageYOffset);
            if (currentScrollPosition > resume) {
                document.getElementById("topnav").classList.add(" bg-dark");
            } else {
                document.getElementById("topnac").classList.remove(" bg-dark");
            }
        };
    };

    render() {
        return null;
    }
}
