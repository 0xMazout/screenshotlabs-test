import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  name: string[];
};

const SelectInput = ({ name }: Props) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-darkblue-500">
        <SelectValue placeholder={name[0]} />
      </SelectTrigger>
      <SelectContent>
        {name.map((item, index) => {
          return (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          );
        })}
        {/* <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem> */}
      </SelectContent>
    </Select>
  );
};

export default SelectInput;
