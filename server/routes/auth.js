import express from "express";
import {
  googleSignin,
  signin,
  signup,
  signupWithVerifiedEmail,
  emailActivate,
  forgetPassword,
  resetPassword,
  getUser,
} from "../controllers/auth.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signupWithVerifiedEmail);
router.post("/email-activate", emailActivate);
router.post("/google", googleSignin);
router.put("/forget-password", forgetPassword);
router.put("/reset-password", resetPassword);
router.get("/user/:userId", getUser);

export default router;
