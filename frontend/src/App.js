// src/App.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";

import Navbar from "./Landing_Page/home/Navbar";
import HomePage from "./Landing_Page/home/HomePage";
import SignUp from "./Landing_Page/signup/signUp";
import Login from "./Landing_Page/login/Login";
import Features from "./Landing_Page/features/Features";
import About from "./Landing_Page/about/About";
import Contact from "./Landing_Page/contact/Contact";
import Pricing from "./Landing_Page/pricing/Pricing";
import StartupDashboard from "./Landing_Page/dashboard/Dashboard";
import Chatbot from "./Landing_Page/chatbot/Chatbot";
import GovernmentSignup from "./Landing_Page/signup/GovernmentSignup";
import ProposalSignup from "./Landing_Page/signup/ProposalSignup";
import GovernmentFeatures from "./Landing_Page/govfeature/GovFeatures";
import GovernmentLogin from "./Landing_Page/login/govLogin";
import SubsidyPage from "./Landing_Page/govfeature/subsidy";
import LicensingPage from "./Landing_Page/govfeature/Licensing";
import InnovationGrantPage from "./Landing_Page/govfeature/InnovationGrant";
import MentorshipPage from "./Landing_Page/govfeature/Mentorship";
import PolicyAdvocacyPage from "./Landing_Page/govfeature/PolicyAdvocacy";
import ExhibitionsPage from "./Landing_Page/govfeature/Exhibitions";
import PrivateRoute from "./Landing_Page/PrivateRoute";
import VirtualYogaExperience from "./Landing_Page/vryoga/VR_Yoga";
import { useAuth } from "./context/AuthContext.js";


function App() {

    const { loading } = useAuth(); 
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

    if (loading) {
      return <div>Loading authentication...</div>;
    }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/govsignup" element={<GovernmentSignup />} />
        <Route path="/virtual-yoga" element={<VirtualYogaExperience />} />

        <Route
          path="/proposal"
          element={
            <PrivateRoute redirectTo="/login?redirectTo=proposal">
              <ProposalSignup />
            </PrivateRoute>
          }
        />
        <Route
          path="/govFeatures"
          element={
            <PrivateRoute redirectTo="/govlogin">
              <GovernmentFeatures />
            </PrivateRoute>
          }
        />
        <Route path="/govlogin" element={<GovernmentLogin />} />
        <Route path="/subsidy" element={<SubsidyPage />} />
        <Route path="/licensing" element={<LicensingPage />} />
        <Route path="/innovation-grant" element={<InnovationGrantPage />} />
        <Route path="/mentorship" element={<MentorshipPage />} />
        <Route path="/policy" element={<PolicyAdvocacyPage />} />
        <Route path="/exhibitions" element={<ExhibitionsPage />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute redirectTo="/login">
              <StartupDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      <Chatbot />
    </BrowserRouter>
  );
}

export default App;
