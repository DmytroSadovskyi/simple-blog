import { Schema, model, models } from "mongoose";

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Set password for user"],
    },
  },
  { versionKey: false }
);

const User = models.user || model("user", userSchema);

export default User;
