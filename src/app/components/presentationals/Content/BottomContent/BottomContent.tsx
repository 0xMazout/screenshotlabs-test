import React from "react";
import Tabs from "@/components/presentationals/Content/BottomContent/Tabs";

type Props = {
  arrayLinks: Array<{ name: string; value: string }>;
};
/**Presentational component to display data from Container */

const BottomContent = (props: Props) => {
  return (
    <div>
      <Tabs arrayLinks={[]} />
    </div>
  );
};

export default BottomContent;
