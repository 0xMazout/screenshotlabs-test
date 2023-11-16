import React from "react";
import TopContentContainer from "@/components/containers/Content/TopContentContainer";
import BottomContentContainer from "@/components/containers/Content/BottomContentContainer";
type Props = {};

const Content = (props: Props) => {
  return (
    <section>
      <TopContentContainer />
      <BottomContentContainer />
    </section>
  );
};

export default Content;
