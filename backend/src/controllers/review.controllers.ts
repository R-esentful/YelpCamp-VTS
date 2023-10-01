/**
 * This file contains all the Business Logic for Reviews on the campground.
 */
import { Request, Response } from "express";
import { wrapper } from "@utils/general";
import Review from "@models/review.models";
import Campground from "@models/campground.models";

/**
 * @desc Gets all of the reviews of the campground
 * @route /campgrounds/:id/reviews
 * @method GET
 */
export const getAllCampgroundReview = wrapper(async (req: Request, res: Response) => {
  const reviews = await Review.find({});

  return res.status(200).json({ reviews: reviews });
});

/**
 * @desc Gets all of the reviews of the campground
 * @route /campgrounds/:id/reviews
 * @method GET
 */
export const getCampgroundReview = wrapper(async (req: Request, res: Response) => {
  const review = await Review.findById(req.body.reviewId);

  return res.status(200).json({
    review: review,
  });
});

/**
 * @desc Creates a review of the specific campground
 * @route /campgrounds/:id/reviews
 * @method POST
 */
export const newCampgroundReview = wrapper(async (req: Request, res: Response) => {
  const campground = await Campground.findById(req.params.id);

  const reviews = await new Review({ ...req.body, campground: campground!._id }).save();

  return res.status(200).json({
    message: `Review for ${campground!.campName} successfully created.`,
    review: reviews,
  });
});

/**
 * @desc Creates a review of the specific campground
 * @route /campgrounds/:id/reviews/:reviewId
 * @method PATCH
 */
export const editCampgroundReview = wrapper(async (req: Request, res: Response) => {
  const review = await Review.findByIdAndUpdate(req.params.reviewId, {
    $set: { ...req.body },
  }).populate("campground");

  return res.status(200).json({
    review: review,
  });
});
