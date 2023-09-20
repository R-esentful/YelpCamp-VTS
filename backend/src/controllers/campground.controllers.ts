/**
 * This file contains all the Business Logic for Campgrounds.
 */
import { Request, Response, NextFunction } from "express";

// Utilities
import { wrapper } from "@utils/general";

// Models
import Campground from "@models/campground.models";

/**
 * @desc Gets all the campgrounds
 * @route /campgrounds
 * @method GET
 */
export const getAllCampground = wrapper(async (req: Request, res: Response) => {
  const campgrounds = await Campground.find({});

  return res.status(200).json({ campgrounds: campgrounds });
});

/**
 * @desc Gets all the campgrounds
 * @route /campgrounds
 * @method GET
 */
export const newCampground = wrapper(async (req: Request, res: Response) => {
  const campground = await new Campground({ ...req.body }).save();

  return res.status(201).json({
    message: `Campground ${campground.campName} successfully created.`,
    campground: campground,
  });
});

/**
 * @desc Gets specific campground
 * @route /campgrounds/:id
 * @method GET
 */

export const getCampground = wrapper(async (req: Request, res: Response, next: NextFunction) => {
  const campground = await Campground.findById(req.params.id);

  return res.status(200).json({ campground: campground });
});
