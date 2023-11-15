import Image, { StaticImageData } from "next/image";
import React from "react";
import { ITileProps } from "@/interfaces/IUIProps";

const TileStat = ({ title, value, icon, unit }: ITileProps) => {
  return (
    <div className="rounded-md bg-slate-300 p-3 dark:bg-darkblue-500">
      <h3 className="text-spaceblue-500 dark:text-spaceblue-400">{title}</h3>
      <div className="flex flex-wrap gap-1">
        {icon && <Image src={icon} alt="icon" />}
        <p>{value}</p>
        {unit && <p> {unit}</p>}
      </div>
    </div>
  );
};

export default TileStat;
