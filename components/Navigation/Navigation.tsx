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
      {/*<nav className="hidden bg-opacity-40  text-white gap-7 font-poppins items-center justify-between p-4 lg:flex font-bold fixed z-[999] w-full top-0 left-0 ">
        <div className="logo">
          <Link href="/" className="flex gap-3 items-center text-2xl">
            <img src="/logo.png" className="w-16" alt="Catalyst Logo" />
            <p className="font-got font-bold">Catalyst</p>
          </Link>
        </div>

        <ul className={"flex gap-10    px-10  relative " + style["leftNav"]}>
          <li className="hover:text-amber-400 transition-all duration-300">
            <Link href="/workshops" className="">
              Workshop
            </Link>
          </li>
          <li className="hover:text-amber-400 transition-all duration-300">
            <Link href="/competitions" className="">
              Competitions
            </Link>
          </li>
          <li className="hover:text-amber-400 transition-all duration-300">
            <Link href="/events" className="">
              Events
            </Link>
          </li>
          <li className="hover:text-amber-400 transition-all duration-300">
            <Link href="/accommodation" className="">
              Accommodation
            </Link>
          </li>

          <li className="mb-2 ">
            <Link
              href="/sign-in"
              className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-200  py-2 px-4  font-bold rounded-tl-xl  rounded-br-xl"
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>*/}

      <nav className="hidden bg-opacity-40  text-white gap-7 font-poppins items-center justify-between p-4 lg:flex font-bold fixed z-[999] w-full top-0 left-0 ">
        <div className="nav-left relative w-[40%] h-14">
          <img
            src="/nav-left.png"
            alt=""
            className="absolute top-0 left-0 h-full
        w-full"
          />
          <ul
            className={
              "flex gap-10 mt-2  px-10  text-2xl relative " + style["leftNav"]
            }
          >
            <li className="hover:text-amber-400 transition-all duration-300">
              <Link href="/workshops" className="">
                Workshop
              </Link>
            </li>
            <li className="hover:text-amber-400 transition-all duration-300">
              <Link href="/competitions" className="">
                Competitions
              </Link>
            </li>
            <li className="hover:text-amber-400 transition-all duration-300">
              <Link href="/events" className="">
                Events
              </Link>
            </li>
          </ul>
        </div>
        <div className="logo">
          <Link href="/" className="flex gap-3 items-center text-2xl">
            <img src="/logo.png" className="w-16" alt="Catalyst Logo" />
            <p className="font-got font-bold">Catalyst</p>
          </Link>
        </div>
        <div className="nav-right relative w-[40%] h-14">
          <img
            src="/nav-right.png"
            alt=""
            className="absolute top-0 left-0 h-full
        w-full"
          />
          <ul
            className={
              "flex flex-row-reverse items-center gap-10 mt-2  px-10  text-2xl relative " +
              style["leftNav"]
            }
          >
            <li className="mt-1 ">
              <Link
                href="/sign-in"
                className="bg-yellow-500   hover:bg-yellow-400 transition-all duration-200  py-2 px-4  font-bold rounded-tl-xl  rounded-br-xl"
              >
                Register
              </Link>
            </li>
            <li className="hover:text-amber-400 transition-all duration-300">
              <Link href="/accommodation" className="">
                Accommodation
              </Link>
            </li>

            <li className="hover:text-amber-400 transition-all duration-300">
              <Link href="/aboutus" className="">
                About us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <nav className=" flex lg:hidden absolute  z-[999] w-full top-0 left-0 h-full">
        <button
          className="text-white text-4xl z-50 absolute top-4 left-4"
          onClick={(e) => {
            e.stopPropagation();
            toggleIsMobileNavActive();
          }}
        >
          {!isMobNavActive ? <CiMenuFries /> : <IoMdClose />}
        </button>

        <div className="logo absolute left-20 z-[999]  top-3">
          <Link
            href="/"
            className="flex gap-1 text-white items-center text-2xl"
          >
            <img src="/logo.png" className="w-12" alt="Catalyst Logo" />
            <p className="font-got  font-bold ">Catalyst</p>
          </Link>
        </div>
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
              href={"/"}
              className="text-center  inline-flex gap-2 items-center border-b-[1px] hover:active:text-yellow-400 border-slate-300 border-opacity-20"
            >
              Home
            </Link>
          </li>
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
              href={"/sign-in"}
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
