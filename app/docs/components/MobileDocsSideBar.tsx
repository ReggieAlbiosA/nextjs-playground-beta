"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Import the LucideIcon type from the library
import { ChevronDown, ChevronRight, BookText, Github, Menu, X, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";
import { NavItem } from "../types/nav"; // Assuming this type is defined elsewhere

interface MobileDocsSidebarProps {
  buildingYourApplicationItems: NavItem[];
  apiReferenceItems: NavItem[];
}

export function MobileDocsSidebar({ buildingYourApplicationItems, apiReferenceItems }: MobileDocsSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  // Effect to close the sidebar if the screen becomes wider than mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // 768px is the default for `md` in Tailwind
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  // Effect to prevent scrolling on the body when the sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleExpanded = (url: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [url]: !prev[url]
    }));
  };

  const isActive = (url: string) => {
    return pathname === url || pathname.startsWith(url + '/');
  };

  const isParentActive = (items: NavItem[]): boolean => {
    return items.some(item => isActive(item.url) || (item.items && isParentActive(item.items)));
  };

  const getIcon = (iconName?: string) => {
    if (!iconName) return null;
    // FIX: Replace `as any` with `as LucideIcon` for type safety
    const IconComponent = Icons[iconName as keyof typeof Icons] as LucideIcon;
    return IconComponent ? <IconComponent size={16} /> : null;
  };

  const handleNavItemClick = (item: NavItem) => {
    const hasChildren = item.items && item.items.length > 0;
    
    if (hasChildren) {
      // Toggle expansion for items with children
      toggleExpanded(item.url);
    } else {
      // Close menu for items without children
      closeMenu();
    }
    // Navigation will be handled by the Link component
  };

  const renderNavItem = (item: NavItem, level = 0) => {
    const hasChildren = item.items && item.items.length > 0;
    // An item should be expanded by default if it's a parent of the currently active link
    const isExpanded = expandedItems[item.url] ?? isParentActive(item.items || []);
    const active = isActive(item.url);
    const childActive = hasChildren && isParentActive(item.items || []);

    return (
      <div key={item.url}>
        <div
          className={cn(
            "flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors",
            "hover:bg-accent hover:text-accent-foreground",
            level > 0 && "ml-4",
            (active || childActive) && "bg-accent text-accent-foreground font-medium"
          )}
        >
          {/* Always use Link for navigation */}
          <Link
            href={item.url}
            className="flex items-center gap-2 flex-1 min-w-0"
            onClick={() => handleNavItemClick(item)}
          >
            {getIcon(item.icon)}
            <span className="truncate">{item.title}</span>
          </Link>
          
          {/* Separate chevron button for expansion if item has children */}
          {hasChildren && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleExpanded(item.url);
              }}
              className="p-1 hover:bg-background/50 rounded-sm ml-2"
              aria-label={`Toggle ${item.title} section`}
            >
              {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
          )}
        </div>

        {hasChildren && isExpanded && (
          <div className="mt-1 space-y-1">
            {item.items!.map(subItem => renderNavItem(subItem, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    // This container is only visible on mobile screens (`md:hidden`)
    <div className="md:hidden !m-0">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        aria-label="Open navigation menu"
      >
        <Menu size={20} />
      </Button>
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
            onClick={closeMenu}
          />
          
          <div className="fixed inset-y-0 left-0 z-50  w-72 bg-background border-r shadow-lg transform overflow-y-auto transition-transform">
            <div className="flex items-center justify-between h-16 px-4 border-b">
              <h2 className="text-lg font-semibold">Documentation</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </Button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4">
              <nav className="space-y-6">
                {/* Main Navigation */}
                <div className="space-y-2">
                  <Link
                    href="/"
                    className="flex items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground rounded-md"
                    onClick={closeMenu}
                  >
                    xlore_
                  </Link>
                  <Link
                    href="/docs"
                    className="flex items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground rounded-md"
                    onClick={closeMenu}
                  >
                    <BookText size={16} />
                    <span>Docs</span>
                  </Link>
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/ReggieAlbiosA/nextjs-playground-beta"
                    className="flex items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground rounded-md"
                    onClick={closeMenu}
                  >
                    <Github size={16} />
                    <span>Github</span>
                  </Link>
                </div>

                <hr className="border-t border-border" />

                {/* Building Your Application Section */}
                <div>
                  <h3 className="mb-3 px-3 text-sm font-semibold text-foreground/70">
                    Building Your Application
                  </h3>
                  <div className="space-y-1">
                    {buildingYourApplicationItems.map(item => renderNavItem(item))}
                  </div>
                </div>

                {/* API Reference Section */}
                <div>
                  <h3 className="mb-3 px-3 text-sm font-semibold text-foreground/70">
                    API Reference
                  </h3>
                  <div className="space-y-1">
                    {apiReferenceItems.map(item => renderNavItem(item))}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </div>
  );
}