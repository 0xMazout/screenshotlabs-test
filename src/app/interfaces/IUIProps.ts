import { StaticImageData } from "next/image";

export interface ITileProps {
  title: string;
  value: string;
  icon?: StaticImageData;
  unit?: string;
}

export interface IArrayLinks {
  name: string;
  link: string;
}

export interface INFTGridCardsProps {
  title: string;
  id: string;
  image: StaticImageData;
  price: string;
}
