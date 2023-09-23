import {
  getAllCampgroundReview,
  getCampgroundReview,
  newCampgroundReview,
} from "@controllers/review.controllers";
import { campgroundIdParamValidator } from "@middlewares/campground.middleware";
import { _dtoMiddleware } from "@middlewares/dto.middleware";
import { reviewIdValidator, reviewValidator } from "@middlewares/review.middleware";
import { Router } from "express";

const reviewRoutes = Router({ mergeParams: true });
reviewRoutes.use(campgroundIdParamValidator);

reviewRoutes
  .route("/")
  .get(getAllCampgroundReview)
  .post(reviewValidator, _dtoMiddleware, newCampgroundReview);
reviewRoutes.route("/:reviewId").get(reviewIdValidator, _dtoMiddleware, getCampgroundReview);

export default reviewRoutes;
