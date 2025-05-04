// Literal Types

import { string, ZodError } from "zod";

let mockName: "shubham";

mockName = "shubham";

//Template Literal Types

let mockData: `Example ${string}`;

mockData = "Example s";

//Templte Literal Types
export type CSVValue = string | `${number}px` | `${string}${number}ex`;

type Size = `Black`;
type Color = "Nigga";

type ColorCombination = `${Size}-${Color}`;

let zeroNumber: 0;

zeroNumber = 0;

export type TypeNANPrefix = `${number}px`;

function returnNumberWithNanPrefix(value: number): TypeNANPrefix {
  return `${value}px`;
}
