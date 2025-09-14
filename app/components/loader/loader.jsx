import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-20 w-full h-full flex items-center justify-center bg-white">
      <div
        className=" fixed top-0 h-[50px] w-screen bg-[#D0DDEA] dark:bg-[#111111] shadow-lg"
        style={{ zIndex: "900" }}
      ></div>
      <div className="boxes ">
        {[1, 2, 3, 4].map((boxNum) => (
          <div className="box" key={boxNum}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
