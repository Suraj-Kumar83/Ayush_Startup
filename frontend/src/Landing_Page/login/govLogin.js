// src/Landing_Page/login/GovLogin.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../context/AuthContext.js";
const backendURL = process.env.REACT_APP_BACKEND_URL;

const GovLogin = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${backendURL}/login/govlogin`,
        formData,
        { withCredentials: true }
      );

      if (data.success) {
        toast.success("✅ Login successful!", { position: "bottom-right" });
        localStorage.setItem("govUserToken", data.token); // Optional for token handling
        localStorage.setItem("authToken", data.token);
        setIsAuthenticated(true);
        setTimeout(() => navigate("/govFeatures"), 1000);
      } else {
        toast.error(data.message || "Invalid credentials", {
          position: "bottom-left",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Login failed. Try again.", {
        position: "bottom-left",
      });
    }
  };

  return (
    <div className="container p-5">
      <h2 className="text-center mb-4">Government Official Login</h2>
      <form onSubmit={handleSubmit} className="w-75 mx-auto">
        <div className="form-group mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your government email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-4">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Login & Access Features
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default GovLogin;
