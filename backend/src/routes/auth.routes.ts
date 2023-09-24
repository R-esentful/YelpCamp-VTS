import { Router } from "express";

// Middlewares
import { jwtValidator } from "@middlewares/authentication.middleware";

// Controllers
import { authJWT } from "@controllers/auth.controllers";

const authRoutes = Router();

authRoutes.route("/jwt").post(jwtValidator, authJWT);

export default authRoutes;
