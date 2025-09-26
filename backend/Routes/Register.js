const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const upload = require('../Middlewares/Upload');
const Startup = require('../Models/StartupModel');
const { gfs } = require('../config/gridfs');
const startupController = require('../Controllers/startupController');

router.post('/', upload, async (req, res) => {
  try {
    console.log('Uploaded files:', req.files);
    if (!req.files || Object.keys(req.files).length === 0) {
      console.log('No files uploaded');
      // Still allow startup creation without files
    }

    // Run controller logic (assumed to validate req.body)
    await new Promise((resolve, reject) => {
      startupController.registerStartup(req, res, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });

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
      incorporationDate: incorporationDate ? new Date(incorporationDate) : null,
      employees: employees ? parseInt(employees) : null,
      pitchDeck: req.files['pitchDeck']?.[0]?.id || null,
      aadhaarCard: req.files['aadhaarCard']?.[0]?.id || null,
      registrationCert: req.files['registrationCert']?.[0]?.id || null,
    });

    await newStartup.save();
    res.status(201).json({ success: true, message: 'Startup registered successfully', startup: newStartup });
  } catch (err) {
    console.error('Error saving startup:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

router.get('/view/:id', async (req, res) => {
  try {
    const gfsInstance = await gfs; // Wait for gfs promise
    const fileId = new mongoose.Types.ObjectId(req.params.id);
    const file = await gfsInstance.find({ _id: fileId }).toArray();
    if (!file || file.length === 0) {
      return res.status(404).send('File not found');
    }
    res.set('Content-Type', file[0].contentType);
    const readstream = gfsInstance.openDownloadStream(fileId);
    readstream.pipe(res);
  } catch (err) {
    console.error('Error retrieving file:', err);
    res.status(500).send('Error retrieving file');
  }
});

router.get('/download/:id', async (req, res) => {
  try {
    const gfsInstance = await gfs; // Wait for gfs promise
    const fileId = new mongoose.Types.ObjectId(req.params.id);
    const file = await gfsInstance.find({ _id: fileId }).toArray();
    if (!file || file.length === 0) {
      return res.status(404).send('File not found');
    }
    res.set('Content-Type', file[0].contentType);
    res.set('Content-Disposition', `attachment; filename="${file[0].filename}"`);
    const readstream = gfsInstance.openDownloadStream(fileId);
    readstream.pipe(res);
  } catch (err) {
    console.error('Error downloading file:', err);
    res.status(500).send('Download failed');
  }
});

// Error handling middleware
router.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ success: false, message: 'Something went wrong' });
});

module.exports = router;