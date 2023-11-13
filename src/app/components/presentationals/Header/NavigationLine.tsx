import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  link: string;
  name: string;
  index: number;
};

function NavigationLine({ link, name, index }: Props) {
  return (
    <div>
      <Link href={link} className={cn(index == 0 && `font-bold text-red-500`)}>
        {name}
      </Link>
    </div>
  );
}

export default NavigationLine;
