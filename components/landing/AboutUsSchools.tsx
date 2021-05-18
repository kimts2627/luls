import Button from "@common/Button";
import React from "react";

const School: React.FC = () => {
  return (
    <div className="w-164px flex flex-col justify-center items-center mb-40px">
      <div className="bg-blue-500 w-full h-120px flex justify-center items-center">School Logo</div>
      <h3 className="w-full h-48px mt-10px mb-20px flex flex-col justify-center items-center Montserrat text-16px">
        Club Name
        <h4 className="Lato text-14px">205</h4>
      </h3>
      <Button
        width="164"
        height="48"
        color="gray"
        margin={{ direction: "bottom", px: "10" }}
        ctx="Be a Member"
        txtColor="white"
      />
      <Button width="164" height="48" color="gray" ctx="Be an admin" txtColor="white" />
    </div>
  );
};

const AboutUsSchools: React.FC = () => {
  return (
    <section className="flex flex-col w-full">
      <h2 className="text-20px leading-28px mb-20px Lato-bold">Participating School Lists</h2>
      <section className="flex flex-wrap w-full justify-between">
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
      </section>
      <section className="mt-24px flex flex-col items-center justify-center">
        <h3 className="mb-24px Lato-bold text-20px">만약 리스트에 본인 학교가 없다면?</h3>
        <Button width="258" height="60" txtColor="white" ctx="Begin a Chapter" />
      </section>
    </section>
  );
};

export default AboutUsSchools;
