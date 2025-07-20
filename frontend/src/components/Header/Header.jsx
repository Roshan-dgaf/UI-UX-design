import { Link } from 'react-router-dom';
import aboutImg from '../../assets/frontend_assets/about-img.png';
import h3 from '../../assets/frontend_assets/h3.jpg';
import './Header.css';

const Header = () => {
  return (
    <>
      <div
        className="header"
        style={{
          background: `url(${h3}) no-repeat center center/cover`
        }}
      >
        <div className="header-overlay">
          <div className="header-content">
            <h1>Grow Your Business with <br />Professional Online Services</h1>
            <p>
              From eye-catching designs to powerful marketing strategies — we deliver<br />
              everything your brand needs to succeed online.
            </p>

            <Link to="/contact-us" style={{ textDecoration: 'none' }}>
              <button className="cta-button">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="about-image">
          <img src={aboutImg} alt="About Us" />
        </div>
        <div className="about-text">
          <h5>About Us</h5>
          <h2>Empowering Your Digital Presence</h2>
          <p>
            We are a passionate team of creative minds and digital experts committed
            to helping businesses thrive in the online world. Our mission is to deliver
            high-quality, affordable, and result-driven services tailored to your business needs.
          </p>
          <p>
            With years of experience in digital marketing, web development, SEO, graphic
            design, and social media marketing, we blend creativity with strategy to
            bring your brand to life and generate real growth.
          </p>
          <button className="about-btn">About Us</button>
        </div>
      </div>


    </>
  );
};

export default Header;
