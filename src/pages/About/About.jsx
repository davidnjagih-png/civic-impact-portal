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
              <img className="image-bio" src={mainPhoto} alt="Leader" />
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

      <section className="vission-section">
        <div className="container">
          <div className="vission-grid">
            <div className="vission-card">
              <h2>Vision</h2>
              <p>
                To create a thriving community where every individual has access
                to quality education, healthcare, and economic opportunities.
              </p>
            </div>
            <div className="vission-card">
              <h2>Mission</h2>
              <p>
                To deliver transparent, impactful and people-centred development
                initiatives that improve lives and strengthen communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="achievements-section">
        <div className="container">
          <h2>Key Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <h3>120+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="achievement-card">
              <h3>50+</h3>
              <p>Communities Impacted</p>
            </div>
            <div className="achievement-card">
              <h3>1000+</h3>
              <p>Students Supported</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
