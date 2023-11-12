import clsx from "clsx";
import Link from "next/link";
import React from "react";

type Props = {
  arrayLinks: Array<{ name: string; href: string }>;
};

const Navigation = ({ arrayLinks }: Props) => {
  return (
    <nav>
      <ul className="flex justify-between gap-3">
        {arrayLinks.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.href}
              className={clsx(index == 0 && `font-bold text-red-500`)}
            >
              {link.name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
