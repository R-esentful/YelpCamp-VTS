/**
 * This file contains all the API Routes for Users.
 */
import { Router } from "express";

// Controllers
import { newUser } from "@controllers/user.controllers";

// Middleware & DTO's
import { _dtoMiddleware } from "@middlewares/dto.middleware";
import { userValidator } from "@dto/user.dto";

const userRoutes = Router();

userRoutes.route("/").post(userValidator, _dtoMiddleware, newUser);

export default userRoutes;
