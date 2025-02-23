import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected ", connection.connection.host);
  } catch (error) {
    console.log("Connection error: ", error);
    process.exit();
  }
};
