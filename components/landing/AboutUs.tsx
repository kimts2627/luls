import React from "react";
import AboutUsHeader from "@landing/AboutUsHeader";
import AboutUsSponsors from "@landing/AboutUsSponsors";
import AboutUsPeople from "@landing/AboutUsPeople";
import AboutUsSchools from "@landing/AboutUsSchools";

const AboutUs: React.FC = () => {
  return (
    <section className="w-full bg-blue-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-screen-1120 bg-blue-200 py-80px flex">
        <aside className="w-300px h-full bg-indigo-200 pl-18px text-30px DMSans-bd">About US</aside>
        <div className="bg-purple-200 flex flex-col items-start">
          <AboutUsHeader />
          <AboutUsSponsors />
          <AboutUsPeople />
        </div>
      </div>
      <div className="w-full max-w-screen-1120 bg-blue-200 pb-160px px-102px flex items-center justify-center">
        <AboutUsSchools />
      </div>
    </section>
  );
};

export default AboutUs;
