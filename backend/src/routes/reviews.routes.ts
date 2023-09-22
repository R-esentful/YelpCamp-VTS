import { getAllCampgroundReview, getCampgroundReview } from "@controllers/review.controllers";
import { checkCampgroundId } from "@middlewares/campground.middleware";
import { checkReviewId } from "@middlewares/review.middleware";
import { Router } from "express";

const reviewRoutes = Router();

reviewRoutes.use(checkCampgroundId);

reviewRoutes.route("/").get(getAllCampgroundReview);
reviewRoutes.route("/:reviewId").get(checkReviewId, getCampgroundReview);

export default reviewRoutes;
