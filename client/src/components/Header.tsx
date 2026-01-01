import { Heart, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-8">
      <div className="max-w-7xl mx-auto backdrop-blur-md bg-background/80 rounded-full border border-border px-6 h-16 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary fill-primary" data-testid="icon-logo" />
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent" data-testid="text-logo">
            MemoryBox
          </span>
        </div>

        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/" className="text-sm font-medium hover-elevate px-4 py-2 rounded-full transition-all" data-testid="link-gallery">
              畫廊
            </Link>
            <Link href="/diaries" className="text-sm font-medium hover-elevate px-4 py-2 rounded-full transition-all" data-testid="link-diaries">
              日記
            </Link>
          </nav>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full"
            onClick={() => setIsDark(!isDark)}
            data-testid="button-theme-toggle"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
}
