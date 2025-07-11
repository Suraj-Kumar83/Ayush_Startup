const mongoose = require("mongoose");
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL; // ✅ Fix: get the string, not the object

const conn = mongoose.createConnection(MONGO_URL);

let gfs;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("pitchDecks");
});

const createStorage = async () => {
  return await gridFsStorage({
    db: mongoose.connection.db,
    file: (req, file) => ({
      bucketName: "pitchDecks",
      filename: Date.now() + "-" + file.originalname,
    }),
  });
};

module.exports = { createStorage, gfs };
