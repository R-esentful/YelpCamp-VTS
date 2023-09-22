/**
 * This file is all about campground interface.
 * this is to improve code readability and
 * code reusability.
 *
 */

import { Schema, Document } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  provider: string;
  campgrounds: [Schema.Types.ObjectId];
  reviews: Schema.Types.ObjectId;
  profileImage: string;
  bio: string;
  type: string;
  allowNotification: boolean;
}

export interface ICampground extends Document {
  campName: string;
  type: string;
  rating: number;
  location: string;
  reviews: [Schema.Types.ObjectId];
  user: Schema.Types.ObjectId;
  price: string;
  description: string;
  images: string[];
  amenities: string[];
  activities: string[];
}

export interface IReview extends Document {
  campground?: Schema.Types.ObjectId;
  user?: Schema.Types.ObjectId;
  rating: number;
  review: string;
}
