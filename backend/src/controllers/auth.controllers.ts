/**
 * This file contains all the controllers or logic for authenticating users.
 */
import e, { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Utilities
import { CustomError, wrapper } from "@utils/general";

// Models
import User from "@models/user.models";
import { secretKey } from "@utils/variables";

export const authJWT = wrapper(async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.findOne({ emailAddress: req.body.emailAddress });

  const hashed = await bcrypt.compare(req.body.password, user!.password);

  if (!hashed) {
    return next(new CustomError("Invalid Login Credentials", 400));
  }

  const signedJWT = await jwt.sign({ emailAddress: user!.emailAddress }, secretKey, {
    expiresIn: "1hr",
  });

  return res.status(200).json({ message: "Logged in successfully.", user: user, token: signedJWT });
});
