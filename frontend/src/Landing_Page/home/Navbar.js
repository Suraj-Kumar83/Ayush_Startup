import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

const backendURL = process.env.REACT_APP_BACKEND_URL;

function Navbar() {
  const { isAuthenticated, setIsAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  const handleLogout = async () => {
    try {
      const res = await axios.get(`${backendURL}/logout`, {
        withCredentials: true,
      });

      if (res.data.success) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("govToken");
        setIsAuthenticated(false);
        navigate("/");
      }
    } catch (err) {
      console.error("Logout failed", err);
      toast.error("Logout failed. Try again.");
    }
  };

  if (loading) return null;

  return (
    <nav
      className={`navbar navbar-expand-lg border-bottom sticky-top ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container">
        
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/logo.png"
            alt="Company logo"
            style={{ width: "80px", height: "60px", borderRadius: "50%" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/features">Features</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">Pricing</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/contact">Contact</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/virtual-yoga">
                Virtual Yoga
              </Link>
            </li>

            {!isAuthenticated && (
              <>
                {/* Signup Dropdown */}
                <li className="nav-item dropdown">
                  <button
                    className="nav-link dropdown-toggle btn btn-link"
                    data-bs-toggle="dropdown"
                  >
                    SignUp
                  </button>

                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item" onClick={() => navigate("/signup")}>
                        Register Startup SignUp
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={() => navigate("/govsignup")}>
                        Government Features SignUp
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={() => navigate("/signUp?redirectTo=proposal")}>
                        Proposal Idea SignUp
                      </button>
                    </li>
                  </ul>
                </li>

                {/* Login Dropdown */}
                <li className="nav-item dropdown">
                  <button
                    className="nav-link dropdown-toggle btn btn-link"
                    data-bs-toggle="dropdown"
                  >
                    Login
                  </button>

                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item" onClick={() => navigate("/login")}>
                        Register Startup Login
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={() => navigate("/govlogin")}>
                        Government Features Login
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={() => navigate("/login?redirectTo=proposal")}>
                        Proposal Idea Login
                      </button>
                    </li>
                  </ul>
                </li>
              </>
            )}

            {isAuthenticated && (
              <li className="nav-item">
                <button
                  className="btn btn-danger ms-2"
                  style={{ margin: "5px" }}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>

          {/* Dark Mode */}
          <button
            className={`btn btn-${darkMode ? "light" : "dark"}`}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
