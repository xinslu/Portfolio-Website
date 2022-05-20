import "../css/portfolio.css";
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
            description: `I am working in a start up at Gerogia Tech in building a MVP. I worked on developing a <span class="text-primary">Full-Stack Website</span> and working on fine tuning an NLP model for more accurate results. I worked on a machine learning pipeline that uses <span class="text-primary">UMAP</span> to map the relevant word embeddings of pieces of text onto a 2D graph, <span class="text-primary">FAISS</span> to effieciently cluster these texts and an <span class="text-primary">LDA model</span> on these clusters to find accurate topics for these. In the frontend, I worked on optimizing WordCloud of test using <span class="text-primary">ReactFlow</span>.`,
        },
        {
            title: "National University of Singapore",
            job: "Student Researcher",
            duration: "April 2019 - December 2019",
            description: `With a team of 4, I worked on <span class="text-primary">Cravescale</span>, an app that aims to combat food Waste. Researching the correlation between <span class="text-primary">ghrelin</span>, the hunger hormone, and other factors like <span class="text-primary">BMI, Age, Dietary Habits, Diet Regime</span>, we built a core Machine Learning model that can <span class="text-primary">predict the exact amount of calories a person has to consume at any time of the day</span>. The user can input his list of favourite foods in the sign up page, keep a track of calorie consumption trends in the home page, and look at food to be consumed at the time of the day in results. I worked with <span class="text-primary">Professor Lisa Winstanley</span> on User Expereince and Design and <span class="text-primary">Dr. Tan Wee Kek</span> on core functionality.`,
        },
        {
            title: "Manipal Academy of Higher Education",
            job: "Summer Intern",
            duration: "July 2019 - August 2019",
            description: `I worked as an intern at the MAHE, Dubai Campus, where I learned <span class="text-primary">Arduino, and low level C++ Programming</span>. I spent some time learning about the basics of <span class="text-primary">micro-controllers, PWMs, and Oscillatory circuits</span>. I also learned and used <span class="text-primary">TensorFlow, Pandas, Matplotlib to make a basic image recognition software using a Kaggle dataset</span>. I delved deeper into understanding <span class="text-primary">Convoluted Neural Networks and Deep Learning</span>. Outside of coding, I designed a Bluetooth controlled car and interfaced it with an android mobile phone to be controlled remotely.`,
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
                        Bachelors in Computer Science <span>&bull;</span>
                        <em className="date fw-light font-monospace ms-2">
                            August 2021 - May 2024
                        </em>
                    </p>
                    <p>Bruh</p>
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
                            <div className="mb-5">
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
                                <p className="pe-5 text-justify text-justify" style={{fontSize: `14px`, fontFamily: `Courier New`}}  dangerouslySetInnerHTML={{ __html: experience.description }} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
