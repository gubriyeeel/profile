"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
    setIsDarkMode(!isDarkMode);
  };

  return <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />;
}
