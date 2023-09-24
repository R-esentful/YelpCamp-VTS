import { body, param } from "express-validator";

// Models
import User from "@models/user.models";

export const jwtValidator = [
  body("emailAddress")
    .notEmpty()
    .withMessage("Email field should not be empty.")
    .isEmail()
    .withMessage("Please provide a valid email.")
    .custom(async (val: string) => {
      const email = await User.findOne({ emailAddress: val });
      if (!email) {
        throw new Error("Account does not exists.");
      } else {
        return true;
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Please type your password")
    .isString()
    .withMessage("Password should be a string."),
];
