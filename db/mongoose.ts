import mongoose, { ConnectOptions } from "mongoose";

const main = async () => {
  mongoose
    .connect(process.env.MONGODB_URI || "http://localhost:3001", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    } as ConnectOptions)
    .then((db) => {
      console.log("Database Connected Successfuly.");
    })
    .catch((err) => {
      console.log("Error Connectiong to the Database", err);
    });
};
export default main;
