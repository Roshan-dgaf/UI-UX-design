import "./ContactUs.css";

const ContactUs = () => {
    return (
        <div className="contact-page">
            {/* Header */}
            <header className="contact-header">
                <h1>Let’s Talk</h1>
                <p>Have questions, feedback, or business inquiries? Reach out to us anytime.</p>
            </header>

            {/* Main Section */}
            <section className="contact-wrapper">
                {/* Contact Info */}
                <div className="contact-box info-box">
                    <h2>Contact Information</h2>
                    <p><strong>📧 Email:</strong> support@yourbusiness.com</p>
                    <p><strong>📞 Phone:</strong> +977-9800000000</p>
                    <p><strong>📍 Address:</strong> New Baneshwor, Kathmandu</p>
                    <p><strong>🕒 Working Hours:</strong></p>
                    <ul>
                        <li>Mon - Fri: 9 AM - 6 PM</li>
                        <li>Sat: 10 AM - 4 PM</li>
                        <li>Sun: Closed</li>
                    </ul>
                </div>

                {/* Contact Form */}
                <form className="contact-box form-box">
                    <h2>Send Us a Message</h2>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" placeholder="John Doe" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="you@example.com" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" rows="5" placeholder="Write your message..." required></textarea>
                    </div>

                    <button type="submit">Submit Message</button>
                </form>
            </section>
        </div>
    );
};

export default ContactUs;
