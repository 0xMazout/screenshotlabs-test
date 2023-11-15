import React from "react";
import arkIcon from "@public/logo/arkIcon.svg";
import Image from "next/image";
type Props = {
  name: string;
  author: string;
  image: string;
};

const LogoTitleAuthor = ({ name, author, image }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <Image src={image} alt={"logoIcon"} width={100} height={100} />
      <div>
        <h1 className="font-mono text-lg font-bold">{name}</h1>
        <h2 className="font-styreneA text-sm">{author}</h2>
      </div>
    </div>
  );
};

export default LogoTitleAuthor;
