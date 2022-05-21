import React from "react";
import "../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
    return (
        <footer>
            {/*<div className="mb-5" id="go-top">
                <a
                    className="smoothscroll"
                    title="Back to Top"
                    href="#home"
                    style={{ paddingTop: `7px` }}
                >
                    <i className="display-6">
                        <FontAwesomeIcon icon={faArrowUp} />
                    </i>
                </a>
            </div>*/}
            <div className="row justify-content-md-center mt-5">
                <div className="col col-auto">
                    <a
                        href="https://www.linkedin.com/in/kinshukphalke/"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                    >
                        <i class="display-6 devicon-linkedin-plain"></i>
                    </a>
                </div>
                <div className="col col-auto">
                    <a
                        href="https://github.com/xinslu"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                    >
                        <i class="display-6 devicon-github-plain"></i>
                    </a>
                </div>
                <div className="col col-auto">
                    <a
                        href="https://twitter.com/phalkekinshuk"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                    >
                        <i class="display-6 devicon-twitter-plain"></i>
                    </a>
                </div>
                <div className="mb-3 mt-3"></div>
                <div className="row justify-content-md-center mb-5">
                    <div className="col col-auto">
                        <ul className="copyright text-white-50">
                            <li>&copy; Copyright 2022 Kinshuk Phalke</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
