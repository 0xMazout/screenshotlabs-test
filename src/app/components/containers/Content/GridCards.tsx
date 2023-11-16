import React from "react";

type Props = {
  arrayCards: Array<JSX.Element>;
};

const GridCards = ({ arrayCards }: Props) => {
  return (
    <div className="flex flex-wrap gap-3 max-sm:justify-center">
      {arrayCards}
    </div>
  );
};

export default GridCards;
