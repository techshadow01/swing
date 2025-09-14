"use client";

import { React, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
import Sign from "./modal";
import Msearch from "./searchmodal";
import Logo from "./assets/slogo.png";
import Social1 from "./assets/email1.svg";
import Social2 from "./assets/linkedin1.svg";
import Social3 from "./assets/twitter.svg";
import Social4 from "./assets/github1.svg";
import Button from "@mui/joy/Button";
import BasicMenu from "./Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import Mnav from "./mobile_nav";
import { useSession, signIn, signOut } from "next-auth/react";

import { ThemeSwitcher } from "./dark";

const Githublogo = () => {
  return (
    <svg
      width="28px"
      height="28px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>github [#142]</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-140.000000, -7559.000000)"
          fill="#000000"
        >
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path
              d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
              id="github-[#142]"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

const Navbar = () => {
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-screen h-[50px] duration-700 ${
        isScrolled
          ? "bg-[#D0DDEA] dark:bg-[#222222] backdrop-blur-md shadow-lg "
          : "bg-transparent "
      }`}
      style={{ zIndex: "1000" }}
    >
      <div className="relative z-40 w-[90%] h-full m-auto flex items-center justify-between p-2">
        <div className="flex gap-3">
          <Mnav />

          <a href="./">
            <div className="flex gap-3 max-sm:hidden">
              <div className="pt-2">
                <Image src={Logo} alt="" width={50} />
              </div>
              <div className="text-3xl font-bold text-[#1976D2] text-center mb-2">
                Swing
              </div>
            </div>
          </a>
          <div className="max-sm:hidden relative cursor-text">
            <input
              className="bg-white dark:bg-gray-800
                         w-[250px] h-8 rounded-lg px-2 mt-2"
              type="text"
              placeholder="search"
            />
            <Msearch />
          </div>
          <div className="sm:hidden pt-1 relative size-7">
            <SearchIcon className="text-black dark:text-white size-7" />
            <Msearch />
          </div>

          <Link href="../projects">
            <Button className={`  rounded-full px-3 h-8 mt-1`}>Projects</Button>
          </Link>

          <div className="flex mt-2 gap-3 max-sm:hidden">
            <a href="mailto:shadow459434@gmail.com">
              {" "}
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}>
                <Image src={Social1} alt="" width={30} />
              </motion.div>
            </a>

            <a
              href="https://www.linkedin.com/in/abhishek-jangid-079b9726a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              {" "}
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}>
                <Image src={Social2} alt="" width={30} />
              </motion.div>
            </a>

            <a
              href="https://x.com/AbhishekJa94069?t=T_vVqs7Bbcj1GjLx0tei4g&s=08"
              target="_blank"
            >
              {" "}
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}>
                <Image src={Social3} alt="" width={30} />
              </motion.div>
            </a>

            <a href="https://github.com/techshadow01" target="_blank">
              {" "}
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1 }}
                className="fill-current dark:text-white"
              >
                <svg
                  width="28px"
                  height="28px"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-140.000000, -7559.000000)"
                      fill="currentColor"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                          id="github-[#142]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </motion.div>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <ThemeSwitcher />
          {!session && (
            <Button className="relative z-10">
              <Sign className="h-full w-full" />
            </Button>
          )}
          {session && <BasicMenu />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
