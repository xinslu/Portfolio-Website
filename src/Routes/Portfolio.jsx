import "../css/portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Portfolio() {
    let experiences = [
        {
            title: "NCR Corporation",
            job: "Software Developer",
            duration: "May 2022 - Present",
            description: `Incoming Summer Intern at NCR Corporation, Atlanta.`,
        },
        {
            title: "Notitia",
            job: "Software Developer",
            duration: "October 2021 - Present",
            description: `I am working in a start up at Gerogia Tech in building a MVP. I worked on developing a <span class="highlight">Full-Stack Website</span> and working on fine tuning an NLP model for more accurate results. I worked on a machine learning pipeline that uses <span class="highlight">UMAP</span> to map the relevant word embeddings of pieces of text onto a 2D graph, <span class="highlight">FAISS</span> to effieciently cluster these texts and an <span class="highlight">LDA model</span> on these clusters to find accurate topics for these. In the frontend, I worked on optimizing WordCloud of test using <span class="highlight">ReactFlow</span>.`,
        },
        {
            title: "BITS Pilani, Dubai",
            job: "Summer Student",
            duration: "July 2020 - August 2020",
            description: `I worked on learning the basics of linux and bash commands including <span class="highlight">grep,ls,man,sh,cpp,cat</span>. I worked with basics of server management and the permissions. I used <span class="highlight">vi editor</span> to learn the basics of screen-oriented text editors and develop programs to manipulate files. I manipulated virtual box and hypervisor settings.`,
        },
        {
            title: "National University of Singapore",
            job: "Student Researcher",
            duration: "April 2019 - December 2019",
            description: `With a team of 4, I worked on <span class="highlight">Cravescale</span>, an app that aims to combat food Waste. Researching the correlation between <span class="highlight">ghrelin</span>, the hunger hormone, and other factors like <span class="highlight">BMI, Age, Dietary Habits, Diet Regime</span>, we built a core Machine Learning model that can <span class="highlight">predict the exact amount of calories a person has to consume at any time of the day</span>. The user can input his list of favourite foods in the sign up page, keep a track of calorie consumption trends in the home page, and look at food to be consumed at the time of the day in results. I worked with <span class="highlight">Professor Lisa Winstanley</span> on User Expereince and Design and <span class="highlight">Dr. Tan Wee Kek</span> on core functionality.`,
        },
        {
            title: "Manipal Academy of Higher Education",
            job: "Summer Intern",
            duration: "July 2019 - August 2019",
            description: `I worked as an intern at the MAHE, Dubai Campus, where I learned <span class="highlight">Arduino, and low level C++ Programming</span>. I spent some time learning about the basics of <span class="highlight">micro-controllers, PWMs, and Oscillatory circuits</span>. I also learned and used <span class="highlight">TensorFlow, Pandas, Matplotlib to make a basic image recognition software using a Kaggle dataset</span>. I delved deeper into understanding <span class="highlight">Convoluted Neural Networks and Deep Learning</span>. Outside of coding, I designed a Bluetooth controlled car and interfaced it with an android mobile phone to be controlled remotely.`,
        },
    ];
    let projects = [
        {
            title: "DeusCL",
            link: "https://github.com/xinslu/deusCL",
            tech: "Python",
            description: `DeusCL is a <span class="highlight">Common LISP</span> implementation with a REPL built in <span class="highlight">Rust</span> . Built on a memory-efficient, memory-safe and fast REPL using <span class="highlight">Rust references and borrowing principles</span>. Made a <span class="highlight">Recursive Descent Parser</span> and a Scanner to <span class="highlight">parse S-Expressions</span>. Added functionality for addtional operators.`
        },
        {
            title: "PaperPlanes",
            link: "https://github.com/AllisanLu/PaperPlanes",
            tech: "Unity, C#",
            description: `Working on Paper Planes, a <span class="highlight">2D sidescroller platformer</span> created with <span class="highlight">Unity</span> as a part of the VGDev Club on campus. I worked on a <span class="highlight">relaunch mechanism</span> using custom aero dynamics, a <span class="highlight">particle system</span> for paper plane trail, and one for <span class="highlight">collisions with objects</span>. I also worked on making a <span class="highlight">Quest API</span> to show the current quests going on.`
        },
        {
            title: "hack-a-lang",
            link: "https://github.com/xinslu/hack-a-lang",
            tech: "Python",
            description: `As a part of a dependently-typed (Programming Language Club) on campus, I worked on a <span class="highlight">python implementation</span> of the common teaching language Lox. I worked on building and degubbing a <span class="highlight">Recursive Descent Parser, Scanner</span> and a made a script to generate a <span class="highlight">python class system</span> for different atoms and a <span class="highlight">visitor pattern</span> for the interpreter class. I also worked on the <span class="highlight">AST</span> and a <span class="highlight">language environment</span> to store function and variable declration. I lectured at the event about <span class="highlight">AST evaluation, dynamic environment creation</span> for functional and recrusive calls and <span class="highlight">implementating the vistitor patters </span> for interpreters.`
        },
        {
            title: "Publixmon",
            link: "https://github.com/saisree27/publixmon",
            tech: "ReactJS, Express.js, Flask, FireBase, Solidity, Ganache, IPFS, Web3.js, NCR API",
            description: `Publixmon is a <span class="highlight">full-stack mobile app</span> integrating modern day NFT and Style Tranfer technologies to create a unique interactive retail experience. With every checkout, the app has a chance to give the user a NFT using a <span class="highlight">style tranfer machine learning model</span> based on two attributes a famous painting by a <span class="highlight">renaissance painting</span> and an item in your <span class="highlight">purchase history</span>. Users walk into a store and scan a QR code to see other active users who are in the store and they can <span class="highlight">socialize</span>, see each other's collections of virtual toys, and <span class="highlight">trade</span> them to grow their collection. A user's collection is auto-scored based on size and <span class="highlight">variety of collectibles</span>, resulting in <span class="highlight">higher engagement</span> for the business. I worked on making the backend blockchain that generates the NFTs that uses the style tranfer images using <span class="highlight">Solidity</span> and a <span class="highlight">Ganache Blockchain</span> to test it on. I worked on creating the backend for the project that uses the <span class="highlight">NCR API</span> to serve purchase history and <span class="highlight">CDN Network</span> to store the style transfered images.`
        },

    ];
    return (
        <section id="resume">
            <div className="row align-items-center mb-5">
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
                            fontFamily: `Sans-Serif`
                        }}
                    >
                        Bruh
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
                                        fontFamily: `Sans-Serif`
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
                                    <a className="fw-bold font-monospace" style={{textDecoration: `none`, color: `#000000` }} href={project.link} target="_blank">{project.title} <i className="text-muted text-small h5 fa fa-external-link" aria-hidden="true"></i></a>
                                </h3>
                                <p className="info fw-light font-monospace">
                                    {project.tech}
                                </p>
                                <p
                                    className="pe-5 text-justify text-justify lead"
                                    style={{
                                        fontSize: `15px`,
                                        textAlign: `justify`,
                                        fontFamily: `Sans-Serif`
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
        </section>
    );
}
