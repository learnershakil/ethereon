import React from "react";
import { Event } from "@/types";
import Link from "next/link";
interface Props {
  event: Event;
  onExplore: () => void;
}

const Workshop = ({ event, onExplore }: Props) => {
  return (
    <div className="relative scale-[130%] mb-20 md:mb-0 w-64 h-96">
      <img
        src="/workshopCardTemp.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full -z-10 object-cover"
      />
      <div className="w-[13.5rem] h-[18.7rem] mt-[1.6rem] ml-[1.2rem]">
        <img
          src={event.imageUrl}
          alt=""
          className="w-full h-full object-cover"
        />
        <h2 className="absolute top-0 mt-24 bg-black bg-opacity-25 text-center w-[80%] z-10 text-white ">
          {event.title}
        </h2>
      </div>

      <div className="relative text-white inline-flex gap-2 z-30 mt-1 ml-[1.6rem]">
        <button
          onClick={() => {
            onExplore();
          }}
          className="bg-[#bd8c5c] transition-all text-black  duration-300 px-6 py-2 mt-1 font-got hover:bg-yellow-600"
        >
          Explore
        </button>
        <Link
          href={`/events/${event._id}`}
          onClick={() => {}}
          className="bg-[#bd8c5c] px-6 py-2 mt-1  text-black font-got hover:bg-yellow-600"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Workshop;
