const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddlewares");
const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const router = require("express").Router();
const passport = require("passport");
const sendSignupNotification = require("../util/emailNotifier.js");

require("dotenv").config();


router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);
router.get("/verify-token", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json({ success: false });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id); 
    if (!user) return res.json({ success: false });

    res.json({
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Token verification error:", err.message);
    res.json({ success: false });
  }
});



router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/", 
    failureRedirect: "http://localhost:3000/login",
  })
);


router.post("/google-signup", async (req, res) => {
  try {
    const { credential } = req.body;

    const googleResponse = await axios.get(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${credential}`
    );

    const { email, name, sub: googleId } = googleResponse.data;

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        username: name,
        email,
        googleId,
      });
      await user.save();

      
      await sendSignupNotification({
        username: name,
        email,
        method: "Google Signup",
      });
    }

    
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      success: true,
      message: "Signed up with Google",
      token,
    });
  } catch (err) {
    console.error("Google signup error:", err);
    res.status(400).json({ success: false, message: "Google sign-up failed" });
  }
});


router.get("/auth/user", (req, res) => {
  res.send(req.user);
});


router.get("/logout", (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (err) {
    console.error("Logout error:", err);
    res.status(500).json({ success: false, message: "Logout failed" });
  }
});


module.exports = router;
