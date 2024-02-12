"use client";
import Navigation from "@/components/Navigation";
import Shield from "@/components/Shield";
import ShieldContainer from "@/components/ShieldContainer";
import VideoBG from "@/components/VideoBg";

const page = () => {
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
