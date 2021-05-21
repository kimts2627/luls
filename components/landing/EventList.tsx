import React from "react";

const SingleEvent: React.FC = () => {
  return (
    <div className="flex flex-col items-center mb-20px">
      <div className="h-210px w-164px bg-green-600 mb-10px">img</div>
      <h3 className="text-12px">Event Name</h3>
    </div>
  );
};

const EventList: React.FC = () => {
  return (
    <section>
      <h2 className="text-20px leading-28px mb-20px DMSans-bd">All Events</h2>
      <section className="flex flex-wrap justify-between w-728px">
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
      </section>
    </section>
  );
};

export default EventList;
