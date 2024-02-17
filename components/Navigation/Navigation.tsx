"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

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
      {/* <nav className="hidden bg-opacity-40  text-white gap-7 font-poppins items-center justify-between p-4 lg:flex font-bold fixed z-[999] w-full top-0 left-0 ">
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
      </nav> */}

      <nav className="  hidden bg-opacity-40  text-white gap-7 font-poppins items-center justify-between p-4 lg:flex font-bold fixed z-[999] w-full top-0 left-0 ">
        <img
          src="/navTop.png"
          alt=""
          className="absolute top-8 left-0 w-full object-contain"
        />
        <div className=" relative ml-4 w-[40%] h-14">
          {/*  <img
            src="/nav-left.png"
            alt=""
            className="absolute top-0 left-0 h-full
        w-full"
    /> */}
          <ul className={"flex gap-7 mt-2  px-10  text-2xl relative "}>
            <li className="hover:text-amber-400 transition-all duration-300">
              <Link href="/" className="">
                Home
              </Link>
            </li>
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
          </ul>
        </div>

        <div className="nav-right z-30 mr-5 relative w-[40%] h-14">
          {/*<img
            src="/nav-right.png"
            alt=""
            className="absolute top-0 left-0 h-full
        w-full"
          />*/}
          <ul
            className={
              "flex flex-row-reverse items-center gap-7 mt-2  px-10  text-2xl relative " +
              style["leftNav"]
            }
          >
            <li className="mt-1 ">
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <Button asChild className="rounded-full" size="lg">
                  <Link
                    href="/sign-in"
                    className="bg-yellow-500   hover:bg-yellow-400 transition-all duration-200  py-2 px-4  font-bold rounded-tl-md  rounded-br-md"
                  >
                    Login
                  </Link>
                </Button>
              </SignedOut>
            </li>
            <li className="hover:text-amber-400 transition-all duration-300">
              <Link href="/accommodation" className="">
                Accommodation
              </Link>
            </li>

            <li className="hover:text-amber-400 transition-all duration-300">
              <Link href="/events" className="">
                Events
              </Link>
            </li>
            <li className="hover:text-amber-400 transition-all duration-300">
              <Link href="/profile" className="">
                Profile
              </Link>
            </li>            
          </ul>
        </div>
      </nav>

      <nav className="hidden bg-opacity-40  text-white gap-7 font-poppins items-center justify-between p-4 lg:flex font-bold absolute z-[999] w-full bottom-0 left-0 ">
        <div className="nav-left relative w-[50%] h-14">
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
              <Link href="/contactus" className="">
                Contact us
              </Link>
            </li>
            <li className="hover:text-amber-400 transition-all duration-300">
              <Link href="/sponsors" className="">
                Sponsors
              </Link>
            </li>

            <li className="hover:text-amber-400 shrink-0 transition-all duration-300">
              <Link href="/aboutus" className="">
                About us
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav-right relative w-[50%] h-14">
          <img
            src="/nav-right.png"
            alt=""
            className="absolute top-0 left-0 h-full
        w-full"
          />
          <ul
            className={
              "flex  items-center ml-28 gap-10 mt-2  px-10  text-4xl relative " +
              style["leftNav"]
            }
          >
            <li className="hover:text-amber-400 transition-all duration-300">
              <a href="https://www.facebook.com/RISC.LPU/" className="">
                <CiFacebook />
              </a>
            </li>

            <li className="hover:text-amber-400 transition-all duration-300">
              <a href="https://www.instagram.com/risc_lpu/" className="">
                <CiInstagram />
              </a>
            </li>

            <li className="hover:text-amber-400 transition-all duration-300">
              <a href="https://www.linkedin.com/company/risc-lpu/" className="">
                <CiLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <nav className=" flex lg:hidden fixed  z-[999] w-full top-0 left-0 h-28">
        <button
          className="text-white text-4xl z-50 absolute top-4 left-4"
          onClick={(e) => {
            e.stopPropagation();
            toggleIsMobileNavActive();
          }}
        >
          {!isMobNavActive ? <CiMenuFries /> : <IoMdClose />}
        </button>

        <div className="logo fixed left-20 z-[999]  top-3">
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
            "h-screen w-60 font-heading flex flex-col gap-5 text-lg bg-black fixed top-0 text-white transition-all duration-300 pt-24 left-0 z-40 " +
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
              href={"/accommodation"}
              className="text-center  inline-flex gap-2 items-center border-b-[1px] hover:active:text-yellow-400 border-slate-300 border-opacity-20"
            >
              Accommodation
            </Link>
          </li>

          <li className="w-full pl-6 ">
            <Link
              onClick={() => setIsMobileNavActive(false)}
              href={"/contactus"}
              className="text-center  inline-flex gap-2 items-center border-b-[1px] hover:active:text-yellow-400 border-slate-300 border-opacity-20"
            >
              Contact us
            </Link>
          </li>

          <li className="w-full pl-6 ">
            <Link
              onClick={() => setIsMobileNavActive(false)}
              href={"/sponsors"}
              className="text-center  inline-flex gap-2 items-center border-b-[1px] hover:active:text-yellow-400 border-slate-300 border-opacity-20"
            >
              Sponsors
            </Link>
          </li>

          <li className="w-full pl-6 ">
            <Link
              onClick={() => setIsMobileNavActive(false)}
              href={"/aboutus"}
              className="text-center  inline-flex gap-2 items-center border-b-[1px] hover:active:text-yellow-400 border-slate-300 border-opacity-20"
            >
              About Us
            </Link>
          </li>
          <li className="w-full pl-6 ">
            <SignedOut>
              <Link
                onClick={() => setIsMobileNavActive(false)}
                href="/sign-in"
                className="text-center  inline-flex gap-2 items-center border-b-[1px] hover:active:text-yellow-400 border-slate-300 border-opacity-20"
              >
                Login
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
