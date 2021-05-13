import Articles from "@components/common/Articles";
import React from "react";

const MembershipHeader: React.FC = () => {
  const description: string = process.env.NEXT_PUBLIC_DEV_ARTICLE_DESC || "undefined";
  return (
    <section className="flex mb-40px bg-yellow-400">
      <Articles title="Learn" content={description} margin={{ direction: "right", px: "24" }} />
      <Articles title="Experience" content={description} margin={{ direction: "right", px: "24" }} />
      <Articles title="Connect" content={description} />
    </section>
  );
};

export default MembershipHeader;
