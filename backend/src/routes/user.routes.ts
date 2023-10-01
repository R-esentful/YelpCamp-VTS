/**
 * This file contains all the API Routes for Users.
 */
import { Router } from "express";

// Controllers
import { deleteUser, newUser } from "@controllers/user.controllers";

// Middleware & DTO's
import { _dtoMiddleware } from "@middlewares/dto.middleware";
import { userIdParamValidator, userValidator } from "@middlewares/user.middleware";

const userRoutes = Router();

userRoutes.route("/").post(userValidator, _dtoMiddleware, newUser);
userRoutes.route("/:id").delete(userIdParamValidator, deleteUser);

export default userRoutes;
