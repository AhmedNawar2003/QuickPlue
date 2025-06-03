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
        className="cursor-pointer !h-12 !w-12"
      >
        {theme === "dark" ? <Sun className="h-12 w-12" /> : <Moon className="h-12 w-12"/>}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
