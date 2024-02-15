import React, { useState } from "react";
import { Event } from "@/types";
import Shield from "../Shield";
import Popup from "../Popup";
const EventsShowcase = ({ events }: { events: Event[] }) => {
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [currentItem, setCurrentItem] = useState<number>(0);
  return (
    <>
      <Popup
        disableActive={() => setIsPopupActive(false)}
        event={events[currentItem]}
        isActive={isPopupActive}
      />
      <div className="flex flex-wrap items-center justify-center lg:justify-between gap-10">
        {events.map((event, index) => (
          <Shield
            price={event.price}
            isFree={event.isFree}
            img={event.imageUrl}
            id={event._id}
            onClick={() => {
              setIsPopupActive(true);
              setCurrentItem(index);
            }}
            title={event.title}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default EventsShowcase;
