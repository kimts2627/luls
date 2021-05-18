// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type SpaceDirection = "x" | "y" | "left" | "right" | "top" | "bottom";
export type SpaceSize = "10" | "20" | "24" | "40";

export interface ButtonConfig {
  width: ButtonSizeValue;
  height: ButtonSizeValue;
  ctx?: string;
  color?: string;
  txtColor?: string;
  outLine?: boolean;
  margin?: {
    direction: SpaceDirection;
    px: SpaceSize;
  };
  clickFn?: () => void;
}

export type ButtonSizeValue = "40" | "48" | "60" | "72" | "110" | "164" | "258" | "400";

export interface ArticleConfig {
  title: string;
  content: string;
  width?: string;
  margin?: {
    direction: SpaceDirection;
    px: SpaceSize;
  };
  align?: "left" | "center" | "right";
}
