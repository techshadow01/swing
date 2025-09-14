"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Alice from "./assets/Alice.png";
import Chatbot from "./assets/chatbot.png";
import Spotify from "./assets/spotify.png";

const Mphoto = [
  {
    name: "Alice AI",
    img: Alice,
    link: "https://alice-ai-ten.vercel.app/",
  },
  {
    name: "Chatbot",
    img: Chatbot,
    link: "https://chat-bot-delta-six.vercel.app/",
  },
  {
    name: "Spotify",
    img: Spotify,
    link: "https://abhiproject.freewebhostmost.com/",
  },
];

const varient1 = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  hidden1: {
    opacity: 0,
    x: -30,
  },
  visible: (index) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: index * 0.5,
    },
  }),
  touch: {
    scale: 0.97,
  },
};

const varient2 = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const project = () => {
  return (
    <div className="relative max-sm:static flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-4 w-[80%] max-sm:w-screen max-w-[2200px]  mx-auto rounded-xl overflow-hidden border-[#D4E0EC] ">
      <div className="w-[45%] max-sm:w-[90%] flex flex-col  items-center justify-center uppercase text-7xl max-sm:text-4xl font-bold bg-[#D4E0EC] dark:bg-[#121212] max-sm:rounded-xl max-sm:shadow-xl">
        <div className="flex flex-col gap-3 text-[#FFFFFF]  max-sm:flex-row">
          <div>Top</div>
          <div>Funded</div>
          <div>Projects</div>
        </div>
      </div>
      <motion.div className="relative flex flex-col gap-3 w-[55%] max-sm:w-full h-full p-4 max-sm:hidden">
        <div className="flex flex-col items-start justify-center w-full">
          <div className="flex gap-10">
            <motion.div
              variants={varient1}
              initial="hidden"
              whileInView="visible"
              whileHover="touch"
              viewport={{ once: true }}
            >
              <a href="https://alice-ai-ten.vercel.app/" target="_blank">
                <Image
                  className="rounded-lg border-4 border-white dark:border-[#222222] paper"
                  src={Alice}
                  alt=""
                  width={350}
                />
              </a>
            </motion.div>
            <motion.div
              variants={varient1}
              initial={{ opacity: 0 }}
              whileInView="visible"
              viewport={{ once: true }}
              custom={2.5}
              className="text-5xl font-bold flex items-center justify-center text-slate-400 dark:text-white max-sm:hidden"
            >
              <div>Alice Ai</div>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center w-full">
          <div className="flex gap-10">
            <motion.div
              variants={varient1}
              initial={{ opacity: 0 }}
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              className="text-5xl font-bold flex items-center justify-center text-slate-400   dark:text-white max-sm:hidden"
            >
              <div>Chatbot</div>
            </motion.div>
            <motion.div
              variants={varient1}
              initial="hidden1"
              whileInView="visible"
              whileHover="touch"
              viewport={{ once: true }}
              custom={1}
            >
              <a href="https://chat-bot-delta-six.vercel.app/" target="_blank">
                <Image
                  className="rounded-lg border-4 border-white dark:border-[#121212] paper"
                  src={Chatbot}
                  alt=""
                  width={350}
                />
              </a>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <div className="flex gap-10">
            <motion.div
              variants={varient1}
              initial="hidden"
              whileInView="visible"
              whileHover="touch"
              viewport={{ once: true }}
              custom={2}
            >
              <a
                href="https://abhiproject.freewebhostmost.com/"
                target="_blank"
              >
                <Image
                  className="rounded-lg border-4 border-white dark:border-[#121212] paper"
                  src={Spotify}
                  alt=""
                  width={350}
                />
              </a>
            </motion.div>
            <motion.div
              variants={varient1}
              initial={{ opacity: 0 }}
              whileInView="visible"
              viewport={{ once: true }}
              custom={3.5}
              className="text-5xl font-bold flex items-center justify-center text-slate-400 dark:text-white max-sm:hidden"
            >
              <div>Spotify</div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <div className="flex flex-col items-center justify-center gap-4 w-full sm:hidden">
        {Mphoto.map((item, index) => {
          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className="cursor-pointer"
            >
              <motion.div
                variants={varient2}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="text-3xl font-bold ">{item.name}</div>
                <Image
                  className="rounded-lg border-4 border-white dark:border-[#121212] paper"
                  src={item.img}
                  alt=""
                  width={400}
                />
              </motion.div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default project;
