import Image from "next/image";
import React from "react";

type Props = { src: string; alt: string };

const Banner = (props: Props) => {
  return (
    <>
      <Image className="w-full" src={""} alt={""} />
    </>
  );
};

export default Banner;
