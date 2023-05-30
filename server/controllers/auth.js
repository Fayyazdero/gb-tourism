import User from "../models/authModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import nodemailer from "nodemailer";
import _ from "lodash";

const client = new OAuth2Client(`${process.env.OAUTH_CLIENT}`);

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User not found!" });

    const currectPassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!currectPassword)
      return res.status(400).json({ message: "Wrong credentials!" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      `${process.env.OAUTH_TOKEN_KEY}`,
      { expiresIn: "1h" }
    );

    res.status(200).json({ user: existingUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName, profilePic } =
    req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists." });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords don't match." });

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
      profilePic,
    });

    const token = jwt.sign(
      { email: user.email, id: user._id },
      `${process.env.OAUTH_TOKEN_KEY}`,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

export const signupWithVerifiedEmail = async (req, res) => {
  const { email, password, firstName, lastName, confirmPassword, profilePic } =
    req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists!" });

    let transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: "noreplysocialmail3@gmail.com",
        pass: "arshadnb10",
      },
    });

    const token = jwt.sign(
      { firstName, lastName, email, password, confirmPassword, profilePic },
      `${process.env.OAUTH_TOKEN_KEY}`,
      {
        expiresIn: "20m",
      }
    );

    await transporter.sendMail({
      from: '"noreply" noreply@gmail.com',
      to: `${firstName}, ${email}`,
      subject: "Account Activation Link",
      html: `
        <h2>Please click on a given link to activate your account.</h2>
        <a href="https://storymugg.herokuapp.com/authentication/activate/${token}">https://storymugg.herokuapp.com/authentication/activate/${token}</a>
      `,
    });

    res.status(200).json({ message: "Mail sent, please check your email." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

export const emailActivate = async (req, res) => {
  const { token } = req.body;
  try {
    if (token) {
      jwt.verify(
        token,
        `${process.env.OAUTH_TOKEN_KEY}`,
        async (error, decodedToken) => {
          try {
            const {
              firstName,
              lastName,
              email,
              password,
              confirmPassword,
              profilePic,
            } = decodedToken;
            const existingUser = await User.findOne({ email });
            if (existingUser)
              return res.status(400).json({ message: "User already exists." });
            if (password !== confirmPassword)
              return res
                .status(400)
                .json({ message: "Passwords don't match." });

            const hashedPassword = await bcrypt.hash(password, 12);

            const newUser = await User.create({
              email: email,
              password: hashedPassword,
              firstName: firstName,
              lastName: lastName,
              profilePic: profilePic,
            });

            const token = jwt.sign(
              { email: newUser.email, id: newUser._id },
              `${process.env.OAUTH_TOKEN_KEY}`,
              {
                expiresIn: "1h",
              }
            );
            const { resetLink, ...user } = newUser._doc;
            res.status(200).json({ user, token });
          } catch (error) {
            console.log(error);
          }
        }
      );
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

export const googleSignin = async (req, res) => {
  const { tokenId } = req.body;

  client
    .verifyIdToken({
      idToken: tokenId,
      audience: `${process.env.GOOGLE_KEY}`,
    })
    .then(async (response) => {
      const { email_verified, given_name, family_name, picture, email } =
        response.payload;
      if (email_verified) {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          const token = jwt.sign(
            { email: existingUser.email, id: existingUser._id },
            `${process.env.OAUTH_TOKEN_KEY}`,
            {
              expiresIn: "1d",
            }
          );

          res.status(200).json({ user: existingUser, token });
        } else {
          const password = email + tokenId;
          const hashedPassword = await bcrypt.hash(password, 12);
          const user = await User.create({
            email: email,
            password: hashedPassword,
            firstName: given_name,
            lastName: family_name,
            profilePic: picture,
          });

          const token = jwt.sign(
            { email: user.email, id: user._id },
            `${process.env.OAUTH_TOKEN_KEY}`,
            {
              expiresIn: "1h",
            }
          );

          res.status(200).json({ user, token });
        }
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Something went wrong!" });
    });
};

export const forgetPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User does not exist!" });

    let transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: "noreplysocialmail3@gmail.com",
        pass: "arshadnb10",
      },
    });

    const token = jwt.sign({ id: existingUser._id }, "test12", {
      expiresIn: "20m",
    });

    existingUser
      .updateOne({ resetLink: token })
      .then(async () => {
        await transporter.sendMail({
          from: '"noreply" noreply@gmail.com',
          to: `${existingUser.firstName}, ${email}`,
          subject: "Password Reset",
          html: `
        <h2>Please click on a given link to change your password.</h2>
        <a href="https://storymugg.herokuapp.com/reset-password/${token}">https://storymugg.herokuapp.com/reset-password/${token}</a>
      `,
        });

        res.status(200).json({
          message: "Password reset mail sent, please check your email.",
        });
      })
      .catch((err) => {
        return res.status(400).json({ message: "Reset password link error" });
      });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

export const resetPassword = async (req, res) => {
  const { resetLink, newPassword } = req.body;

  try {
    if (resetLink) {
      jwt.verify(resetLink, "test12", async (error, decodedToken) => {
        if (error) {
          res.status(401).json({ message: error.message });
        }

        let existingUser = await User.findOne({ resetLink });

        const hashedPassword = await bcrypt.hash(newPassword, 12);
        if (existingUser) {
          const obj = {
            password: hashedPassword,
          };

          existingUser = _.extend(existingUser, obj);

          existingUser.save();

          res.status(200).json({ message: "Your password has been updated." });
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

export const getUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const existingUser = await User.findById(userId);
    if (!existingUser)
      return res.status(404).json({ message: "User not found" });

    res.status(200).json({ ...existingUser._doc });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
