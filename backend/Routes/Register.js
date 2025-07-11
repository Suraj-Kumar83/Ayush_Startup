

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const upload = require("../Middlewares/Upload.js");
const Startup = require("../Models/StartupModel.js");
const { gfs } = require("../config/gridfs");
const multer = require("../Middlewares/Upload");

const startupController = require("../Controllers/startupController");

router.post(
  "/",
  upload,startupController.registerStartup,
  async (req, res) => {
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
        incorporationDate: incorporationDate
          ? new Date(incorporationDate)
          : null,
        employees: employees ? parseInt(employees) : null,
        pitchDeckFileId: req.files["pitchDeck"]?.[0]?._id,
        aadhaarFileId: req.files["aadhaarCard"]?.[0]?._id,
        registrationCertFileId: req.files["registrationCert"]?.[0]?._id,
      });

      await newStartup.save();
      res
        .status(201)
        .json({ success: true, message: "Startup registered successfully" });
    } catch (err) {
      console.error("Error saving startup:", err);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
);


router.get("/view/:id", startupController.viewFile,async (req, res) => {
  try {
    const fileId = new mongoose.Types.ObjectId(req.params.id);
    const file = await gfs.files.findOne({ _id: fileId });
    if (!file) return res.status(404).send("File not found");

    res.set("Content-Type", file.contentType);
    const readstream = gfs.createReadStream({ _id: fileId });
    readstream.pipe(res);
  } catch (err) {
    res.status(500).send("Error retrieving file");
  }
});


router.get("/download/:id",startupController.downloadFile, async (req, res) => {
  try {
    const fileId = new mongoose.Types.ObjectId(req.params.id);
    const file = await gfs.files.findOne({ _id: fileId });
    if (!file) return res.status(404).send("File not found");

    res.set("Content-Type", file.contentType);
    res.set("Content-Disposition", `attachment; filename=\"${file.filename}\"`);
    const readstream = gfs.createReadStream({ _id: fileId });
    readstream.pipe(res);
  } catch (err) {
    res.status(500).send("Download failed");
  }
});


module.exports = router;
