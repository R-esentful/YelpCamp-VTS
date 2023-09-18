/**
 * This file contains all the API Routes for Users.
 */
import { Router } from "express";

// Controllers
import { getAllCampground, newCampground } from "@controllers/campground.controllers";

// Middlewares & DTO's
import { _dtoMiddleware } from "@middlewares/dto.middleware";
import { campgroundValidator } from "@dto/campground.dto";

const campgroundRoutes = Router();

campgroundRoutes
  .route("/")
  .get(getAllCampground)
  .post(campgroundValidator, _dtoMiddleware, newCampground);

export default campgroundRoutes;
