"use client";

import { useState, useEffect } from "react";
import { BookText, Github, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import DocSearch from "@/app/(_shared)/client-components/DocSearch";
import HoverPrefetchLink from "@/components/ui/hover-prefetch-link";

interface MobileDocsSidebarProps {
  children: React.ReactNode;
  className?: string;
}

export function MobileDocsSidebar({ children, className }: MobileDocsSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Effect to handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);
  
  // **NEW**: Effect to handle viewport resize
  useEffect(() => {
    const handleResize = () => {
      // Assuming 'lg' breakpoint is 1024px
      if (window.innerWidth >= 1024) { 
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures this runs only on mount and unmount


  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={`lg:hidden block !m-0 ${className}`}>
      <div className="flex gap-x-6 px-3 justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          aria-label="Open navigation menu"
        >
          <Menu size={20} />
        </Button>
        <DocSearch className="w-60" />
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 h-screen z-40 bg-background/80 backdrop-blur-sm"
            onClick={closeMenu}
          />
          <aside
            role="dialog"
            aria-modal="true"
            className="fixed h-screen inset-y-0 left-0 z-1500 w-72 bg-background border-r shadow-lg overflow-y-auto"
          >
            <div className="flex items-center z-100 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 justify-between h-[69px] px-4 border-b sticky top-0">
              <Button variant="ghost" size="icon" className="ml-auto" onClick={toggleMenu} aria-label="Close menu">
                <X size={20} />
              </Button>
            </div>
            
            <div className="p-4">
              <nav className="space-y-6" aria-label="Mobile documentation navigation">
                <ul className="space-y-1 block md:hidden">
                  <li>
                    <HoverPrefetchLink href="/" className="flex items-center gap-2 px-3 py-2 text-sm" onClick={closeMenu}>
                      xlore_
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <HoverPrefetchLink href="/docs" className="flex items-center gap-2 px-3 py-2 text-sm" onClick={closeMenu}>
                      <BookText size={16} /> Docs
                    </HoverPrefetchLink>
                  </li>
                  <li>
                    <a href="https://github.com/ReggieAlbiosA/nextjs-playground-beta" target="_blank" className="flex items-center gap-2 px-3 py-2 text-sm" onClick={closeMenu}>
                      <Github size={16} /> Github
                    </a>
                  </li>
                </ul>
                <hr className="border-border block md:hidden" />
                
                {children}
              </nav>
            </div>
          </aside>
        </>
      )}
    </div>
  );
}