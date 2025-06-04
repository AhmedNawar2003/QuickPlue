"use client";
export default function Navbar() {
  return (
    <header className="w-full  backdrop-blur-md bg-background/80 border-b border-border shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight relative">
            <span className="inline-block relative z-10">🧠 QuickPulse</span>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[60%] h-[8px] bg-primary/30 blur-md rounded-full z-0 sm:left-0 sm:translate-x-0" />
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base mt-2">
            Organize your thoughts. Track your tasks.
          </p>
        </div>
      </div>
    </header>
  );
}
