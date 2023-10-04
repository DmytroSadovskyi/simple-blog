import mongoose from "mongoose";

export const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Database connected successfully");
    });

    connection.on("error", (error) => {
      console.log(
        "Database connection error. Make sure MongoDB is running. " + error
      );
      process.exit(1);
    });
  } catch (error) {
    console.log("Something goes wrong!");
    console.log(error);
  }
};
