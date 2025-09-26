import React, { useState, useRef } from "react";
import axios from "axios";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
const backendURL = process.env.REACT_APP_BACKEND_URL;

const StartupDashboard = () => {
  const navigate = useNavigate();
  const [pitchDeckFile, setPitchDeckFile] = useState(null);
  const [aadhaarCardFile, setAadhaarCardFile] = useState(null);
  const [registrationCertFile, setRegistrationCertFile] = useState(null);

  const pitchDeckRef = useRef();
  const aadhaarCardRef = useRef();
  const registrationCertRef = useRef();

  const [formData, setFormData] = useState({
    startupName: "",
    website: "",
    sector: "",
    description: "",
    founderName: "",
    email: "",
    phone: "",
    stage: "",
    ayushSystem: "",
    complianceNeeds: "",
    incorporationDate: "",
    employees: "",
  });



  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    if (name === "pitchDeck") setPitchDeckFile(file);
    if (name === "aadhaarCard") setAadhaarCardFile(file);
    if (name === "registrationCert") setRegistrationCertFile(file);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fullData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        fullData.append(key, value);
      });
      if (pitchDeckFile) fullData.append("pitchDeck", pitchDeckFile);
      if (aadhaarCardFile) fullData.append("aadhaarCard", aadhaarCardFile);
      if (registrationCertFile)
        fullData.append("registrationCert", registrationCertFile);

      const response = await axios.post(
        `${backendURL}/register`,
        fullData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.success) {
        alert("Startup Registered Successfully!");
        setFormData({
          startupName: "",
          website: "",
          sector: "",
          description: "",
          founderName: "",
          email: "",
          phone: "",
          stage: "",
          ayushSystem: "",
          complianceNeeds: "",
          incorporationDate: "",
          employees: "",
        });

        setPitchDeckFile(null);
        setAadhaarCardFile(null);
        setRegistrationCertFile(null);

        if (pitchDeckRef.current) pitchDeckRef.current.value = "";
        if (aadhaarCardRef.current) aadhaarCardRef.current.value = "";
        if (registrationCertRef.current) registrationCertRef.current.value = "";
        setTimeout(() => {
          navigate("/");
        }, 250);
      } else {
        alert("Something went wrong: " + response.data.message);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("An error occurred during submission.");
    }
  };
  


  return (
    <div className="dashboard-page">
      <h1 className="dashboard-heading">Startup Registration Dashboard</h1>
      <form className="dashboard-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Startup Name</label>
          <input
            type="text"
            name="startupName"
            value={formData.startupName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Website</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Sector/Category</label>
          <input
            type="text"
            name="sector"
            value={formData.sector}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label>Founder Name</label>
          <input
            type="text"
            name="founderName"
            value={formData.founderName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Startup Stage</label>
          <select name="stage" value={formData.stage} onChange={handleChange}>
            <option>Idea</option>
            <option>Prototype</option>
            <option>Revenue Generating</option>
          </select>
        </div>

        <div className="form-group">
          <label>AYUSH System</label>
          <select
            name="ayushSystem"
            value={formData.ayushSystem}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option>Ayurveda</option>
            <option>Unani</option>
            <option>Siddha</option>
            <option>Homeopathy</option>
            <option>Yoga & Naturopathy</option>
          </select>
        </div>

        <div className="form-group">
          <label>Compliance Needs</label>
          <input
            type="text"
            name="complianceNeeds"
            value={formData.complianceNeeds}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Date of Incorporation</label>
          <input
            type="date"
            name="incorporationDate"
            value={formData.incorporationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Number of Employees</label>
          <input
            type="number"
            name="employees"
            value={formData.employees}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Upload Aadhaar Card</label>
          <input
            type="file"
            name="aadhaarCard"
            onChange={handleFileChange}
            accept=".pdf,.jpg,.jpeg,.png"
            ref={aadhaarCardRef}
          />
        </div>
        <div className="form-group">
          <label>Upload Registration Certificate</label>
          <input
            type="file"
            name="registrationCert"
            onChange={handleFileChange}
            accept=".pdf,.jpg,.jpeg,.png"
            ref={registrationCertRef}
          />
        </div>
        <div className="form-group">
          <label>Upload Pitch Deck</label>
          <input
            type="file"
            name="pitchDeck"
            onChange={handleFileChange}
            accept=".pdf"
            ref={pitchDeckRef}
          />
        </div>

        <button type="submit" className="submit-btn">
          Register Startup
        </button>
      </form>
    </div>
  );
};

export default StartupDashboard;
