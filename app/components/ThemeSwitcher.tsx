// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

// For cookie management on the client
import Cookies from "js-cookie";

// Export the cookie name so layout.tsx can use the same constant, preventing typos.
export const THEME_COOKIE_NAME = 'app-theme';

export function ThemeSwitcher({ children }: { children: React.ReactNode }) {
  // Destructure the 'theme' value as well, which tells us the user's preference ('light', 'dark', or 'system')
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // --- NEW: Effect to synchronize theme change to a cookie ---
  useEffect(() => {
    // When the theme changes (e.g., from 'system' to 'dark'),
    // we set the cookie to reflect that choice.
    if (theme) {
      Cookies.set(THEME_COOKIE_NAME, theme, { path: '/' });
    }
  }, [theme]);
  // -----------------------------------------------------------

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!mounted) {
    // Render a placeholder on the server to prevent layout shift
    return <div className="w-9 h-9">{children}</div>;
  }

  const handleThemeSelect = (selectedTheme: string) => {
    setTheme(selectedTheme);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleDropdown}
        aria-label="Toggle theme"
        className="cursor-pointer"
      >
        {/* 'resolvedTheme' is best for displaying the current icon (it's 'light' or 'dark', never 'system') */}
        {resolvedTheme === "dark" ? (
          <Moon size={20} className="stroke-current" />
        ) : (
          <Sun size={20} className="stroke-current" />
        )}
      </Button>

      {isOpen && (
        <div className="absolute right-0 z-[200] w-34 mt-2 primary-bg border rounded-md shadow-lg ">
          <div className="flex flex-col p-1 gap-y-1">
            <button
              onClick={() => handleThemeSelect("light")}
              className={`w-full text-left px-2 py-1 rounded cursor-pointer hover:bg-zinc-500/20 transition-colors ${theme === "light" ? "bg-zinc-500/20" : ""}`}
            >
              Light
            </button>
            <button
              onClick={() => handleThemeSelect("dark")}
              className={`w-full text-left px-2 py-1 rounded cursor-pointer hover:bg-zinc-500/20 transition-colors ${theme === "dark" ? "bg-zinc-500/20" : ""}`}
            >
              Dark
            </button>
            <button
              onClick={() => handleThemeSelect("system")}
              className={`w-full text-left px-2 py-1 rounded cursor-pointer hover:bg-zinc-500/20 transition-colors ${theme === "system" ? "bg-zinc-500/20" : ""}`}
            >
              System
            </button>
          </div>
        </div>
      )}
    </div>
  );
}