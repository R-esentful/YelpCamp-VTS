/**
 * This file contains all the necessary functions and or classes pertaining
 * to the datbase configuration of the web application.
 */

import mongoose from "mongoose";

// Utilities
import { AWS_FOLDER, MONGO_URI } from "@utils/variables";

// Configs
import S3 from "./aws.configs";

// Models
import User from "@models/user.models";
import Campground from "@models/campground.models";
import Review from "@models/review.models";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { deleteSpecificDirectory } from "@utils/aws";

/**
 * Set up Database Connection via MONGO URI.
 */
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URI);
    console.log(`Mongo Conneection Established @ ${connection.connection.host}}`);
    // Seed database
    await dbSeed();
  } catch (e) {
    console.log(`Error occured ${e}`);
  }
};

/**
 * Generate Databse seeds
 */

const dbSeed = async () => {
  Promise.all([
    await deleteSpecificDirectory({ directory: "users" }),
    await deleteSpecificDirectory({ directory: "campgrounds" }),

    await User.find({}).deleteMany({}),
    await Campground.find({}).deleteMany({}),
    await Review.find({}).deleteMany({}),
  ]);

  const userData = [
    {
      firstName: "John",
      lastName: "Doe",
      emailAddress: "johndoe@example.com",
      profileImage:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80",
      password: "test1234",
      provider: "EMAIL",
    },
    {
      firstName: "Alice",
      lastName: "Smith",
      emailAddress: "alicesmith@example.com",
      profileImage:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
      password: "test1234",
      provider: "EMAIL",
    },
    {
      firstName: "David",
      lastName: "johnson",
      profileImage:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      emailAddress: "davidJohnson@example.com",
      password: "test1234",
      provider: "EMAIL",
    },
  ];

  userData.map(async (user) => {
    const newUser = await new User(user).save();
    await new Campground({
      campName: `Camp ${newUser.name}`,
      type: "PUBLIC",
      rating: 4,
      location: "Cagayan Valley",
      price: "FREE",
      description: "Insert Description",
      images: [
        "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1533575770077-052fa2c609fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://plus.unsplash.com/premium_photo-1681496295500-bcc575e8530f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      ],
      user: newUser._id,
      amenities: ["A1", "A2", "A3"],
      activities: ["AA1", "AA2", "AA3"],
    }).save();
  });

  userData.map(async (user) => {
    const quser = await User.findOne({ emailAddress: user.emailAddress });
    const campground = await Campground.find({});
    campground.map(async (camp) => {
      return await new Review({
        rating: Math.floor(Math.random() * 5 + 1),
        review: "Sample review",
        user: quser,
        campground: camp,
      }).save();
    });
  });
};

export default connectDB;
