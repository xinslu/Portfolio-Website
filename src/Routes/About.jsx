import "../css/about.css";
export default function About() {
    console.log("im here");
    return (
      <section id="about">
        <div className="row">
            <div className="three columns">
              {/*<img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />*/}
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              {/*<p>{bio}</p>*/}
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    {/*<span>{name}</span>*/}
                    <br />
                    <span>
                      {/*{street}*/}
                      <br />
                      {/*{city} {state}, {zip}*/}
                    </span>
                    <br />
                    {/*<span>{phone}</span>*/}
                    <br />
                    {/*<span>{email}</span>*/}
                  </p>
                </div>
              </div>
            </div>
          </div>
      </section>
    );
}
