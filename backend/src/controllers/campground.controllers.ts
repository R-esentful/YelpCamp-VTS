/**
 * This file contains all the Business Logic for Campgrounds.
 */
import { Request, Response } from "express";

// Utilities
import { wrapper } from "@utils/general";
import { AWSDIRECTORY } from "@utils/aws";

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
 * @method POST
 */
export const newCampground = wrapper(async (req: Request, res: Response) => {
  const campground = await new Campground({ ...req.body }).save();

  await AWSDIRECTORY(campground._id, "campgrounds", "create");

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

export const getCampground = wrapper(async (req: Request, res: Response) => {
  const campground = await Campground.findById(req.params.id);

  return res.status(200).json({ campground: campground });
});

/**
 * @desc Edits specific campground
 * @route /campgrounds/:id
 * @method PATCH
 */
export const editSpecificCampground = wrapper(async (req: Request, res: Response) => {
  const campground = await Campground.findOneAndUpdate({ ...req.body });

  return res.status(200).json({
    message: `Campground ${campground!.campName} successfully edited.`,
    campground: campground,
  });
});

/**
 * @desc Deletes specific campground
 * @route /campgrounds/:id
 * @method DELETE
 */
export const deleteSpecificCampgrounds = wrapper(async (req: Request, res: Response) => {
  await Campground.findByIdAndDelete(req.body.id);

  return res.status(200).json({ message: "Campground successfully deleted." });
});
