import React from "react";
import Articles from "@common/Articles";

const EventHeader: React.FC = () => {
  const description: string = process.env.NEXT_PUBLIC_DEV_ARTICLE_DESC || "undefined";
  return (
    <section className="flex bg-green-400 mb-40px">
      <Articles
        title="Upcoming Event Title"
        content={description}
        width="352"
        margin={{ direction: "right", px: "24" }}
      />
      <div className="w-352px h-168px bg-green-500 mt-50px">img</div>
    </section>
  );
};

export default EventHeader;
