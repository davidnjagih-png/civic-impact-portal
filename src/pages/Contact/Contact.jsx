import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Reach out to us with any questions or feedback.</p>
        </div>
      </section>
      <section className="contact-content container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div clssName="info-card">
            <h3>Email</h3>
            <p>info@civicimpact.org</p>
          </div>
          <div className="info-card">
            <h3>Phone</h3>
            <p>(123) 456-7890</p>
          </div>
          <div className="info-card">
            <h3>Address</h3>
            <p>123 Civic Impact St, City, State, ZIP</p>
          </div>
        </div>

        <form className="contact-form">
          <h2>Send Us a Message</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="social-section">
        <div className="container">
          <h2> Connect with Us</h2>

          <div className="social-links">
            #Facebook
            <a
              href="https://www.facebook.com/civicimpact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            #Twitter
            <a
              href="https://twitter.com/civicimpact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            #Instagram
            <a
              href="https://www.instagram.com/civicimpact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            #LinkedIn
            <a
              href="https://www.linkedin.com/company/civicimpact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
