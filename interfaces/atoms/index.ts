// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export interface ButtonConfig {
  width: ButtonSizeValue;
  height: ButtonSizeValue;
  ctx?: string;
  color?: string;
  txtColor?: string;
  outLine?: boolean;
  margin?: {
    direction: ButtonSpaceDirection;
    px: ButtonSpaceSize;
  };
  clickFn?: () => void;
}

export type ButtonSpaceDirection = "x" | "y" | "left" | "right" | "top" | "bottom";
export type ButtonSpaceSize = "20";
export type ButtonSizeValue = "40" | "72" | "110" | "400";
