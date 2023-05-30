import express from "express";
import { imageUpload } from "../controllers/upload.js";
import { upload } from "./../middleware/upload.js";

const router = express.Router();

router.post("/upload", upload.single("file"), imageUpload);

export default router;
