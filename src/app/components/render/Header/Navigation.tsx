import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import NavigationLine from "./NavigationLine";
type Props = {
  arrayLinks: Array<{ name: string; href: string }>;
};

const Navigation = ({ arrayLinks }: Props) => {
  const lineBuilder = (arrayLinks: Array<{ name: string; href: string }>) => {
    return arrayLinks.map((link, index) => {
      return (
        <NavigationLine
          link={link.href}
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
      <ul className="flex justify-between gap-3 max-md:hidden">{lines}</ul>
      <ul className="flex md:hidden">{mobileMenu()}</ul>
    </nav>
  );
};

export default Navigation;
