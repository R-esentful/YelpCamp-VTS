/**
 * This file contains all of middlewares for campground.
 */

import mongoose from "mongoose";
import { body, param } from "express-validator";

// Models
import Campground from "@models/campground.models";

export const campgroundIdParamValidator = param("id")
  .notEmpty()
  .withMessage("Campground ID should not be empty.")
  .isString()
  .withMessage("Campground ID should be a string.")
  .custom(async (val: string) => {
    if (!mongoose.isValidObjectId(val)) {
      throw new Error("Please provide a valid Campground ID.");
    }
    const campground = await Campground.findById(val);
    if (!campground) {
      throw new Error("Campground does not exists.");
    }
    return true;
  });

export const campgroundIdBodyValidator = body("id")
  .notEmpty()
  .withMessage("Campground ID should not be empty.")
  .isString()
  .withMessage("Campground ID should be a string.")
  .custom(async (val: string) => {
    if (!mongoose.isValidObjectId(val)) {
      throw new Error("Please provide a valid Campground ID.");
    }
    const campground = await Campground.findById(val);
    if (!campground) {
      throw new Error("Campground does not exists.");
    }
    return true;
  });

export const campgroundValidator = [
  body("campName")
    .notEmpty()
    .withMessage("Please provide a campground name.")
    .isString()
    .withMessage("Campground name should be a string.")
    .custom(async (val: string) => {
      const queryCampground = await Campground.findOne({ campName: val });
      if (queryCampground) {
        throw new Error(`Campground ${val} already exists.`);
      }
    }),
  body("user")
    .notEmpty()
    .withMessage("Please provide a user for the campground.")
    .isString()
    .withMessage("User ID should be a string.")
    .custom((val: string) => {
      if (!mongoose.isValidObjectId(val)) {
        throw new Error("User ID should be a valid Object ID.");
      } else {
        return true;
      }
    }),
  body("location")
    .notEmpty()
    .withMessage("Please provide the campground location.")
    .isString()
    .withMessage("Campground location name should be a string."),
  body("type")
    .notEmpty()
    .withMessage("Please provide the campground type.")
    .isString()
    .withMessage("Campground type name should be a string."),
  body("description")
    .notEmpty()
    .withMessage("Please provide a brief campground description.")
    .isString()
    .withMessage("Campground description name should be a string."),
  body("images")
    .notEmpty()
    .withMessage("Please provide atleast 5 campground images.")
    .isArray()
    .withMessage("Amenities should be an array."),
  body("amenities")
    .notEmpty()
    .withMessage("Please provide atleast one amenities in the campground.")
    .isArray()
    .withMessage("Amenities should be an array."),
  body("activities")
    .notEmpty()
    .withMessage("Please provide atleast one activities in the campground.")
    .isArray()
    .withMessage("Activities should be an array."),
];
