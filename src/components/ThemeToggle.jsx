import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
  <button
    onClick={toggleTheme}
    className={cn(
      "fixed z-50 p-2 rounded-full cursor-pointer transition-all duration-300",
      "focus:outline-none hover:bg-foreground/10",
      "top-5 right-5",
      "md:top-4 md:right-5",
      "max-md:top-5 max-md:right-2",
      // "relative overflow-hidden" // Needed for absolute positioning
    )}
  >
    <div className="relative h-6 w-6">
      <Sun className={cn(
        "h-6 w-6 text-yellow-300 absolute transition-all duration-300",
        isDarkMode ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
      )} />
      <Moon className={cn(
        "h-6 w-6 text-blue-900 dark:text-blue-200 absolute transition-all duration-300",
        isDarkMode ? "-rotate-90 opacity-0" : "rotate-0 opacity-100"
      )} />
    </div>
  </button>
);
};
