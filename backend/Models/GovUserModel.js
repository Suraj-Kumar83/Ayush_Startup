// Models/GovernmentUser.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const governmentUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Full name is required"],
  },
  govId: {
    type: String,
    required: [true, "Government ID is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
  },
  department: {
    type: String,
    required: [true, "Department is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hash password before saving
governmentUserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("GovernmentUser", governmentUserSchema);
