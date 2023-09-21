/**
 * This file contains all the business logic for Users.
 */

import { Request, Response, NextFunction } from "express";

// Utilities
import { wrapper } from "@utils/general";

// Models
import User from "@models/user.models";

/**
 * @desc Creates a new user
 * @route /users
 * @method POST
 * TODO: Oauth integration
 */

export const newUser = wrapper(async (req: Request, res: Response, next: NextFunction) => {
  const { provider } = req.body;
  switch (provider) {
    case "EMAIL":
      const queryUser = await new User({ ...req.body, provider: "EMAIL" }).save();
      return res.status(201).json({ message: "YelpCamp account successfully created." });

    //TODO:
    case "FACEBOOK":
      console.log("Facebook");

    //TODO:
    case "GOOGLE":
      console.log("Google");
  }
});
