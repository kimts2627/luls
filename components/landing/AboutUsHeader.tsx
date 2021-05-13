import React from "react";
import Articles from "@components/common/Articles";

const AboutUsHeader: React.FC = () => {
  return (
    <section className="flex bg-blue-300 mb-40px">
      <Articles />
      <Articles />
    </section>
  );
};

export default AboutUsHeader;
