"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import Textarea from "@mui/joy/Textarea";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";

import Carousel from "../components/carousel";
import CmtUser from "../components/cmtUser";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import CheckIcon from "@mui/icons-material/Check";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/joy/Tooltip";

import Social1 from "../components/assets/email1.svg";
import Social2 from "../components/assets/linkedin1.svg";
import Social3 from "../components/assets/twitter.svg";
import Social4 from "../components/assets/github1.svg";

import { useRouter } from "next/navigation";
import {
  fetchuser,
  fetchpayments,
  createPayments,
} from "@/backend/actions/useractions";

import { useSession } from "next-auth/react";
import Loader from "../components/loader/loader";

const PaymentSuccesssful = () => {
  return (
    <div className="fixed overflow-hidden z-20 inset-0 h-full w-full flex items-center justify-center bg-black/40">
      <DotLottieReact
        className="max-w-[900px]"
        src="https://lottie.host/b4ff4618-7da5-43fb-b9f7-2d721ef006bf/o78dIixZue.lottie"
        loop
        autoplay
      />
    </div>
  );
};

const Followers = ({ social, Payments }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Website",
          text: "Check out this cool website!",
          url: window.location.href,
        });
        console.log("Shared successfully!");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing not supported on this browser.");
    }
  };

  return (
    <div className=" bg-white dark:bg-[#111111] p-3 rounded-lg flex flex-col gap-3">
      <div className="flex items-center gap-2 dark:text-white">
        <div className="text-xl font-bold ">{Payments?.length ?? 0}</div>
        <div>Supporters</div>
      </div>

      <div className="flex gap-2 dark:text-white">
        <div
          className={`flex  gap-1 bg-[#E5EDEE] dark:bg-[#404040] p-1 pr-2 rounded-sm font-semibold items-center justify-center duration-500    ${
            isFollowing ? "w-28" : "w-20"
          } `}
          color="neutral"
        >
          <CheckIcon className="size-5" />
          <div
            className="cursor-pointer"
            onClick={() => setIsFollowing(!isFollowing)}
          >
            {isFollowing ? "following" : "follow"}
          </div>
        </div>
        <div
          className="flex  gap-1 bg-[#E5EDEE] dark:bg-[#404040]  p-1 pr-2 rounded-sm font-semibold items-center justify-center"
          color="neutral"
        >
          <IosShareOutlinedIcon sx={{ color: "disabled" }} className="size-4" />
          <div className="cursor-pointer" onClick={handleShare}>
            Share
          </div>
        </div>
      </div>

      <div className="flex gap-1">
        {social.map((item, index) => {
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              className="cursor-pointer"
            >
              <a href={item.link} target="_blank" rel="noreferrer">
                <Image src={item.src} alt="" width={25} />
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const Goal = ({ Payments, currentuser }) => {
  const totalAmount = Payments.reduce((sum, item) => sum + item.amount, 0);
  const progressmoney =
    currentuser && currentuser.goal > 0
      ? parseInt((totalAmount / currentuser.goal) * 100)
      : 0;
  return (
    <div className="bg-white dark:bg-[#111111] rounded-lg">
      <div className="bg-slate-300 dark:bg-[#404040] p-2 overflow-hidden rounded-t-lg font-semibold  text-2xl text-gray-500 ">
        Goal :
      </div>

      <div className="p-2 ">
        <div className="text-slate-500 font-bold">
          {`${totalAmount} of ${currentuser?.goal || 0}`}
        </div>
        <div className=" relative w-full h-2 bg-slate-300 rounded-full my-2 overflow-hidden">
          <div
            style={{ width: `${progressmoney}%` }}
            className={`h-full rounded-full bg-blue-400`}
          ></div>
        </div>
        <div className="dark:text-white">
          {totalAmount <= currentuser?.goal
            ? "Thanks for all your support"
            : "goal has been completed"}
        </div>
      </div>
    </div>
  );
};

const Supporters = ({ Payments, className }) => {
  return (
    <div className={`bg-white dark:bg-[#111111] rounded-lg  ${className}`}>
      <h2 className="bg-slate-300 dark:bg-[#404040] p-2 overflow-hidden rounded-t-lg font-semibold text-2xl text-gray-500">
        Supporters:
      </h2>

      <div className="p-2 sm:max-h-[330px] overflow-y-auto dark:text-white">
        {Payments?.length <= 0 ? (
          <div>No messages</div>
        ) : (
          Payments.map((item, index) => <CmtUser key={index} item={item} />)
        )}
      </div>
    </div>
  );
};

const Project = ({ currentuser }) => {
  if (!currentuser) return null;

  const {
    project_name = "No Project Name",
    project_desc = "No description available.",
    project_pic1,
    project_pic2,
    project_pic3,
  } = currentuser;

  return (
    <div className="w-[50%] max-sm:w-full p-3 bg-white dark:bg-[#111111] flex flex-col gap-3 rounded-lg">
      <div className="text-4xl font-bold text-[#1976D2]">Projects :</div>
      <div className="flex flex-col ml-[5%] max-sm:ml-0 gap-3">
        <div className="text-4xl font-bold text-blue-400">{project_name}</div>
        <div className="dark:text-white break-all max-w-[95%] max-sm:max-w-full">
          {project_desc}
        </div>
        <Carousel pic1={project_pic1} pic2={project_pic2} pic3={project_pic3} />
      </div>
    </div>
  );
};

const Payment = ({ session, currentuser, username }) => {
  const [paymentform, setpaymentform] = useState({ name: "", amount: "" });
  const [check, setcheck] = useState(true);
  const [isVisible, setisVisible] = useState(false);

  const [text, setText] = useState("");
  const addEmoji = (emoji) => () => setText((prev) => prev + emoji);

  // handle custom pay button
  const handlepay = (amount) => {
    setpaymentform((prev) => ({ ...prev, amount: amount.toString() }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    pay();
  };

  //handle payment
  const pay = async () => {
    if (!session) {
      alert("Sign in for payment");
      return;
    }

    if (!(currentuser?.razorpay_id && currentuser?.razorpay_secret)) {
      alert("Razorpay id not available");
      return;
    }

    try {
      const paymentData = {
        ...paymentform,
        msg: text,
        to_user: username,
        username: session.user.name,
        amount: Number(paymentform.amount),
      };

      await createPayments(paymentData);

      setText("");
      setpaymentform({ name: "", amount: "" });
      setisVisible(true);
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        setisVisible(false);
        document.body.style.overflow = "auto";
        window.location.reload();
        console.log(window.location);
      }, 3000);
    } catch (error) {
      alert("Payment failed. Please try again.");
      console.error(error);
    }
  };

  // Validation effect
  useEffect(() => {
    const a = paymentform.name.trim().length < 2;
    const b = paymentform.amount.trim().length < 1;
    const c = Number(paymentform.amount) < 1;
    setcheck(a || b || c);
  }, [paymentform]);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[30%] max-sm:w-full bg-white dark:bg-[#111111] p-3 flex flex-col gap-3 rounded-lg"
    >
      <span className="text-[#1976D2] text-xl font-bold rounded-xl">
        Make a payment
      </span>
      <div className="flex flex-col gap-2">
        <Input
          id="payname"
          className="dark:bg-gray-700 dark:border-gray-400 dark:text-white"
          placeholder="Name"
          onChange={(e) =>
            setpaymentform((prev) => ({ ...prev, name: e.target.value }))
          }
          name="name"
          value={paymentform.name}
        />
        <Input
          id="payamt"
          className="dark:bg-gray-700 dark:border-gray-400 dark:text-white"
          placeholder="Amount (rupees)"
          onChange={(e) =>
            setpaymentform((prev) => ({ ...prev, amount: e.target.value }))
          }
          name="amount"
          value={paymentform.amount}
          type="number"
        />

        <Textarea
          placeholder="Message (Optional)"
          id="paymsg"
          className="dark:bg-gray-700 dark:border-gray-400 dark:text-white"
          value={text}
          onChange={(event) => setText(event.target.value)}
          minRows={2}
          maxRows={4}
          startDecorator={
            <Box sx={{ display: "flex", gap: 0.5, flex: 1 }}>
              {["👍", " 🏖", "😍"].map((item, index) => {
                return (
                  <IconButton
                    key={index}
                    aria-label="Add thumbs up emoji"
                    className="bg-transparent "
                    variant="outlined"
                    color="neutral"
                    onClick={addEmoji(item)}
                  >
                    {item}
                  </IconButton>
                );
              })}
              <Button
                className="bg-transparent dark:border-gray-400 dark:text-white"
                variant="outlined"
                color="neutral"
                sx={{ ml: "auto" }}
              >
                See all
              </Button>
            </Box>
          }
          endDecorator={
            <Typography level="body-xs" className="ml-auto dark:text-white">
              {text.length} character(s)
            </Typography>
          }
          sx={{ minWidth: 300 }}
        />

        <div className="flex items-center justify-center">
          <Button
            id="payref"
            className="relative w-[100px]"
            disabled={check}
            type="submit"
          >
            Pay
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap justify-around  gap-1">
        {[50, 100, 200, 300, 500].map((item, index) => {
          return (
            <Button
              key={index}
              className="rounded-full"
              onClick={() => handlepay(item)}
            >
              Pay ₹{item}
            </Button>
          );
        })}
      </div>
      {isVisible && <PaymentSuccesssful />}
    </form>
  );
};

const Paymentpage = ({ username }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const username1 = username
    .replace("%7B", "")
    .replace("%7D", "")
    .replace("%20", "");

  const [currentuser, setcurrentuser] = useState(null);
  const [loading, setloading] = useState(true);
  const [Payments, setPayments] = useState([]);

  const social = [
    {
      src: Social1,
      link: currentuser?.email || "#",
    },
    {
      src: Social2,
      link: currentuser?.linkedin || "#",
    },
    {
      src: Social3,
      link: currentuser?.twitter || "#",
    },
    {
      src: Social4,
      link: currentuser?.github || "#",
    },
  ];

  // getting data on enter
  const getdata = async () => {
    try {
      let dbuser = await fetchuser(username1);
      setcurrentuser(JSON.parse(dbuser));
      let dbpayments = await fetchpayments(username1);
      setPayments(JSON.parse(dbpayments));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getdata().then(() => setloading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <div className="bg-[#F4F4F4] dark:bg-black overflow-x-hidden">
        <div className="fixed top-0 h-[50px] w-screen bg-[#D0DDEA] dark:bg-[#111111] shadow-lg z-[900]"></div>

        <div className="relative sm:h-[300px] w-screen">
          {session && currentuser?.username === session.user.name && (
            <Tooltip title="Edit" variant="solid">
              <EditIcon
                className="absolute right-[30px] top-[60px] z-10 cursor-pointer text-slate-500"
                onClick={() => router.push(`../${username}/editprofile`)}
              />
            </Tooltip>
          )}

          <div className="overflow-hidden relative w-full h-full max-sm:h-[200px]">
            <img
              className="w-full h-full object-cover"
              src={currentuser?.coverpic}
              alt={`${currentuser?.name} cover`}
            />
          </div>

          <div className="absolute left-5 -bottom-10 size-40 max-sm:size-32 rounded-full border-4 border-[#D0DDEA] dark:border-black overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={currentuser?.userpic}
              alt={`${currentuser?.name} profile`}
            />
          </div>

          <div className="absolute right-[10%] top-[50%] z-10 text-center text-white">
            <div className="text-6xl max-sm:text-4xl">{currentuser?.name}</div>
            <div className="text-3xl max-sm:text-xl">
              {currentuser?.profession}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#111111] shadow-sm h-[50px] w-screen"></div>
        {/* <PaymentSuccesssful /> */}

        <div className="flex max-sm:flex-col gap-3 p-3">
          <div className="w-[20%] max-sm:w-full flex flex-col gap-3">
            <Followers social={social} Payments={Payments} />
            <Goal Payments={Payments} currentuser={currentuser} />
            <Supporters className="max-sm:hidden" Payments={Payments} />
          </div>

          <Project currentuser={currentuser} />

          <Payment
            session={session}
            currentuser={currentuser}
            username={username1}
          />
          <Supporters className="sm:hidden" Payments={Payments} />
        </div>
      </div>
    </>
  );
};

export default Paymentpage;
