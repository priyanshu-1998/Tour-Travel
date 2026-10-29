
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Css/Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Demo form: no message is sent to a server yet.
    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">
      {/* Hero section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-eyebrow">WE'RE HERE TO HELP</span>
          <h1>
            Get in <span>Touch</span>
          </h1>
          <p>
            Have a question about your next adventure? We would love
            to hear from you. Let's plan a journey worth remembering.
          </p>

         
        </div>
      </section>

      {/* Contact information */}
      <section className="contact-main">
        <div className="contact-intro">
          <span className="contact-eyebrow">CONTACT TRAVELGO</span>
          <h2>Let's Plan Your Next Adventure</h2>
          <p>
            Tell us what you have in mind. Our team is ready to help
            you find the right destination and travel package.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left side */}
          <div className="contact-info">
            <div className="contact-info-heading">
              <h3>Contact Information</h3>
              <p>Reach out to us using the details below.</p>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">☎</div>
              <div>
                <h4>Call Us</h4>
                <a href="tel:+911234567890">+91 12345 67890</a>
                <p>Monday – Saturday, 9 AM – 6 PM</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">✉</div>
              <div>
                <h4>Email Us</h4>
                <a href="mailto:hello@travelgo.example">
                  hello@travelgo.example
                </a>
                <p>Send us your travel questions anytime.</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">⌖</div>
              <div>
                <h4>Our Office</h4>
                <p>Gurugram, Haryana, India</p>
                <p>Contact us for office visit details.</p>
              </div>
            </div>

            <div className="contact-social">
              <h4>Let's Connect</h4>
              <div className="contact-social-links">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">ig</a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
              </div>
            </div>
          </div>

          {/* Right side: contact form */}
          <div className="contact-form-card">
            <h3>Send Us a Message</h3>
            <p className="contact-form-subtitle">
              Fill out the form and tell us how we can help.
            </p>

            {submitted && (
              <div className="contact-success" role="status">
                Thank you for contacting TravelGo! This demo form has
                recorded your submission on this page, but it has not
                sent a message to our team.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Your Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email Address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">Subject *</label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="Package Inquiry">Package Inquiry</option>
                  <option value="Booking Support">Booking Support</option>
                  <option value="Customized Trip">Customized Trip</option>
                  <option value="Cancellation">Cancellation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Your Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your travel plans..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="contact-submit-btn" type="submit">
                Send Message <span>→</span>
              </button>

              <p className="contact-privacy">
                We'd love to help you plan your next trip.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="contact-map-section">
        <div className="contact-map-heading">
          <span className="contact-eyebrow">FIND US</span>
          <h2>Our Travel Hub</h2>
          <p>Explore Jaipur, Rajasthan — the starting point for your next journey.</p>
        </div>

        <div className="contact-map">
          <iframe
            title="Map of Jaipur, Rajasthan"
            src="https://maps.google.com/maps?q=Jaipur%2C%20Rajasthan%2C%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

     
    </main>
  );
}
