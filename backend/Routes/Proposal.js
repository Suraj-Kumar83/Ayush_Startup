// backend/Routes/Proposal.js
const express = require("express");
const router = express.Router();
const Proposal = require("../Models/ProposalModel");



router.post("/", async (req, res) => {
  try {
    const { founderName, ideaTitle, description, contactEmail } = req.body;

    if (!founderName || !ideaTitle || !description || !contactEmail) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const newProposal = new Proposal({
      founderName,
      ideaTitle,
      description,
      contactEmail,
    });
    await newProposal.save();

    return res
      .status(201)
      .json({ success: true, message: "Proposal submitted successfully" });
  } catch (err) {
    console.error("Proposal submission error:", err);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
});

module.exports = router;
