const multer = require("multer");
const { storage } = require("../config/gridfs");

// This is the configured multer middleware
const upload = multer({ storage }).fields([
  { name: "pitchDeck", maxCount: 1 },
  { name: "aadhaarCard", maxCount: 1 },
  { name: "registrationCert", maxCount: 1 },
]);

module.exports = upload;
