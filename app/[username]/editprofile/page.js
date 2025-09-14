import EditProfile from "./editprofile";

const page = async ({ params }) => {
  return (
    <>
      <EditProfile username={params?.username} />
    </>
  );
};

export default page;
