import React from "react";
import { Link } from "react-router-dom";

function Benefits() {
  return (
    <div className="container p-3 mt-2">
      <div className="row p-5">
        <div className="col-lg-6 col-sm-12 p-5">
          <h1 className="fs-2 mb-5">Why Choose Us?</h1>
          <h2 className="fs-4">
            We simplify your startup journey from day one.
          </h2>
          <p className="text-muted">
            Instant registration with pre-filled templates.
          </p>
          <p className="text-muted">
            Matchmaking with investors and industry experts.
          </p>
          <p className="text-muted">
            Library of startup resources and video tutorials.
          </p>
          <p className="text-muted">
            Access to startup challenges and events.
          </p>
        </div>

        <div className="col-lg-6 col-sm-12 p-5">
          <img
            src="Media/benefits.png"
            alt="Benefits"
            style={{
              width: "90%",
              border: "solid green",
              borderRadius: "30px",
              borderBlockStyle: "outset",
            }}
          />

          <div className="text-left">
            <Link to="/features" style={{ textDecoration: "none" }}>
              Explore our Products{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </Link>

            <Link
              to="/about"
              style={{ textDecoration: "none", marginLeft: "30px" }}
            >
              About Us <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
