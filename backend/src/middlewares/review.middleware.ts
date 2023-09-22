/**
 * This file contains all the middleware for review
 */

import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

// Utilities
import { CustomError, wrapper } from "@utils/general";

// Models
import Campground from "@models/campground.models";
import Review from "@models/review.models";

/**
 * Check review for specific campground if it exists
 */
export const checkReviewId = wrapper(async (req: Request, res: Response, next: NextFunction) => {
  const campground = await Campground.findById(req.params.id);

  if (!mongoose.isValidObjectId(req.params.reviewId)) {
    return next(new CustomError(`Invalid review ID`, 400, "reviewId"));
  }

  const review = await Review.findById(req.params.reviewId);

  if (!review) {
    return next(
      new CustomError(`Review for campground ${campground?.campName} does not exists`, 400)
    );
  }

  next();
});
