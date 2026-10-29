
import { Link } from "react-router-dom";
import "./Css/footer.css";

function Footer() {
  return (
    <footer className="travel-footer">
      <div className="container">
        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <div>
            <h2>Ready for Your Next Adventure?</h2>
            <p>
              Discover amazing destinations and create unforgettable memories.
            </p>
          </div>

          <Link to="/destination" className="footer-cta">
            Explore Now <span>→</span>
          </Link>
        </div>

        <div className="row gy-4 footer-content">
          {/* Brand */}
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="footer-logo">
              <span className="logo-icon">✈</span> TravelGo
            </Link>

            <p className="footer-description">
              Your journey begins here! Explore beautiful destinations,
              experience new cultures, and make memories that last forever.
            </p>

            <div className="footer-socials">
              <a href="https://www.facebook.com/" target="_blank"
                rel="noreferrer" aria-label="Facebook">f</a>
              <a href="https://www.instagram.com/" target="_blank"
                rel="noreferrer" aria-label="Instagram">◎</a>
              <a href="https://www.youtube.com/" target="_blank"
                rel="noreferrer" aria-label="YouTube">▶</a>
              <a href="https://www.linkedin.com/" target="_blank"
                rel="noreferrer" aria-label="LinkedIn">in</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/destination">Destinations</Link></li>
              <li><Link to="/package">Packages</Link></li>
              <li><Link to="/booking">Book Now</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="col-lg-3 col-md-6 col-6">
            <h5 className="footer-heading">Top Destinations</h5>
            <ul className="footer-links">
              <li><Link to="/destination">Manali, Himachal</Link></li>
              <li><Link to="/destination">Goa, India</Link></li>
              <li><Link to="/destination">Jaipur, Rajasthan</Link></li>
              <li><Link to="/destination">Kerala, India</Link></li>
              <li><Link to="/destination">Kashmir, India</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">Get In Touch</h5>

            <div className="footer-contact">
              <span>📍</span>
              <p>Jaipur, Rajasthan, India</p>
            </div>

            <div className="footer-contact">
              <span>✉️</span>
              <a href="mailto:hello@example.com">
                hello@example.com
              </a>
            </div>

            <div className="footer-contact">
              <span>📞</span>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>

            <p className="footer-hours">
              <span className="status-dot"></span>
              We're here to help you plan your trip!
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} TravelGo. All rights reserved.
          </p>

          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>

          <p className="footer-made">
            Made with <span>♥</span> for travellers
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
