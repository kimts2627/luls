import React from "react";

const Person: React.FC = () => {
  return (
    <div className="w-164px flex flex-col justify-center items-center">
      <div className="bg-blue-500 w-full h-120px">img</div>
      <h3 className="w-full h-20px flex justify-center items-center">Name / Role</h3>
    </div>
  );
};

const AboutUsPeople: React.FC = () => {
  return (
    <section className="flex flex-col">
      <h2 className="text-20px leading-28px mb-20px Lato-bold">People</h2>
      <section className="flex w-728px h-150px justify-between">
        <Person />
        <Person />
        <Person />
        <Person />
      </section>
    </section>
  );
};

export default AboutUsPeople;
