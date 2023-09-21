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

// Middlewares & DTO's
import { _dtoMiddleware } from "@middlewares/dto.middleware";
import { campgroundValidator } from "@dto/campground.dto";
import { checkCampgroundId } from "@middlewares/campground.middleware";

const campgroundRoutes = Router();

campgroundRoutes
  .route("/")
  .get(getAllCampground)
  .post(campgroundValidator, _dtoMiddleware, newCampground);

campgroundRoutes
  .route("/:id")
  .get(checkCampgroundId, getCampground)
  .patch(checkCampgroundId, campgroundValidator, _dtoMiddleware, editSpecificCampground)
  .delete(checkCampgroundId, deleteSpecificCampgrounds);
export default campgroundRoutes;
