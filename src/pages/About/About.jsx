import "./About.css";
import mainPhoto from "../../assets/images/main-photo.jpg";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About The Leader</h1>
          <p>
            Dedicated to transforming communities through strategic investments
            in healthcare, education, infrastructure and economic empowerment.
          </p>
        </div>
      </section>

      <section className="bio-section">
        <div className="container">
          <div className="bio-content">
            <div className="bio-image">
              <img src={mainPhoto} alt="Leader" />
            </div>
            <div className="bio-text">
              <h2>Biography</h2>
              <p>
                <span className="highlight">Hon. Duncan Maina Mathenge </span>
                has devoted years to improving communities through strategic
                investments in education, healthcare, infrastructure and youth
                empowerment.
              </p>

              <p>
                Through visionary leadership and a commitment to public service,
                numerous projects have been delivered to improve the quality of
                life for citizens.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
