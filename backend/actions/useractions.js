"use server";

import Razorpay from "razorpay";
import connectDb from "@/backend/db/connectDB";
import User from "@/backend/models/User";
import Payment from "@/backend/models/Payment";

export const initiate = async (amount, to_username, paymentform) => {
  try {
    await connectDb();

    // create a payment object which shows a pending payment in the database
    await Payment.create({
      oid: x.id,
      amount: amount / 100,
      to_user: to_username,
      name: paymentform.name,
      message: paymentform.message,
    });

    return x;
  } catch (error) {
    console.error("Error fetching payment:", error);
  }
};

//create payment slip
export const createPayments = async (paymentform) => {
  try {
    await connectDb();

    console.log(paymentform);

    await Payment.create({
      username: paymentform.username,
      name: paymentform.name,
      amount: paymentform.amount,
      msg: paymentform.msg,
      to_user: paymentform.to_user,
    });
  } catch (error) {
    console.error("Error creating payment:", error);
  }
};

//fetch payment info from mongo db
export const fetchpayments = async (username) => {
  try {
    await connectDb();

    let p1 = await Payment.find({ to_user: username }).sort({ amount: -1 });
    const p = JSON.stringify(p1);

    return p;
  } catch (error) {
    console.error("Error fetching payment:", error);
  }
};

//fetch user info from mongo db
export const fetchuser = async (username) => {
  try {
    await connectDb();
    console.log(username);
    const u = await User.findOne({ username: username });

    if (!u) {
      throw new Error("User not found");
    }

    // Convert to plain object with flattened IDs
    const user = JSON.stringify(u);

    return user;
  } catch (error) {
    // Handle any errors that might occur
    console.error("Error fetching user:", error);
  }
};

//fetch all users info
export const fetchcards = async () => {
  try {
    await connectDb();
    let users = await User.find({});
    let usersStrified = JSON.stringify(users);
    return usersStrified;
  } catch (error) {
    return console.error("Error fetching users:", error);
  }
};

//update user info
export const updateProfile = async (form, userId) => {
  try {
    console.log(form, userId);
    await connectDb();
    await User.findByIdAndUpdate(userId, form, {
      new: true,
    });
    console.log("user updated successfully");
  } catch (error) {
    return console.error("Error updating user:", error);
  }
};
