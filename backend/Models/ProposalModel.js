const mongoose = require("mongoose");

const proposalSchema = new mongoose.Schema({
  founderName: {
    type: String,
    required: [true, "Founder name is required"],
  },
  ideaTitle: {
    type: String,
    required: [true, "Idea title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  contactEmail: {
    type: String,
    required: [true, "Contact email is required"],
    match: [/\S+@\S+\.\S+/, "Please use a valid email address"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Proposal", proposalSchema);
