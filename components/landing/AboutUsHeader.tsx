import React from "react";
import Articles from "@components/common/Articles";

const AboutUsHeader: React.FC = () => {
  const description: string = process.env.NEXT_PUBLIC_DEV_ARTICLE_DESC || "undefined";
  return (
    <section className="flex bg-blue-300 mb-40px">
      <Articles title="Who We Are" content={description} margin={{ direction: "right", px: "24" }} />
      <Articles title="Values" content={description} />
    </section>
  );
};

export default AboutUsHeader;
