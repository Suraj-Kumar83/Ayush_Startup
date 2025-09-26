import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../../context/AuthContext.js";
import "./SignUp.css";
const backendURL=process.env.REACT_APP_BACKEND_URL;



const Signup = () => {
  const { setIsAuthenticated } = useAuth(); 
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const redirectTo = queryParams.get("redirectTo");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.username.trim()) {
      errors.username = "Username is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }
    if (!data.password.trim()) {
      errors.password = "Password is required";
    } else if (data.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const { data } = await axios.post(
        `${backendURL}/signup`,
        formData,
       { withCredentials: true }
);
        if (data.success) {
          setIsAuthenticated(true); 
          toast.success(data.message, { position: "bottom-right" });

          setTimeout(() => {
            if (redirectTo === "proposal") {
              navigate("/proposal");
            } else {
              navigate("/dashboard");
            }
          }, 250);
        } else {
          toast.error(data.message, { position: "bottom-left" });
        }
      } catch (error) {
        toast.error("Something went wrong. Please try again.", {
          position: "bottom-left",
        });
        console.error(error);
      }
      setFormData({ username: "", email: "", password: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const { data } = await axios.post(
        `${backendURL}/google-signup`,
        { credential: credentialResponse.credential },
        { withCredentials: true }
      );

      if (data.success) {
        setIsAuthenticated(true);
        toast.success("Signed up with Google!", { position: "bottom-right" });
        localStorage.setItem("authToken", data.token || "google");
        setTimeout(() => {
          if (redirectTo === "proposal") {
            navigate("/proposal");
          } else {
            navigate("/dashboard");
          }
        }, 500);
      } else {
        toast.error(data.message, { position: "bottom-left" });
      }
    } catch (err) {
      console.error("Google login error:", err);
      toast.error("Google Signup failed.", { position: "bottom-left" });
    }
  };

  const handleGoogleFailure = () => {
    toast.error("Google authentication failed.", { position: "bottom-left" });
  };

  return (
    <GoogleOAuthProvider clientId="686889492370-olvtjscc7llnuo8e1v0v4dlfg4dtgbnt.apps.googleusercontent.com">
      <div className="signup-page">
        <section className="hero">
          <h1>Welcome to AYUSH STARTUP REGISTRATION PORTAL</h1>
          <p>
            Join thousands of startups and unlock exclusive benefits. Let’s get
            started!
          </p>
        </section>

        <section className="registration-form">
          <h2>Create Your Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                autoComplete="username"
              />
              {errors.username && (
                <span className="error">{errors.username}</span>
              )}
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                autoComplete="email"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                autoComplete="new-password"
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>

            <button type="submit" className="submit-btn">
              Create Account
            </button>
          </form>

          <div className="divider">or</div>

          <div className="google-signup">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
            />
          </div>

          <p className="login-link">
            Already have an account? <Link to="/login">Log in here</Link>.
          </p>
        </section>

        <hr />

        {/* Footer */}
        <footer className="footer border-top">
          <div className="quick-links">
            <a href="/about">About Us</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="social-media">
            <a href="/linkedin">LinkedIn</a>
            <a href="/twitter">Twitter</a>
            <a href="/facebook">Facebook</a>
            <a href="/instagram">Instagram</a>
          </div>
          <div className="newsletter">
            <p>
              Subscribe to our newsletter for the latest updates and resources.
            </p>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <p className="copyright">
            © 2023 [Your Startup Portal Name]. All rights reserved.
          </p>
        </footer>

        <ToastContainer />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Signup;
