// app/components/MobileMenu.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { BookText, Github, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming you have a UI library like shadcn/ui
import HoverPrefetchLink from "@/components/ui/hover-prefetch-link"; // Custom link component for prefetching

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  // menuRef is no longer needed for outside click detection, but can be kept for other purposes if needed.
  const menuRef = useRef<HTMLDivElement>(null);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Prevent background scroll when the menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);



  return (
    <div ref={menuRef} className="flex">

      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="md:hidden"
        aria-label="Open navigation menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>

      

      {isOpen && (
        <div className="absolute overflow-y-auto h-[calc(100vh-64px)] top-16 inset-x-0 z-50 bg-background border-b">
          <nav className="w-full flex flex-col justify-center primary-bg">
            <HoverPrefetchLink
              href="/"
              className="py-2 px-5 text-sm transition-colors hover:text-foreground/80"
            >
              xlore_
            </HoverPrefetchLink>
            <hr className="w-full h-px my-2 border-t border-border" />
            <HoverPrefetchLink
              href="/docs"
              className="flex items-center gap-1.5 py-2 px-5 text-sm transition-colors hover:text-foreground/80"
            >
              <BookText size={16} />
              <span>Docs</span>
            </HoverPrefetchLink>
            <hr className="w-full h-px my-2 border-t border-border" />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/ReggieAlbiosA/nextjs-playground-beta"
              className="flex items-center gap-1.5 py-2 px-5 text-sm transition-colors hover:text-foreground/80"
            >
              <Github size={16} />
              <span>Github</span>
            </a>
            <hr className="w-full h-px my-2 border-t border-border" />
          </nav>
        </div>
      )}
    </div>
  );
}