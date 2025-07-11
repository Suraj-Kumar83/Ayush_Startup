
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const registerRoute =require("./Routes/Register");
const ChatRoute = require("./Routes/Chat");
const path = require("path");
require("dotenv").config();
require("./config/passport"); // <- Load passport config
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const proposalRoute = require("./Routes/Proposal.js");
const govSignupRoute = require("./Routes/GovRoute.js");
const govLoginRoute = require("./Routes/govAuth.js");


const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 4000;

const app = express();

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.error(err));

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));



app.use(
  session({
    secret: process.env.GOOGLE_CLIENT_SECRET, // replace with env var
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

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

