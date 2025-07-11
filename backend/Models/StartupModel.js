const mongoose = require("mongoose");

const StartupSchema = new mongoose.Schema({
  startupName: { type: String, required: true },
  website: String,
  sector: String,
  description: String,
  founderName: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  stage: String,
  ayushSystem: String,
  complianceNeeds: String,
  incorporationDate: Date,
  employees: Number,

  // File references stored in GridFS (ObjectId)
  pitchDeck: { type: mongoose.Schema.Types.ObjectId, ref: "pitchDecks.files" },
  aadhaarCard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "pitchDecks.files",
  },
  registrationCert: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "pitchDecks.files",
  },

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Startup", StartupSchema);
