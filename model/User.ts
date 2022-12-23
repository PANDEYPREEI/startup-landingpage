import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const Users = mongoose.models.User || mongoose.model("User", UserSchema);
export default Users;
