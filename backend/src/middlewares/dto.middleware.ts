/**
 * This file contains all the middlewares for Users
 */

import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

// Utilities
import { wrapper, CustomError } from "@utils/general";

// Interfaces
import { ValidationInterface } from "@interfaces/interfaces";

// Models
import Campground from "@models/campground.models";

/**
 * @desc A middleware that generally catches all errors before proceeding to the controller
 * TODO: Simplify logic per camp route to avoid repetitive if-else.
 */
export const _dtoMiddleware = wrapper(async (req: Request, res: Response, next: NextFunction) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors["errors"].map((error: ValidationInterface) => {
      return { field: error.path, message: error.msg };
    });
    const existing = errors[0].message == "Email already exists." ? 401 : 400;
    return next(new CustomError(errors[0].message, existing, errors[0].field));
  }
  switch (req.baseUrl) {
    case "/campgrounds":
      const { type } = req.body;
      const isValid = type === "PRIVATE" || type === "PUBLIC";

      if (!isValid) {
        return next(new CustomError("Campground type should be PUBLIC or PRIVATE.", 400, "type"));
      }
  }
  next();
});
