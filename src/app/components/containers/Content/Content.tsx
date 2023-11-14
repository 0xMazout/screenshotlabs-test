import React from "react";
import BottomContent from "./BottomContent";
import TopContent from "./TopContent";
type Props = {};

const Content = (props: Props) => {
  return (
    <section>
      <div>
        <TopContent />
        <BottomContent />
      </div>
    </section>
  );
};

export default Content;
