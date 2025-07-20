import axios from "axios";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import "./LoginPopup.css";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let endpoint = currentState === "Login" ? "/api/user/login" : "/api/user/register";
    try {
      const response = await axios.post(url + endpoint, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        toast.success("Welcome!");
        setShowLogin(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="modern-login-overlay">
      <form className="modern-login-container" onSubmit={onLogin}>
        <div className="modern-login-header">
          <h2>{currentState === "Login" ? "Welcome Back 👋" : "Create an Account"}</h2>
          <img
            src={assets.cross_icon}
            alt="close"
            onClick={() => setShowLogin(false)}
          />
        </div>

        <div className="modern-login-inputs">
          {currentState === "Sign Up" && (
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              placeholder="Your Name"
              required
            />
          )}
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            placeholder="Password"
            required
          />
        </div>

        <div className="modern-login-terms">
          <input type="checkbox" required />
          <p>I agree to the terms of service and privacy policy</p>
        </div>

        <button type="submit" className="modern-login-btn">
          {currentState === "Login" ? "Login" : "Sign Up"}
        </button>

        <p className="modern-login-toggle">
          {currentState === "Login" ? (
            <>
              Don't have an account?{" "}
              <span onClick={() => setCurrentState("Sign Up")}>Sign Up</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setCurrentState("Login")}>Login</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
