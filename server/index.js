import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import uploadRoutes from "./routes/upload.js";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import categoryRoutes from "./routes/categories.js";
import dotenv from "dotenv";
import path from "path";
import GridFSBucket from "gridfs-stream";
import { fileURLToPath } from "url";
import { connection } from "./db.js";
const app = express();
app.use(cors());
dotenv.config();

let gfs;
connection();

const conn = mongoose.connection;
conn.once("open", function () {
  gfs = GridFSBucket(conn.db, mongoose.mongo);
  gfs.collection("photos");
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);

app.use("/api/file", uploadRoutes);

app.delete("/api/file/:filename", async (req, res) => {
  try {
    await gfs.files.deleteOne({ filename: req.params.filename });
    res.status(200).json("Success");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/file/:filename", async (req, res) => {
  const { filename } = req.params;
  try {
    const file = await gfs.files.findOne({ filename });
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(PORT, console.log("Server is running on PORT" + PORT));

// app.listen(PORT, console.log(`Listening on port ${PORT}...`));
