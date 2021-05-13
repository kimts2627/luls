import React from "react";

const SponsorLogo: React.FC = () => {
  return <div className="bg-blue-500 w-164px flex justify-center items-center">Sponsor's Logo</div>;
};

const AboutUsSponsors: React.FC = () => {
  return (
    <section className="flex flex-col mb-40px">
      <h2 className="text-20px leading-28px mb-20px Lato-bold">Sponsors</h2>
      <section className="flex w-728px h-78px justify-between">
        <SponsorLogo />
        <SponsorLogo />
        <SponsorLogo />
        <SponsorLogo />
      </section>
    </section>
  );
};

export default AboutUsSponsors;
