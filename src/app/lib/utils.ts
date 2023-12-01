import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function reduceMiddleOfString(str: string, max: number) {
  if (str.length <= max) return str;
  const left = Math.floor(max / 2);
  const right = Math.ceil(max / 2);
  return `${str.slice(0, left)}...${str.slice(-right)}`;
}
