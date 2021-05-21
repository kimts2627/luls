import React from "react";
import MembershipFooter from "@landing/MembershipFooter";
import MembershipHeader from "@landing/MembershipHeader";

const Membership: React.FC = () => {
  return (
    <section className="w-full bg-yellow-100 flex items-center justify-center">
      <div className="w-full h-full max-w-screen-1120 bg-yellow-200 py-80px flex">
        <aside className="w-300px h-full bg-yellow-500 pl-18px text-30px DMSans-bd">Membership</aside>
        <div className="h-full bg-yellow-300 flex flex-col items-start">
          <MembershipHeader />
          <MembershipFooter />
        </div>
      </div>
    </section>
  );
};

export default Membership;
