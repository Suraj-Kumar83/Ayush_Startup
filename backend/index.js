const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config();
require("./config/passport");

const registerRoute = require("./Routes/Register");
const ChatRoute = require("./Routes/Chat");
const authRoute = require("./Routes/AuthRoute");
const proposalRoute = require("./Routes/Proposal.js");
const govSignupRoute = require("./Routes/GovRoute.js");
const govLoginRoute = require("./Routes/govAuth.js");

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 4000;

const app = express();


mongoose
  .connect(MONGO_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // exit if DB not connected
  });

// ✅ CORS setup for frontend access
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://ayush-startup-frontend.vercel.app",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "some_secret", // Prefer a dedicated secret
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "Lax",
    },
  })
);

// ✅ Passport initialization
app.use(passport.initialize());
app.use(passport.session());


// ✅ Routes
app.use("/", authRoute);
app.use("/register", registerRoute);
app.use("/api", ChatRoute);
app.use("/api/proposal", proposalRoute);
app.use("/signup/govsignup", govSignupRoute);
app.use("/login/govlogin", govLoginRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});


