/**
 * This file contains all the data transfer object that acts as a simple middleware
 * for Review
 */
import { body } from "express-validator";

export const reviewValidator = [
  body("rating")
    .notEmpty()
    .withMessage("Please provide a rating for the campground.")
    .isNumeric()
    .withMessage("Campground rating should be numeric."),
  body("review")
    .notEmpty()
    .withMessage("Please provide a review for the campground.")
    .isString()
    .withMessage("Campground description should be a string."),
];
