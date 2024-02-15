import React from "react";

const page = () => {
  return (
    <main
      className={
        "relative flex-col w-screen h-screen flex  justify-center items-center "
      }
    >
      <img
        src="/aboutUs.jpeg"
        alt=""
        className="absolute top-0 left-0 -z-10 w-full h-full"
      />
      <div className="w-[40] h-[80%] absolute top-0 mt-20 left-4"></div>
    </main>
  );
};

export default page;
