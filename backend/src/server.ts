import app, { PORT } from "@utils/express";

/** ROUTES  **/
import authRoutes from "@routes/auth.routes";
import campgroundRoutes from "@routes/campground.routes";
import userRoutes from "@routes/user.routes";
import reviewRoutes from "@routes/reviews.routes";

/** DATABASE **/
import connectDB from "@configs/db.configs";

connectDB();

app.use("/auth", authRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/users", userRoutes);
app.use("/reviews", reviewRoutes);

app.listen(PORT, () => {
  console.log(`Listening in PORT ${PORT}`);
});
