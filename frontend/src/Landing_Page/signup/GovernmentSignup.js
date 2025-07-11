// GovernmentSignup.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../context/AuthContext";
const backendURL = process.env.REACT_APP_BACKEND_URL;

const GovernmentSignup = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    govId: "",
    email: "",
    department: "",
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
        `${backendURL}/signup/govsignup`,
        formData
      );
      if (data.success) {
        toast.success("✅ Government registration successful!", {
          position: "bottom-right",
        });
        setIsAuthenticated(true);
        setTimeout(() => {
          navigate("/govFeatures"); 
        }, 500);
      } else {
        toast.error(data.message || "Email or Government ID already exists", {
          position: "bottom-left",
        });
      }
    } catch (err) {
      if (err.response && err.response.status === 409) {
        toast.error(err.response.data.message || "Conflict: Email or Gov ID exists", {
          position: "bottom-left",
        });
      } else {
        // 🛠️ Handle all other errors
        console.error(err);
        toast.error("Server error. Please try again later.", {
          position: "bottom-left",
        });
      }
    }
  };

  return (
    <div className="container p-5">
      {/* Top Image */}
      <div className="text-center mb-4">
        <img
          src="/Media/goverment.jpg"
          alt="Government Signup"
          style={{
            width: "70%",
            borderRadius: "20px",
            border: "3px solid #007bff",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>

      <h2 className="text-center mb-4">Government Official Signup</h2>

      <form onSubmit={handleSubmit} className="w-75 mx-auto">
        <div className="form-group mb-3">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group mb-3">
          <label>Government ID</label>
          <input
            type="text"
            name="govId"
            placeholder="Enter your official ID"
            value={formData.govId}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group mb-3">
          <label>Department</label>
          <input
            type="text"
            name="department"
            placeholder="Department Name"
            value={formData.department}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group mb-3">
          <label>Email ID</label>
          <input
            type="email"
            name="email"
            placeholder="Government Email Address"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group mb-4">
          <label>Create Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create a secure password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Register and Access Government Features
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default GovernmentSignup;
