"use client";
import { React, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Larrow from "./assets/larrow.svg";
import Rarrow from "./assets/rarrow.svg";
import { Skell } from "./skeletions";

function SampleNextArrow(props) {
  const { onClick } = props;
  function handleclick() {
    onClick();
  }
  return (
    <motion.div
      whileTap={{ backgroundColor: "#A0A7B0" }}
      className=" absolute z-10 -right-4 top-[calc(50%-5px)] flex items-center justify-center w-10 rounded-full aspect-square bg-[#DADFE1] dark:bg-gray-700 cursor-pointer shadow-lg"
      onClick={handleclick}
    >
      <Image src={Rarrow} alt="" width={20} />
    </motion.div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  function handleclick() {
    onClick();
  }
  return (
    <motion.div
      whileTap={{ backgroundColor: "#A0A7B0" }}
      className=" absolute z-10 -left-4 top-[calc(50%-5px)] flex items-center justify-center w-10 rounded-full aspect-square bg-[#DADFE1]  dark:bg-gray-700 cursor-pointer shadow-lg "
      onClick={handleclick}
    >
      <Image src={Larrow} alt="" width={20} />
    </motion.div>
  );
}

const carousel = (props) => {
  const [value, setvalue] = useState(1);
  const [loading, setloading] = useState(true);

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow value={value} setvalue={setvalue} />,
    prevArrow: (
      <SamplePrevArrow
        className="max-sm:hidden"
        value={value}
        setvalue={setvalue}
      />
    ),
  };

  const projects = [
    {
      src: props.pic1,
      alt: "Image",
    },
    {
      src: props.pic2,
      alt: "Image",
    },
    {
      src: props.pic3,
      alt: "Image",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  return (
    <div className="relative w-[95%] max-sm:w-full h-full mb-4 ">
      <Slider {...settings}>
        {projects.map((item, index) => {
          return (
            <div
              key={index}
              className=" overflow-hidden mx-auto rounded-xl aspect-video"
            >
              {loading ? (
                <Skell />
              ) : (
                <img
                  src={item.src}
                  className="rounded-xl w-full h-full object-cover"
                  alt=""
                />
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default carousel;
