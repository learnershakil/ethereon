import Door from "@/components/Door";
import React from "react";
import style from "./style.module.css";
const page = () => {
  return (
    <>
      <Door />
      <main className={"w-screen h-screen " + style["default"]}>
        <img
          src="/home-bg.png"
          alt="dragon bg"
          className="-z-10 absolute top-0 object-cover left-0 w-full h-full"
        />
      </main>
    </>
  );
};

export default page;
