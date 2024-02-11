"use client";
import Shield from "@/components/Shield";
import VideoBG from "@/components/VideoBg";

const page = () => {
  return (
    <>
      <header className="h-screen relative w-screen">
        <VideoBG onLoadedData={() => {}} isDarkBg={false} />
      </header>
      <main className=" w-full flex  relative">
        <img
          src="/comp.png"
          alt="mother of dragon"
          className=" -z-50 absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="flex flex-wrap justify-between">
          <Shield />
          <Shield />
          <Shield />
          <Shield />
          <Shield />
          <Shield />
          <Shield />
        </div>
      </main>
    </>
  );
};

export default page;
