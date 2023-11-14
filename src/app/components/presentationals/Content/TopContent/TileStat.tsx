import Image, { StaticImageData } from "next/image";
import React from "react";
import { ITileProps } from "@/interfaces/IUIProps";

const TileStat = ({ title, value, icon, unit }: ITileProps) => {
  return (
    <div className="rounded-md bg-blackblue-500 p-3">
      <h3 className="text-blue-400">{title}</h3>
      <div className="flex gap-1">
        {icon && <Image src={icon} alt="icon" />}
        <p>{value}</p>
        {unit && <p> {unit}</p>}
      </div>
    </div>
  );
};

export default TileStat;
