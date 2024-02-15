"use client";
import EventsShowcase from "@/components/EventsShowcase";
import Navigation from "@/components/Navigation";
import Popup from "@/components/Popup";
import Shield from "@/components/Shield";
import ShieldContainer from "@/components/ShieldContainer";
import VideoBG from "@/components/VideoBg";
import Collection from "@/components/shared/Collection";
import style from "./style.module.css";
//To get Data.
import {
  getAllEvents,
  getRelatedEventsByCategory,
} from "@/lib/actions/event.actions";
import { formatDateTime } from "@/lib/utils";
import { Event } from "@/types";
import { useEffect, useState } from "react";

const page = () => {
  const [events, setEvents] = useState<Event[] | null | undefined>(undefined);
  useEffect(() => {
    getAllEvents({
      category: "competition",
      limit: 100,
      page: 1,
      query: "",
    })
      .then((events) => {
        setEvents(events?.data || null);
      })
      .catch((err) => {
        setEvents(null);
      });
  }, []);

  return (
    <>
      <header className="h-screen flex justify-center items-center relative w-screen">
        <img
          src="/chair.png"
          className="w-full h-full absolute top-0 left-0 -z-10 object-cover"
          alt="bg"
        />
        <img
          src="/competitionsText.png"
          className="text-6xl font-bold w-2/3 text-white font-got"
        />
      </header>
      <main className={" w-full flex  relative py-40 " + style["main"]}>
        {!events && (
          <h4 className="text-red-600 font-got text-center text-3xl` ">
            oops looks like there is an Error!
          </h4>
        )}
        {events && (
          <>
            <EventsShowcase events={events} />
          </>
        )}
      </main>
    </>
  );
};

export default page;
