import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
        // Remove all token types
        localStorage.removeItem("authToken");
        localStorage.removeItem("govToken")

        // Update global auth state
        setIsAuthenticated(false);
        navigate("/"); 
      }
    } catch (err) {
      console.error("Logout failed", err);
      toast.error("Logout failed. Try again.");
    }
  };
  
  const handleSignupClick = () => {
    alert("Signup for registering your startup.");
    navigate("/signup");
  };

  const handleGovSignupClick = () => {
    alert("Signup to access Government AYUSH features.");
    navigate("/govsignup");
  };

  const handleProposalSignupClick = () => {
    alert("Please login/signup to submit your proposal idea.");
    navigate("/signUp?redirectTo=proposal");
  };

  const handleLoginClick = () => {
    alert("Login to register your startup.");
    navigate("/login");
  };

  const handleGovLoginClick = () => {
    alert("Login to access Government AYUSH features.");
    navigate("/govlogin");
  };

  const handleProposalLoginClick = () => {
    alert("Login/signup required to propose your idea.");
    navigate("/login?redirectTo=proposal");
  };

  if (loading) return null;

  return (
    <nav
      className={`navbar navbar-expand-lg border-bottom sticky-top ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="/logo.png"
            alt="Logo"
            style={{ width: "80px", height: "60px", borderRadius: "50%" }}
          />
        </a>
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
              <a className="nav-link active" onClick={() => navigate("/")}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" onClick={() => navigate("/about")}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={() => navigate("/features")}
              >
                Features
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={() => navigate("/pricing")}
              >
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={() => navigate("/contact")}
              >
                Contact
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={() => navigate("/virtual-yoga")}
              >
                Virtual Yoga
              </a>
            </li>

            {!isAuthenticated && (
              <>
                {/* Signup Dropdown */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle active"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    SignUp
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" onClick={handleSignupClick}>
                        Register Startup SignUp
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={handleGovSignupClick}
                      >
                        Government Features SignUp
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={handleProposalSignupClick}
                      >
                        Proposal Idea SignUp
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Login Dropdown */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle active"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Login
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" onClick={handleLoginClick}>
                        Register Startup Login
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={handleGovLoginClick}
                      >
                        Government Features Login
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={handleProposalLoginClick}
                      >
                        Proposal Idea Login
                      </a>
                    </li>
                  </ul>
                </li>
              </>
            )}

            {/* Logout Button when Authenticated */}
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

          {/* Dark Mode Toggle */}
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
