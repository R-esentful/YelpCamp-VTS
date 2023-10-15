/**
 * This file contains all the middlewares for user.
 */

import { body, param } from "express-validator";
import mongoose from "mongoose";

// Models
import User from "@models/user.models";

export const userIdValidator = param("id")
  .notEmpty()
  .withMessage("User ID should not be empty.")
  .isString()
  .withMessage("User ID should be a string.")
  .custom(async (val: string) => {
    if (!mongoose.isValidObjectId(val)) {
      throw new Error("Please provide a valid User ID.");
    }
    const campground = await User.findById(val);
    if (!campground) {
      throw new Error("User does not exists.");
    }
    return true;
  });

export const userValidator = [
  body("emailAddress")
    .notEmpty()
    .withMessage("Email address field should not be empty.")
    .isEmail()
    .withMessage("Please enter a valid email.")
    .custom(async (val: string) => {
      const queryEmail = await User.findOne({ emailAddress: val });
      if (queryEmail?.provider === "FACEBOOK" || queryEmail?.provider === "GOOGLE") return true;
      if (queryEmail) {
        throw new Error("Email already exists.");
      }
    }),
  body("password").custom((val: string, { req }) => {
    console.log(req.body.provider);
    if (req.body.provider === "FACEBOOK" || req.body.provider === "GOOGLE") return true;

    if (!val) throw new Error("Password field should not be empty.");
    if (val.length < 8) throw new Error("Password field should not be less than 8 characters.");
    if (val.length > 16) throw new Error("Password field should not be more than 16 characters.");
  }),

  body("provider")
    .notEmpty()
    .withMessage("Provider should not be empty.")
    .isString()
    .withMessage("Provider should be a string"),
  body("confirmPassword").custom(async (val: string, { req }) => {
    if (val !== req.body.password) {
      throw new Error("Password does not match.");
    } else {
      return true;
    }
  }),
];
