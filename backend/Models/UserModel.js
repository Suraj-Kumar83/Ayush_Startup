const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: false, // <-- Allow users without passwords (e.g. Google users)
  },
  googleId: {
    type: String,
    required: false, // <-- Store Google account ID (optional)
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Hash password only if it exists and is modified
userSchema.pre("save", async function (next) {
  if (this.password && this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
