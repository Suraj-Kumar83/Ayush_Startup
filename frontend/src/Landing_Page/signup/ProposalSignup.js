
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const backendURL = process.env.REACT_APP_BACKEND_URL;

const ProposalSignup = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    founderName: "",
    contactEmail: "",
    ideaTitle: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendURL}/api/proposal`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("✅ Proposal submitted successfully!", {
          position: "bottom-right",
          autoClose: 3000,
        });
        setFormData({
          founderName: "",
          ideaTitle: "",
          description: "",
          contactEmail: "",
        });

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(data.message || "Something went wrong!", {
          position: "bottom-left",
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error. Please try again later.", {
        position: "bottom-left",
      });
    }
  };
  

  return (
    <div className="container p-5">
      <h2>Submit Your Startup Proposal</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="founderName"
            value={formData.founderName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Idea Title</label>
          <input
            type="text"
            name="ideaTitle"
            value={formData.ideaTitle}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit Proposal
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ProposalSignup;
