import { assets } from "../../assets/frontend_assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="footer-wrapper">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={assets.logo} alt="Logo" />
            <p>Your one-stop destination for top-quality digital services — from web development and SEO to branding, content, and digital marketing solutions.</p>
            <div className="footer-icons">
              <img src={assets.facebook_icon} alt="Facebook" />
              <img src={assets.twitter_icon} alt="Twitter" />
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </div>
          </div>

          <div className="footer-links">
            <h4>Explore</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Get in Touch</h4>
            <p>📞 +977 9844636864</p>
            <p className="footer-email"><span className="footer-email-icon">📧</span><span className="footer-email-text">contact@digitalconnect.com</span></p>
            <p>🏢 Kathmandu, Nepal</p>
          </div>
        </div>

        <div className="footer-bottom">
          <hr />
          <p>© 2024 Digital Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
