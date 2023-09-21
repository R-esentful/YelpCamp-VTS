/**
 * This file contains all of middlewares for campground.
 */

import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import { CustomError, wrapper } from "@utils/general";

// Models
import Campground from "@models/campground.models";

// TODO: FIX THIS SHIT
export const checkCampgroundId = wrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    /**
     * Check if campground ID is valid
     */
    if (!mongoose.isValidObjectId(req.params.id)) {
      return next(new CustomError("Invalid campground ID", 400, "id"));
    }

    const campground = await Campground.findById(req.params.id);

    if (!campground) {
      return next(new CustomError("Campground does not exists", 400));
    }

    next();
  }
);
