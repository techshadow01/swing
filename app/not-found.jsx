import React from "react";

const NotFound404 = () => {
  return (
    <>
      <div
        className="sticky top-0 h-[50px] w-screen bg-[#D0DDEA] dark:bg-[#111111] shadow-lg"
        style={{ zIndex: 900 }}
      ></div>
      <div className="bg-white text-[#0B6BCB] font-nunito w-screen h-[calc(100vh-100px)] flex flex-col items-center justify-center">
        <div className=" font-[900] text-[11rem]">404</div>
        <div className=" text-center text-[1.6rem] font-semibold">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go{" "}
            <a href="/" className=" underline hover:opacity-80">
              home
            </a>{" "}
            and try from there.
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound404;
