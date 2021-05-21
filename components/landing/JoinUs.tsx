import React from "react";
import Articles from "@common/Articles";
import Button from "@components/common/Button";

const Lead: React.FC = () => {
  const description: string = process.env.NEXT_PUBLIC_DEV_ARTICLE_DESC || "undefined";
  return (
    <section className="w-full bg-pink-100 flex flex-col items-center justify-center">
      <div className="w-full h-full max-w-screen-1120 bg-pink-200 py-80px flex flex-col">
        <aside className="w-full bg-pink-500 text-30px flex justify-center items-center mb-72px DMSans-bd">
          Join US!
        </aside>
        <section className="w-full flex justify-center">
          <div className="flex flex-col items-center">
            <Articles
              title="Apply an member"
              content={description}
              width="352"
              align="center"
              margin={{ direction: "right", px: "24" }}
            />
            <Button
              width="258"
              height="60"
              color="yellow"
              ctx="Apply"
              txtColor="white"
              margin={{ direction: "top", px: "40" }}
            />
          </div>
          <div className="flex flex-col items-center">
            <Articles
              title="Apply an admin"
              content={description}
              width="352"
              align="center"
              margin={{ direction: "right", px: "24" }}
            />
            <Button
              width="258"
              height="60"
              color="blue"
              ctx="Apply"
              txtColor="white"
              margin={{ direction: "top", px: "40" }}
            />
          </div>
          <div className="flex flex-col items-center">
            <Articles title="Start a Chapter as an admin" content={description} width="352" align="center" />
            <Button
              width="258"
              height="60"
              color="black"
              ctx="Apply"
              txtColor="white"
              margin={{ direction: "top", px: "40" }}
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Lead;
