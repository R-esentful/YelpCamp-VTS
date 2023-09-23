/**
 * This file contains all the middleware for review
 */

import { body, param } from "express-validator";
import mongoose from "mongoose";

// Models
import Review from "@models/review.models";

export const reviewIdValidator = param("reviewId")
  .notEmpty()
  .withMessage("Review ID should not be empty.")
  .isString()
  .withMessage("Review ID should be a string.")
  .custom(async (val: string) => {
    if (!mongoose.isValidObjectId(val)) {
      throw new Error("Please provide a valid Review ID.");
    }
    const review = await Review.findById(val);
    if (!review) {
      throw new Error("Review does not exists.");
    }
    return true;
  });

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
