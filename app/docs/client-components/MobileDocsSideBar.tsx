"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BookText, Github, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import  DocSearch  from "@/app/client-components/DocSearch";

interface MobileDocsSidebarProps {
  children: React.ReactNode;
}

export function MobileDocsSidebar({ children }: MobileDocsSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Effect to handle body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden !m-0">
      <div className="flex gap-x-6 px-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          aria-label="Open navigation menu"
        >
          <Menu size={20} />
        </Button>

        <DocSearch className="w-60"/> {/* Moved DocSearch here */}
      </div>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
            onClick={closeMenu}
          />
          <aside
            role="dialog"
            aria-modal="true"
            className="fixed inset-y-0 left-0 z-50 w-72 bg-background border-r shadow-lg overflow-y-auto"
          >
            <div className="flex items-center justify-between h-16 px-4 border-b">
              <h2 className="text-lg font-semibold">Documentation</h2>
              <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Close menu">
                <X size={20} />
              </Button>
            </div>
            
            <div className="p-4">
              <nav className="space-y-6" aria-label="Mobile documentation navigation">
                {/* Mobile-specific links can still live here */}
                <ul className="space-y-1">
                  <li>
                    <Link href="/" className="flex items-center gap-2 px-3 py-2 text-sm" onClick={closeMenu}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs" className="flex items-center gap-2 px-3 py-2 text-sm" onClick={closeMenu}>
                      <BookText size={16} /> Docs
                    </Link>
                  </li>
                  <li>
                    <Link href="https://github.com/ReggieAlbiosA/nextjs-playground-beta" target="_blank" className="flex items-center gap-2 px-3 py-2 text-sm" onClick={closeMenu}>
                      <Github size={16} /> Github
                    </Link>
                  </li>
                </ul>
                <hr className="border-border" />
                
                {/* Here, we render the pre-built navigation sections.
                  We need to pass the `closeMenu` function to the new NavItemRenderer 
                  so it can close the menu on leaf node clicks. We can't do that directly 
                  since children is an opaque data structure. The NavItemRenderer will need
                  to be updated to handle this.
                */}
                {children}
              </nav>
            </div>
          </aside>
        </>
      )}
    </div>
  );
}