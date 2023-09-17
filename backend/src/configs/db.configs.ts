/**
 * This file contains all the necessary functions and or classes pertaining
 * to the datbase configuration of the web application.
 */

import mongoose from "mongoose";

// Utilities
import { MONGO_URI } from "@utils/variables";

/**
 * Set up Database Connection via MONGO URI.
 */
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URI);
    console.log(`Mongo Conneection Established @ ${connection.connection.host}}`);
  } catch (e) {
    console.log(`Error occured ${e}`);
  }
};

export default connectDB;
