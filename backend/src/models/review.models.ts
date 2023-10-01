/**
 * This file is the main schema for Review.
 * TODO:
 *  - Review Interface
 */

import { IReview, ReviewModel } from "@interfaces/models";
import { Schema, model } from "mongoose";

const reviewSchema = new Schema<IReview, ReviewModel>(
  {
    rating: { type: Number, required: [true, "Please provide a rating."] },
    review: { type: String, required: [true, "Please provide a review for the campground"] },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    campground: { type: Schema.Types.ObjectId, ref: "Campground" },
  },
  { timestamps: true }
);

const Review = model<IReview, ReviewModel>("Review", reviewSchema);
export default Review;
