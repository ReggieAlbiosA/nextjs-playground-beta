"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";
import { NavItem } from "../types/nav"; // Assuming this type is defined elsewhere

interface DocsSidebarProps {
  buildingYourApplicationItems: NavItem[];
  apiReferenceItems: NavItem[];
}

export function DocsSidebar({ buildingYourApplicationItems, apiReferenceItems }: DocsSidebarProps) {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

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
    const IconComponent = Icons[iconName as keyof typeof Icons] as LucideIcon;
    return IconComponent ? <IconComponent size={16} /> : null;
  };

  const handleNavItemClick = (item: NavItem) => {
    const hasChildren = item.items && item.items.length > 0;
    
    if (hasChildren) {
      // Toggle expansion for items with children
      toggleExpanded(item.url);
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
    // This sidebar is hidden on mobile screens (`hidden md:block`)
    <div className="hidden md:block w-64 h-screen fixed top-[4.1rem] border-r bg-background">
      <div className="flex flex-col h-full">
        
        <div className="flex-1 overflow-y-auto p-4">
          <nav className="space-y-6">

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
    </div>
  );
}