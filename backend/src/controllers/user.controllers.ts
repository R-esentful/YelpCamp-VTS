import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
/**
 * This file contains all the business logic for Users.
 */

import { Request, Response, NextFunction } from "express";

// Utilities
import { wrapper } from "@utils/general";
import { AWSDIRECTORY } from "@utils/aws";

// Models
import User from "@models/user.models";
import { secretKey } from "@utils/variables";

/**
 * @desc Creates a new user
 * @route /users
 * @method POST
 */

export const newUser = wrapper(async (req: Request, res: Response, next: NextFunction) => {
  const { provider } = req.body;
  switch (provider) {
    case "EMAIL":
      const hashedpw = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10));

      const user = await new User({ ...req.body, password: hashedpw, provider: "EMAIL" }).save();

      await AWSDIRECTORY(user._id, "users", "create");

      return res
        .status(201)
        .json({ message: "YelpCamp account successfully created.", user: user });

    case "FACEBOOK":
      const queryFb = await User.findOne({ emailAddress: req.body.emailAddress });
      const tokenFb = jwt.sign({ emailAddress: req.body.emailAddress }, secretKey, {
        expiresIn: "1hr",
      });

      if (queryFb) return res.status(200).json({ user: queryFb, token: tokenFb });

      const fb = await new User({ ...req.body }).save();

      await AWSDIRECTORY(fb._id, "users", "create");

      return res
        .status(201)
        .json({ message: "YelpCamp account successfully created.", user: fb, token: tokenFb });

    case "GOOGLE":
      const queryGoogle = await User.findOne({ emailAddress: req.body.emailAddress });
      const tokenGoogle = jwt.sign({ emailAddress: req.body.emailAddress }, secretKey, {
        expiresIn: "1hr",
      });

      if (queryGoogle) return res.status(200).json({ user: queryGoogle, token: tokenGoogle });

      const google = await new User({ ...req.body }).save();

      await AWSDIRECTORY(google._id, "users", "create");

      return res.status(201).json({
        message: "YelpCamp account successfully created.",
        user: google,
        token: tokenGoogle,
      });
  }
});
