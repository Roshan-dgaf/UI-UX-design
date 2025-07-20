import { useNavigate } from "react-router-dom";
import aboutImage from "../../src/assets/frontend_assets/abb.jpg";
import aboutImg2 from "../../src/assets/frontend_assets/about-img.png";
import "./AboutUs.css";

const About = () => {
    const navigate = useNavigate();

    return (
        <div>
            {/* Hero */}
            <div className="about-hero">
                About Us
            </div>

            {/* Section 1 */}
            <div className="about-section">
                <div className="about-image">
                    <img src={aboutImage} alt="Our Team" />
                </div>
                <div className="about-text">
                    <h5>Who We Are</h5>
                    <h2>Empowering Digital Solutions</h2>
                    <p>
                        At Digital Connect, we link clients with top-notch freelance professionals for design, development, and marketing. Our goal is to fuel your growth by simplifying digital services.
                    </p>
                    <button className="btn-primary" onClick={() => navigate("/contact")}>Learn More</button>
                </div>
            </div>

            {/* Section 2 */}
            <div className="about-content">
                <div className="about-left">
                    <h2>What We Offer</h2>
                    <p>
                        From creative services to technical solutions, our platform covers everything. Whether you're a business, a startup, or an individual—we deliver excellence at every step.
                    </p>
                </div>
                <div className="about-right">
                    <img src={aboutImg2} alt="Our Services" />
                </div>
            </div>

            {/* CTA Section */}
            <div className="about-cta">
                <h2>Let’s Bring Your Idea to Life</h2>
                <p>Ready to launch your project? We’re just a click away.</p>
                <button className="btn-primary" onClick={() => navigate("/contact")}>
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default About;
