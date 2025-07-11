const Startup = require("../Models/StartupModel");
const { gfs } = require("../config/gridfs");
const mongoose = require("mongoose");

// Register Startup Controller
exports.registerStartup = async (req, res) => {
  try {
    const {
      startupName,
      website,
      sector,
      description,
      founderName,
      email,
      phone,
      stage,
      ayushSystem,
      complianceNeeds,
      incorporationDate,
      employees,
    } = req.body;

    // Extract file IDs from uploaded files
    const pitchDeckFile = req.files["pitchDeck"]?.[0];
    const aadhaarFile = req.files["aadhaarCard"]?.[0];
    const registrationFile = req.files["registrationCert"]?.[0];

    const newStartup = new Startup({
      startupName,
      website,
      sector,
      description,
      founderName,
      email,
      phone,
      stage,
      ayushSystem,
      complianceNeeds,
      incorporationDate: incorporationDate ? new Date(incorporationDate) : null,
      employees: employees ? parseInt(employees) : null,
      pitchDeck: pitchDeckFile ? pitchDeckFile.id : null,
      aadhaarCard: aadhaarFile ? aadhaarFile.id : null,
      registrationCert: registrationFile ? registrationFile.id : null,
    });

    await newStartup.save();
    res.status(201).json({ success: true, message: "Startup registered" });
  } catch (err) {
    console.error("Error registering startup:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// View file
exports.viewFile = async (req, res) => {
  try {
    const fileId = new mongoose.Types.ObjectId(req.params.id);
    const file = await gfs.files.findOne({ _id: fileId });

    if (!file || !file.contentType.startsWith("application/")) {
      return res
        .status(404)
        .json({ success: false, message: "File not viewable" });
    }

    res.set("Content-Type", file.contentType);
    const readstream = gfs.createReadStream(file.filename);
    readstream.pipe(res);
  } catch (err) {
    res.status(404).json({ success: false, message: "File not found" });
  }
};

// Download file
exports.downloadFile = async (req, res) => {
  try {
    const fileId = new mongoose.Types.ObjectId(req.params.id);
    const file = await gfs.files.findOne({ _id: fileId });

    if (!file) {
      return res
        .status(404)
        .json({ success: false, message: "File not found" });
    }

    res.set("Content-Type", file.contentType);
    res.set("Content-Disposition", `attachment; filename="${file.filename}"`);
    const readstream = gfs.createReadStream(file.filename);
    readstream.pipe(res);
  } catch (err) {
    res.status(404).json({ success: false, message: "Download failed" });
  }
};
