import React from "react";
import Layout from "@layout/Layout";
import Slogan from "@landing/Slogan";
import AboutUs from "@landing/AboutUs";
import Membership from "@landing/Membership";
import Event from "@landing/Event";
import Lead from "@landing/Lead";
import JoinUs from "@landing/JoinUs";
import Footer from "@landing/Footer";

const index: React.FC = () => {
  return (
    <>
      <Layout />
      <div className="flex justify-center items-center">
        <div className="w-full max-w-screen-1440 flex flex-col justify-start items-center mt-72px overflow-hidden">
          <Slogan />
          <AboutUs />
          <Membership />
          <Lead />
          <Event />
          <JoinUs />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default index;
