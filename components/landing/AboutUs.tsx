import React from "react";
import AboutUsHeader from "@landing/AboutUsHeader";
import AboutUsSponsors from "@landing/AboutUsSponsors";
import AboutUsPeople from "@landing/AboutUsPeople";

const AboutUs: React.FC = () => {
  return (
    <section className="w-full bg-blue-100 flex items-center justify-center">
      <div className="w-full h-full max-w-screen-1120 bg-blue-200 py-80px flex">
        <aside className="w-300px h-full bg-indigo-200 pl-18px Montserrat text-30px">About US</aside>
        <div className="h-full bg-purple-200 flex flex-col items-start">
          <AboutUsHeader />
          <AboutUsSponsors />
          <AboutUsPeople />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
