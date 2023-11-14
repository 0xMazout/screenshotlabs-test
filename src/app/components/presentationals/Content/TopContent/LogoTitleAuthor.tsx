import React from "react";
import arkIcon from "@public/logo/arkIcon.svg";
import Image from "next/image";
type Props = {
  name: string;
  author: string;
};

const LogoTitleAuthor = ({ name, author }: Props) => {
  return (
    <div className="flex content-center">
      <Image src={arkIcon} alt={"logoIcon"} />
      <div>
        <h1 className="font-mono text-lg font-bold">{name}</h1>
        <h2 className="font-styreneA text-sm">{author}</h2>
      </div>
    </div>
  );
};

export default LogoTitleAuthor;
