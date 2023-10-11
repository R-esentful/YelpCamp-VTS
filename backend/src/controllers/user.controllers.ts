import bcrypt from "bcrypt";
/**
 * This file contains all the business logic for Users.
 */

import { Request, Response, NextFunction } from "express";

// Utilities
import { wrapper } from "@utils/general";
import { AWSDIRECTORY } from "@utils/aws";

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
  console.log(req.body);
  switch (provider) {
    case "EMAIL":
      console.log("pumasok");
      const hashedpw = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10));

      const user = await new User({ ...req.body, password: hashedpw, provider: "EMAIL" }).save();

      await AWSDIRECTORY(user._id, "users", "create");

      return res.status(201).json({ message: "YelpCamp account successfully created." });

    //TODO:
    case "FACEBOOK":
      console.log("Facebook");

    //TODO:
    case "GOOGLE":
      console.log("Google");
  }
});
