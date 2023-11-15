import Link from "next/link";
import React from "react";
import { IArrayLinks } from "@/interfaces/IUIProps";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  arrayLinks: IArrayLinks[];
};

const NavigationTabsContent = ({ arrayLinks }: Props) => {
  return (
    <nav>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="bg-transparent">
          {arrayLinks.map((link, index) => {
            return (
              <TabsTrigger
                key={index}
                value={link.name}
                className="rounded-none border-solid border-red-500 data-[state=active]:border-b-2"
              >
                {link.name}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </nav>
  );
};

export default NavigationTabsContent;
