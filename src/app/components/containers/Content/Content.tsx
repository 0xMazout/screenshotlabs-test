import React from "react";
import BottomContent from "@/components/containers/Content/BottomContentContainer";
import TopContentContainer from "@/components/containers/Content/TopContentContainer";
type Props = {};

const Content = (props: Props) => {
  return (
    <section>
      <div>
        <TopContentContainer />
        <BottomContent />
      </div>
    </section>
  );
};

export default Content;
