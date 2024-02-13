"use client";
import Door from "@/components/Door";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";

const page = () => {
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowText(true);
    }, 5 * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {!showText && <Door />}

      <main
        className={
          "w-screen overflow-hidden h-screen flex justify-center items-center "
        }
      >
        <div
          className={
            "w-full h-full flex justify-center items-center " + style["default"]
          }
        >
          <img
            src="/home-bg.png"
            alt="dragon bg"
            className="-z-10 block absolute top-0 object-cover left-0 w-full h-full "
          />
          {
            <div
              className={
                " mt-52 felx-col flex justify-center items-center gap-10 transition-all duration-150 " +
                (showText ? " opacity-100 " : " opacity-0")
              }
            >
              <img
                src="/front.png"
                alt=""
                className=" w-60 bg-black bg-opacity-25"
              />
            </div>
          }
        </div>
      </main>
    </>
  );
};

export default page;
