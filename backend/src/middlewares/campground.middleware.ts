/**
 * This file contains all of middlewares for campground.
 */
import { Request, Response, NextFunction } from "express";
import { CustomError, wrapper } from "@utils/general";
import Campground from "@models/campground.models";

// TODO: FIX THIS SHIT
export const checkCampgroundId = wrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const campground = await Campground.findById(req.params.id);

    if (!campground) {
      return next(new CustomError("Campground does not exists", 400));
    }

    next();
  }
);
