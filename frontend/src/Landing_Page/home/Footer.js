import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-expand-lg border-top mt-5 pt-4 pb-3 text-center">
      <div className="mb-3">
        <Link
          to="/features"
          style={{ marginLeft: "20px" }}
        >
          Features
        </Link>
        <Link
          to="/about"
          style={{  marginLeft: "20px" }}
        >
          About Us
        </Link>
        <Link to="/" style={{marginLeft: "20px" }}>
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
  );
}

export default Footer;
