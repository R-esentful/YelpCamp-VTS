/**
 * This file is the main schema for user.
 * TODO:
 *  - User Interface
 */

import { Schema, model } from "mongoose";

//Interfaces
import { IUser } from "@interfaces/models";

const userSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: [true, "Please provide a valid first name"] },
    lastName: { type: String, required: [true, "Please provide a valid last name"] },
    emailAddress: {
      type: String,
      required: [true, "Please provide an email."],
      unique: true,
    },
    password: { type: String, default: "Not Applicable" },
    provider: {
      type: String,
      enum: ["EMAIL", "GOOGLE", "FACEBOOK"],
      required: [true, "Please input a provider."],
      validate: {
        validator: function (provider: string) {
          return ["EMAIL", "GOOGLE", "FACEBOOK"].includes(provider);
        },
        message: "Invalid provider.",
      },
    },
    campgrounds: { type: [Schema.Types.ObjectId], ref: "Campground" },
    reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
    profileImage: { type: String, default: "None" },
    bio: { type: String, default: "No bio indicated." },
    type: { type: String, enum: ["User", "Admin"], default: "User" },
    allowNotification: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const User = model<IUser>("User", userSchema);
export default User;
