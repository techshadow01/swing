import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/backend/models/Payment";
import Razorpay from "razorpay";
import connectDb from "@/backend/db/connectDB";

export const POST = async (req) => {
  await connectDb();

  let body = await req.formData();
  body = Object.fromEntries(body);

  //check if razorpay_id is present on server
  let p = await Payment.findOne({ o_id: body.Razorpay_order_id });
  if (!p) {
    return NextResponse.error("order id not found");
  }

  //verify the payment
  let xx = validatePaymentVerification(
    {
      order_id: body.razorpay_order_id,
      payment_id: body.razorpay_payment_id,
    },
    body.razorpay_signature,
    secret
  );

  if (verify) {
    //update the payment status
    const updatedPayment = await Payment.findOneAndUpdate(
      { o_id: body.razorpay_order_id },
      { done: "true" },
      { new: true }
    );

    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`
    );
  } else {
    return NextResponse.json({
      success: false,
      message: "Payment Verification Failed",
    });
  }
};
