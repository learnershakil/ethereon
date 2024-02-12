"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import style from "./style.module.css";

import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navigation = () => {
  const [isMobNavActive, setIsMobileNavActive] = useState(false);

  useEffect(() => {
    const deactivateMobileNav = () => {
      setIsMobileNavActive(false);
    };
    window.addEventListener("click", deactivateMobileNav);

    return () => window.removeEventListener("click", deactivateMobileNav);
  }, []);

  const toggleIsMobileNavActive = () => {
    setIsMobileNavActive((prev) => !prev);
  };

  return (
    <>
      <nav className="hidden bg-opacity-20 text-white gap-7 font-got items-center justify-between p-4 lg:flex bg-black fixed z-[999] w-full top-0 left-0 ">
        <ul
          className={
            "flex gap-10 w-full text-2xl border-yellow-400  px-10 border-r-2 border-b-2 rounded-br-full " +
            style["leftNav"]
          }
        >
          <li className="">
            <Link href="/workshops" className="">
              Workshop
            </Link>
          </li>
          <li className="">
            <Link href="/competitions" className="">
              Competitions
            </Link>
          </li>
          <li className="">
            <Link href="/events" className="">
              Events
            </Link>
          </li>
        </ul>

        <div className="logo">
          <Link href="/" className="text-4xl">
            <img src="/logo.jpg" className="w-52" alt="Ethereon Logo" />
          </Link>
        </div>

        <ul
          className={
            "flex flex-row-reverse items-center gap-10 w-full text-2xl border-l-2 border-b-2 px-10 rounded-bl-full " +
            style["rightNav"]
          }
        >
          <li className="mb-2">
            <Link
              href="/register"
              className="bg-yellow-500 text-slate-300 py-2 px-4  font-bold rounded-tl-xl  rounded-br-xl"
            >
              Register
            </Link>
          </li>

          <li className="">
            <Link href="/accommodation" className="">
              Accommodation
            </Link>
          </li>
        </ul>
      </nav>

      <nav className=" flex lg:hidden absolute   z-[999] w-full top-0 left-0 h-full">
        <button
          className="text-white text-4xl z-50 absolute top-4 left-4"
          onClick={(e) => {
            e.stopPropagation();
            toggleIsMobileNavActive();
          }}
        >
          {!isMobNavActive ? <CiMenuFries /> : <IoMdClose />}
        </button>

        <ul
          onClick={(e) => e.stopPropagation()}
          className={
            "h-full w-60 font-heading flex flex-col gap-5 text-lg bg-black fixed top-0 text-white transition-all duration-300 pt-24 left-0 z-40 " +
            (isMobNavActive ? " -translate-x-0" : " -translate-x-full")
          }
        >
          <li className="w-full pl-6 ">
            <Link
              onClick={() => setIsMobileNavActive(false)}
              href={"/workshops"}
              className="text-center  inline-flex gap-2 items-center border-b-[1px] hover:active:text-yellow-400 border-slate-300 border-opacity-20"
            >
              Workshops
            </Link>
          </li>
          <li className="w-full pl-6 ">
            <Link
              onClick={() => setIsMobileNavActive(false)}
              href={"/competitions"}
              className="text-center  inline-flex gap-2 items-center border-b-[1px] hover:active:text-yellow-400 border-slate-300 border-opacity-20"
            >
              Competitions
            </Link>
          </li>
          <li className="w-full pl-6 ">
            <Link
              onClick={() => setIsMobileNavActive(false)}
              href={"/events"}
              className="text-center  inline-flex gap-2 items-center border-b-[1px] hover:active:text-yellow-400 border-slate-300 border-opacity-20"
            >
              Events
            </Link>
          </li>

          <li className="w-full pl-6 ">
            <Link
              onClick={() => setIsMobileNavActive(false)}
              href={"/register"}
              className="text-center  inline-flex gap-2 items-center border-b-[1px] hover:active:text-yellow-400 border-slate-300 border-opacity-20"
            >
              Register
            </Link>
          </li>

          <li className="w-full pl-6 ">
            <Link
              onClick={() => setIsMobileNavActive(false)}
              href={"/accommodation"}
              className="text-center  inline-flex gap-2 items-center border-b-[1px] hover:active:text-yellow-400 border-slate-300 border-opacity-20"
            >
              Accommodation
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
