import React from "react";
import Articles from "@common/Articles";

const LeadHeader: React.FC = () => {
  const description: string = process.env.NEXT_PUBLIC_DEV_ARTICLE_DESC || "undefined";
  return (
    <section className="flex bg-red-400 mb-40px">
      <Articles title="Benefits" content={description} margin={{ direction: "right", px: "24" }} />
      <Articles title="Expectation" content={description} margin={{ direction: "right", px: "24" }} />
      <Articles title="Values" content={description} />
    </section>
  );
};

export default LeadHeader;
