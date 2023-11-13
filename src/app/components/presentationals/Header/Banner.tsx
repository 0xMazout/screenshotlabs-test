import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = { src: StaticImageData; alt: string };

const Banner = ({ src, alt }: Props) => {
  return <Image className="w-full" src={src} alt={alt} />;
};

export default Banner;
