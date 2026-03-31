// Mongoose Schema

import mongoose, { startSession } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    googleId:{
        type:String
    },
    role: {
      type: String,
      enum:["Admin","Editor" , "Client" , "Users"],
      default: "Client",
    },
    status:{
        type : String,
        enum:["Active" , "Busy" , "Offline ", "On Leave"]
    }
  },
  { timestamps: true },
);

export default mongoose.model("User", UserSchema);
