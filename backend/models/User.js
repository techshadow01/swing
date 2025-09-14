import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true },
  name: { type: String },
  email: { type: String, required: true },
  profession: { type: String },
  twitter: { type: String },
  linkedin: { type: String },
  github: { type: String },
  goal: { type: Number },
  userpic: { type: String },
  coverpic: { type: String },
  razorpay_id: { type: String },
  razorpay_secret: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  project_name: { type: String },
  project_desc: { type: String },
  project_pic1: { type: String },
  project_pic2: { type: String },
  project_pic3: { type: String },
});

export default mongoose.models.User || model("User", UserSchema);
