import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import NavigationLine from "./NavigationLine";
import { IArrayLinks } from "@/interfaces/IUIProps";
type Props = {
  arrayLinks: IArrayLinks[];
};

const Navigation = ({ arrayLinks }: Props) => {
  const lineBuilder = (arrayLinks: IArrayLinks[]) => {
    return arrayLinks.map((link, index) => {
      return (
        <NavigationLine
          link={link.link}
          name={link.name}
          index={index}
          key={index}
        />
      );
    });
  };
  const lines = lineBuilder(arrayLinks);
  const mobileMenu = () => {
    return <MobileMenu lines={lines} />;
  };

  return (
    <nav>
      <ul className="flex justify-between gap-3 max-[860px]:hidden">{lines}</ul>
      <ul className="flex min-[860px]:hidden">{mobileMenu()}</ul>
    </nav>
  );
};

export default Navigation;
