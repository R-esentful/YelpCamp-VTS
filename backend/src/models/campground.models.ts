/**
 * This file is the main schema for campground.
 * TODO:
 *  - Campground Interface
 */

import { ICampground } from "@interfaces/models";
import { Schema, model } from "mongoose";

const campgroundSchema = new Schema<ICampground>(
  {
    campName: { type: String, required: [true, "Please provide a campground name."] },
    type: {
      type: String,
      enum: ["PRIVATE", "PUBLIC"],
      required: [true, "Please provide campground type."],
      default: "PUBLIC",
    },
    rating: {
      type: Number,
      default: 0,
    },
    location: { type: String, required: [true, "Please provide the campground location."] },
    price: {
      type: String,
      default: "FREE",
    },
    description: { type: String, required: [true, "Please provide campground description."] },
    reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    images: {
      type: [String],
      required: [true, "Please provide atleasst 5 images in the campground."],
    },
    amenities: {
      type: [String],
      required: [true, "Please provide atleast one amenities in the campground."],
    },
    activities: {
      type: [String],
      required: [true, "Please provide atleast one activities in the campground."],
    },
  },
  { timestamps: true }
);

const Campground = model<ICampground>("Campground", campgroundSchema);
export default Campground;
