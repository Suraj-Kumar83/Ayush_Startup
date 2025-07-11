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

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;

app.use(
  cors({
    origin: [
      "http://localhost:3000", 
      "https://ayush-startup-frontend.vercel.app", 
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(
  session({
    secret: process.env.GOOGLE_CLIENT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", authRoute);
app.use("/register", registerRoute);
app.use("/api", ChatRoute);
app.use("/api/proposal", proposalRoute);
app.use("/signup/govsignup", govSignupRoute);
app.use("/login/govlogin", govLoginRoute);


mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

