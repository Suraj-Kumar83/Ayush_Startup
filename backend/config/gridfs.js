const mongoose = require('mongoose');
const { GridFsStorage } = require('multer-gridfs-storage');
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

// Mongoose connection
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const conn = mongoose.connection;

// Initialize GridFS storage with Mongoose connection
const storage = new GridFsStorage({
  db: conn, // Use Mongoose connection to avoid multiple connections
  file: (req, file) => {
    // Use a single bucket to match schema
    const bucketName = 'pitchDecks'; // Align with schema's ref: 'pitchDecks.files'
    return {
      bucketName,
      filename: `${Date.now()}-${file.originalname}`,
    };
  },
});

// Connection events
conn.once('open', () => {
  console.log('✅ MongoDB connected');
});

storage.on('connection', () => {
  console.log('✅ GridFS Storage connected');
});

storage.on('connectionFailed', (err) => {
  console.error('❌ GridFS Storage connection failed', err);
});

// Initialize GridFSBucket with promise
let gfs;
const gfsPromise = new Promise((resolve, reject) => {
  conn.once('open', () => {
    gfs = new mongoose.mongo.GridFSBucket(conn.db, {
      bucketName: 'pitchDecks', // Align with storage and schema
    });
    console.log('✅ GridFSBucket initialized');
    resolve(gfs);
  });
  conn.on('error', (err) => {
    console.error('❌ MongoDB connection error:', err);
    reject(err);
  });
});

module.exports = { storage, gfs: gfsPromise };