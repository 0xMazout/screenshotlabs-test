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
      <SelectTrigger className="text-dark align-center flex gap-1 bg-red-500 p-3 font-bold hover:bg-red-400 dark:bg-darkblue-500  dark:text-white  dark:hover:bg-spaceblue-800">
        <SelectValue placeholder={name[0]} />
      </SelectTrigger>
      <SelectContent className="text-dark align-center flex gap-1 bg-red-500 p-3 font-bold hover:bg-red-400 dark:bg-darkblue-500  dark:text-white dark:hover:bg-spaceblue-800">
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
