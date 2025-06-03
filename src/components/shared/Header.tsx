"use client";

import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <header className="w-full bg-background text-foreground border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-2">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            🧠 QuickPulse
          </h1>
          <p className="text-lg md:text-xl tracking-tight mt-3">
            Organize your thoughts. Track your tasks. 
          </p>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
