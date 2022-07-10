import "../css/portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import experiences from "../Data/Experiences";
import skills from "../Data/Skills";
import projects from "../Data/Projects";
export default function Portfolio() {
    let skillsString = "";
    skills.map((skill) => {
        skillsString +=
            `<h3 class="fw-bold font-monospace mb-5 mt-5">` +
            skill.title +
            `</h3>`;
        skill.rows.map((row) => {
            skillsString += `<div class="mt-3 row justify-content-md-center">`;
            row.map((cols) => {
                skillsString +=
                    `<div class="col me-1 col-sm-auto"><center> <h5 class="highlight font-monospace"><i class="h3 devicon-` +
                    cols.field +
                    `"></i></h5><p class="h6 font-weight-light font-monospace">` +
                    cols.title +
                    `</p></center></div>`;
            });
            skillsString += `</div>`;
        });
        skillsString += "</div>";
    });
    return (
        <section id="resume">
            <div id="resumediv" className="row align-items-center mb-5">
                <div className="col-sm-3">
                    <h1>
                        <span className="ms-5 fw-bold font-monospace text-left">
                            Education
                        </span>
                    </h1>
                </div>
                <div className="col-md-9">
                    <h3 className="fw-bold font-monospace">
                        Georgia Institute of Technology, Atlanta
                    </h3>
                    <p className="info fw-light font-monospace">
                        Bachelors in Computer Science
                        <span className="ms-2">|</span>
                        <em className="date fw-light font-monospace ms-2">
                            August 2021 - May 2024
                        </em>
                    </p>
                    <p
                        className="pe-5 text-justify text-justify lead"
                        style={{
                            fontSize: `15px`,
                            textAlign: `justify`,
                            fontFamily: `Sans-Serif`,
                        }}
                    >
                        <span className="highlight fst-italic"> GPA: </span> 4.0
                        (Dean's List, Faculty Honors) <br />
                        <span className="highlight fst-italic">
                            {" "}
                            Concentration:{" "}
                        </span>{" "}
                        Intelligence, Systems and Architecture
                        <br />
                        <span className="highlight fst-italic">
                            {" "}
                            Coursework:{" "}
                        </span>{" "}
                        Datastructures and Algorithms, Honors Discrete Algebra,
                        Honors Linear Algebra, Combinatorics, Probability and
                        Statistics <br />
                        <span className="highlight fst-italic">
                            {" "}
                            Clubs:{" "}
                        </span>{" "}
                        Dependently-Typed, The Agency, VGDev
                    </p>
                </div>
            </div>
            <center>
                <hr className="mb-4" width="80%" />
            </center>
            <div className="mt-5 row align-items-center">
                <div className="col-sm-3">
                    <h1>
                        <span className="ms-5 fw-bold font-monospace">
                            Experience
                        </span>
                    </h1>
                </div>
                <div className="col-md-9 pe-5 text-justify">
                    {experiences.map((experience) => {
                        return (
                            <div className="mb-5 me-5">
                                <h3 className="fw-bold font-monospace">
                                    {experience.title}
                                </h3>
                                <p className="info fw-light font-monospace">
                                    {experience.job}
                                    <span className="ms-2">|</span>
                                    <em className="date fw-light font-monospace ms-2">
                                        {experience.duration}
                                    </em>
                                </p>
                                <p
                                    className="pe-5 text-justify text-justify lead"
                                    style={{
                                        fontSize: `15px`,
                                        textAlign: `justify`,
                                        fontFamily: `Sans-Serif`,
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: experience.description,
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <center>
                <hr className="mb-4" width="80%" />
            </center>

            <div className="mt-5 row align-items-center">
                <div className="col-sm-3">
                    <h1>
                        <span className="ms-5 fw-bold font-monospace">
                            Projects
                        </span>
                    </h1>
                </div>
                <div className="col-md-9 pe-5 text-justify">
                    {projects.map((project) => {
                        return (
                            <div className="mb-5 me-5">
                                <h3 className="fw-bold font-monospace">
                                    <a
                                        className="fw-bold font-monospace"
                                        style={{
                                            textDecoration: `none`,
                                            color: `#000000`,
                                        }}
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {project.title}{" "}
                                        <i
                                            className="text-muted text-small h5 fa fa-external-link"
                                            aria-hidden="true"
                                        >
                                            <FontAwesomeIcon
                                                icon={faExternalLink}
                                            />
                                        </i>
                                    </a>
                                </h3>
                                <p className="info fw-light font-monospace">
                                    {project.tech}
                                </p>
                                <p
                                    className="pe-5 text-justify text-justify lead"
                                    style={{
                                        fontSize: `15px`,
                                        textAlign: `justify`,
                                        fontFamily: `Sans-Serif`,
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: project.description,
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <center>
                <hr className="mb-4" width="80%" />
            </center>
            <div className="mt-5 row align-items-center">
                <div className="col-sm-3">
                    <h1>
                        <span className="ms-5 fw-bold font-monospace">
                            Skills
                        </span>
                    </h1>
                </div>
                <div
                    className="col-md-9 text-justify skills"
                    dangerouslySetInnerHTML={{
                        __html: skillsString,
                    }}
                ></div>
            </div>
            <center>
                <hr className="mb-4 mt-5" width="80%" />
            </center>
        </section>
    );
}
