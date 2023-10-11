import { Request, Response, NextFunction, json, urlencoded } from "express";
import app, { PORT } from "@utils/express";
import morgan from "morgan";
import cors from "cors";

/** ROUTES  **/
import authRoutes from "@routes/auth.routes";
import campgroundRoutes from "@routes/campground.routes";
import userRoutes from "@routes/user.routes";
import reviewRoutes from "@routes/reviews.routes";

/** DATABASE **/
import connectDB from "@configs/db.configs";

/** MIDDLEWARE **/
import { _dtoMiddleware } from "@middlewares/dto.middleware";

connectDB();

app.use(morgan("dev"));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
  })
);

app.use("/auth", authRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/users", userRoutes);
app.use("/campgrounds/:id/reviews", reviewRoutes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const { status = 500, message, field } = err;

  if (field) {
    res.status(status).json({ status: status, field: field, message: message });
  } else {
    res.status(status).json({ status: status, message: message });
  }
});

app.listen(PORT, () => {
  console.log(`Listening in PORT ${PORT}`);
});
