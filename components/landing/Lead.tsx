import React from "react";
import LeadFooter from "@landing/LeadFooter";
import LeadHeader from "@landing/LeadHeader";
import LeadMiddle from "@landing/LeadMiddle";

const Lead: React.FC = () => {
  return (
    <section className="w-full bg-red-100 flex items-center justify-center">
      <div className="w-full h-full max-w-screen-1120 bg-red-200 py-80px flex">
        <aside className="w-300px h-full bg-red-500 pl-18px Montserrat text-30px">Lead</aside>
        <div className="bg-red-300 flex flex-col items-start">
          <h2 className="text-20px Lato-bold mb-40px">Leadership roles</h2>
          <LeadHeader />
          <LeadMiddle />
          <LeadFooter />
        </div>
      </div>
    </section>
  );
};

export default Lead;
