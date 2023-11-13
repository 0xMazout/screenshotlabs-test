import React from "react";
import arkIcon from "@public/logo/arkIcon.svg";
import Image from "next/image";
type Props = {};

const LogoTitle = (props: Props) => {
  return (
    <div className="flex items-center">
      <Image src={arkIcon} alt={"logoIcon"} />
      <h1 className="p-1 align-middle font-styreneA">ArkMArket</h1>
    </div>
  );
};

export default LogoTitle;
