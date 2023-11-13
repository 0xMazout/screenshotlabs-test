import React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SearchBar from "../../SearchBar";
import ThemeSwitcher from "./ThemeSwitch";

type Props = {
  lines: React.JSX.Element[];
};

const MobileMenu = (props: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        {/* <DropdownMenuLabel>Menu</DropdownMenuLabel> */}
        <DropdownMenuGroup className="flex">
          <SearchBar />
          <ThemeSwitcher />
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {props.lines.map((line, index) => {
            return <DropdownMenuItem key={index}>{line}</DropdownMenuItem>;
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;
