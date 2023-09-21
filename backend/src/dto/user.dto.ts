import User from "@models/user.models";
import { body } from "express-validator";

export const userValidator = [
  body("firstName")
    .notEmpty()
    .withMessage("First name field should not be empty.")
    .isString()
    .withMessage("Please enter a valid first name.")
    .isLength({ min: 3 })
    .withMessage("First name field should not be less than 3 characters.")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("Please enter a valid first name."),
  body("lastName")
    .notEmpty()
    .withMessage("Last name field should not be empty.")
    .isString()
    .withMessage("Please enter a valid last name.")
    .isLength({ min: 2 })
    .withMessage("Last name field should not be less than 2 characters.")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("Please enter a valid last name."),
  body("emailAddress")
    .notEmpty()
    .withMessage("Email address field should not be empty.")
    .isEmail()
    .withMessage("Please enter a valid email.")
    .custom(async (val: string) => {
      const queryEmail = await User.findOne({ emailAddress: val });
      if (queryEmail) {
        throw new Error("Email already exists.");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Password field should not be empty.")
    .isString()
    .withMessage("Please enter a valid password.")
    .isLength({ min: 8 })
    .withMessage("Password field should not be less than 8 characters.")
    .isLength({ max: 16 })
    .withMessage("Password field should not be more than 16 characters."),
  body("provider")
    .notEmpty()
    .withMessage("Provider should not be empty.")
    .isString()
    .withMessage("Provider should be a string"),
  body("confirmPassword")
    .notEmpty()
    .withMessage("Confirm password field should not be empty.")
    .isString()
    .withMessage("Please enter a valid password.")
    .custom(async (val: string, { req }) => {
      if (val !== req.body.password) {
        throw new Error("Password does not match.");
      }
    }),
];
