import React from "react";
import TileStat from "@/components/presentationals/Content/TopContent/TileStat";
import { ITileProps } from "@/interfaces/IUIProps";
type Props = {
  tileArray: ITileProps[];
};

const GridStats = ({ tileArray }: Props) => {
  const generateTileStats = () => {
    return (
      <div className="grid auto-cols-auto grid-flow-col-dense grid-rows-2 gap-2 max-md:w-full">
        {tileArray.map((tile, index) => {
          return <TileStat key={index} {...tile} />;
        })}
      </div>
    );
  };
  return <div>{generateTileStats()}</div>;
};

export default GridStats;
