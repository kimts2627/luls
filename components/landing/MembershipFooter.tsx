import Articles from "@common/Articles";
import Button from "@common/Button";
import React from "react";

const MembershipFooter: React.FC = () => {
  const description: string = process.env.NEXT_PUBLIC_DEV_ARTICLE_DESC || "undefined";
  return (
    <section className="flex bg-yellow-400">
      <div className="flex items-start">
        <div className="flex flex-col">
          <Articles
            title="Description for Member"
            content={description}
            width="352"
            margin={{ direction: "right", px: "24" }}
          />
          <Button
            width="258"
            height="60"
            color="red"
            ctx="Become a Member"
            txtColor="white"
            margin={{ direction: "top", px: "40" }}
          />
        </div>
        <div className="flex flex-col">
          <Articles title="Description for Admin" content={description} width="352" />
          <Button
            width="258"
            height="60"
            color="blue"
            ctx="Become a admin"
            txtColor="white"
            margin={{ direction: "top", px: "40" }}
          />
        </div>
      </div>
    </section>
  );
};

export default MembershipFooter;
