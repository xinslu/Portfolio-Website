import "../css/about.css";
export default function About() {
    let pfp = "images/pfp.png"
    return (
      <section id="about">
      <div class="container">
        <div className="row align-items-center">
            <div className="col-sm-3">
              <img
                className="profile-pic"
                src={pfp}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="col-md-9">
              <p className="text-left display-5 text-white fw-light font-monospace">About Me</p>
              <p className="lead text-white-50 font-monospace text-justify">Hey, I am Kinshuk Phalke, a rising sophmore at the <span className="text-white">Georgia Institute of technology, Atlanta</span>, where I major in <span className="text-white">Computer Science</span> and specialize in <span className="text-white">Systems and Architecture</span> and <span className="text-white">Intelligence</span>. I am interested in <span className="text-white">FinTech, Web3, Machine Learning Research, Programming Languages</span> and <span className="text-white">Processor Architecture</span>. When, I am not coding you can find me watching a Sci-Fi Series or trying to make a funny meme. Welcome to my personal Website, where I list my personal projects and achievements!</p>
            </div>
            </div>
        </div>
      </section>
    );
}
