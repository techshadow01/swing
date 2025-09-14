import React from "react";
import "./movingcards.css";
import Image from "next/image";
import Underline from "./assets/underline.svg";
import { motion } from "framer-motion";

import Logo1 from "./logos/logo1.svg";
import Logo2 from "./logos/logo2.svg";
import Logo3 from "./logos/logo3.svg";
import Logo4 from "./logos/logo4.svg";
import Logo5 from "./logos/logo5.svg";
import Logo6 from "./logos/logo6.svg";
import Logo7 from "./logos/logo7.svg";
import Logo8 from "./logos/logo8.svg";

import Logo18 from "./logos/logo18.svg";
import Logo10 from "./logos/logo10.svg";
import Logo11 from "./logos/logo11.svg";
import Logo12 from "./logos/logo12.svg";
import Logo13 from "./logos/logo13.svg";
import Logo17 from "./logos/logo17.svg";
import Logo15 from "./logos/logo15.svg";
import Logo16 from "./logos/logo16.svg";

const upperlogo = [
  {
    name: "item1",
    src: Logo1,
  },
  {
    name: "item2",
    src: Logo2,
  },
  {
    name: "item3",
    src: Logo3,
  },
  {
    name: "item4",
    src: Logo4,
  },
  {
    name: "item5",
    src: Logo5,
  },
  {
    name: "item6",
    src: Logo6,
  },
  {
    name: "item7",
    src: Logo7,
  },
  {
    name: "item8",
    src: Logo8,
  },
];

const downlogo = [
  {
    name: "item1",
    src: Logo18,
  },
  {
    name: "item2",
    src: Logo10,
  },
  {
    name: "item3",
    src: Logo11,
  },
  {
    name: "item4",
    src: Logo12,
  },
  {
    name: "item5",
    src: Logo13,
  },
  {
    name: "item6",
    src: Logo17,
  },
  {
    name: "item7",
    src: Logo15,
  },
  {
    name: "item8",
    src: Logo16,
  },
];

const movingcards = () => {
  return (
    <div className="my-4">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: [0, 0.2, 0.5, 1],
          transition: { delay: 0.1, duration: 0.5, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-6 mb-10"
      >
        <div className="text-7xl max-sm:text-5xl font-semibold text-[#0D0741] text-center">
          <div>
            <span className="relative">
              <span className="text-[#3BABFF] mr-3">trusted</span>
              <Image
                className="absolute -bottom-2 left-0"
                src={Underline}
                alt=""
                width={1000}
              />
            </span>
            <span className="dark:text-white">crowd</span>
          </div>
          <div className="dark:text-white">funding platform</div>
        </div>
        <div className="text-2xl dark:text-white max-sm:text-lg max-w-[50%] max-sm:max-w-[90%] text-center">
          our platform allows individuals to raise funds online for projects,
          causes, or businesses through community contributions and support.
        </div>
      </motion.div>

      <div className="wrapper">
        {upperlogo.map((item, index) => {
          return (
            <div
              key={index}
              className={`itemLeft flex items-center justify-center ${item.name}`}
            >
              <Image src={item.src} alt="" width={100} />
            </div>
          );
        })}
      </div>
      <div className="wrapper">
        {downlogo.map((item, index1) => {
          return (
            <div
              key={index1}
              className={`itemRight flex items-center justify-center ${item.name}`}
            >
              <Image src={item.src} alt="" width={100} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default movingcards;
