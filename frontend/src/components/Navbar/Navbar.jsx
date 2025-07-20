import { useContext, useState } from "react";
import {
  FiBell,
  FiBox,
  FiLogOut,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import "./Navbar.css";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [showDropdown, setShowDropdown] = useState(false); // Click toggle
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    toast.success("Logout Successfully");
    navigate("/");
  };

  // ✅ Toggle dropdown
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  // ✅ Optional: hide dropdown when clicking outside
  const handleClickOutside = () => {
    setShowDropdown(false);
  };

  return (
    <div className="navbar" onClick={handleClickOutside}>
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <li>
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about-us"
            onClick={() => setMenu("about-us")}
            className={menu === "about-us" ? "active" : ""}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            onClick={() => setMenu("services")}
            className={menu === "services" ? "active" : ""}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact-us"
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            Contact Us
          </Link>
        </li>
      </ul>

      <div className="navbar-right" onClick={(e) => e.stopPropagation()}>
        {/* 🔔 Notification */}
        <div className="navbar-notification-icon">
          <FiBell size={22} style={{ color: "#333", cursor: "pointer" }} />
        </div>

        {/* 🛒 Cart */}
        <div className="navbar-search-icon">
          <Link to="/cart">
            <FiShoppingCart size={22} style={{ color: "#333" }} />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {/* 👤 Profile */}
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <FiUser
              size={22}
              className="profile-icon"
              onClick={toggleDropdown}
              style={{ cursor: "pointer" }}
            />
            {showDropdown && (
              <ul className="nav-profile-dropdown">
                <li onClick={() => navigate("/myorders")}>
                  <FiBox size={18} />
                  <p>Orders</p>
                </li>
                <hr />
                <li onClick={logout}>
                  <FiLogOut size={18} />
                  <p>Logout</p>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
