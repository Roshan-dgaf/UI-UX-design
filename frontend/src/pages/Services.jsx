import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import ExploreMenu from "../../src/components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../src/components/FoodDisplay/FoodDisplay";
import "./Services.css";

const Services = () => {
    const [category, setCategory] = useState("All");
    const navigate = useNavigate();

    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <h1>Our Services</h1>
            </section>

            {/* Content Section */}
            <section className="services-content">
                <div className="services-left">
                    <h2>What We Offer</h2>
                    <p>
                        We provide a comprehensive range of digital services to help your business thrive
                        in the modern digital landscape. From web development and design to digital marketing
                        and consulting, our expert team is here to bring your vision to life with cutting-edge
                        solutions tailored to your specific needs.
                    </p>
                    <p>
                        Our services are designed to be scalable, efficient, and results-driven, ensuring
                        that every project we undertake delivers measurable value to your business. Whether
                        you're a startup looking to establish your online presence or an established company
                        seeking to optimize your digital operations, we have the expertise to help you succeed.
                    </p>
                </div>
                <div className="services-right">
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">💻</div>
                            <h3>Web Development</h3>
                            <p>Custom websites and web applications built with modern technologies</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🎨</div>
                            <h3>UI/UX Design</h3>
                            <p>Beautiful, intuitive designs that enhance user experience</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">📈</div>
                            <h3>Digital Marketing</h3>
                            <p>Strategic marketing solutions to grow your online presence</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">💡</div>
                            <h3>Consulting</h3>
                            <p>Expert guidance to optimize your digital strategy</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Menu Section */}
            <section className="services-menu-section">
                {/* <ExploreMenu category={category} setCategory={setCategory} /> */}
                <FoodDisplay category={category} />
            </section>

            {/* CTA Section */}
            <section className="services-cta">
                <h2>Need a Custom Service?</h2>
                <p>Contact us today to get a personalized solution tailored to your needs!</p>
                <button onClick={() => navigate("/contact-us")}>Contact Us</button>
            </section>
        </div>
    );
};

export default Services;
