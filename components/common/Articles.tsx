import React from "react";
import { ArticleConfig, SpaceDirection, SpaceSize } from "@interfaces/atoms/index";

type SetMarginArgs = {
  direction: SpaceDirection;
  px: SpaceSize;
};

const Articles: React.FC<ArticleConfig> = ({ title, content, margin, width = "258", align = "left" }) => {
  const setArticleMargin = (margin: SetMarginArgs | undefined) => {
    if (margin) {
      switch (margin.direction) {
        case "left":
          return `ml-${margin.px}px`;
        case "right":
          return `mr-${margin.px}px`;
        case "top":
          return `mt-${margin.px}px`;
        case "bottom":
          return `mb-${margin.px}px`;
        default:
          return `m${margin.direction}-${margin.px}px`;
      }
    }
  };

  const setArticleAlign = (align: "left" | "right" | "center") => {
    switch (align) {
      case "left":
        return "items-start";
      case "right":
        return "items-end";
      case "center":
        return "items-center";
      default:
        return "";
    }
  };
  return (
    <article
      className={`flex flex-col ${setArticleAlign(align)} ${`w-${width}px`} ${setArticleMargin(margin)}`}
    >
      <h2 className="mb-20px text-20px DMSans-bd">{title}</h2>
      <p className="text-16px leading-23px w-full">{content}</p>
    </article>
  );
};

export default Articles;
