import React from "react";
import { Link } from "react-router-dom";

function Features() {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-6">
          <img
            src="Media/features.jpg"
            alt="Features"
            style={{
              width: "90%",
              height: "80%",
              borderRadius: "30px",
              marginLeft: "70px",
              border: "solid green",
              borderBlockStyle: "outset",
            }}
          />
        </div>

        <div className="col-6">
          <div className="row" style={{ marginLeft: "20px" }}>
            <h1 className="mb-3 fs-2">Everything You Need in One Place</h1>
            <p>All the tools and support you need to grow.</p>

            <div className="row" style={{ marginLeft: "20px" }}>
              <ul>
                <li>
                  <i className="fa-solid fa-chart-line mb-3"></i> Track KPIs and
                  funding progress on a live dashboard.
                </li>
                <li>
                  <i className="fa-solid fa-rocket mb-3"></i> One-click access
                  to startup challenges and pitch events.
                </li>
                <li>
                  <i className="fa-solid fa-comments mb-3"></i> AI-driven
                  startup community & discussion forums.
                </li>
                <li>
                  <i className="fa-solid fa-user-shield mb-3"></i> Secure data
                  and compliance monitoring.
                </li>
              </ul>
            </div>

            <Link to="/features" style={{ textDecoration: "none" }}>
              Features <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
