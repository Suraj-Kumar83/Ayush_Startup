import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { useAuth } from "../../context/AuthContext"; 
const backendURL = process.env.REACT_APP_BACKEND_URL;

const Login = () => {
  const { setIsAuthenticated } = useAuth(); 
   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const redirectTo = queryParams.get("redirectTo");

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });


  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${backendURL}/login`,
        { ...inputValue },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setIsAuthenticated(true);
        setTimeout(() => {
          if (redirectTo === "proposal") {
            navigate("/proposal");
          } else {
            navigate("/dashboard");
          }
        }, 250);
      } else {
        handleError(message);
      }
    } catch (error) {
      handleError("Something went wrong. Please try again.");
      console.log(error);
    }
    setInputValue({ email: "", password: "" });
  };

  const handleGoogleSuccess =  (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log("Google Sign-In Success:", decoded);
    handleSuccess("Google Sign-In successful!");
    setIsAuthenticated(true);
    if (redirectTo === "proposal") {
      navigate("/proposal");
    } else {
      navigate("/dashboard");
    }
  };

  const handleGoogleFailure = () => {
    handleError("Google Sign-In failed. Please try again.");
  };

  return (
    <GoogleOAuthProvider clientId="686889492370-olvtjscc7llnuo8e1v0v4dlfg4dtgbnt.apps.googleusercontent.com">
      <div className="login-page">
        {/* Hero Section */}
        <section className="hero">
          <h1>Welcome Back!</h1>
          <p>
            Log in to access your account and continue your startup journey.
          </p>
        </section>

        {/* Login Form Section */}
        <section className="login-form">
          <h2>Log In to Your Account</h2>
          <p>Enter your credentials to access your account.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="submit-btn">
              Log In
            </button>
          </form>

          <p className="forgot-password">
            Forgot your password?{" "}
            <Link to="/reset-password">Reset it here</Link>.
          </p>

          <div className="alternative-login">
            <p>Or log in with:</p>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
            />
          </div>

          <p className="signup-prompt">
            Don’t have an account? <Link to="/signup">Sign up here</Link>.
          </p>
        </section>

        {/* Footer */}
        <footer className="footer border-top">
          <div className="quick-links">
            <Link to="/about">About Us</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/contact">Contact</Link>
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

export default Login;
