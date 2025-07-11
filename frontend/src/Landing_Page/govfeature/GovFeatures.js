import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./GovFeatures.css";
const backendURL = process.env.REACT_APP_BACKEND_URL;


const featuresData = [
  {
    title: "Startup Subsidy Program",
    description:
      "Access financial support and subsidies tailored for early-stage AYUSH startups.",
    icon: "💰",
    path: "/subsidy",
  },
  {
    title: "AYUSH Product Licensing",
    description:
      "Simplified and fast-track approval system for AYUSH product and service licenses.",
    icon: "📜",
    path: "/licensing",
  },
  {
    title: "Innovation Grant",
    description:
      "Apply for government-backed innovation grants to support R&D.",
    icon: "💡",
    path: "/innovation-grant",
  },
  {
    title: "Mentorship by Experts",
    description:
      "Connect with experienced practitioners and mentors from the AYUSH domain.",
    icon: "🧑‍🏫",
    path: "/mentorship",
  },
  {
    title: "Priority in Exhibitions",
    description:
      "Get preference for showcasing your innovations in national and international expos.",
    icon: "🎤",
    path: "/exhibitions",
  },
  {
    title: "Policy Advocacy",
    description:
      "Participate in policy-making consultations and help shape the future of AYUSH.",
    icon: "📣",
    path: "/policy",
  },
];

const GovernmentFeatures = () => {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    alert("Before registering, you must sign up or log in first.");
    navigate("/signup");
  };

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("govToken");
      if (!token) return navigate("/govFeatures");

      try {
        const res = await axios.post(
          `${backendURL}/gov/verify-token`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.data.success) {
          
          navigate("/govFeatures");
        }
      } catch (err) {
        console.error("Token verification failed:", err);
        navigate("/govlogin");
      }
    };

    verifyToken();
  }, [navigate]);

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="gov-features-container">
      <h1 className="text-center mb-4">
        Government-Provided Features for AYUSH Innovators
      </h1>
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="feature-card clickable"
            onClick={() => handleCardClick(feature.path)}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <button
        className="p-2 btn btn-primary fs-15 mt-5 col-lg-6 col-md-12"
        style={{ width: "15%", marginLeft: "580px" ,marginTop:"50px"}}
        onClick={handleRegisterClick}
      >
        Register Your Startup
      </button>

      <footer className="footer-expand-lg border-top mt-5 pt-4 pb-3 text-center">
        <div className="mb-3">
          <Link to="/features" style={{ marginLeft: "20px" }}>
            Features
          </Link>
          <Link to="/about" style={{ marginLeft: "20px" }}>
            About Us
          </Link>
          <Link to="/" style={{ marginLeft: "20px" }}>
            Terms of Service
          </Link>
          <Link to="/" style={{ marginLeft: "20px" }}>
            {" "}
            Privacy Terms
          </Link>
        </div>
        <div>
          <i
            className="fa-brands fa-square-facebook"
            style={{ padding: "5px" }}
          ></i>
          <i className="fa-brands fa-x-twitter" style={{ padding: "5px" }}></i>
          <i className="fa-brands fa-linkedin" style={{ padding: "5px" }}></i>
        </div>
        <p className="mt-3 text-muted">
          © 2025 StartupPortal. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default GovernmentFeatures;
