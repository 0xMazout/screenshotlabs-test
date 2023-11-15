import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Image from "next/image";
import { ChevronsUpDown } from "lucide-react";
type Props = {
  name: string;
  content: JSX.Element;
};

const CollapsibleMenu = ({ name, content }: Props) => {
  return (
    <Collapsible>
      <CollapsibleTrigger className="my-2 flex w-full justify-between">
        <h2 className="font-styreneA font-bold">{name}</h2>
        <ChevronsUpDown />
      </CollapsibleTrigger>
      <CollapsibleContent>{content}</CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleMenu;
