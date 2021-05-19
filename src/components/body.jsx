import React from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import NotFoundPage from '../pages/404'
  
  const Body = () => {
  	return(
  			<div id="body">
          	<div id="home" style={{paddingTop: "33vh"}}><h1 className="display-1 text-center" style={{fontFamily: "Trebuchet MS"}}>Kinshuk
            		<span className="text-primary"> Phalke</span>
          	</h1>
          	<div className="subheading pb-5 text-center">Dubai · UAE ·
            		<a href="mailto:phalkekinshuk@gmail.com" target="_blank"> phalkekinshuk@gmail.com</a>
                <div style={{paddingTop : "2vh"}}></div>
            <div style={{display: "inline"}}><h2><a href="https://github.com/xinslu" target="_blank"><i class="devicon-github-original"></i></a>                  <a href="https://www.linkedin.com/in/kinshukphalke/" target="_blank"><i class="devicon-linkedin-plain"></i></a></h2> <Link to="/resume" target="_blank">Resume</Link> | <Link to="/blog">Blog</Link></div></div></div>
            <div style={{paddingTop: "50vh"}}></div>
            <div id="text">
            <div id="about_me">   
          		<a id="About_me"><h2 className="display-4">About 
              </h2></a>
              <p className="lead">Hi! I am an upcoming freshman at the <span className="text-primary">Georgia Institute of technology, Atlanta</span>,  where I will be majoring in <span className="text-primary">Computer Science</span>. I completed High School at <span className="text-primary">Delhi Private School, Sharjah</span>, where I studied Physics, Chemistry, Mathematics and Computer Science. Passionate about the use of technology in solving problems that connect us all, I have been intensively involved with Robotics and Environment clubs, where I work on projects targetting <span className="text-primary">sustainability, recycling and carbon capture.</span> I like researching and keeping myself up to date in <span className="text-primary">Processor Design, Machine Learning, Cryptocurrency, and Physics</span>. Outside of technology, I am interested <span className="text-primary">equity</span>, particularly with children and oprhans in India. The rest of my time is made up of <span className="text-primary">playing chess online</span>, listening to my favourtie artist and <span className="text-primary">playing them on drums and guitar</span>, or <span className="text-primary">drawing some stills</span>. </p>
          	</div>
            <div style={{paddingTop: "20vh"}}></div>
            <div id="internships"><a id="Internships"><h2 className="display-4">Internships</h2></a>
            <h4 className="text-primary pt-2">Manipal Academy of Higher Education</h4><p className="lead"> I worked as an intern at the MAHE, Dubai Campus, where I learned <span className="text-primary">Arduino, and low level C++ Programming</span>. I spent some time learning about the basics of <span className="text-primary">micro-controllers, PWMs, and Oscillatory circuits</span>. I also learned and used <span className="text-primary">TensorFlow, Pandas, Matplotlib to make a basic image recognition software using a Kaggle dataset</span>. I delved deeper into understanding <span className="text-primary">Convoluted Neural Networks and Deep Learning</span>. Oustide of coding, I designed a Bluetooth controlled car and interfaced it with an android mobile phone to be controlled remotely.</p></div>
            <div style={{paddingTop: "20vh"}}></div>
  			    <div id="experience"><a id="Experience"><h2 className="display-4">Experience</h2></a>
            <h4 className="text-primary pt-2">Student Researcher, National University of Singapore</h4><p className="lead">With a team of 4, I worked on <span className="text-primary">Cravescale</span>, an app that aims to combat food Waste. Researching the correlation between <span className="text-primary">ghrelin</span>, the hunger hormone, and other factors like <span className="text-primary">BMI, Age, Dietary Habits, Diet Regime</span>, we built a core Machine Learning model that can <span className="text-primary">predict the exact amount of calories a person has to consume at any time of the day</span>. The user can input his list of favourite foods in the sign up page, keep a track of calorie consumption trends in the home page, and look at food to be consumed at the time of the day in results. I worked with <span className="text-primary">Professor Lisa Winstanley</span> on User Expereince and Design and <span className="text-primary">Dr. Tan Wee Kek</span> on core functionality.</p>
            <h4 className="text-primary pt-2">Leader, Education for All Campaign</h4><p className="lead">I organized a Campaign <span className="text-primary">Education for All</span>, in the small town of Nashik, India, to help <span className="text-primary">underprivileged children from orphanages and slums</span>. Identifying their talent through various art activities, I motivated and<span className="text-primary">helped them become self-reliant</span>.Through the campaign, I helped the underprivileged children overcome their disadvantage by making them realize their true worth. I taught children in <span className="text-primary">orphanages and after noticing their talent in art, I arranged for art classes</span>. I funded multiple libraries and <span className="text-primary">got local NGOs</span> and <span className="text-primary">newspapers involved with me</span>
            .</p>
            <h4 className="text-primary pt-2">Summer Student, BITS Pilani</h4><p className="lead">I worked on learning the basics of linux and bash commands including <span className="text-primary">grep,ls,man,sh,cpp,cat</span>. I worked with basics of server management and the permissions. I used <span className="text-primary">vi editor</span> to learn the basics of screen-oriented text editors and develop programs to manipulate files. I manipulated virtual box and hypervisor settings.</p>
            <h4 className="text-primary pt-2">Summer Student, Emirates Aviation Univeristy</h4><p className="lead">I learnt and applied <span className="text-primary">aerodynamics principles of flight, lift, and curvature</span> in building a Water Rocket that flew 1.2Km. I designed and interfaced a paper plane with a propellor controled with a mobile app using the inbuilt gyro.I also <span className="text-primary">learnt about valves in an engine and tested aero foil structure in a Wind Tunnel</span>. I also worked on designing, printing, and configuring a 3D Printed drone.</p>
            <h4 className="text-primary pt-2">Team Leader, FIRST LEGO League Robotics Team</h4><p className="lead">Lead a team at the <span className="text-primary">FIRST LEGO League for 4 years</span> and participated in <span className="text-primary">FIRST Tech Challenge 2020</span>. Learnt and build multifunctional robots with attachements to complete tasks using <span className="text-primary">LEGO Mindstorm, Arduino and Textrix</span>. Learnt <span className="text-primary">OnBot Java</span> and programmed the joystick with a <span className="text-primary">unique trigonometric algorithm</span> .</p></div>
            <div style={{paddingTop: "20vh"}}></div>
            <div id="awards"><a id="Awards"><h2 className="display-4">Awards</h2></a>
            <h4 className="text-primary pt-2">Manipal Young Innovators Award</h4><p className="lead">I won the first place for designing <span className="text-primary">iSight</span>- a set of <span className="text-primary">3D printed googles and mobile app</span> that enables people with visual problems to navigate easily in crowded environments and get to their destination. The googles have an <span className="text-primary">integrated proximity sensors</span> which output values ot the app and the <span className="text-primary">app returns voice commands based on the situation</span>. Along, with close proximity sensing the app also has voice output for directions built using <span className="text-primary">Google Maps Platform API</span>. The app also has an emergency option wherein the user can say help and the <span className="text-primary">selected contacts will automatically be alerted</span>.</p>
            <h4 className="text-primary pt-2">THINK Award, FIRST Tech Challenge</h4><p className="lead">I was part of the team that won the THINK award in FIRST Tech Challenge for creating a robot with unique controls based on <span className="text-primary">trigonometric function to enable strafing</span>.</p>
            <h4 className="text-primary pt-2">Olympiad Honors</h4><p className="lead">I won a <span className="text-primary">Silver Medal</span> at the International Level, and a <span className="text-primary">Bronze Medal</span> in the National Level in <span className="text-primary">Asian International Mathematics Olympiad 2020</span> from Asia International Mathematical Olympiad Union. I also won Merit Honor in <span className="text-primary">International Teenage Mathematics Olympiad 2019</span> at Lucknow, India</p></div>
            <div style={{paddingTop: "20vh"}}></div>
            <div id="skills"><a id="Skills"><h2 className="display-4">Skills</h2></a>
            <p className="lead"><h4 className="text-primary pt-2">Programming Languages</h4>
            <ul style={{listStyleType: "none"}}>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-python-plain"></i></h5> Python</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-javascript-plain"></i></h5> JavaScript</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-bash-plain"></i></h5> Bash</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-cplusplus-plain"></i></h5> C++</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-html5-plain"></i></h5> HTML</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-css3-plain"></i></h5> CSS</li>
            </ul>
            <h4 className="text-primary pt-2">Frameworks</h4>
            <ul style={{listStyleType: "none"}}>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-react-original"></i></h5> ReactJS</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-bootstrap-plain"></i></h5> Bootstrap</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-ionic-original"></i></h5> Ionic</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-angularjs-plain"></i></h5> AngularJS</li>
            </ul>
            <h4 className="text-primary pt-2">Technologies</h4>
            <ul style={{listStyleType: "none"}}>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-git-plain"></i></h5> Git</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-xd-plain"></i></h5> Adobe XD</li>
            <li><h5 className="text-primary" style={{display: "inline"}}><i class="devicon-matlab-plain"></i></h5> Matlab</li>
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