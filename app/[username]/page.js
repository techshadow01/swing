import Paymentpage from "./PaymentPage";

const page = async ({ params }) => {
  return (
    <>
      <Paymentpage username={params.username} />
    </>
  );
};

export default page;
