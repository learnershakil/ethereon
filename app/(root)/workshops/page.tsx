"use client";
import ShieldContainer from "@/components/ShieldContainer";
import { useEffect } from "react";

const page = () => {
  useEffect(() => {
    async function logMovies() {
      const response = await fetch("/api/events");
      const movies = await response.json();
      console.log(movies);
    }

    logMovies();
  }, []);
  return (
    <>
      <header className="h-[90vh]  overflow-hidden flex justify-center items-center relative w-screen">
        <img
          className="absolute top-0 w-full h-full object-cover -z-40 left-0"
          src="/workshop.png"
          alt=""
        />
        <h1 className="font-got text-white text-6xl">WORKSHOP</h1>
      </header>
      <main className=" w-full flex py-32 relative">
        <img
          src="/comp.png"
          alt="mother of dragon"
          className=" -z-50 absolute top-0 left-0 w-full h-full object-cover"
        />
        <ShieldContainer />
      </main>
    </>
  );
};

export default page;
