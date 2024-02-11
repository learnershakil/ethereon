import { useState } from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

interface prop {
  img: string;
  heading: string;
  discription: string;
  isActive: boolean;
  disableActive: () => void;
}

const ShildBackContentPopup = ({
  isActive,
  disableActive,
  discription,
  heading,
  img,
}: prop) => {
  return (
    <>
      {isActive && (
        <div className="bg-black bg-opacity-55 z-[1000] top-0 left-0 fixed  h-screen w-screen flex justify-center items-center">
          <div className=" relative overflow-y-scroll bg-white flex md:flex-row flex-col justify-center items-center shrink-0 w-[90%] h-[90%] ">
            <button
              className="absolute top-0 bg-white p-4 rounded-md right-2 text-4xl"
              onClick={disableActive}
            >
              <IoMdClose />
            </button>
            <img src={img} alt="" className=" block w-[100%] md:w-[30%]" />
            <div className="p-4  md:w-[70%] flex flex-col justify-center items-center gap-10">
              <h3 className="text-4xl mb-2">{heading}</h3>
              <p className="text-xl ">{discription}</p>
              <Link className="text-white bg-yellow-500 p-3" href={"/"}>
                Join now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShildBackContentPopup;
