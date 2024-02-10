"use client";

import { useEffect, useRef } from "react";
import style from "./style.module.css";

import { disableScroll, enableScroll } from "@/lib/utils";

const Door = () => {
  const moveInternalDoors = () => {
    if (internalDoorLeft.current && internalDoorRight.current) {
      internalDoorLeft.current.classList.add(style["moveLeft"]);
      internalDoorRight.current.classList.add(style["moveRight"]);
    }
  };
  const moveExternalDoors = () => {
    if (externalDoorLeft.current && externalDoorRight.current) {
      externalDoorLeft.current.classList.add(style["moveLeft"]);
      externalDoorRight.current.classList.add(style["moveRight"]);
    }
  };

  useEffect(() => {
    disableScroll();
    let doorTimer: number | null = null;
    let seconds: number = 1;
    moveInternalDoors();

    doorTimer = window.setTimeout(() => {
      moveExternalDoors();
    }, seconds * 1000);

    const scrollTimer: number = window.setTimeout(() => {
      enableScroll();
    }, 2000);

    return () => {
      enableScroll();
      doorTimer && clearTimeout(doorTimer);
      clearTimeout(scrollTimer);
    };
  }, []);

  const internalDoorLeft = useRef<HTMLImageElement>(null);
  const internalDoorRight = useRef<HTMLImageElement>(null);

  const externalDoorLeft = useRef<HTMLImageElement>(null);
  const externalDoorRight = useRef<HTMLImageElement>(null);

  return (
    <div className="w-screen h-screen fixed flex top-0 left-0 ">
      <div className="side-1 absolute w-full h-full ">
        <img
          ref={externalDoorLeft}
          src={"/door-wall-left.png"}
          alt="ExternalDoor2 "
          className={
            "w-full object-cover lg:object-fill block absolute z-50 top-0 h-full origin-center "
          }
        />
        <img
          ref={internalDoorLeft}
          src="/door-left.png"
          alt="internalDoor1"
          className="w-full object-cover lg:object-fill block absolute z-40 h-full  imginternal origin-center "
        />
      </div>
      <div className="side-2 absolute  w-full h-full ">
        <img
          ref={externalDoorRight}
          src="/door-wall-right.png"
          alt="ExternalDoor2"
          className="w-full object-cover block absolute z-50 h-full origin-center "
        />
        <img
          ref={internalDoorRight}
          src="/door-right.png"
          alt="internalDoor2"
          className="w-full object-cover lg:object-fill block absolute z-40 h-full imginternal origin-center "
        />
      </div>
    </div>
  );
};

export default Door;
