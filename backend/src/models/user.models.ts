/**
 * This file is the main schema for user.
 * TODO:
 *  - User Interface
 */

import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    firstName: { type: String, required: [true, "Please provide a valid first name"] },
    lastName: { type: String, required: [true, "Please provide a valid last name"] },
    emailAddress: {
      type: String,
      required: [true, "Please provide an email."],
      unique: [true, "Email already exists"],
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
    // TODO: Link campgrounds and reviews here.
    // campgrounds: {},
    // reviews: {},
    profileImage: { type: String, default: "None" },
    bio: { type: String, default: "No bio indicated." },
    type: { type: String, enum: ["User", "Admin"], default: "User" },
    allowNotification: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
export default User;
