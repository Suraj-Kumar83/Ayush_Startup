
const express = require("express");
const router = express.Router();
const GovUser = require("../Models/GovUserModel");

router.post("/", async (req, res) => {
  try {
    const { name, govId, email, department, password } = req.body;

    if (!name || !govId || !email || !department || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Check for existing gov user
    const existing = await GovUser.findOne({ $or: [{ email }, { govId }] });
    if (existing) {
      return res
        .status(409)
        .json({
          success: false,
          message: "User with given email or ID already exists",
        });
    }

    const newGovUser = new GovUser({
      name,
      govId,
      email,
      department,
      password,
    });
    await newGovUser.save();

    res
      .status(201)
      .json({
        success: true,
        message: "Government user registered successfully",
      });
  } catch (error) {
    console.error("Gov signup error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.post("/verify-token", async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret-key");
    return res.status(200).json({ success: true, userId: decoded.userId });
  } catch (err) {
    console.error("Token verification failed:", err);
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
});


module.exports = router;
