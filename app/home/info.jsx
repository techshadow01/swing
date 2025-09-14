import React from "react";

const lines = [
  "We don't call them customers or transactions. They are your supporters.",
  "You have 100% ownership of your supporters. We never email them, and you can export the list any time you like.",
  "You get to talk to a human for help, or if you just like some advice to hit the ground running.",
  "You get paid instantly to your bank account. No more 30-day delays.",
];

const info = () => {
  return (
    <div className="relative w-[70%] max-w-[1900px]  mx-auto flex flex-col gap-9 m-14  max-sm:static max-sm:w-full">
      <div className="text-7xl font-bold flex flex-col items-center justify-center max-sm:text-3xl max-sm:items-start max-sm:ml-[40px]">
        <div className="dark:text-white">Designed for creators,</div>
        <div className="text-[#CCD5E2] ">not for businesses.</div>
      </div>
      <div className="flex flex-wrap text-2xl max-sm:text-xl dark:text-white font-semibold max-sm:flex-col">
        {lines.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[50%] flex items-start justify-center gap-3 mb-12 max-sm:mb-6 max-sm:w-full"
            >
              <div className=" mt-3 max-sm:size-7 size-9 ">
                <svg
                  viewBox="0 0 200 200"
                  fill="#9CA3AF"
                  data-name="Layer 1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <path d="M177.6,80.43a10,10,0,1,0-19.5,4.5,60.76,60.76,0,0,1-6,44.5c-16.5,28.5-53.5,38.5-82,22-28.5-16-38.5-53-22-81.5s53.5-38.5,82-22a9.86,9.86,0,1,0,10-17c-38.5-22.5-87-9.5-109.5,29a80.19,80.19,0,1,0,147,20.5Zm-109.5,11a10.12,10.12,0,0,0-11,17l40,25a10.08,10.08,0,0,0,5.5,1.5,10.44,10.44,0,0,0,8-4l52.5-67.5c3.5-4.5,2.5-10.5-2-14s-10.5-2.5-14,2l-47,60Z" />
                </svg>
              </div>
              <div className="max-w-[400px] ">{item}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default info;
