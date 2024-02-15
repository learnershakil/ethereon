import React, { useState } from "react";
import { Event } from "@/types";

import Popup from "../Popup";
import Workshop from "../Workshop";

const WorkshopShowcase = ({ events }: { events: Event[] }) => {
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [currentItem, setCurrentItem] = useState<number>(0);
  return (
    <>
      <Popup
        disableActive={() => setIsPopupActive(false)}
        event={events[currentItem]}
        isActive={isPopupActive}
      />
      <div className="flex flex-wrap w-full items-center justify-evenly gap-10">
        {events.map((event, index) => (
          <Workshop
            onExplore={() => {
              setIsPopupActive(true);
              setCurrentItem(index);
            }}
            event={event}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default WorkshopShowcase;
