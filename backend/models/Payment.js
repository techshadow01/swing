import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PaymentSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  to_user: { type: String, required: true },
  // o_id: { type: String, required: true },
  msg: { type: String },
  amount: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  done: { type: Boolean, default: false },
});

export default mongoose.models.Payment || model("Payment", PaymentSchema);
