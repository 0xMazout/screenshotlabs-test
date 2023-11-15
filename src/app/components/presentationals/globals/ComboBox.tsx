"use client";

import * as React from "react";

import { Check, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
  arrayValue: string[];

  typeValue: string;
};

interface ComboBoxProps extends React.HtmlHTMLAttributes<HTMLElement>, Props {}

export const Combobox = ({ arrayValue, typeValue }: ComboBoxProps) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? arrayValue.find((element) => {
                element === value;
                return element;
              })
            : typeValue}
          <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder={`Search ${typeValue}`} className="h-9" />
          <CommandEmpty>No {typeValue} found.</CommandEmpty>
          <CommandGroup>
            {arrayValue.map((element, index) => (
              <CommandItem
                key={index}
                value={element}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? value : currentValue);
                  setOpen(false);
                }}
              >
                {element}
                <Check
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === element ? "opacity-100" : "opacity-0",
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
