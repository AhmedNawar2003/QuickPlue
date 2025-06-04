"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="ghost"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
        className="cursor-pointer h-14 w-14 rounded-full border border-border backdrop-blur-md bg-background/70 shadow-md transition-all duration-300 hover:scale-105"
      >
        {theme === "dark" ? (
          <Sun className="h-8 w-8 text-yellow-400 transition-all duration-300" />
        ) : (
          <Moon className="h-8 w-8 text-blue-600 transition-all duration-300" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
