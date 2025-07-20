import { useNavigate } from "react-router-dom";
import './AppDownload.css';

const AppDownload = () => {
  const navigate = useNavigate();

  return (
    <div className="cta-section" id="app-download">
      <div className="cta-content">
        <h2>Need a Custom Digital Solution?</h2>
        <p>
          Whether it's web development, design, or marketing—let's make it happen together.
        </p>
        <button className="cta-button" onClick={() => navigate("/contact")}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default AppDownload;
