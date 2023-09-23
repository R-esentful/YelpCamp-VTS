/**
 * This file contains all the API Routes for Users.
 */
import { Router } from "express";

// Controllers
import {
  deleteSpecificCampgrounds,
  editSpecificCampground,
  getAllCampground,
  getCampground,
  newCampground,
} from "@controllers/campground.controllers";

// Middlewares
import { _dtoMiddleware } from "@middlewares/dto.middleware";
import {
  campgroundIdParamValidator,
  campgroundValidator,
} from "@middlewares/campground.middleware";

const campgroundRoutes = Router();

campgroundRoutes.route("/").get(getAllCampground).post(campgroundValidator, newCampground);

campgroundRoutes
  .route("/:id")
  .get(campgroundIdParamValidator, _dtoMiddleware, getCampground)
  .patch(campgroundIdParamValidator, campgroundValidator, _dtoMiddleware, editSpecificCampground)
  .delete(campgroundIdParamValidator, _dtoMiddleware, deleteSpecificCampgrounds);

export default campgroundRoutes;
