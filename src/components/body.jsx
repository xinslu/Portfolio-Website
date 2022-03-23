import React from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import NotFoundPage from '../pages/404';
import './navbar.css';
import "devicon/devicon.min.css";

  const Body = () => {
  	return(
  			<div id="body">
          	<div id="home" style={{paddingTop: "33vh"}}><a id="home">

            <h1 className="display-1 text-center" style={{fontFamily: "Trebuchet MS", paddingTop: `40px`, marginTop: `-40px`}}>Kinshuk
            		<span className="text-primary"> Phalke</span>
          	</h1></a>
          	<div className="subheading pb-5 text-center">Atlanta · GA ·
            		<a href="mailto:phalkekinshuk@gmail.com" target="_blank"> phalkekinshuk@gatech.edu</a>
                <div style={{paddingTop : "2vh"}}></div>
            <div style={{display: "inline"}}><h2><a href="https://github.com/xinslu" target="_blank"><i class="devicon-github-original"></i></a>                  <a href="https://www.linkedin.com/in/kinshukphalke/" target="_blank"><i class="devicon-linkedin-plain"></i></a></h2> <Link to="/resume" target="_blank">Resume</Link> | <Link to="/blog">Blog</Link></div></div></div>
            <div style={{paddingTop: "50vh"}}></div>
            <div id="text">
            <div id="about_me">   
          		<a id="About_me"><h2 className="display-4" style={{paddingTop: `20%`, marginTop: `-20%`}}>About Me
              </h2></a>
              <p className="lead">Hi! I am an upcoming freshman at the <span className="text-primary">Georgia Institute of technology, Atlanta</span>,  where I will be majoring in <span className="text-primary">Computer Science</span>. I completed High School at <span className="text-primary">Delhi Private School, Sharjah</span>, where I studied Physics, Chemistry, Mathematics and Computer Science. I am passionate about <span className="text-primary">challenges</span>, particularly the ones where I am making a difference to the world. Currently, I am working on a <span className="text-primary">News Rating Based Stock Prediction algorithm</span> that uses neural language processing to draw a realistic estimate of stock prices. I like to read about <span className="text-primary">Machine Learning, FinTech and Processing Architechture Design</span> and keep track of all the latest developments in the field. I always love to apply my experience and skills in <span className="text-primary">new and meaningful ways to impact the world</span>, so feel free to reach out to me! When, I am not busy, you could find me <span className="text-primary">playing chess online</span>, listening to my favourtie artist and <span className="text-primary">playing them on drums and guitar</span>, or <span className="text-primary">exploring new places</span>!</p>
          	</div>
            <div style={{paddingTop: "20vh"}}></div>
            <div id="internships"><a id="Internships"><h2 className="display-4" style={{paddingTop: `20%`, marginTop: `-20%`}}>Internships</h2></a>
            <h4 className="text-primary pt-2">NCR Corporation</h4><p className="lead">Coming up this Summer!</p>
            <h4 className="text-primary pt-2">Manipal Academy of Higher Education</h4><p className="lead"> I worked as an intern at the MAHE, Dubai Campus, where I learned <span className="text-primary">Arduino, and low level C++ Programming</span>. I spent some time learning about the basics of <span className="text-primary">micro-controllers, PWMs, and Oscillatory circuits</span>. I also learned and used <span className="text-primary">TensorFlow, Pandas, Matplotlib to make a basic image recognition software using a Kaggle dataset</span>. I delved deeper into understanding <span className="text-primary">Convoluted Neural Networks and Deep Learning</span>. Outside of coding, I designed a Bluetooth controlled car and interfaced it with an android mobile phone to be controlled remotely.</p></div>
            <div style={{paddingTop: "20vh"}}></div>
  			    <div id="experience"><a id="Experience"><h2 className="display-4" style={{paddingTop: `20%`, marginTop: `-20%`}}>Experience</h2></a>
            <h4 className="text-primary pt-2">Student Researcher, National University of Singapore</h4><p className="lead">With a team of 4, I worked on <span className="text-primary">Cravescale</span>, an app that aims to combat food Waste. Researching the correlation between <span className="text-primary">ghrelin</span>, the hunger hormone, and other factors like <span className="text-primary">BMI, Age, Dietary Habits, Diet Regime</span>, we built a core Machine Learning model that can <span className="text-primary">predict the exact amount of calories a person has to consume at any time of the day</span>. The user can input his list of favourite foods in the sign up page, keep a track of calorie consumption trends in the home page, and look at food to be consumed at the time of the day in results. I worked with <span className="text-primary">Professor Lisa Winstanley</span> on User Expereince and Design and <span className="text-primary">Dr. Tan Wee Kek</span> on core functionality.</p>
            <h4 className="text-primary pt-2">Leader, Education for All Campaign</h4><p className="lead">I organized a Campaign <span className="text-primary">Education for All</span>, in the small town of Nashik, India, to help <span className="text-primary">underprivileged children from orphanages and slums</span>. Identifying their talent through various art activities, I motivated and <span className="text-primary">helped them become self-reliant</span>.Through the campaign, I helped the underprivileged children overcome their disadvantage by making them realize their true worth. I taught children in <span className="text-primary">orphanages and after noticing their talent in art, I arranged for art classes</span>. I funded multiple libraries and <span className="text-primary">got local NGOs</span> and <span className="text-primary">newspapers involved with me</span>
            .</p>
            <h4 className="text-primary pt-2">Summer Student, BITS Pilani</h4><p className="lead">I worked on learning the basics of linux and bash commands including <span className="text-primary">grep,ls,man,sh,cpp,cat</span>. I worked with basics of server management and the permissions. I used <span className="text-primary">vi editor</span> to learn the basics of screen-oriented text editors and develop programs to manipulate files. I manipulated virtual box and hypervisor settings.</p>
            <h4 className="text-primary pt-2">Summer Student, Emirates Aviation Univeristy</h4><p className="lead">I learnt and applied <span className="text-primary">aerodynamics principles of flight, lift, and curvature</span> in building a Water Rocket that flew 1.2Km. I designed and interfaced a paper plane with a propellor controled with a mobile app using the inbuilt gyro.I also <span className="text-primary">learnt about valves in an engine and tested aero foil structure in a Wind Tunnel</span>. I also worked on designing, printing, and configuring a 3D Printed drone.</p>
            <h4 className="text-primary pt-2">Team Leader, FIRST LEGO League Robotics Team</h4><p className="lead">I lead a team at the <span className="text-primary">FIRST LEGO League for 4 years</span> and participated in <span className="text-primary">FIRST Tech Challenge 2020</span>. I learnt how to build multifunctional robots with attachements to complete tasks using <span className="text-primary">LEGO Mindstorm, Arduino and Textrix</span>. I also learnt about <span className="text-primary">OnBot Java</span> and programmed the joystick with a <span className="text-primary">unique trigonometric algorithm</span> .</p></div>
            <div style={{paddingTop: "20vh"}}></div>
            <div id="projects"><a id="projects"><h2 className="display-4" style={{paddingTop: `20%`, marginTop: `-20%`}}>Projects</h2></a>
            <h4 className="text-primary pt-2"><a href="https://github.com/xinslu/deusCL" target="_blank">DeusCL</a></h4><p className="lead">DeusCL is a <span className="text-primary">Common LISP</span> implementation with a REPL built in <span className="text-primary">Rust</span> . I am building on a memory-efficient, memory-safe and fast REPL using <span className="text-primary">Rust references and borrowing principles</span>. I am working on making a <span className="text-primary">Recursive Descent Parser</span> and a Scanner to <span className="text-primary">parse S-Expressions</span>.</p>
            <h4 className="text-primary pt-2"><a href="https://github.com/AllisanLu/PaperPlanes" target="_blank">PaperPlanes</a></h4><p className="lead"> Working on Paper Planes, a <span className="text-primary">2D sidescroller platformer</span> created with <span className="text-primary">Unity</span> as a part of the VGDev Club on campus. I worked on a <span className="text-primary">relaunch mechanism</span> using custom aero dynamics, a <span className="text-primary">particle system</span> for paper plane trail, and one for <span className="text-primary">collisions with objects</span>. I also worked on making a <span className="text-primary">Quest API</span> to show the current quests going on.</p>
            <h4 className="text-primary pt-2"><a href="https://github.com/xinslu/hack-a-lang" target="_blank">Hack-A-Lang</a></h4><p className="lead">As a part of a dependently-typed (Programming Language Club) on campus, I worked on a <span className="text-primary">python implementation</span> of the common teaching language Lox. I worked on building and degubbing a <span className="text-primary">Recursive Descent Parser, Scanner</span> and a made a script to generate a <span className="text-primary">python class system</span> for different atoms and a <span className="text-primary">visitor pattern</span> for the interpreter class. I also worked on the <span className="text-primary">AST</span> and a <span className="text-primary">language environment</span> to store function and variable declration. I lectured at the event about <span className="text-primary">AST evaluation, dynamic environment creation</span> for functional and recrusive calls and <span className="text-primary">implementating the vistitor patters </span> for interpreters. </p>
            <h4 className="text-primary pt-2"><a href="https://github.com/saisree27/publixmon" target="_blank">Publixmon</a></h4><p className="lead">Publixmon is a <span className="text-primary">full-stack mobile app</span> integrating modern day NFT and Style Tranfer technologies to create a unique interactive retail experience. With every checkout, the app has a chance to give the user a NFT using a <span className="text-primary">style tranfer machine learning model</span> based on two attributes a famous painting by a <span className="text-primary">renaissance painting</span> and an item in your <span className="text-primary">purchase history</span>. Users walk into a store and scan a QR code to see other active users who are in the store and they can <span className="text-primary">socialize</span>, see each other's collections of virtual toys, and <span className="text-primary">trade</span> them to grow their collection. A user's collection is auto-scored based on size and <span className="text-primary">variety of collectibles</span>, resulting in <span className="text-primary">higher engagement</span> for the business. I worked on making the backend blockchain that generates the NFTs that uses the style tranfer images using <span className="text-primary">Solidity</span> and a <span className="text-primary">Ganache Blockchain</span> to test it on. I worked on creating the backend for the project that uses the <span className="text-primary">NCR API</span> to serve purchase history and <span className="text-primary">CDN Network</span> to store the style transfered images.</p>
            <h4 className="text-primary pt-2"><a href="https://twitake.netlify.app/" target="_blank">Twitake</a></h4><p className="lead">A <span className="text-primary">full-stack fake disaster tweet analysis tool</span> that uses <span className="text-primary">TwitterAPI</span> to extract the text from the tweet link that the user pastes in input box and data processing tools like <span className="text-primary">lemmatization, tokenization, N-Grams, Stop Words </span>, removal of punctuation, and a <span className="text-primary">TD-IDF based Logistic Regression NLP model</span> with a 81% accuracy. Used MongoDB, to store user hashed user credentials, created a token authentication system and used localstorage to automatically sign-in and verify the user.</p>
            <h4 className="text-primary pt-2"><a href="https://github.com/xinslu/mental-health-chat" target="_blank">Mental Health Chat</a></h4><p className="lead">A timed chat for people to share and talk about issues they're having in relation with their mental health and help them overcome it. A message in the <span className="text-primary">Redis database</span> to expire in about <span className="text-primary">6 hours</span> in order to encourage people to come out and discourage users from harrasing one another. Created a <span className="text-primary">Dockerized App</span> with a Redis Instance during development. Set-up a Log-In page using <span className="text-primary">Firebase</span> that is capable of using <span className="text-primary">Google OAuth</span>, the users can then set their username, add a profile picture and set the theme (light/dark) for the app, before getting started chatting on the server. </p>
            <h4 className="text-primary pt-2"><a href="https://xd.adobe.com/view/4fe38c47-1f58-4a35-4fdb-46ef7a26ea66-39d2/grid/" target="_blank">CraveScale</a></h4><p className="lead">An app to combat food waste that uses machine learning to predict accurately, the calories a person has to consume at any given time. The <span className="text-primary">multi-feature regression model</span> uses parameters like based on factors like <span className="text-primary">BMI, Diet Regime and Food Schedule</span> that are entered when the users registers for the app. These calories are then converted to the <span className="text-primary">users favourite foods</span> and the quantity so that the user can avoid ordering or making excess food and stop wasting. The app includes an additional feature that helps the users contact the <span className="text-primary">food donation agencies</span> around them, so that they can call the agencies if there is food leftover.</p>
            <h4 className="text-primary pt-2"><a href="https://github.com/xinslu/Spam-Classifier" target="_blank">Spam Filter</a></h4><p className="lead">A spam classification <span className="text-primary">TD-IDF Logistic Regression NLP model</span> with a <span className="text-primary">95% accuracy</span> to be used in mail and SMS filtering. I visualized and analyzed data using <span className="text-primary">WordCloud </span> and worked on setting optimal parameters.</p>
            <h4 className="text-primary pt-2">iSight</h4><p className="lead">A set of <span className="text-primary">3D printed googles and mobile app</span> that enables people with visual problems to navigate easily in crowded environments and get to their destination. The googles have an <span className="text-primary">integrated proximity sensors</span> which output values ot the app and the <span className="text-primary">app returns voice commands based on the situation</span>. Along, with close proximity sensing the app also has voice output for directions built using <span className="text-primary">Google Maps Platform API</span>. The app also has an emergency option wherein the user can say help and the <span className="text-primary">selected contacts will automatically be alerted</span>.</p>

            </div>
            <div style={{paddingTop: "20vh"}}></div>
            <div id="awards"><a id="Awards"><h2 className="display-4" style={{paddingTop: `20%`, marginTop: `-20%`}}>Awards</h2></a>
            <h4 className="text-primary pt-2">Manipal Young Innovators Award</h4><p className="lead">I won the first place for designing <span className="text-primary">iSight</span> at the Manipal Academy of Higher Education, Dubai.</p>
            <h4 className="text-primary pt-2">THINK Award, FIRST Tech Challenge</h4><p className="lead">I was part of the team that won the THINK award in FIRST Tech Challenge for creating a robot with unique controls based on <span className="text-primary">trigonometric function to enable strafing</span>.</p>
            <h4 className="text-primary pt-2">Olympiad Honors</h4><p className="lead">I won a <span className="text-primary">Silver Medal</span> at the International Level, and a <span className="text-primary">Bronze Medal</span> in the National Level in <span className="text-primary">Asian International Mathematics Olympiad 2020</span> from Asia International Mathematical Olympiad Union. I also won <span className="text-primary">Merit Honor</span> in <span className="text-primary">International Teenage Mathematics Olympiad 2019</span> at Lucknow, India</p></div>
            <div style={{paddingTop: "20vh"}}></div>
            <div id="skills"><a id="Skills"><h2 className="display-4" style={{paddingTop: `20%`, marginTop: `-20%`}}>Skills</h2></a>
            <p className="lead"><h4 className="text-primary pt-2">Programming Languages</h4>
            <ul style={{listStyleType: "none"}}>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-python-plain"></i></h5> Python</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-java-plain"></i></h5> Java</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-javascript-plain"></i></h5> JavaScript</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-rust-plain"></i></h5> Rust</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-c-plain"></i></h5> C</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-solidity-plain"></i></h5> Solidity</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-bash-plain"></i></h5> Bash</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-cplusplus-plain"></i></h5> C++</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-html5-plain"></i></h5> HTML</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-css3-plain"></i></h5> CSS</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-csharp-plain"></i></h5> C#</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-latex-original"></i></h5> LaTeX</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-typescript-plain"></i></h5> TypeScript</li>
            </ul>
            <h4 className="text-primary pt-2">Frameworks</h4>
            <ul style={{listStyleType: "none"}}>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-react-original"></i></h5> ReactJS</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-bootstrap-plain"></i></h5> Bootstrap</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-express-original"></i></h5> Express.js</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-nodejs-plain"></i></h5> Node.js</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-ionic-original"></i></h5> Ionic Framework</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-react-original"></i></h5> React Native</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-flutter-plain"></i></h5> Flutter</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-angularjs-plain"></i></h5> AngularJS</li>
            </ul>
            <h4 className="text-primary pt-2">Databases</h4>
            <ul style={{listStyleType: "none"}}>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-mysql-plain"></i></h5> SQL</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-redis-plain"></i></h5> Redis</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-mongodb-plain"></i></h5> MongoDB</li>
            </ul>
            <h4 className="text-primary pt-2">Technologies</h4>
            <ul style={{listStyleType: "none"}}>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-git-plain"></i></h5> Git</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-docker-plain"></i></h5> Docker</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-figma-plain"></i></h5> Figma</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-xd-plain"></i></h5> Adobe XD</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-matlab-plain"></i></h5> Matlab</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-unity-original"></i></h5> Unity</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-nginx-original"></i></h5> Nginx</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-vim-plain"></i></h5> Vim</li>
            </ul>
            </p></div>
            <div style={{paddingTop: "8vh"}}></div>
            <div className="pt-5 text-center">© 2021, Kinshuk Phalke</div>
            <div className="pt-5"></div>
        </div>
        </div>
  		);
  }


export default Body;
