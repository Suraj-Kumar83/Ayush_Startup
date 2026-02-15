import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    alert("Before registering, you must sign up or log in first.");
    navigate("/signup");
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="Media/startup-bg.png"
          alt="Startup platform banner"
          className="mb-5"
          style={{
            borderRadius: "100px",
            width: "65%",
            marginLeft: "230px",
            borderBlockStyle: "outset",
            border: "solid green",
          }}
        />

        <h1 className="mt-5">Launch Your Startup Journey Today</h1>

        <p>
          Join hundreds of innovators building their future. We provide the
          tools, resources, and network to get your idea off the ground.
        </p>

        <button
          className="p-2 btn btn-primary fs-15 mb-5 col-lg-6 col-md-12"
          style={{ width: "15%", margin: "0 auto" }}
          onClick={handleRegisterClick}
        >
          Register Your Startup
        </button>
      </div>
    </div>
  );
}

export default Hero;
