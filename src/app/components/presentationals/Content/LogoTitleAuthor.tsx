import React from "react";
import arkIcon from "@public/logo/arkIcon.svg";
import Image from "next/image";
type Props = {};

const LogoTitleAuthor = (props: Props) => {
  return (
    <div className="flex content-center">
      <Image src={arkIcon} alt={"logoIcon"} />
      <h1 className="font-styreneA">ArkMArket</h1>
    </div>
  );
};

export default LogoTitleAuthor;
