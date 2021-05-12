import React from "react";
import Layout from "@layout/Layout";
import Slogan from "@landing/Slogan";
import AboutUs from "@landing/AboutUs";

const index: React.FC = () => {
  return (
    <>
      <Layout />
      <div className="flex justify-center items-center">
        <div className="w-full max-w-screen-1440 bg-red-200 h-screen flex flex-col justify-start items-center mt-72px">
          <Slogan />
          <AboutUs />
        </div>
      </div>
    </>
  );
};

export default index;
