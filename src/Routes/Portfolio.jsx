import "../css/portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
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
            title: "DetectCNN",
            link: "https://github.com/xinslu/DetectCNN",
            tech: "OCaml, Owl, Eigen",
            description: `DetectCNN is my implementation of the <span class="highlight">Mask Region Based Convolutional Neural Network</span> Paper, written in OCaml using Owl and Eigen. Worked on sorting <span class="highlight">LLVM</span> issues in Owl on <span class="highlight">Darwin M1</span> by contributing to the Github issue. Read and summarized findings of the <span class="highlight">  R-CNN, Fast R-CNN, Faster R-CNN Papers </span>. Studied <span class="highlight"> Instance and Semantic Segmentation approaches, Region Proposal Techniques </span> and <span class="highlight"> Feature Extraction Methods. </span>`,
        },
        {
            title: "Enhance",
            link: "https://github.com/xinslu/Enhance",
            tech: "Python, Tensorflow, Keras",
            description: `Enhance is my implementation of the <span class="highlight">Super Resolution Generative Adverserial Network</span> Paper using tensorflow, which uses a ResNet with a <span class="highlight">Perceptual Loss function</span> based on discriminator probability and the euclidean distance between the feature representations of a <span class="highlight">reconstructed image</span> and <span class="highlight">reference image</span>, to achieve a high level of super resolution. Ran and trained the model on the DIV2K dataset achieving perceptible improvements in image quality on the <span class="highlight">DIV2K dataset with downscale factor 4 </span>`,
        },
        {
            title: "DeusCL",
            link: "https://github.com/xinslu/deusCL",
            tech: "Python",
            description: `DeusCL is a <span class="highlight">Common LISP</span> implementation with a REPL built in <span class="highlight">Rust</span> . Built on a memory-efficient, memory-safe and fast REPL using <span class="highlight">Rust references and borrowing principles</span>. Made a <span class="highlight">Recursive Descent Parser</span> and a Scanner to <span class="highlight">parse S-Expressions</span>. Added functionality for addtional operators.`,
        },
        {
            title: "PaperPlanes",
            link: "https://github.com/AllisanLu/PaperPlanes",
            tech: "Unity, C#",
            description: `Working on Paper Planes, a <span class="highlight">2D sidescroller platformer</span> created with <span class="highlight">Unity</span> as a part of the VGDev Club on campus. I worked on a <span class="highlight">relaunch mechanism</span> using custom aero dynamics, a <span class="highlight">particle system</span> for paper plane trail, and one for <span class="highlight">collisions with objects</span>. I also worked on making a <span class="highlight">Quest API</span> to show the current quests going on.`,
        },
        {
            title: "hack-a-lang",
            link: "https://github.com/xinslu/hack-a-lang",
            tech: "Python",
            description: `As a part of a dependently-typed (Programming Language Club) on campus, I worked on a <span class="highlight">python implementation</span> of the common teaching language Lox. I worked on building and degubbing a <span class="highlight">Recursive Descent Parser, Scanner</span> and a made a script to generate a <span class="highlight">python class system</span> for different atoms and a <span class="highlight">visitor pattern</span> for the interpreter class. I also worked on the <span class="highlight">AST</span> and a <span class="highlight">language environment</span> to store function and variable declration. I lectured at the event about <span class="highlight">AST evaluation, dynamic environment creation</span> for functional and recrusive calls and <span class="highlight">implementating the vistitor patters </span> for interpreters.`,
        },
        {
            title: "Publixmon",
            link: "https://github.com/saisree27/publixmon",
            tech: "ReactJS, Express.js, Flask, Firebase, Solidity, Ganache, IPFS, Web3.js, NCR API",
            description: `Publixmon is a <span class="highlight">full-stack mobile app</span> integrating modern day NFT and Style Tranfer technologies to create a unique interactive retail experience. With every checkout, the app has a chance to give the user a NFT using a <span class="highlight">style tranfer machine learning model</span> based on two attributes a famous painting by a <span class="highlight">renaissance painting</span> and an item in your <span class="highlight">purchase history</span>. Users walk into a store and scan a QR code to see other active users who are in the store and they can <span class="highlight">socialize</span>, see each other's collections of virtual toys, and <span class="highlight">trade</span> them to grow their collection. A user's collection is auto-scored based on size and <span class="highlight">variety of collectibles</span>, resulting in <span class="highlight">higher engagement</span> for the business. I worked on making the backend blockchain that generates the NFTs that uses the style tranfer images using <span class="highlight">Solidity</span> and a <span class="highlight">Ganache Blockchain</span> to test it on. I worked on creating the backend for the project that uses the <span class="highlight">NCR API</span> to serve purchase history and <span class="highlight">CDN Network</span> to store the style transfered images.`,
        },
        {
            title: "Mental Health Chat",
            link: "https://github.com/xinslu/mental-health-chat",
            tech: "ReactJS, Express.js, MongoDB, Firebase, Socket.IO",
            description: `A timed chat for people to share and talk about issues they're having in relation with their mental health and help them overcome it. A message in the <span class="highlight">Redis database</span> to expire in about <span class="highlight">6 hours</span> in order to encourage people to come out and discourage users from harrasing one another. Created a <span class="highlight">Dockerized App</span> with a Redis Instance during development. Set-up a Log-In page using <span class="highlight">Firebase</span> that is capable of using <span class="highlight">Google OAuth</span>, the users can then set their username, add a profile picture and set the theme (light/dark) for the app, before getting started chatting on the server.`,
        },
        {
            title: "Twitake",
            link: "https://twitake.netlify.app/",
            tech: "ReactJS, Express.js, MongoDB, Firebase, Twitter API, Gensim, NLTK, Node.js",
            description: `A <span class="highlight">full-stack fake disaster tweet analysis tool</span> that uses <span class="highlight">TwitterAPI</span> to extract the text from the tweet link that the user pastes in input box and data processing tools like <span class="highlight">lemmatization, tokenization, N-Grams, Stop Words </span>, removal of punctuation, and a <span class="highlight">TD-IDF based Logistic Regression NLP model</span> with a 81% accuracy. Used MongoDB, to store user hashed user credentials, created a token authentication system and used localstorage to automatically sign-in and verify the user.`,
        },
        {
            title: "Cravescale",
            link: "https://xd.adobe.com/view/4fe38c47-1f58-4a35-4fdb-46ef7a26ea66-39d2/grid/",
            tech: "AbodeXD, Python",
            description: `An app to combat food waste that uses machine learning to predict accurately, the calories a person has to consume at any given time. The <span class="highlight">multi-feature regression model</span> uses parameters like based on factors like <span class="highlight">BMI, Diet Regime and Food Schedule</span> that are entered when the users registers for the app. These calories are then converted to the <span class="highlight">users favourite foods</span> and the quantity so that the user can avoid ordering or making excess food and stop wasting. The app includes an additional feature that helps the users contact the <span class="highlight">food donation agencies</span> around them, so that they can call the agencies if there is food leftover.`,
        },
        {
            title: "Spam Filter",
            link: "https://github.com/xinslu/Spam-Classifier",
            tech: "Python",
            description: `A spam classification <span class="highlight">TD-IDF Logistic Regression NLP model</span> with a <span class="highlight">95% accuracy</span> to be used in mail and SMS filtering. I visualized and analyzed data using <span class="highlight">WordCloud </span> and worked on setting optimal parameters.`,
        },
    ];
    let skills = [
        {
            title: "Programming Languages",
            rows: [
                [
                    {
                        field: "python-plain",
                        title: "Python",
                    },
                    {
                        field: "java-plain",
                        title: "Java",
                    },
                    {
                        field: "javascript-plain",
                        title: "JavaScript",
                    },
                    {
                        field: "rust-plain",
                        title: "Rust",
                    },
                    {
                        field: "c-plain",
                        title: "C",
                    },
                    {
                        field: "html5-plain",
                        title: "HTMl",
                    },
                    {
                        field: "css3-plain",
                        title: "CSS",
                    },
                    {
                        field: "csharp-plain",
                        title: "C#",
                    },
                    {
                        field: "latex-plain",
                        title: "LaTeX",
                    },
                ],
                [
                    {
                        field: "solidity-plain",
                        title: "Solidity",
                    },
                    {
                        field: "bash-plain",
                        title: "Bash",
                    },
                    {
                        field: "cplusplus-plain",
                        title: "C++",
                    },
                    {
                        field: "typescript-plain",
                        title: "Typescript",
                    },
                    {
                        field: "haskell-plain",
                        title: "Haskell",
                    },
                    {
                        field: "ocaml-plain",
                        title: "OCaml",
                    },
                ],
            ],
        },
        {
            title: "Frameworks",
            rows: [
                [
                    {
                        field: "react-plain",
                        title: "ReactJS",
                    },
                    {
                        field: "express-original",
                        title: "Express.js",
                    },

                    {
                        field: "react-plain",
                        title: "React Native",
                    },
                    {
                        field: "nodejs-plain",
                        title: "Node.js",
                    },
                    {
                        field: "firebase-plain",
                        title: "Firebase",
                    },
                    {
                        field: "flask-plain",
                        title: "Flask",
                    },
                    {
                        field: "androidstudio-plain",
                        title: "Android Studio",
                    },
                ],
                [
                    {
                        field: "ionic-original",
                        title: "Ionic Framework",
                    },
                    {
                        field: "angularjs-plain",
                        title: "AngularJS",
                    },
                    {
                        field: "flutter-plain",
                        title: "Flutter",
                    },
                    {
                        field: "bootstrap-plain",
                        title: "Bootstrap",
                    },
                    {
                        field: "bulma-plain",
                        title: "Bulma",
                    },
                    {
                        field: "gatsby-plain",
                        title: "Gatsby",
                    },
                ],
                [
                    {
                        field: "handlebars-plain",
                        title: "Handlebar.js",
                    },
                    {
                        field: "django-plain",
                        title: "django",
                    },
                    {
                        field: "socketio-plain",
                        title: "Socket.IO",
                    },
                ]
            ],
        },
        {
            title: "Libraries",
            rows: [
                [
                    {
                        field: "numpy-plain",
                        title: "Numpy",
                    },
                    {
                        field: "pandas-plain",
                        title: "Pandas",
                    },
                    {
                        field: "tensorflow-original",
                        title: "Tensorflow",
                    },
                    {
                        field: "jupyter-plain",
                        title: "Jupyter Notebook",
                    },
                    {
                        field: "pytorch-original",
                        title: "PyTorch",
                    },
                    {
                        field: "opencv-plain",
                        title: "OpenCV",
                    },
                ],
            ],
        },
        {
            title: "Database",
            rows: [
                [
                    {
                        field: "mysql-plain",
                        title: "SQl",
                    },
                    {
                        field: "mongodb-plain",
                        title: "MongoDB",
                    },
                    {
                        field: "redis-plain",
                        title: "Redis",
                    },
                ],
            ],
        },
        {
            title: "Technologies",
            rows: [
                [
                    {
                        field: "git-plain",
                        title: "Git",
                    },
                    {
                        field: "github-plain",
                        title: "GitHub",
                    },
                    {
                        field: "docker-plain",
                        title: "Docker",
                    },
                    {
                        field: "unity-original",
                        title: "Unity",
                    },
                    {
                        field: "vim-plain",
                        title: "Vim",
                    },
                    {
                        field: "linux-plain",
                        title: "Linux",
                    },
                ],
                [
                    {
                        field: "figma-plain",
                        title: "Figma",
                    },
                    {
                        field: "xd-plain",
                        title: "AdobeXD",
                    },
                    {
                        field: "matlab-plain",
                        title: "Matlab",
                    },
                    {
                        field: "nginx-plain",
                        title: "nginx",
                    },
                    {
                        field: "kubernetes-plain",
                        title: "Kubernetes",
                    },
                    {
                        field: "raspberrypi-line",
                        title: "Raspberry Pi",
                    },
                    {
                        field: "heroku-plain",
                        title: "Heroku",
                    },
                ],
            ],
        },
    ];
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
    let string = `<h3 class="fw-bold font-monospace">
                        Programming Languages
                    </h3>
                    <div class="pe-5 row mt-4 justify-content-md-center">
                        <div class="col col-md-auto">
                            <center>
                                <h5 class="highlight font-monospace">
                                    <i class="devicon-python-plain"></i>
                                </h5>
                                <p class="font-weight-light font-monospace">
                                    Python
                                </p>
                            </center>
                        </div>
                        <div class="col col-md-auto">
                            <center>
                                <h5 class="highlight font-monospace">
                                    <i class="devicon-java-plain"></i>
                                </h5>
                                <p class="font-weight-light font-monospace">
                                    Python
                                </p>
                            </center>
                        </div>
                    </div>`;
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
                        <span className="highlight fst-italic"> GPA: </span> 4.0 (Dean's List, Faculty Honors) <br />
                        <span className="highlight fst-italic"> Concentration: </span> Intelligence, Systems and Architecture<br />
                        <span className="highlight fst-italic"> Coursework: </span> Datastructures and Algorithms, Honors Discrete Algebra, Honors Linear Algebra, Combinatorics, Probability and Statistics <br />
                        <span className="highlight fst-italic"> Clubs: </span> Dependently-Typed, The Agency, VGDev
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
