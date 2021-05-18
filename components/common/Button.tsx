import React from "react";
import { ButtonConfig, SpaceSize, SpaceDirection } from "@interfaces/atoms";

type SetMarginArgs = {
  direction: SpaceDirection;
  px: SpaceSize;
};

const Button: React.FC<ButtonConfig> = ({
  width,
  height,
  color,
  txtColor,
  ctx,
  outLine = true,
  margin,
  clickFn,
}) => {
  const setBUttonMargin = (margin: SetMarginArgs | undefined) => {
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

  const setButtonColor = (color: string | undefined) => {
    if (!color) {
      return "black";
    } else if (color === "white" || color === "black") {
      return color;
    } else {
      return `${color}-400`;
    }
  };
  return (
    <button
      className={`w-${width}px h-${height}px bg-${setButtonColor(color)}
        text-${setButtonColor(txtColor)}
        rounded-standard ${outLine ? "" : "focus:outline-none"}
        ${setBUttonMargin(margin)}`}
      onClick={clickFn ? clickFn : undefined}
    >
      <p>{ctx}</p>
    </button>
  );
};

export default Button;
