const multer = require("multer");
const { storage } = require("../config/gridfs");

const upload = multer({ storage,limits: { fileSize: 10 * 1024 * 1024 }, }).fields([
  { name: "pitchDeck", maxCount: 1 },
  { name: "aadhaarCard", maxCount: 1 },
  { name: "registrationCert", maxCount: 1 },
]);

module.exports = upload;
