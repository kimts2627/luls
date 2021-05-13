import React from "react";
import Articles from "@common/Articles";

const LeadMiddle: React.FC = () => {
  const description: string = process.env.NEXT_PUBLIC_DEV_ARTICLE_DESC || "undefined";

  return (
    <section className="flex bg-red-400 mb-40px">
      <Articles title="Qualifications / Duty-specifics" content={description} width="536" />
    </section>
  );
};

export default LeadMiddle;
