import React from "react";
import { motion } from "motion/react";
import Button from "@mui/material/Button";
import Sign from "@/app/components/modal";
import Star from "@/app/components/assets/star.svg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

const main = () => {
  const { data: session } = useSession();

  return (
    <div
      id="mainpage"
      className="relative w-screen h-screen flex bg-gradient-to-r from-[#FFFFFF] to-blue-300 dark:bg-none dark:bg-black"
    >
      <div className="w-[100%] h-full flex items-center justify-start max-sm:justify-center z-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          className="flex flex-col max-sm:items-center gap-9 ml-36 max-sm:ml-0 "
        >
          <div className="text-[#1976D2] font-bold text-8xl max-sm:text-center max-sm:text-5xl">
            <div>Fund your</div>
            <div>Dream Project</div>
          </div>
          <div className="text-[#3BABFF] text-5xl max-sm:text-3xl">
            connect with the world
          </div>

          {!session && (
            <Button
              className="max-w-[200px] rounded-full text-3xl text-center p-3 relative"
              variant="contained"
            >
              <Sign />{" "}
            </Button>
          )}
          {session && (
            <div>
              <span className="text-white bg-[#1976D2] text-3xl font-bold rounded-full p-2">
                Welcome , {session.user.name}
              </span>
            </div>
          )}

          <div className="flex gap-2 max-sm:flex-col">
            <div className="text-xl dark:text-white">
              loved by 1,000,000+ creators
            </div>
            <div className="flex max-sm:items-center max-sm:justify-center gap-2">
              <Image src={Star} alt="" width={20} />
              <Image src={Star} alt="" width={20} />
              <Image src={Star} alt="" width={20} />
              <Image src={Star} alt="" width={20} />
              <Image src={Star} alt="" width={20} />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute w-[100%] h-full ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.5 },
          }}
          className="absolute w-[50%] max-w-[900px] h-full right-24 max-sm:hidden"
        >
          <DotLottieReact
            src="https://lottie.host/c1102b2a-3010-487e-8a1d-9b755a9544c4/P3hWjiKOkT.lottie"
            loop
            autoplay
          />
        </motion.div>
      </div>
    </div>
  );
};

export default main;
