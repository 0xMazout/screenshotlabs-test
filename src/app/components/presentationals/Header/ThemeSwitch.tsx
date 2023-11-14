"use client";

import { useTheme } from "next-themes";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { IButtonProps } from "@/interfaces/IProps";
import { FC } from "react";
import { cn } from "@/lib/utils";

const ThemeSwitcher = ({ itemID }: IButtonProps) => {
  const { systemTheme, theme, setTheme } = useTheme();

  const setVisibility = () => {
    return cn(itemID == "themeSwitcherHeader" && "max-[860px]:hidden");
  };

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Button variant={"ghost"} className={setVisibility()}>
          <SunIcon
            className="h-6 w-6 text-red-500 "
            role="button"
            onClick={() => setTheme("light")}
          />
        </Button>
      );
    } else {
      return (
        <Button variant={"ghost"} className={setVisibility()}>
          <MoonIcon
            className="h-6 w-6 text-gray-900 "
            role="button"
            onClick={() => setTheme("dark")}
          />
        </Button>
      );
    }
  };

  return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
