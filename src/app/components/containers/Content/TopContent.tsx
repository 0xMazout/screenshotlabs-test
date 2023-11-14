import React from "react";
import LogoTitleAuthor from "@/components/presentationals/Content/LogoTitleAuthor";

type Props = {};

const TopContent = (props: Props) => {
  return (
    <section className="flex justify-between">
      <div className="flex flex-col">
        <LogoTitleAuthor name={"Everai Duos"} author={"Everai"} />
        <p>Description</p>
      </div>
      <div>DataGrid of Collection Data</div>
    </section>
  );
};

export default TopContent;
