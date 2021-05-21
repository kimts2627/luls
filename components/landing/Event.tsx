import React from "react";
import EventHeader from "@landing/EventHeader";
import EventList from "@landing/EventList";

const Event: React.FC = () => {
  return (
    <section className="w-full bg-green-100 flex items-center justify-center">
      <div className="w-full h-full max-w-screen-1120 bg-green-200 py-80px flex">
        <aside className="w-300px h-full bg-green-500 pl-18px text-30px DMSans-bd">Event</aside>
        <div className="h-full bg-green-300 flex flex-col items-start">
          <EventHeader />
          <EventList />
        </div>
      </div>
    </section>
  );
};

export default Event;
